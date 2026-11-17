window.PROJECTS = [
  {
    "id": "penumbra",
    "name": "Penumbra",
    "sector": "AI security & counterintelligence",
    "category": "Governed security investigations",
    "status": "Synthetic reference implementation",
    "summary": "Investigate connected threats while keeping the defending agent within explicit authority boundaries.",
    "proof": "Red-team containment tests, evidence-linked findings and Ed25519-signed audit verification.",
    "scope": "Synthetic telemetry · simulated containment",
    "repo": "https://github.com/TAM-DS/penumbra",
    "evidence": "https://github.com/TAM-DS/penumbra/blob/main/docs/THREAT_MODEL.md",
    "evidenceLabel": "Inspect the threat model",
    "problems": [
      "authority",
      "auditability",
      "operations"
    ],
    "capabilities": [
      "governance",
      "decisions",
      "experience"
    ],
    "stack": "Python · FastAPI · Claude (optional) · Ed25519 · OPA adapter",
    "brief": [
      [
        "Pain point",
        "Security agents read hostile content while operating near powerful containment tools. The defender can become an attack target."
      ],
      [
        "Architecture decision",
        "Separate telemetry, temporal evidence, specialist investigators, guardrails and the operator interface across five layers."
      ],
      [
        "Trade-off",
        "A deterministic, keyless scenario makes controls reproducible; live telemetry and authenticated approvers require further integration."
      ],
      [
        "Control",
        "Quarantine untrusted text, scope tools, check policy at proposal and execution, require human review, and sign the audit chain."
      ],
      [
        "Evidence",
        "Operation Low Tide uses synthetic telemetry. Red-team mode simulates a hijacked investigator attempting prohibited actions; tests exercise scope and policy denials, approval rules and audit tampering."
      ],
      [
        "Business consequence",
        "Make investigation findings and proposed containment reviewable, including the simulated impact on business operations."
      ]
    ],
    "limit": "Synthetic reference implementation, not a production security service. OSINT and containment are simulated. The demo server has no authentication; UI-selected approver identities are not SSO-bound. Rule-based injection detection is incomplete. Claude tests use a fake client, not live-model validation."
  },
  {
    "id": "firstsync",
    "name": "FirstSync",
    "sector": "Enterprise onboarding",
    "category": "Enterprise onboarding",
    "status": "Hosted reference demo",
    "summary": "Bring customer data into a B2B product through reviewed mappings, dry-runs and controlled migration.",
    "proof": "Baseline and model evaluations; hash-bound approvals; idempotent migration and sync.",
    "scope": "Hosted reference demo",
    "repo": "https://github.com/TAM-DS/firstsync",
    "evidence": "https://firstsync-demo.fly.dev",
    "evidenceLabel": "Inspect the evidence",
    "problems": [
      "delivery",
      "authority",
      "resilience"
    ],
    "capabilities": [
      "experience",
      "governance",
      "reliability"
    ],
    "stack": "Python · Claude · MCP · FastAPI · SQLite · Fly.io",
    "brief": [
      [
        "Pain point",
        "Enterprise onboarding stalls on data mapping, access gaps and approval coordination."
      ],
      [
        "Architecture decision",
        "Let Claude inspect and propose; use deterministic validation and human approval before migration."
      ],
      [
        "Control",
        "Bind approval to proposal hashes. Repeated migrations upsert rather than duplicate records."
      ],
      [
        "Evidence",
        "Committed model evaluations compare against a name-matching baseline. The portal exposes the review-to-migration flow."
      ],
      [
        "Business consequence",
        "Make onboarding blockers visible before data moves."
      ]
    ],
    "limit": "No customers. Hosted demo uses synthetic orgs and precomputed model proposals; downstream engines run server-side. Salesforce REST validation is mocked, not a live-org proof."
  },
  {
    "id": "signaldesk-acquisition-intelligence",
    "name": "SignalDesk",
    "sector": "Commercial AI & CRM",
    "category": "Commercial AI & CRM",
    "status": "Developer-org proof",
    "summary": "Turn OpenAI-powered company research into evidence-linked, human-reviewed decisions with bounded Salesforce access.",
    "proof": "Documented developer-org validation: two synthetic Leads, one blocked and one requiring review.",
    "scope": "Developer-org proof",
    "repo": "https://github.com/TAM-DS/signaldesk-acquisition-intelligence",
    "evidence": "https://github.com/TAM-DS/signaldesk-acquisition-intelligence/blob/main/docs/SALESFORCE_DEV_ORG_VALIDATION.md",
    "evidenceLabel": "Review Salesforce validation",
    "problems": [
      "delivery",
      "authority"
    ],
    "capabilities": [
      "experience",
      "governance"
    ],
    "stack": "Python · OpenAI Responses API · FastAPI · SQLAlchemy · SQLite · Salesforce REST · HTML/CSS/JavaScript",
    "brief": [
      [
        "Pain point",
        "Sales teams need useful company research without treating uncertain identity, weak evidence or CRM access as permission to contact someone."
      ],
      [
        "Architecture decision",
        "Separate company discovery, human review, lead creation and draft approval. Keep the Salesforce preview bounded and GET-only."
      ],
      [
        "Control",
        "Bind approval to the exact draft; revoke it after edits or new research. Persist Do Not Contact suppression and limit live research attempts."
      ],
      [
        "Evidence",
        "Developer-org validation assessed two synthetic Leads: one blocked and one requiring review. A separately documented acquisition-to-SDR handoff remained on evidence hold when contact identity could not be verified."
      ],
      [
        "Business consequence",
        "Make opportunities reviewable while preserving the ability to stop when evidence or authority is missing."
      ]
    ],
    "limit": "Local single-user reference application without authentication. Salesforce proof is a limited developer-operated run on synthetic Leads; automated provider tests are mocked. Citation provenance does not prove claim accuracy. Delivery is simulated; no autonomous CRM writes, production deployment or measured customer ROI."
  },
  {
    "id": "agent-foundry",
    "name": "Agent Foundry",
    "sector": "Enterprise AI",
    "category": "Governed agents on AWS",
    "status": "Live AWS DEV proof",
    "summary": "An agent can become more capable without quietly becoming more powerful.",
    "proof": "399 tests passed in the documented AWS DEV workflow.",
    "scope": "Verified AWS DEV lifecycle",
    "repo": "https://github.com/TAM-DS/agent-foundry",
    "evidence": "https://github.com/TAM-DS/agent-foundry/actions/runs/35525913401",
    "evidenceLabel": "Review the AWS proof",
    "problems": [
      "authority",
      "auditability",
      "delivery"
    ],
    "capabilities": [
      "governance",
      "cloud",
      "reliability"
    ],
    "stack": "Python 3.13 · AWS IAM / S3 · GitHub OIDC · Terraform · SQLite",
    "brief": [
      [
        "Pain point",
        "Agent evaluation, deployment, and tool access can accidentally become permission to operate."
      ],
      [
        "Architecture decision",
        "Separate capability, identity, deployment evidence, runtime grants, and tool authorization into deterministic boundaries."
      ],
      [
        "Trade-off",
        "A deliberately narrow AWS footprint proves the control model without hiding it inside a large platform."
      ],
      [
        "Failure / risk",
        "A successful API call can misrepresent deployment; policy-permitted tools can acquire authority that was never granted."
      ],
      [
        "Control",
        "Bind approval to the exact artifact. Independently retrieve evidence. Verify S3 bytes before issuing bounded runtime authority."
      ],
      [
        "Evidence",
        "The recorded CI workflow passed 399 tests, completed the AWS DEV lifecycle, allowed files/read, and denied ungranted search/query."
      ],
      [
        "Business consequence",
        "Creates a reviewable path for increasing agent capability while keeping consequential permissions explicit."
      ]
    ],
    "limit": "AWS DEV proof, not a customer-production system. TEST and PROD identities remain permissionless; approver authentication is external to v1."
  },
  {
    "id": "databricks-ai-ready-lakehouse",
    "name": "Databricks AI-Ready Lakehouse",
    "sector": "Data engineering",
    "category": "Data engineering",
    "status": "Databricks reference run",
    "summary": "Turn raw shipment data into traceable Gold data products with explicit quality gates.",
    "proof": "Documented serverless job: 1,260 synthetic records; 60 quarantined; Unity Catalog lineage observed.",
    "scope": "Databricks reference run",
    "repo": "https://github.com/TAM-DS/databricks-ai-ready-lakehouse",
    "evidence": "https://github.com/TAM-DS/databricks-ai-ready-lakehouse#readme",
    "evidenceLabel": "Inspect the evidence",
    "problems": [
      "delivery",
      "auditability",
      "operations"
    ],
    "capabilities": [
      "cloud",
      "reliability",
      "decisions"
    ],
    "stack": "Python · Spark SQL · PySpark · Delta Lake · Unity Catalog · Gradio · MCP",
    "brief": [
      [
        "Pain point",
        "AI answers depend on data with known quality, meaning and lineage."
      ],
      [
        "Architecture decision",
        "Separate Bronze, Silver and Gold; quarantine invalid records with reasons."
      ],
      [
        "Evidence",
        "Successful serverless job, table-level lineage screenshots and read-only MCP smoke-test evidence."
      ],
      [
        "Business consequence",
        "Expose quality issues before downstream users rely on the data."
      ]
    ],
    "limit": "Synthetic data; one documented managed job. Local interfaces read CSV exports, not a live Databricks connection. Fine-grained access enforcement was not tested."
  },
  {
    "id": "ai-infra-command-tower-finops",
    "name": "AI Infrastructure Intelligence",
    "sector": "Infrastructure economics",
    "category": "Infrastructure economics",
    "status": "Modeled FinOps reference",
    "summary": "Connect cloud spend, GPU usage and AI cost assumptions to executive decisions.",
    "proof": "Reproducible synthetic metrics with separate historical and operational evidence windows.",
    "scope": "Modeled FinOps reference",
    "repo": "https://github.com/TAM-DS/ai-infra-command-tower-finops",
    "evidence": "https://github.com/TAM-DS/ai-infra-command-tower-finops#readme",
    "evidenceLabel": "Inspect the evidence",
    "problems": [
      "operations",
      "auditability"
    ],
    "capabilities": [
      "cloud",
      "decisions"
    ],
    "stack": "Python · Streamlit · Plotly · AWS / GCP cost models",
    "brief": [
      [
        "Pain point",
        "Leaders need to distinguish measured costs from assumptions and potential savings."
      ],
      [
        "Architecture decision",
        "Reconcile spend and isolate token-cost scenarios from historical cloud billing."
      ],
      [
        "Control",
        "Preserve metric lineage, assumptions and separate time windows."
      ],
      [
        "Business consequence",
        "Support informed infrastructure investment and optimization decisions."
      ]
    ],
    "limit": "Fully synthetic data. Budget variance is not realized savings; token costs are what-if inputs. No cloud remediation or purchasing actions."
  },
  {
    "id": "agentic-rag-voice-intelligence-platform",
    "name": "Agentic RAG & Voice Intelligence",
    "sector": "Knowledge & voice workflows",
    "category": "Knowledge & voice workflows",
    "status": "Low-code architecture case",
    "summary": "Connect maintained business knowledge to retrieval, conversation and voice through managed services.",
    "proof": "Architecture documentation for n8n, OpenAI, Supabase and ElevenLabs integration.",
    "scope": "Low-code architecture case",
    "repo": "https://github.com/TAM-DS/agentic-rag-voice-intelligence-platform",
    "evidence": "https://github.com/TAM-DS/agentic-rag-voice-intelligence-platform#readme",
    "evidenceLabel": "Inspect the evidence",
    "problems": [
      "delivery",
      "operations"
    ],
    "capabilities": [
      "experience",
      "decisions"
    ],
    "stack": "n8n · OpenAI · Supabase / pgvector · ElevenLabs · Google Drive",
    "brief": [
      [
        "Pain point",
        "Organizational knowledge is difficult to keep current and make accessible."
      ],
      [
        "Architecture decision",
        "Compose managed services; separate knowledge ingestion, retrieval, reasoning and voice."
      ],
      [
        "Trade-off",
        "Managed services reduce custom implementation while introducing vendor and integration dependencies."
      ],
      [
        "Business consequence",
        "Help domain experts maintain knowledge in familiar tools and make it accessible conversationally."
      ]
    ],
    "limit": "Architecture documentation, not a standalone custom-code application. Client outcome claims require their own measurement context; this repository does not independently establish causality."
  },
  {
    "id": "monster-heavy",
    "name": "Monster Heavy",
    "sector": "Capital Markets",
    "category": "Durable execution boundary",
    "status": "Paper-only reference",
    "summary": "Human authority survives retries, policy drift, concurrency, and worker failure.",
    "proof": "Release acceptance evidence covers AC-01 through AC-30.",
    "scope": "PostgreSQL-backed paper execution",
    "repo": "https://github.com/TAM-DS/monster-heavy",
    "evidence": "https://github.com/TAM-DS/monster-heavy/blob/main/docs/PHASE5_RELEASE.md",
    "evidenceLabel": "Inspect failure behavior",
    "problems": [
      "authority",
      "resilience"
    ],
    "capabilities": [
      "governance",
      "reliability"
    ],
    "stack": "Python · PostgreSQL · FastAPI · Docker · GitHub Actions",
    "brief": [
      [
        "Pain point",
        "An approved proposal can become unsafe when evidence ages, policy changes, or execution is retried."
      ],
      [
        "Architecture decision",
        "Put current policy, fresh evidence, locks, the paper consequence, and durable evidence inside one authoritative execution boundary."
      ],
      [
        "Trade-off",
        "PostgreSQL transactions and leases add operational complexity to make recovery and replay explicit."
      ],
      [
        "Failure / risk",
        "A worker dies around commit, two requests race, or a compensation erases the original decision."
      ],
      [
        "Control",
        "Atomically commit or durably reject. Reclaim expired leases. Return the prior result on replay. Treat compensation as a new approved action."
      ],
      [
        "Evidence",
        "Release validation includes independent database connections, real process-death tests, concurrency, compensation, metrics, and Docker-backed CI."
      ],
      [
        "Business consequence",
        "Demonstrates how a consequential workflow can recover without duplicate execution or rewriting history."
      ]
    ],
    "limit": "Paper trading only. There is no broker integration or real-money path. Specified failure-case tests do not establish a production SLA; production identity remains outside v1 scope."
  },
  {
    "id": "ai-ready-data-platform",
    "name": "AI-Ready Data Platform",
    "sector": "Retail Analytics",
    "category": "Governed parallel collaboration",
    "status": "Live SDK path validated",
    "summary": "Parallel AI specialists contribute evidence without turning agreement into authority.",
    "proof": "35 tests passed; three live specialists; saved decisions replayed.",
    "scope": "Synthetic warehouse · bounded collaboration",
    "repo": "https://github.com/TAM-DS/ai-ready-data-platform",
    "evidence": "https://github.com/TAM-DS/ai-ready-data-platform/blob/main/docs/COLLABORATION.md#validation-scope",
    "evidenceLabel": "Inspect validation and scope",
    "problems": [
      "authority",
      "auditability",
      "operations",
      "resilience"
    ],
    "capabilities": [
      "governance",
      "reliability",
      "decisions"
    ],
    "stack": "Python · OpenAI Agents SDK · DuckDB · typed claims · deterministic controls",
    "brief": [
      [
        "Pain point",
        "A technically valid query or confident model claim can become the wrong financial truth when grain, time, meaning, or authority changes."
      ],
      [
        "Architecture decision",
        "Run Regional Sales, Customer Analytics, and Store Operations in parallel over scoped warehouse facts. Independently assess claims before constructing the review package."
      ],
      [
        "Trade-off",
        "Bounded application coordination keeps concurrency and authority inspectable. Specialists cannot recruit peers, execute arbitrary SQL, or authorize spending."
      ],
      [
        "Failure / risk",
        "An inflated revenue claim survives a join, current customer or region attributes become historical truth, or specialist agreement hides a conflict."
      ],
      [
        "Control",
        "Check values, grain, time, capability, and restrictions against approved facts. Withhold conflicting claims, bound retries, preserve failures, and replay decisions from captured evidence."
      ],
      [
        "Evidence",
        "35 tests passed on the M5 and in Ubuntu/macOS CI. Invalid fixtures block the $300 proposal with equivalent sequential and parallel decisions. One clean live SDK run used three concurrent specialists; local replay reported four accepted claims and zero blocked claims or conflicts."
      ],
      [
        "Business consequence",
        "Supported findings remain useful when another claim fails. Leaders can inspect which claims deserve reliance and where the decision must stop."
      ]
    ],
    "limit": "Synthetic warehouse evidence. The live result is one user-recorded clean run; the full artifact remains on the workstation. The demo stops at review with no spending authority. Fixture timings do not establish a live-model speedup, and a checksum is not an authenticated signature."
  },
  {
    "id": "capital-markets-research-desk",
    "name": "Capital Markets Research Desk",
    "sector": "Capital Markets & Energy",
    "category": "Streamlit research and holdout evaluation",
    "status": "Historical market research",
    "summary": "Connect bounded CrewAI research to historical evidence and a fixed-rule chronological holdout.",
    "proof": "45 tests; screenshots of the Massive-backed dashboard and CrewAI review.",
    "scope": "Historical evidence · fixed-rule evaluation",
    "repo": "https://github.com/TAM-DS/capital-markets-research-desk",
    "evidence": "https://github.com/TAM-DS/capital-markets-research-desk#application-screenshots",
    "evidenceLabel": "View application screenshots",
    "problems": [
      "authority",
      "auditability"
    ],
    "capabilities": [
      "governance",
      "decisions",
      "experience"
    ],
    "stack": "Python · Streamlit · Massive REST API · CrewAI · pandas · pytest",
    "brief": [
      [
        "Pain point",
        "A persuasive market thesis can hide weak provenance, unchecked claims, or a strategy that fails outside its development period."
      ],
      [
        "Architecture decision",
        "Separate historical market evidence and Python metrics from CrewAI interpretation. Evaluate a fixed SMA20 long/cash rule on the final chronological holdout with benchmark and modeled costs."
      ],
      [
        "Trade-off",
        "A transparent fixed rule makes evaluation inspectable; it is not an optimized strategy or proof of a profitable trading edge."
      ],
      [
        "Failure / risk",
        "Invalid prices, invented values, incorrect rankings, or omitted costs can mislead a reviewer."
      ],
      [
        "Control",
        "Validate market rows and identify Massive/cache/demo sources. Resolve short model references to exact evidence hashes; check structured values and rankings. Withhold failed reviews after a bounded correction attempt."
      ],
      [
        "Evidence",
        "45 automated tests with model kickoff mocked. User-recorded screenshots separately show Massive data and CrewAI research. The documented XLE holdout underperformed its benchmark after modeled costs."
      ],
      [
        "Business consequence",
        "Supports research with visible assumptions and contrary evidence before anyone considers execution."
      ]
    ],
    "limit": "Historical daily prices; price returns exclude dividends. Energy equities and ETFs are proxies, not ERCOT power or Henry Hub spot feeds. Structured checks do not establish narrative correctness or investment suitability. No broker or real-money execution. Evaluation omits financing, market impact, and point-in-time universe construction."
  },
  {
    "id": "investment-gems",
    "name": "Investment Gems",
    "sector": "Equities & Energy Exposure",
    "category": "Streamlit screening and research",
    "status": "Transparent historical screen",
    "summary": "Apply explicit momentum, volatility, and liquidity hurdles before asking CrewAI to challenge the evidence.",
    "proof": "43 tests; screenshots of screening rules and bounded CrewAI review.",
    "scope": "Selected equity/ETF universe · research only",
    "repo": "https://github.com/TAM-DS/energy-equity-investment-gems",
    "evidence": "https://github.com/TAM-DS/energy-equity-investment-gems#application-screenshots",
    "evidenceLabel": "View application screenshots",
    "problems": [
      "operations",
      "auditability"
    ],
    "capabilities": [
      "governance",
      "decisions",
      "experience"
    ],
    "stack": "Python · Streamlit · Massive REST API · CrewAI · pandas · pytest",
    "brief": [
      [
        "Pain point",
        "An attractive investment narrative can conceal the screening criteria and the reasons to reject it."
      ],
      [
        "Architecture decision",
        "Calculate historical metrics in Python and expose configurable screening hurdles. Keep CrewAI interpretation separate from the deterministic screen."
      ],
      [
        "Trade-off",
        "A small selected equity/ETF universe and visible rules support inspection; they do not provide comprehensive investment discovery or suitability assessment."
      ],
      [
        "Failure / risk",
        "The model invents a metric, misranks securities, changes an evidence identifier, or treats price return as total return."
      ],
      [
        "Control",
        "Retain provenance and evidence hashes, resolve short references through an exact map, and independently validate structured values and rankings. Failed drafts remain withheld; narrative meaning requires human review."
      ],
      [
        "Evidence",
        "43 automated tests cover market validation, screening, review checks, and UI behavior with model kickoff mocked. User-recorded screenshots separately show Massive data, screening outcomes, and CrewAI review."
      ],
      [
        "Business consequence",
        "Makes a research shortlist and its rejection reasons explainable."
      ]
    ],
    "limit": "Historical daily prices; price returns exclude dividends. Energy equities and ETFs are proxies, not ERCOT power or Henry Hub spot feeds. Structured checks do not establish narrative correctness or investment suitability. No broker or real-money execution. REVIEW is a research status, not a buy recommendation."
  },
  {
    "id": "paper-trading-floor",
    "name": "Paper Trading Floor",
    "sector": "Energy & Capital Markets",
    "category": "Streamlit governed paper ledger",
    "status": "Persistent local paper simulation",
    "summary": "Separate AI research from local human confirmation, independent account checks, and persistent simulated fills.",
    "proof": "57 tests; screenshots show simulated cash and positions retained across restarts.",
    "scope": "SQLite paper ledger · historical-price fills",
    "repo": "https://github.com/TAM-DS/paper-trading-floor",
    "evidence": "https://github.com/TAM-DS/paper-trading-floor#application-screenshots",
    "evidenceLabel": "View application screenshots",
    "problems": [
      "authority",
      "operations"
    ],
    "capabilities": [
      "governance",
      "decisions",
      "experience"
    ],
    "stack": "Python · Streamlit · Massive REST API · CrewAI · SQLite · legacy stdio MCP fixtures",
    "brief": [
      [
        "Pain point",
        "Research must not quietly become execution authority, and repeated submissions must not duplicate a simulated fill."
      ],
      [
        "Architecture decision",
        "Keep CrewAI agents without order tools. Bind a paper ticket to its terms and require explicit local confirmation before the SQLite book records a fill."
      ],
      [
        "Trade-off",
        "Historical closing prices and a local ledger make simulation inspectable; they are not executable venue quotes or authenticated enterprise approval."
      ],
      [
        "Failure / risk",
        "Ticket terms change, account limits are bypassed, a duplicate is submitted, or a restart loses the book."
      ],
      [
        "Control",
        "Independently check the ticket digest, evidence, symbol, quantity, cash, positions, and limits. A unique ticket ID and SQLite transaction reject duplicate fills."
      ],
      [
        "Evidence",
        "57 automated tests cover market, research, dashboard, book, and retained legacy behavior with model kickoff mocked. User-recorded screenshots separately show Massive data and the persistent simulated ledger."
      ],
      [
        "Business consequence",
        "Makes authorization and account consequences visible while keeping research separated from real trading venues."
      ]
    ],
    "limit": "Historical daily prices; price returns exclude dividends. Energy equities and ETFs are proxies, not ERCOT power or Henry Hub spot feeds. Structured checks do not establish narrative correctness or investment suitability. No broker or real-money execution. Reviewer labels are not authenticated identity. The local ledger is not immutable enterprise audit storage. Separate stdio MCP examples remain synthetic legacy fixtures."
  },
  {
    "id": "ballast",
    "name": "BALLAST",
    "sector": "Supply Chain",
    "category": "Governed operations decisions",
    "status": "Synthetic prototype",
    "summary": "Compare energy and semiconductor supply-chain risks while keeping operational decisions with people.",
    "proof": "Unapproved disruptive actions are denied by the policy gate.",
    "scope": "Synthetic lanes and simulated actions",
    "repo": "https://github.com/TAM-DS/ballast",
    "evidence": "https://github.com/TAM-DS/ballast#the-decision-boundary",
    "evidenceLabel": "Inspect the decision boundary",
    "problems": [
      "operations",
      "authority"
    ],
    "capabilities": [
      "decisions",
      "governance",
      "experience"
    ],
    "stack": "Python · Gradio · SQLite · deterministic risk scoring · pytest",
    "brief": [
      [
        "Pain point",
        "A supply-chain risk score can be mistaken for permission to change bookings, sourcing, or contracts."
      ],
      [
        "Architecture decision",
        "Separate explainable risk scoring, what-if scenarios, mitigation proposals, explicit approval, and simulated execution."
      ],
      [
        "Trade-off",
        "Deterministic scoring exposes risk drivers clearly; it does not claim trained predictive accuracy."
      ],
      [
        "Failure / risk",
        "A hypothetical disruption is treated as observed reality, or an unapproved reroute becomes an operational change."
      ],
      [
        "Control",
        "Label scenarios and results as synthetic or simulated. Require approval for disruptive actions and preserve local audit events."
      ],
      [
        "Evidence",
        "Repository scenarios demonstrate denied unapproved reroutes and dual-source actions; approved actions return explicitly simulated queueing results."
      ],
      [
        "Business consequence",
        "Gives operations leaders a way to compare responses while keeping operational commitments under human control."
      ]
    ],
    "limit": "No production bookings or contracts change. Approval is a demo Boolean, not identity-verified authorization; tenant-scoped retrieval is not production tenant-security isolation."
  },
  {
    "id": "aegis-evidence",
    "name": "AEGIS Evidence",
    "sector": "Cybersecurity Assurance",
    "category": "Inspectable AI assurance",
    "status": "Replayable workpaper",
    "summary": "Governance claims become evidence you can inspect, challenge, and replay.",
    "proof": "Deterministic evidence ZIP with an independent SHA-256 checksum.",
    "scope": "Indicative assurance demonstration",
    "repo": "https://github.com/TAM-DS/aegis-evidence",
    "evidence": "https://github.com/TAM-DS/aegis-evidence#what-you-get",
    "evidenceLabel": "Inspect the evidence pack",
    "problems": [
      "auditability"
    ],
    "capabilities": [
      "governance",
      "decisions"
    ],
    "stack": "Python · Streamlit · YAML control catalog · pytest",
    "brief": [
      [
        "Pain point",
        "A governance declaration can sound complete while important control gaps remain unresolved."
      ],
      [
        "Architecture decision",
        "Separate deterministic classification, control statuses, challenge findings, human acceptance, and the complete frozen evidence archive."
      ],
      [
        "Trade-off",
        "A bounded catalog makes one simulated SOC workflow inspectable; mappings remain indicative diligence aids."
      ],
      [
        "Failure / risk",
        "Human acceptance falsely closes a partial control, or a stable decision digest is mistaken for the checksum of the full archive."
      ],
      [
        "Control",
        "Only eligible declarations can be accepted. Partial and missing controls remain open. Hash the full ZIP separately from the decision state."
      ],
      [
        "Evidence",
        "The default fixture retains classification and deployer-monitoring gaps. Identical inputs and acceptance state produce byte-identical ZIPs."
      ],
      [
        "Business consequence",
        "Supports a defensible review conversation by preserving both accepted evidence and unresolved risk."
      ]
    ],
    "limit": "A demonstration workpaper, not an audit certification or a determination of legal compliance. Declared capabilities are not independently verified enterprise controls."
  },
  {
    "id": "guardrails-mcp",
    "name": "GuardRails-MCP",
    "sector": "Published MCP tooling",
    "category": "Published MCP tooling",
    "status": "Published local prototype",
    "summary": "Compare prompt changes against labeled cases and retain release-review evidence.",
    "proof": "PyPI v0.1.1 and an official MCP Registry record linked from the repository.",
    "scope": "Published local prototype",
    "repo": "https://github.com/TAM-DS/guardrails-mcp",
    "evidence": "https://github.com/TAM-DS/guardrails-mcp#readme",
    "evidenceLabel": "Inspect the evidence",
    "problems": [
      "auditability",
      "delivery"
    ],
    "capabilities": [
      "governance",
      "reliability"
    ],
    "stack": "Python · MCP · OpenAI · prompt regression evaluation",
    "brief": [
      [
        "Pain point",
        "Prompt changes can ship without reproducible regression evidence."
      ],
      [
        "Control",
        "Bounded runs, prompt and suite hashes, deterministic checks and separate provider-error reporting."
      ],
      [
        "Business consequence",
        "Give a human reviewer evidence for a release decision."
      ]
    ],
    "limit": "Six fictional cases; local records are editable. Registry listing is not security certification. No deployment authority or automated email."
  }
];
