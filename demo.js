'use strict';
const byId = id => document.getElementById(id);
let data, current;
const money = n => new Intl.NumberFormat('en-US', {style:'currency',currency:'USD',maximumFractionDigits:0}).format(n);
function element(tag, text, cls) { const e=document.createElement(tag); e.textContent=text; if(cls)e.className=cls; return e; }
function resetApproval() { byId('approved').checked=false; byId('outcome').textContent='Selection changed. Review the action and test its outcome.'; byId('outcome').className=''; }
function render() {
  current=data.scenarios.find(s=>s.id===`${byId('sector').value}-${byId('variant').value}`);
  if(!current)throw new Error('Scenario unavailable');
  byId('scenario-title').textContent=`${current.title} / ${current.variant}`;
  const sc=current.brief.scenario;
  byId('scenario-description').textContent=sc.extra_delay_days ? `Stress assumptions: ${sc.extra_delay_days} extra delay days; ${sc.typhoon_taiwan ? 'Taiwan typhoon overlay' : `port closure at ${sc.port_closed}`}.` : 'Baseline includes the seeded delays, concentration, and synthetic signals.';
  const baseline=data.scenarios.find(s=>s.id===`${byId('sector').value}-baseline`);
  byId('lanes').replaceChildren();
  for(const row of current.brief.rows) {
    const card=element('article','','lane');card.append(element('h3',row.title));
    const original=baseline.brief.rows.find(r=>r.lane_id===row.lane_id);
    card.append(element('div',`${row.score.toFixed(1)} / 100`,'score'),element('span',`${row.severity} · ${((row.score-original.score)||0).toFixed(1)} points vs baseline`,'severity'));
    const ul=element('ul','');for(const driver of row.drivers)ul.append(element('li',driver));card.append(ul);
    card.append(element('p',`${money(row.usd_at_risk)} modeled exposure`,'exposure'));byId('lanes').append(card);
  }
  byId('action').replaceChildren();
  for(const a of current.actions){const option=element('option',`${a.title} — ${a.lane}`);option.value=a.id;byId('action').append(option);}
  const gated=current.actions.find(a=>a.requires_approval);if(gated)byId('action').value=gated.id;
  resetApproval();byId('execute').disabled=false;
}
byId('sector').addEventListener('change',render);
byId('variant').addEventListener('change',render);
byId('action').addEventListener('change',resetApproval);
byId('execute').addEventListener('click',()=>{
  const action=current.actions.find(a=>a.id===byId('action').value);if(!action)return;
  const outcome=byId('approved').checked?action.with_approval:action.without_approval;
  byId('outcome').textContent=outcome;byId('outcome').className=outcome.startsWith('DENIED')?'denied':'';
  byId('history').prepend(element('li',`${current.title} / ${current.variant}: ${outcome}`));
  while(byId('history').children.length>5)byId('history').lastElementChild.remove();
});
fetch('demo-fixtures.json').then(r=>{if(!r.ok)throw new Error('Fixtures unavailable');return r.json();}).then(d=>{data=d;render();}).catch(()=>{byId('load-error').textContent='The scenario data could not load. Refresh the page or use the source repository link above.';byId('execute').disabled=true;});
