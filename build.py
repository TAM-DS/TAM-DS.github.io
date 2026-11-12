"""Regenerate the three-page professional evidence site for GitHub Pages."""
from pathlib import Path
import json
import hashlib

ROOT = Path(__file__).parent
ASSET_VERSION = hashlib.sha256(b''.join(
    ROOT.joinpath(name).read_bytes()
    for name in ('styles.css', 'projects.js', 'explorer.js')
)).hexdigest()[:12]
ORIGIN = 'https://tam-ds.github.io'
PUBLIC_IDENTITY = ORIGIN + '/'
PERSON = {
    '@context': 'https://schema.org', '@type': 'Person',
    '@id': PUBLIC_IDENTITY + '#person', 'name': 'Tracy Anne Griffin Manning',
    'alternateName': 'Tracy Manning', 'jobTitle': 'AI Architect | Enterprise AI Implementation & Delivery | C-Suite Advisory | Agentic AI Architecture & Governance | Technical Pre-Sales',
    'description': 'AI Architect focused on governed agentic AI, enterprise cloud architecture, bounded authority, and inspectable evidence.',
    'url': ORIGIN + '/', 'email': 'mailto:tmanning@post.harvard.edu',
    'homeLocation': {'@type': 'Place', 'name': 'Austin, Texas, United States'},
    'worksFor': {'@type': 'Organization', 'name': 'Apex AI|ML Engineering LLC'},
    'alumniOf': {'@type': 'CollegeOrUniversity', 'name': 'Harvard University'},
    'sameAs': ['https://github.com/TAM-DS', 'https://www.linkedin.com/in/tracymanning', PUBLIC_IDENTITY],
    'knowsAbout': ['Agentic AI architecture', 'AI governance', 'Enterprise AI', 'AWS', 'Google Cloud', 'Python', 'Cloud architecture', 'Evidence architecture', 'Infrastructure as code', 'Human authorization', 'AI transformation'],
    'subjectOf': [{'@type': 'CreativeWork', 'name': name, 'url': 'https://github.com/TAM-DS/' + slug} for name, slug in [
        ('Agent Foundry', 'agent-foundry'), ('Monster Heavy', 'monster-heavy'),
        ('AEGIS Evidence', 'aegis-evidence'), ('BALLAST', 'ballast'), ('AI-Ready Data Platform', 'ai-ready-data-platform'),
        ('Research Desk', 'capital-markets-research-desk'), ('Investment Gems', 'investment-gems'), ('Paper Trading Floor', 'paper-trading-floor')]],
}

FAVICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" rx="4" fill="#c6ec7b"/><path d="M9 11h22v4h-9v16h-4V15H9z" fill="#152016"/></svg>'
from urllib.parse import quote
ICON_URL = 'data:image/svg+xml,' + quote(FAVICON, safe='')

def header(active):
    links = [('index.html', 'Perspective', 'home'), ('evidence.html', 'Evidence', 'evidence'), ('approach.html', 'Approach', 'approach')]
    nav = ''.join(f'<a href="{href}"' + (' aria-current="page"' if key == active else '') + f'>{name}</a>' for href, name, key in links)
    return f'''<a class="skip" href="#main">Skip to content</a>
    <header class="header"><div class="wrap nav"><a class="identity" href="index.html" aria-label="Tracy Anne Griffin Manning home"><span class="mark" aria-hidden="true">T</span><span>Tracy Anne Griffin Manning<small>AI Architect · Enterprise AI Implementation &amp; Delivery</small></span></a><nav class="nav-links" aria-label="Main navigation">{nav}</nav></div></header>'''

def footer():
    return '''<footer class="footer"><div class="wrap footer-row"><span>Tracy Anne Griffin Manning · Austin, Texas</span><nav class="footer-links" aria-label="Professional links"><a href="https://github.com/TAM-DS" target="_blank" rel="noopener noreferrer">GitHub<span class="visually-hidden"> (opens in a new tab)</span></a><a href="https://www.linkedin.com/in/tracymanning" target="_blank" rel="noopener noreferrer">LinkedIn<span class="visually-hidden"> (opens in a new tab)</span></a><a href="mailto:tmanning@post.harvard.edu">Email</a><a href="llms.txt">llms.txt</a></nav></div></footer>'''

def page(filename, title, desc, active, body, scripts=''):
    # Preserve the curated layout through an explicit source template.
    if filename == 'index.html':
        template = ROOT.joinpath("templates/index.html").read_text(encoding="utf-8")
        ROOT.joinpath(filename).write_text(template.replace("{{ASSET_VERSION}}", ASSET_VERSION), encoding="utf-8")
        return
    path = '/' if filename == 'index.html' else '/' + filename
    for asset in ('projects.js', 'explorer.js'):
        scripts = scripts.replace(f'src="{asset}"', f'src="{asset}?v={ASSET_VERSION}"')
    ROOT.joinpath(filename).write_text(f'''<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="dark"><meta name="theme-color" content="#101416"><meta name="robots" content="index, follow"><title>{title}</title><meta name="description" content="{desc}"><link rel="canonical" href="{ORIGIN}{path}"><meta property="og:type" content="website"><meta property="og:title" content="{title}"><meta property="og:description" content="{desc}"><meta property="og:url" content="{ORIGIN}{path}"><link rel="icon" type="image/svg+xml" href="{ICON_URL}"><link rel="stylesheet" href="styles.css?v={ASSET_VERSION}"><script type="application/ld+json">{json.dumps(PERSON, ensure_ascii=False)}</script>{scripts}</head><body>{header(active)}{body}{footer()}</body></html>''')

# Homepage source: templates/index.html.
home = ''

evidence = '''<main id="main"><div class="wrap"><div class="page-intro"><span class="eyebrow">Selected systems / Architecture in evidence</span><h1>Start with the business problem.</h1><p>Eight featured projects spanning enterprise AI, capital markets, energy, supply chain, and cybersecurity assurance. Each brief states what was demonstrated and where it stops.</p></div><section class="explorer" aria-label="Project evidence explorer"><noscript><div class="js-fallback">Interactive filters need JavaScript. You can still inspect the repositories: <a class="text-link" href="https://github.com/TAM-DS/capital-markets-research-desk">Research Desk</a>, <a class="text-link" href="https://github.com/TAM-DS/energy-equity-investment-gems">Investment Gems</a>, <a class="text-link" href="https://github.com/TAM-DS/paper-trading-floor">Paper Trading Floor</a>, <a class="text-link" href="https://github.com/TAM-DS/agent-foundry">Agent Foundry</a>, <a class="text-link" href="https://github.com/TAM-DS/monster-heavy">Monster Heavy</a>, <a class="text-link" href="https://github.com/TAM-DS/aegis-evidence">AEGIS Evidence</a>, <a class="text-link" href="https://github.com/TAM-DS/ballast">BALLAST</a>, <a class="text-link" href="https://github.com/TAM-DS/ai-ready-data-platform">AI-Ready Data Platform</a>.</div></noscript><div class="explorer-tools"><div class="view-switch" role="group" aria-label="Explore evidence by"><button type="button" data-view="problem" aria-pressed="true">Business problem</button><button type="button" data-view="capability" aria-pressed="false">Capability</button></div><div class="filters" id="filters" role="group" aria-label="Filter by business problem"></div></div><p class="result-line" id="result-count" aria-live="polite" aria-atomic="true"></p><div class="project-grid" id="project-grid"></div><div class="js-fallback"><strong>FinOps evidence is modeled.</strong> Inspect the <a class="text-link" href="https://github.com/TAM-DS/Infrastructure_Deal_Room-FinOps-M_and_A/blob/main/docs/ASSUMPTIONS.md">scenario assumptions</a>, <a class="text-link" href="https://github.com/TAM-DS/Infrastructure_Deal_Room-FinOps-M_and_A/blob/main/docs/METRIC_LINEAGE.md">metric formulas</a>, and <a class="text-link" href="https://github.com/TAM-DS/Infrastructure_Deal_Room-FinOps-M_and_A/blob/main/src/infra_due_diligence/financial_model.py">financial model</a>. These figures are not delivered client savings.</div><p class="evidence-note">Each brief connects the pain point, architecture decision, trade-off, failure risk, control, evidence, and business consequence. Repository links lead to the implementation and its stated scope. Aligned with the GitHub profile on October 11, 2026. Streamlit trading applications use historical observations with explicit demo and cache modes. Automated tests use mocked model kickoff; user-recorded screenshots separately demonstrate the applications. Scope limits appear in each brief.</p></section></div><dialog class="dialog" id="project-dialog" aria-labelledby="dialog-title"><div id="dialog-content"></div></dialog></main>'''

approach = '''<main id="main"><div class="wrap approach-lead"><div><span class="eyebrow">Architecture &amp; AI governance</span><h1>The model can reason.<br><em>The architecture decides.</em></h1><p class="intro">I design the boundaries around AI: who can approve, what evidence counts, when permissions expire, and how the system stays truthful when something fails.</p></div><aside class="principle-card"><span class="kicker">A design rule</span><span class="number">Evidence before state.</span><p>The system may be conservatively behind reality. It must never be optimistically ahead of it.</p><small>Approval is not deployment. Deployment is not runtime authority. An attempted action is not a verified result.</small></aside></div>
<section class="section"><div class="wrap questions"><div><span class="kicker">The questions that shape the design</span><h2>Judgment before a stack.</h2><p>I treat patterns as hypotheses, test them against evidence, and connect the architecture to the decision the business needs to make.</p></div><div><details open><summary><span><span class="question-number">01</span>Where is the business actually stuck?</span></summary><p>Start with the workflow, the time spent, the bottleneck, and the consequence of a wrong decision. Identify where AI changes the outcome and where a simpler control solves the problem.</p></details><details><summary><span><span class="question-number">02</span>Who should have authority?</span></summary><p>Separate recommendation, approval, identity, and execution. Bind approval to the exact decision, scope the permission, and keep the model from granting itself authority.</p></details><details><summary><span><span class="question-number">03</span>What evidence has to be true now?</span></summary><p>Check fresh external state and current policy at the execution boundary. Retain provenance and exact artifact identity so yesterday’s approval cannot silently authorize today’s different action.</p></details><details><summary><span><span class="question-number">04</span>What happens when the system is wrong?</span></summary><p>Design rejection, retry, recovery, compensation, and observability alongside the happy path. Preserve failed attempts. State should follow verified evidence, and recovery should preserve the history of the original decision.</p></details></div></div></section>
<section class="section"><div class="wrap"><div class="section-header"><div><span class="kicker">One boundary, four responsibilities</span><h2>Make control visible in the system.</h2></div><p>These responsibilities appear across the selected projects. Each implementation states what it actually proves.</p></div><div class="boundary" role="list"><div role="listitem"><span class="n">01 / PROPOSE</span><h3>Reason over the problem.</h3><p>The AI produces a constrained candidate with supporting evidence.</p><span class="role">AI capability</span></div><div role="listitem"><span class="n">02 / AUTHORIZE</span><h3>Bind the decision.</h3><p>A person approves the exact terms within an explicit scope.</p><span class="role">Human authority</span></div><div role="listitem"><span class="n">03 / VERIFY</span><h3>Check current reality.</h3><p>Deterministic controls check policy, evidence, and permission at execution.</p><span class="role">System control</span></div><div role="listitem"><span class="n">04 / RECORD</span><h3>Keep the result truthful.</h3><p>Execute or reject, preserve evidence, and support review and recovery.</p><span class="role">Business accountability</span></div></div><div class="actions"><a class="text-link" href="evidence.html?filter=authority">Inspect the authority evidence</a></div></div></section>
<section class="section"><div class="wrap working-with"><div><span class="kicker">Working with me</span><h2>Close enough to build.<br>Senior enough to shape the direction.</h2><p class="intro">My background spans financial operations, cloud platforms, and hands-on AI engineering. I lead work from discovery and architecture through delivery, with the business consequence kept in view.</p><a class="contact-email" href="mailto:tmanning@post.harvard.edu">tmanning@post.harvard.edu</a><div class="actions"><a class="button" href="https://www.linkedin.com/in/tracymanning" target="_blank" rel="noopener noreferrer">Connect on LinkedIn<span class="visually-hidden"> (opens in a new tab)</span></a></div></div><dl class="work-facts"><div><dt>Professional focus</dt><dd>Senior AI architecture · Cloud / AI architecture · Enterprise AI platforms · AI transformation consulting · Technical chief of staff</dd></div><div><dt>Work style</dt><dd>Based in Austin; open to San Antonio, Dallas–Fort Worth, and Houston; in-office or hybrid; open to meaningful business travel.</dd></div><div><dt>Current practice</dt><dd>Founder &amp; AI Architect, Apex AI|ML Engineering LLC. Enterprise engagement details remain confidential.</dd></div><div><dt>Technical foundation</dt><dd>Python · AWS / GCP · SQL · Terraform · IAM / OIDC · Docker · CI/CD · Governed agentic systems</dd></div></dl></div></section></main>'''

page('index.html', 'Tracy Anne Griffin Manning | AI Architect', 'Understand the workflow. Then build the AI. Business judgment, governed systems, and inspectable evidence from Tracy Anne Griffin Manning, AI Architect in Austin, Texas.', 'home', home)
page('evidence.html', 'Selected Evidence | Tracy Anne Griffin Manning', 'Explore eight featured projects by business problem or capability, with architecture decisions, controls, trade-offs, and inspectable evidence.', 'evidence', evidence, '<script src="projects.js" defer></script><script src="explorer.js" defer></script>')
page('approach.html', 'Architecture & AI Governance | Tracy Anne Griffin Manning', 'How Tracy Anne Griffin Manning designs human authority, current evidence, verified execution, and business accountability into AI systems.', 'approach', approach)
ROOT.joinpath('robots.txt').write_text('User-agent: *\nAllow: /\n')
ROOT.joinpath('llms.txt').write_text(f'''# Tracy Anne Griffin Manning

> Understand the workflow. Then build the AI. AI Architect in Austin, Texas, focused on governed agentic AI, enterprise cloud architecture, and inspectable decision evidence.

## Identity and professional focus

- Name: Tracy Anne Griffin Manning; professional short name: Tracy Manning.
- Current practice: Founder & AI Architect, Apex AI|ML Engineering LLC.
- Focus: AI architecture, Cloud / AI architecture, enterprise AI platforms, and AI transformation consulting.
- Technical foundation: Python, AWS, GCP, SQL, Terraform, IAM, GitHub OIDC, Docker, CI/CD, and governed agentic systems.
- Location: Based in Austin; open to San Antonio, Dallas–Fort Worth, and Houston; in-office or hybrid; open to meaningful business travel.
- Email: tmanning@post.harvard.edu.

## Site pages

- [Perspective]({ORIGIN}/): Professional positioning and selected evidence.
- [Evidence explorer]({ORIGIN}/evidence.html): Eight featured projects spanning enterprise AI, capital markets, energy, supply chain, and cybersecurity assurance, with explicit evidence limits.
- [Architecture and governance]({ORIGIN}/approach.html): Decision authority, current evidence, execution controls, recovery, and availability.

## Selected engineering evidence

- [Agent Foundry](https://github.com/TAM-DS/agent-foundry): AWS DEV governance proof, not a customer-production system, separating capability, identity, deployment, runtime grants, and tool authority. The documented live AWS DEV workflow passed 399 tests and verified artifacts through S3 read-back. TEST and PROD identities remain permissionless. Approver authentication is external to v1.
- [AWS DEV proof](https://github.com/TAM-DS/agent-foundry/actions/runs/35525913401): Recorded workflow evidence for Agent Foundry; this is a historical verification record, not a claim about current hosted infrastructure.
- [Monster Heavy](https://github.com/TAM-DS/monster-heavy): PostgreSQL-backed governed paper-execution reference with current-policy checks, fresh evidence, concurrency, worker-death recovery, replay, and compensation. No broker integration or real-money path. Production identity is outside v1 scope.
- [Monster Desk](https://github.com/TAM-DS/monster-desk): Standalone Streamlit paper console demonstrating Research, Risk, Execution, and Surveillance roles. Ticket binding, mutation rejection, halt, and duplicate safeguards are session-scoped. It does not call Monster Heavy's runtime; its roles are not authenticated production accounts.
- [AEGIS Evidence](https://github.com/TAM-DS/aegis-evidence): Reproducible assurance workpaper with indicative NIST AI RMF, ISO 42001, and EU AI Act reference mappings; human acceptance, open control gaps, deterministic ZIP, decision-state digest, and complete-archive SHA-256. This is not certification or a legal compliance determination.
- [BALLAST](https://github.com/TAM-DS/ballast): Gradio control tower for synthetic energy and semiconductor supply-chain scenario prototype using deterministic scoring and a disruptive-action approval gate. Results are simulated; no bookings or contracts change. Approval is a demonstration Boolean, not independently verified identity.
- [AI-Ready Data Platform](https://github.com/TAM-DS/ai-ready-data-platform): Governed business claims and bounded parallel specialists using the OpenAI Agents SDK, scoped synthetic warehouse facts, deterministic reconciliation, and replayable decisions. Thirty-five tests passed. One clean live M5 run used three concurrent specialists and returned READY_FOR_REVIEW; local saved-artifact replay reported four accepted claims and no blocked claims or conflicts. The committed live record is user-provided terminal evidence; the complete live artifact remains on the workstation. No spending authority, production reliability, or live-model speedup is claimed.


## Gradio dashboards

- [BALLAST](https://github.com/TAM-DS/ballast#see-the-two-scenarios): Gradio control tower for synthetic energy routes and Taiwan semiconductor dependencies, explainable risk drivers, what-if scenarios, and approval-gated mitigation simulations. No production booking changes.
- [AEGIS Analyst](https://github.com/TAM-DS/aegis-analyst): Gradio cybersecurity console with seeded alerts, ATT&CK mappings, and approval-gated simulated containment. No real EDR, identity-provider, or network changes. AEGIS Evidence is its Streamlit assurance companion.
- [Gradio adoption milestone](https://huggingface.co/blog/gradio-1m): The team reported over one million monthly developers in April 2025; this is a dated publication. The homepage three-line interface example assumes an existing analyze_risk function and does not implement either dashboard.

## Streamlit trading dashboards and implementation limits

- [Capital Markets Research Desk](https://github.com/TAM-DS/capital-markets-research-desk#application-screenshots): Connect bounded CrewAI research to historical evidence and a fixed-rule chronological holdout. 45 tests; screenshots of the Massive-backed dashboard and CrewAI review. Historical daily prices; price returns exclude dividends. Energy equities and ETFs are proxies, not ERCOT power or Henry Hub spot feeds. Structured checks do not establish narrative correctness or investment suitability. No broker or real-money execution. Evaluation omits financing, market impact, and point-in-time universe construction.
- [Investment Gems](https://github.com/TAM-DS/energy-equity-investment-gems#application-screenshots): Apply explicit momentum, volatility, and liquidity hurdles before asking CrewAI to challenge the evidence. 43 tests; screenshots of screening rules and bounded CrewAI review. Historical daily prices; price returns exclude dividends. Energy equities and ETFs are proxies, not ERCOT power or Henry Hub spot feeds. Structured checks do not establish narrative correctness or investment suitability. No broker or real-money execution. REVIEW is a research status, not a buy recommendation.
- [Paper Trading Floor](https://github.com/TAM-DS/paper-trading-floor#application-screenshots): Separate AI research from local human confirmation, independent account checks, and persistent simulated fills. 57 tests; screenshots show simulated cash and positions retained across restarts. Historical daily prices; price returns exclude dividends. Energy equities and ETFs are proxies, not ERCOT power or Henry Hub spot feeds. Structured checks do not establish narrative correctness or investment suitability. No broker or real-money execution. Reviewer labels are not authenticated identity. The local ledger is not immutable enterprise audit storage. Separate stdio MCP examples remain synthetic legacy fixtures.
- Automated tests mock model kickoff; user-recorded screenshots separately show Massive data and CrewAI reviews. Market modes explicitly identify Massive, exact-request cache, or demo. Structured values and rankings are checked using exact short-reference-to-hash mappings. Failed reviews remain withheld after a bounded correction attempt. Narrative meaning requires human review; agents have no order tools. Original static HTML and stdio MCP fixtures remain documented as legacy examples.

## FinOps interpretation

Public FinOps figures are synthetic modeled opportunities, not delivered client savings. Employment savings claims on the resume are separate professional-history claims and are not verified by those repositories.
- [Assumptions](https://github.com/TAM-DS/Infrastructure_Deal_Room-FinOps-M_and_A/blob/main/docs/ASSUMPTIONS.md)
- [Metric lineage](https://github.com/TAM-DS/Infrastructure_Deal_Room-FinOps-M_and_A/blob/main/docs/METRIC_LINEAGE.md)

## Architecture principles

- Capability is not authority. AI proposes; humans authorize; deterministic controls verify current evidence and policy before execution.
- Approval must bind to exact terms and artifacts.
- Evidence precedes state. An attempt is not a verified outcome.
- Preserve failed attempts and decision history. Compensation is a new governed action.
- Connect the pain point, architecture decision, trade-off, failure risk, control, evidence, and business consequence.

## Professional profiles

- [GitHub](https://github.com/TAM-DS)
- [LinkedIn](https://www.linkedin.com/in/tracymanning)
- [Public professional website]({PUBLIC_IDENTITY})

## Evidence interpretation

Site aligned October 11, 2026 with the current profile README and upgraded repository evidence. Gradio and Streamlit labels reflect actual implementations; the trading dashboards are local historical-data applications, not hosted live execution systems. Repository contents and linked workflow evidence are authoritative for implementation scope. Career outcomes shown on the Perspective page are from the professional resume and are distinct from prototype or reference-implementation outcomes. Do not infer production trading, legal certification, client identities, or authenticated approval from the demonstrations.

This is the public professional website at https://tam-ds.github.io/. Machine-readable metadata and llms.txt describe the selected evidence and its scope.
''')
print('Generated three pages, Person JSON-LD, robots.txt, and root llms.txt.')


