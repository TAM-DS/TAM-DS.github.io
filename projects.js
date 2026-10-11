window.PROJECTS = [
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
    "repo": "https://github.com/TAM-DS/investment-gems",
    "evidence": "https://github.com/TAM-DS/investment-gems#application-screenshots",
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
  }
];
