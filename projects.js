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
    "evidence": "https://github.com/TAM-DS/monster-heavy#what-happens-when-things-fail",
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
    "name": "Research Desk",
    "sector": "Capital Markets & Energy",
    "category": "Fixture dashboard",
    "status": "Deterministic research fixture",
    "summary": "A research memo must retain provenance without becoming an order.",
    "proof": "6 behavior tests passed; dashboard is a static fixture view.",
    "scope": "Synthetic filings and energy fixtures",
    "repo": "https://github.com/TAM-DS/capital-markets-research-desk",
    "evidence": "https://github.com/TAM-DS/capital-markets-research-desk/blob/main/docs/index.html",
    "evidenceLabel": "Inspect dashboard file",
    "problems": [
      "authority",
      "auditability"
    ],
    "capabilities": [
      "governance",
      "decisions",
      "experience"
    ],
    "stack": "Python · local functions · synthetic corpus",
    "brief": [
      [
        "Pain point",
        "A research memo must retain provenance without becoming an order."
      ],
      [
        "Architecture decision",
        "Separate equities and energy claim drafting from a deterministic citation clerk and memo coordinator."
      ],
      [
        "Trade-off",
        "Small deterministic fixtures make decisions easy to inspect, while leaving live integrations and production operation outside scope."
      ],
      [
        "Failure / risk",
        "Deterministic Python roles; no model-provider call, live filings, or market feed. Energy claims require units; word removal is not a general authorization control."
      ],
      [
        "Control",
        "Bind claims to the fixture source text and date; reject unknown or untrusted sources, stale claims, missing units, or unit mismatches. Remove specified order words from the memo."
      ],
      [
        "Evidence",
        "6 tests exercise fixture provenance, trust, freshness, and unit checks. The linked HTML is a static view, not a live feed."
      ],
      [
        "Business consequence",
        "Makes the decision and its stopping point visible for an architecture review."
      ]
    ],
    "limit": "Deterministic Python roles; no model-provider call, live filings, or market feed. Energy claims require units; word removal is not a general authorization control."
  },
  {
    "id": "investment-gems",
    "name": "Investment Gems",
    "sector": "Equities & Energy Exposure",
    "category": "Fixture dashboard",
    "status": "Synthetic suggestion screen",
    "summary": "A plausible investment story needs a visible hurdle and a reason to drop it.",
    "proof": "4 behavior tests passed in this review; dashboard is a static fixture view.",
    "scope": "Six-name synthetic universe",
    "repo": "https://github.com/TAM-DS/investment-gems",
    "evidence": "https://github.com/TAM-DS/investment-gems/blob/main/docs/index.html",
    "evidenceLabel": "Inspect dashboard file",
    "problems": [
      "operations",
      "auditability"
    ],
    "capabilities": [
      "governance",
      "decisions",
      "experience"
    ],
    "stack": "Python · local scoring · optional CrewAI agent construction",
    "brief": [
      [
        "Pain point",
        "A plausible investment story needs a visible hurdle and a reason to drop it."
      ],
      [
        "Architecture decision",
        "Rank six fixture names with quality minus stretch; reject stale entries and scores below the local hurdle."
      ],
      [
        "Trade-off",
        "Small deterministic fixtures make decisions easy to inspect, while leaving live integrations and production operation outside scope."
      ],
      [
        "Failure / risk",
        "Local deterministic screen, not live investment discovery or a forecasting model. The optional CrewAI helper constructs three agents; it does not orchestrate or verify a live crew run."
      ],
      [
        "Control",
        "Attach invalidation text to suggestions. Keep the result suggestion-only with no order integration."
      ],
      [
        "Evidence",
        "4 behavior tests passed in this review exercise the repository fixtures. The linked HTML is a static view, not a running backend or live feed."
      ],
      [
        "Business consequence",
        "Makes the decision and its stopping point visible for an architecture review."
      ]
    ],
    "limit": "Local deterministic screen, not live investment discovery or a forecasting model. The optional CrewAI helper constructs three agents; it does not orchestrate or verify a live crew run."
  },
  {
    "id": "paper-trading-floor",
    "name": "Paper Trading Floor",
    "sector": "Energy & Capital Markets",
    "category": "Fixture dashboard",
    "status": "Verified stdio MCP fixture",
    "summary": "Three MCP servers expose fixture quotes, risk checks, and paper fills while withholding venue tools.",
    "proof": "15 tests passed, including protocol calls to three MCP servers.",
    "scope": "Synthetic quotes and in-memory fills",
    "repo": "https://github.com/TAM-DS/paper-trading-floor",
    "evidence": "https://github.com/TAM-DS/paper-trading-floor/blob/main/docs/index.html",
    "evidenceLabel": "Inspect dashboard file",
    "problems": [
      "authority",
      "operations"
    ],
    "capabilities": [
      "governance",
      "decisions",
      "experience"
    ],
    "stack": "Python · MCP SDK 1.30.0 · stdio · synthetic fixtures · in-memory paper book",
    "brief": [
      [
        "Pain point",
        "Separate a research intent, a risk decision, and a paper fill from any venue action."
      ],
      [
        "Architecture decision",
        "Run separate market-fixture, risk, and paper OMS MCP servers over stdio. A deterministic MCP client discovers and calls the exposed tools across three processes."
      ],
      [
        "Trade-off",
        "Small deterministic fixtures make decisions easy to inspect, while leaving live integrations and production operation outside scope."
      ],
      [
        "Failure / risk",
        "Actual stdio MCP servers over synthetic fixtures, not live market feeds. No broker or real-money path. The OMS independently rechecks fixture risk and symbol/book pairing. Human approval, authenticated identity, durable replay protection, and live model orchestration remain outside scope."
      ],
      [
        "Control",
        "Deny the venue-order tool; independently recheck risk at the OMS; reject forged risk flags, invalid notionals, stale fixture quotes, and mismatched symbol/book pairs; record venue as null."
      ],
      [
        "Evidence",
        "15 tests passed, including real MCP initialization, schemas, tool discovery, fixture calls, paper submission, and venue-tool rejection. Captured protocol output is linked from the repository README."
      ],
      [
        "Business consequence",
        "Makes the decision and its stopping point visible for an architecture review."
      ]
    ],
    "limit": "Actual stdio MCP servers over synthetic fixtures, not live market feeds. No broker or real-money path. The OMS independently rechecks fixture risk and symbol/book pairing. Human approval, authenticated identity, durable replay protection, and live model orchestration remain outside scope."
  },
  {
    "id": "monster-desk",
    "name": "Monster Desk",
    "sector": "Trading Operations",
    "category": "Visible separation of duties",
    "status": "Paper-only console",
    "summary": "Research can propose a trade. It cannot send one.",
    "proof": "Rejects unbound, altered, duplicate, and halted submissions.",
    "scope": "Human-operated Streamlit demonstration",
    "repo": "https://github.com/TAM-DS/monster-desk",
    "evidence": "https://github.com/TAM-DS/monster-desk#validation-and-scope",
    "evidenceLabel": "Review behavior tests",
    "problems": [
      "authority",
      "operations"
    ],
    "capabilities": [
      "governance",
      "experience",
      "decisions"
    ],
    "stack": "Python · Streamlit · SHA-256 ticket binding · pytest",
    "brief": [
      [
        "Pain point",
        "An operator interface can blur the difference between research, approval, and execution."
      ],
      [
        "Architecture decision",
        "Give Research, Risk, Execution, and Surveillance distinct workflow roles; bind Risk approval to the exact ticket digest."
      ],
      [
        "Trade-off",
        "A small local console makes the authority boundary visible; its roles and history are session-scoped."
      ],
      [
        "Failure / risk",
        "An execution operator changes approved terms, resubmits a filled ticket, or acts after a halt."
      ],
      [
        "Control",
        "Require the bound digest, refuse term mutation and repeat fills, and stop subsequent desk operations after Surveillance halts."
      ],
      [
        "Evidence",
        "Focused behavior tests cover unbound and mutated tickets, digest mismatch, duplicates, price drift, and halted operations."
      ],
      [
        "Business consequence",
        "Makes separation of duties inspectable to stakeholders before connecting a consequential workflow to external execution."
      ]
    ],
    "limit": "Simulated fills only; no broker or live market feed. Roles are not authenticated accounts. Desk illustrates Heavy’s philosophy and does not call its durable runtime."
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
  }
];
