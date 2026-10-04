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
    'alternateName': 'Tracy Manning', 'jobTitle': 'AI Architect',
    'description': 'AI Architect focused on governed agentic AI, enterprise cloud architecture, bounded authority, and inspectable evidence.',
    'url': ORIGIN + '/', 'email': 'mailto:tmanning@post.harvard.edu',
    'homeLocation': {'@type': 'Place', 'name': 'Austin, Texas, United States'},
    'worksFor': {'@type': 'Organization', 'name': 'Apex AI|ML Engineering LLC'},
    'alumniOf': {'@type': 'CollegeOrUniversity', 'name': 'Harvard University'},
    'sameAs': ['https://github.com/TAM-DS', 'https://www.linkedin.com/in/tracymanning', PUBLIC_IDENTITY],
    'knowsAbout': ['Agentic AI architecture', 'AI governance', 'Enterprise AI', 'AWS', 'Google Cloud', 'Python', 'Cloud architecture', 'Evidence architecture', 'Infrastructure as code', 'Human authorization', 'AI transformation'],
    'subjectOf': [{'@type': 'CreativeWork', 'name': name, 'url': 'https://github.com/TAM-DS/' + slug} for name, slug in [
        ('Agent Foundry', 'agent-foundry'), ('Monster Heavy', 'monster-heavy'), ('Monster Desk', 'monster-desk'),
        ('AEGIS Evidence', 'aegis-evidence'), ('BALLAST', 'ballast'), ('AI-Ready Data Platform', 'ai-ready-data-platform')]],
}

FAVICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" rx="4" fill="#c6ec7b"/><path d="M9 11h22v4h-9v16h-4V15H9z" fill="#152016"/></svg>'
from urllib.parse import quote
ICON_URL = 'data:image/svg+xml,' + quote(FAVICON, safe='')

def header(active):
    links = [('index.html', 'Perspective', 'home'), ('evidence.html', 'Evidence', 'evidence'), ('approach.html', 'Approach', 'approach')]
    nav = ''.join(f'<a href="{href}"' + (' aria-current="page"' if key == active else '') + f'>{name}</a>' for href, name, key in links)
    return f'''<a class="skip" href="#main">Skip to content</a>
    <header class="header"><div class="wrap nav"><a class="identity" href="index.html" aria-label="Tracy Anne Griffin Manning home"><span class="mark" aria-hidden="true">T</span><span>Tracy Anne Griffin Manning<small>AI Architect</small></span></a><nav class="nav-links" aria-label="Main navigation">{nav}</nav></div></header>'''

def footer():
    return '''<footer class="footer"><div class="wrap footer-row"><span>Tracy Anne Griffin Manning · Austin, Texas</span><nav class="footer-links" aria-label="Professional links"><a href="https://github.com/TAM-DS" target="_blank" rel="noopener noreferrer">GitHub<span class="visually-hidden"> (opens in a new tab)</span></a><a href="https://www.linkedin.com/in/tracymanning" target="_blank" rel="noopener noreferrer">LinkedIn<span class="visually-hidden"> (opens in a new tab)</span></a><a href="mailto:tmanning@post.harvard.edu">Email</a><a href="llms.txt">llms.txt</a></nav></div></footer>'''

def page(filename, title, desc, active, body, scripts=''):
    path = '/' if filename == 'index.html' else '/' + filename
    for asset in ('projects.js', 'explorer.js'):
        scripts = scripts.replace(f'src="{asset}"', f'src="{asset}?v={ASSET_VERSION}"')
    ROOT.joinpath(filename).write_text(f'''<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="dark"><meta name="theme-color" content="#101416"><meta name="robots" content="index, follow"><title>{title}</title><meta name="description" content="{desc}"><link rel="canonical" href="{ORIGIN}{path}"><meta property="og:type" content="website"><meta property="og:title" content="{title}"><meta property="og:description" content="{desc}"><meta property="og:url" content="{ORIGIN}{path}"><link rel="icon" type="image/svg+xml" href="{ICON_URL}"><link rel="stylesheet" href="styles.css?v={ASSET_VERSION}"><script type="application/ld+json">{json.dumps(PERSON, ensure_ascii=False)}</script>{scripts}</head><body>{header(active)}{body}{footer()}</body></html>''')

home = '''<main id="main">
<div class="wrap hero"><div><span class="eyebrow">AI architecture · Business judgment · Governed execution</span><h1>I build AI systems that <em>earn the right to act.</em></h1><p class="intro">I work where AI capability, human authority, and business consequence meet. My focus is turning promising systems into architecture people can inspect, operate, and trust with consequential work.</p><div class="actions"><a class="button primary" href="evidence.html">Explore the evidence</a><a class="button" href="approach.html">How I approach the work</a></div><p class="location"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.4"/></svg><span>Austin, Texas · Relocation within Texas · Meaningful travel</span></p></div>
<aside class="ledger" aria-label="Architecture principle: capability and authority remain separate"><div class="ledger-head"><span>The decision boundary</span><span>01 / 04</span></div><p class="ledger-title">Capability is not authority.</p><div class="ledger-row"><span class="ledger-num">01</span><div><strong>AI proposes</strong><small>Reasoning produces a candidate decision.</small></div><span class="ledger-label">Capability</span></div><div class="ledger-row"><span class="ledger-num">02</span><div><strong>A human authorizes</strong><small>Approval binds to the exact decision.</small></div><span class="ledger-label">Authority</span></div><div class="ledger-row"><span class="ledger-num">03</span><div><strong>The system verifies</strong><small>Current evidence. Current policy.</small></div><span class="ledger-label">Reality</span></div><div class="ledger-row"><span class="ledger-num">04</span><div><strong>Execute or reject</strong><small>Preserve what actually happened.</small></div><span class="ledger-label">Evidence</span></div><p class="ledger-foot">A recommendation never grants itself permission.</p></aside></div>
<section class="section"><div class="wrap"><div class="section-header"><div><span class="kicker">Selected evidence</span><h2>Three ways to inspect the judgment.</h2></div><a class="text-link" href="evidence.html">Explore all six systems</a></div><div class="featured-grid"><article class="featured"><span class="serial">01 / CLOUD &amp; AI AUTHORITY</span><div class="project-heading"><h3>Agent Foundry</h3><p class="project-sector">Enterprise AI</p></div><p>A complete governed lifecycle proven on AWS DEV, with bounded IAM, short-lived identity, and independent deployment verification.</p><span class="label">399 tests in the documented live workflow</span><a class="text-link" href="evidence.html#agent-foundry">Read the evidence brief</a></article><article class="featured"><span class="serial">02 / FAILURE &amp; RECOVERY</span><div class="project-heading"><h3>Monster Heavy</h3><p class="project-sector">Capital Markets</p></div><p>A paper-execution boundary designed to hold through stale evidence, concurrent requests, worker death, and compensation.</p><span class="label">Failure behavior backed by release evidence</span><a class="text-link" href="evidence.html#monster-heavy">Read the evidence brief</a></article><article class="featured"><span class="serial">03 / INSPECTABLE ASSURANCE</span><div class="project-heading"><h3>AEGIS Evidence</h3><p class="project-sector">Cybersecurity Assurance</p></div><p>A replayable governance workpaper that preserves accepted evidence and leaves unresolved control gaps visible.</p><span class="label">Verifiable evidence, explicit open risks</span><a class="text-link" href="evidence.html#aegis-evidence">Read the evidence brief</a></article></div></div></section>
<section class="section"><div class="wrap"><div class="quote-section"><div><span class="kicker">The business lens</span><h2>Architecture changes how decisions happen.</h2></div><div><blockquote>“Most AI transformations don’t fail because the technology doesn’t work. They fail because the organization hasn’t redesigned how decisions, accountability, and workflows operate around it.”</blockquote><p class="caption">That is the question I bring into discovery, design, and delivery: what needs to change around the technology for the business to get the value?</p></div></div><div class="career-strip"><div><span class="value">$1.2M+</span><small>Annual cloud savings delivered in prior consulting work</small></div><div><span class="value">70%</span><small>Reduction in manual reporting through SQL / Python automation</small></div><div><span class="value">10K+</span><small>Daily users supported by prior platform work</small></div></div><p class="career-label">Career outcomes from my professional record · Project evidence is presented separately.</p></div></section>
<section class="section"><div class="wrap contact-band"><div><span class="kicker">Let’s talk about the decision</span><h2>Technical depth. Executive perspective.</h2><p>AI architecture, cloud and AI platforms, and AI transformation consulting.</p></div><a class="button primary" href="mailto:tmanning@post.harvard.edu">Start a conversation</a></div></section>
</main>'''

evidence = '''<main id="main"><div class="wrap"><div class="page-intro"><span class="eyebrow">Selected systems / Architecture in evidence</span><h1>Start with the business problem.</h1><p>Six systems. Different operating constraints. One consistent question: what must be true before the system is allowed to act?</p></div><section class="explorer" aria-label="Project evidence explorer"><noscript><div class="js-fallback">Interactive filters need JavaScript. You can still inspect the repositories: <a class="text-link" href="https://github.com/TAM-DS/agent-foundry">Agent Foundry</a>, <a class="text-link" href="https://github.com/TAM-DS/monster-heavy">Monster Heavy</a>, <a class="text-link" href="https://github.com/TAM-DS/monster-desk">Monster Desk</a>, <a class="text-link" href="https://github.com/TAM-DS/aegis-evidence">AEGIS Evidence</a>, <a class="text-link" href="https://github.com/TAM-DS/ballast">BALLAST</a>, <a class="text-link" href="https://github.com/TAM-DS/ai-ready-data-platform">AI-Ready Data Platform</a>.</div></noscript><div class="explorer-tools"><div class="view-switch" role="group" aria-label="Explore evidence by"><button type="button" data-view="problem" aria-pressed="true">Business problem</button><button type="button" data-view="capability" aria-pressed="false">Capability</button></div><div class="filters" id="filters" role="group" aria-label="Filter by business problem"></div></div><p class="result-line" id="result-count" aria-live="polite" aria-atomic="true"></p><div class="project-grid" id="project-grid"></div><p class="evidence-note">Each brief connects the pain point, architecture decision, trade-off, failure risk, control, evidence, and business consequence. Repository links lead to the implementation and its stated scope. Evidence snapshot: October 2–3, 2026.</p></section></div><dialog class="dialog" id="project-dialog" aria-labelledby="dialog-title"><div id="dialog-content"></div></dialog></main>'''

approach = '''<main id="main"><div class="wrap approach-lead"><div><span class="eyebrow">Architecture &amp; AI governance</span><h1>The model can reason.<br><em>The architecture decides.</em></h1><p class="intro">I design the boundaries around AI: who can approve, what evidence counts, when permissions expire, and how the system stays truthful when something fails.</p></div><aside class="principle-card"><span class="kicker">A design rule</span><span class="number">Evidence before state.</span><p>The system may be conservatively behind reality. It must never be optimistically ahead of it.</p><small>Approval is not deployment. Deployment is not runtime authority. An attempted action is not a verified result.</small></aside></div>
<section class="section"><div class="wrap questions"><div><span class="kicker">The questions that shape the design</span><h2>Judgment before a stack.</h2><p>I treat patterns as hypotheses, test them against evidence, and connect the architecture to the decision the business needs to make.</p></div><div><details open><summary><span><span class="question-number">01</span>Where is the business actually stuck?</span></summary><p>Start with the workflow, the time spent, the bottleneck, and the consequence of a wrong decision. Identify where AI changes the outcome and where a simpler control solves the problem.</p></details><details><summary><span><span class="question-number">02</span>Who should have authority?</span></summary><p>Separate recommendation, approval, identity, and execution. Bind approval to the exact decision, scope the permission, and keep the model from granting itself authority.</p></details><details><summary><span><span class="question-number">03</span>What evidence has to be true now?</span></summary><p>Check fresh external state and current policy at the execution boundary. Retain provenance and exact artifact identity so yesterday’s approval cannot silently authorize today’s different action.</p></details><details><summary><span><span class="question-number">04</span>What happens when the system is wrong?</span></summary><p>Design rejection, retry, recovery, compensation, and observability alongside the happy path. Preserve failed attempts. State should follow verified evidence, and recovery should preserve the history of the original decision.</p></details></div></div></section>
<section class="section"><div class="wrap"><div class="section-header"><div><span class="kicker">One boundary, four responsibilities</span><h2>Make control visible in the system.</h2></div><p>These responsibilities appear across the selected projects. Each implementation states what it actually proves.</p></div><div class="boundary" role="list"><div role="listitem"><span class="n">01 / PROPOSE</span><h3>Reason over the problem.</h3><p>The AI produces a constrained candidate with supporting evidence.</p><span class="role">AI capability</span></div><div role="listitem"><span class="n">02 / AUTHORIZE</span><h3>Bind the decision.</h3><p>A person approves the exact terms within an explicit scope.</p><span class="role">Human authority</span></div><div role="listitem"><span class="n">03 / VERIFY</span><h3>Check current reality.</h3><p>Deterministic controls check policy, evidence, and permission at execution.</p><span class="role">System control</span></div><div role="listitem"><span class="n">04 / RECORD</span><h3>Keep the result truthful.</h3><p>Execute or reject, preserve evidence, and support review and recovery.</p><span class="role">Business accountability</span></div></div><div class="actions"><a class="text-link" href="evidence.html?filter=authority">Inspect the authority evidence</a></div></div></section>
<section class="section"><div class="wrap working-with"><div><span class="kicker">Working with me</span><h2>Close enough to build.<br>Senior enough to shape the direction.</h2><p class="intro">My background spans financial operations, cloud platforms, and hands-on AI engineering. I lead work from discovery and architecture through delivery, with the business consequence kept in view.</p><a class="contact-email" href="mailto:tmanning@post.harvard.edu">tmanning@post.harvard.edu</a><div class="actions"><a class="button" href="https://www.linkedin.com/in/tracymanning" target="_blank" rel="noopener noreferrer">Connect on LinkedIn<span class="visually-hidden"> (opens in a new tab)</span></a></div></div><dl class="work-facts"><div><dt>Professional focus</dt><dd>AI Architect · Cloud / AI Architect · Enterprise AI platforms · AI transformation consulting</dd></div><div><dt>Location &amp; mobility</dt><dd>Based in Austin. Willing to relocate within Texas, including the Texas Triangle. Open to meaningful business travel.</dd></div><div><dt>Work style</dt><dd>In-office or hybrid; direct collaboration with engineering teams and executive stakeholders.</dd></div><div><dt>Current practice</dt><dd>Founder &amp; AI Architect, Apex AI|ML Engineering LLC. Enterprise engagement details remain confidential.</dd></div><div><dt>Technical foundation</dt><dd>Python · AWS / GCP · SQL · Terraform · IAM / OIDC · Docker · CI/CD · Governed agentic systems</dd></div></dl></div></section></main>'''

page('index.html', 'Tracy Anne Griffin Manning | AI Architect', 'Governed AI, enterprise cloud architecture, and business judgment. Selected evidence from Tracy Anne Griffin Manning, AI Architect in Austin, Texas.', 'home', home)
page('evidence.html', 'Selected Evidence | Tracy Anne Griffin Manning', 'Explore six engineering systems by business problem or capability, with architecture decisions, controls, trade-offs, and inspectable evidence.', 'evidence', evidence, '<script src="projects.js" defer></script><script src="explorer.js" defer></script>')
page('approach.html', 'Architecture & AI Governance | Tracy Anne Griffin Manning', 'How Tracy Anne Griffin Manning designs human authority, current evidence, verified execution, and business accountability into AI systems.', 'approach', approach)
ROOT.joinpath('robots.txt').write_text('User-agent: *\nAllow: /\n')
ROOT.joinpath('llms.txt').write_text(f'''# Tracy Anne Griffin Manning

> AI Architect in Austin, Texas, focused on governed agentic AI, enterprise cloud architecture, and inspectable decision evidence.

## Identity and professional focus

- Name: Tracy Anne Griffin Manning; professional short name: Tracy Manning.
- Current practice: Founder & AI Architect, Apex AI|ML Engineering LLC.
- Focus: AI architecture, Cloud / AI architecture, enterprise AI platforms, and AI transformation consulting.
- Technical foundation: Python, AWS, GCP, SQL, Terraform, IAM, GitHub OIDC, Docker, CI/CD, and governed agentic systems.
- Location: Austin, Texas. Willing to relocate within Texas. Open to meaningful business travel; in-office or hybrid.
- Email: tmanning@post.harvard.edu.

## Site pages

- [Perspective]({ORIGIN}/): Professional positioning and selected evidence.
- [Evidence explorer]({ORIGIN}/evidence.html): Six selected systems explored by business problem or capability.
- [Architecture and governance]({ORIGIN}/approach.html): Decision authority, current evidence, execution controls, recovery, and availability.

## Selected engineering evidence

- [Agent Foundry](https://github.com/TAM-DS/agent-foundry): Production-oriented Python governance system separating capability, identity, deployment, runtime grants, and tool authority. The documented live AWS DEV workflow passed 399 tests and verified artifacts through S3 read-back. TEST and PROD identities remain permissionless. Approver authentication is external to v1.
- [AWS DEV proof](https://github.com/TAM-DS/agent-foundry/actions/runs/35525913401): Recorded workflow evidence for Agent Foundry; this is a historical verification record, not a claim about current hosted infrastructure.
- [Monster Heavy](https://github.com/TAM-DS/monster-heavy): PostgreSQL-backed governed paper-execution reference with current-policy checks, fresh evidence, concurrency, worker-death recovery, replay, and compensation. No broker integration or real-money path. Production identity is outside v1 scope.
- [Monster Desk](https://github.com/TAM-DS/monster-desk): Standalone Streamlit paper console demonstrating Research, Risk, Execution, and Surveillance roles. Ticket binding, mutation rejection, halt, and duplicate safeguards are session-scoped. It does not call Monster Heavy's runtime; its roles are not authenticated production accounts.
- [AEGIS Evidence](https://github.com/TAM-DS/aegis-evidence): Reproducible assurance workpaper with indicative NIST AI RMF, ISO 42001, and EU AI Act reference mappings; human acceptance, open control gaps, deterministic ZIP, decision-state digest, and complete-archive SHA-256. This is not certification or a legal compliance determination.
- [BALLAST](https://github.com/TAM-DS/ballast): Synthetic energy and semiconductor supply-chain scenario prototype using deterministic scoring and a disruptive-action approval gate. Results are simulated; no bookings or contracts change. Approval is a demonstration Boolean, not independently verified identity.
- [AI-Ready Data Platform](https://github.com/TAM-DS/ai-ready-data-platform): Governed business claims and bounded parallel specialists using the OpenAI Agents SDK, scoped synthetic warehouse facts, deterministic reconciliation, and replayable decisions. Thirty-five tests passed. One clean live M5 run used three concurrent specialists and returned READY_FOR_REVIEW; local saved-artifact replay reported four accepted claims and no blocked claims or conflicts. The committed live record is user-provided terminal evidence; the complete live artifact remains on the workstation. No spending authority, production reliability, or live-model speedup is claimed.

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

Project descriptions were checked against repository READMEs on October 2, 2026; AI-Ready Data Platform was updated against its October 3, 2026 implementation and evidence. Repository contents and linked workflow evidence are authoritative for implementation scope. Career outcomes shown on the Perspective page are from the professional resume and are distinct from prototype or reference-implementation outcomes. Do not infer production trading, legal certification, client identities, or authenticated approval from the demonstrations.

This is the public professional website at https://tam-ds.github.io/. Machine-readable metadata and llms.txt describe the selected evidence and its scope.
''')
print('Generated three pages, Person JSON-LD, robots.txt, and root llms.txt.')

