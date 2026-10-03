(() => {
 'use strict';
 const projects=window.PROJECTS;
 const grid=document.getElementById('project-grid');
 if(!grid || !Array.isArray(projects)) return;
 const groups={problem:[['all','All evidence'],['authority','Bound AI authority'],['auditability','Make risk inspectable'],['resilience','Recover reliably'],['operations','Support operations'],['delivery','Reproduce delivery']],capability:[['all','All capabilities'],['governance','AI governance'],['cloud','Cloud & infrastructure'],['reliability','Reliability engineering'],['decisions','Decision support'],['experience','Operator experience']]};
 const params=new URLSearchParams(location.search);
 let mode=params.get('view')==='capability'?'capability':'problem';
 let selected=groups[mode].some(([id])=>id===params.get('filter'))?params.get('filter'):'all';
 const filters=document.getElementById('filters');
 const count=document.getElementById('result-count');
 const dialog=document.getElementById('project-dialog');
 const content=document.getElementById('dialog-content');
 let opener=null;
 const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const external=(url,label,cls='button')=>`<a class="${cls}" href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(label)}<span class="visually-hidden"> (opens in a new tab)</span></a>`;
 const icon='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 5v14M5 12h14"/></svg>';
 function render(sync=true){
   document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.view===mode)));
   filters.setAttribute('aria-label',mode==='problem'?'Filter by business problem':'Filter by capability');
   filters.innerHTML=groups[mode].map(([id,label])=>`<button class="filter" data-filter="${id}" aria-pressed="${id===selected}">${label}</button>`).join('');
   const key=mode==='problem'?'problems':'capabilities';
   const shown=projects.filter(p=>selected==='all'||p[key].includes(selected));
   count.textContent=`${shown.length} of ${projects.length} selected systems`;
   grid.innerHTML=shown.length?shown.map(p=>`<article class="project-card"><div class="card-top"><span>${String(projects.indexOf(p)+1).padStart(2,'0')}</span><span>${escape(p.status)}</span></div><h2>${escape(p.name)}</h2><p class="summary">${escape(p.summary)}</p><p class="card-proof">${escape(p.proof)}</p><p class="card-scope">${escape(p.scope)}</p><button class="card-button" data-project="${escape(p.id)}" aria-haspopup="dialog" aria-label="Read the ${escape(p.name)} evidence brief">Read evidence brief ${icon}</button></article>`).join(''):'<p class="empty">No projects match this selection. Choose All evidence to reset.</p>';
   if(sync){const url=new URL(location.href);url.search='';if(mode!=='problem')url.searchParams.set('view',mode);if(selected!=='all')url.searchParams.set('filter',selected);history.replaceState(null,'',url.pathname+url.search+url.hash);}
 }
 function open(id,updateHash=true){
   const p=projects.find(x=>x.id===id);if(!p)return;
   content.innerHTML=`<div class="dialog-header"><div><span class="eyebrow">${escape(p.category)}</span><h2 id="dialog-title">${escape(p.name)}</h2></div><button type="button" class="close" aria-label="Close evidence brief" autofocus><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m6 6 12 12M18 6 6 18"/></svg></button></div><div class="dialog-body"><p class="detail-hook">${escape(p.summary)}</p><dl class="brief">${p.brief.map(([label,text])=>`<div class="brief-row"><dt>${escape(label)}</dt><dd>${escape(text)}</dd></div>`).join('')}</dl><div class="scope-box"><strong>Scope of the evidence.</strong> ${escape(p.limit)}</div><p class="stack">${escape(p.stack)}</p><div class="dialog-actions">${external(p.repo,'Open repository','button primary')}${external(p.evidence,p.evidenceLabel)}</div></div>`;
   content.querySelector('.close').addEventListener('click',()=>dialog.close());
   if(!dialog.open)dialog.showModal();
   dialog.scrollTop=0;
   if(updateHash)history.replaceState(null,'',location.pathname+location.search+'#'+p.id);
 }
 document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>{mode=b.dataset.view;selected='all';render();}));
 filters.addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;selected=b.dataset.filter;render();filters.querySelector(`[data-filter="${selected}"]`).focus();});
 grid.addEventListener('click',e=>{const b=e.target.closest('[data-project]');if(!b)return;opener=b;open(b.dataset.project);});
 dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();});
 dialog.addEventListener('close',()=>{history.replaceState(null,'',location.pathname+location.search);if(opener?.isConnected)opener.focus();opener=null;});
 window.addEventListener('hashchange',()=>{const id=location.hash.slice(1);if(id)open(id,false);else if(dialog.open)dialog.close();});
 render(false);
 if(location.hash)open(location.hash.slice(1),false);
})();
