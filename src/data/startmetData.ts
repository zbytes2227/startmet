import { ServiceCategory, JourneyStage, TalkEpisode, ResourceGuide, VentureProgram } from '../types';

export const STARTMET_PHONE = "+91 8100600036";
export const STARTMET_PHONE_CLEAN = "918100600036";
export const STARTMET_EMAIL = "connect@startmet.com";
export const STARTMET_LOCATION = "Kolkata, West Bengal, India";
export const STARTMET_URL = "https://startmet.com";

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'build',
    title: 'BUILD',
    tagline: 'From technical architecture to functional software.',
    description: 'Transform raw hypotheses into verified products. We design systems that stand up to real user traffic and real operational stress.',
    color: '#00DF59',
    services: [
      {
        id: 'idea-development',
        name: 'Idea Development',
        category: 'build',
        shortDesc: 'Stress-testing problem definitions, customer archetypes, and commercial feasibility before writing code.',
        detailedDesc: 'Too many founders spend months building features nobody requested. We break your raw idea into testable unit mechanics, map the market landscape, assess technical feasibility, and define a clear value proposition.',
        deliverables: [
          'Problem-solution mapping document',
          'Competitor landscape matrix',
          'Target persona & user journey blueprints',
          'Initial technical feasibility assessment'
        ],
        timeline: '2 – 3 Weeks',
        whoNeedsThis: 'Founders with a strong domain insight who need to structure their idea into an executable business architecture.'
      },
      {
        id: 'idea-validation',
        name: 'Idea Validation',
        category: 'build',
        shortDesc: 'Customer interviews, demand testing, and real willingness-to-pay experiments.',
        detailedDesc: 'Validation is not asking friends if they like your idea. We design smoke tests, landing page experiments, concierge tests, and qualitative user discovery sessions to verify actual market appetite before capital is committed.',
        deliverables: [
          'Quantitative demand validation report',
          'Customer discovery interview synthesis',
          'Pricing elasticity & willingness-to-pay findings',
          'Go / No-Go feature prioritization rubric'
        ],
        timeline: '2 – 4 Weeks',
        whoNeedsThis: 'Founders wanting definitive empirical evidence that target buyers will pay or switch from existing alternatives.'
      },
      {
        id: 'mvp-development',
        name: 'MVP / Product Development',
        category: 'build',
        shortDesc: 'Fast, secure, production-grade minimum viable products focused strictly on core value delivery.',
        detailedDesc: 'An MVP is not a half-broken prototype. It is the leanest functional product that delivers undeniable utility. We architect full-stack mobile and web applications with clean databases, rock-solid APIs, and intuitive UI.',
        deliverables: [
          'Production-ready web or mobile application',
          'Scalable backend & database architecture',
          'User authentication & payment gateway integration',
          'Comprehensive technical documentation & code ownership transfer'
        ],
        timeline: '6 – 10 Weeks',
        whoNeedsThis: 'Founders ready to ship their first working product to early adopters without months of engineering delays.'
      },
      {
        id: 'technical-support',
        name: 'Technical Support & Architecture',
        category: 'build',
        shortDesc: 'Ongoing system reliability, infrastructure scaling, code audits, and tech advisory.',
        detailedDesc: 'As real users onboard, bottlenecks surface in database queries, API limits, and cloud bills. We provide fractional CTO advisory, code audits, DevOps automation, CI/CD pipelines, and infrastructure optimization.',
        deliverables: [
          'Cloud infrastructure audit & cost optimization',
          'CI/CD deployment pipelines',
          'Security posture & vulnerability scan',
          'Fractional technical lead advisory sessions'
        ],
        timeline: 'Ongoing / Sprint-based',
        whoNeedsThis: 'Non-technical founders or early engineering teams looking for architectural guidance and operational stability.'
      }
    ]
  },
  {
    id: 'establish',
    title: 'ESTABLISH',
    tagline: 'Legal structure, corporate governance, and cohesive brand presence.',
    description: 'Foundations that protect the founders and satisfy diligence requirements from institutional investors.',
    color: '#6e24fc',
    services: [
      {
        id: 'company-formation',
        name: 'Company Formation',
        category: 'establish',
        shortDesc: 'Private Limited incorporation, MCA registrations, founder agreements, and share allotment.',
        detailedDesc: 'Setting up an Indian corporate entity requires proper planning around authorized capital, shareholder equity division, and Director Identification Numbers (DIN). We guide you through seamless incorporation on the MCA portal.',
        deliverables: [
          'Private Limited / LLP certificate of incorporation',
          'PAN, TAN, and official MCA compliance filings',
          'Articles of Association (AoA) & Memorandum (MoA)',
          'Founders agreement & equity vesting schedules'
        ],
        timeline: '10 – 15 Business Days',
        whoNeedsThis: 'Founders starting formal operations, signing customer agreements, or getting ready to receive third-party funds.'
      },
      {
        id: 'legal-compliance',
        name: 'Legal & Compliance Support',
        category: 'establish',
        shortDesc: 'DPIIT startup recognition, GST, trademark filings, terms of service, and vendor contracts.',
        detailedDesc: 'Regulatory oversights can cripple a young company later during due diligence. We facilitate DPIIT recognition (for income tax and angel tax exemptions), trademark filing, vendor NDAs, and customer privacy terms.',
        deliverables: [
          'DPIIT Startup India certificate application',
          'Trademark (TM) filing & trademark class classification',
          'Standard SaaS / E-commerce customer terms & privacy policy',
          'Master services agreement & employment / contractor templates'
        ],
        timeline: '2 – 3 Weeks',
        whoNeedsThis: 'Startups handling customer payments, proprietary IP, sensitive user data, or formal employee hiring.'
      },
      {
        id: 'brand-creation',
        name: 'Brand Creation',
        category: 'establish',
        shortDesc: 'Strategic positioning, distinctive visual identities, design systems, and brand voice guidelines.',
        detailedDesc: 'Brand is not just a logo; it is the confidence your customer feels when they land on your touchpoint. We craft coherent visual identities, typographic systems, messaging hierarchies, and asset libraries tailored to your sector.',
        deliverables: [
          'Full visual identity guidelines (colors, typography, spacing)',
          'Vector logo suite with responsive variations',
          'Product UI component guidelines & styling tokens',
          'Brand narrative & editorial tone-of-voice guide'
        ],
        timeline: '3 – 4 Weeks',
        whoNeedsThis: 'New companies seeking a high-trust, memorable market presence that stands apart from noisy competitors.'
      }
    ]
  },
  {
    id: 'grow',
    title: 'GROW',
    tagline: 'Distribution engine, unit economics, and capital readiness.',
    description: 'Building repeatable user acquisition channels, refining operational margins, and preparing founders to pitch with clarity.',
    color: '#00DF59',
    services: [
      {
        id: 'marketing-promotion',
        name: 'Marketing & Promotion',
        category: 'grow',
        shortDesc: 'Product-led distribution, content engines, tactical acquisition channels, and launch campaigns.',
        detailedDesc: 'Instead of burning budgets on untargeted paid ads, we focus on distribution flywheels: search intent capture, community launch strategies, product directories, and founder-led content on LinkedIn and specialized forums.',
        deliverables: [
          'Multi-channel GTM launch playbook',
          'Search & intent capture architecture (SEO)',
          'Product Hunt / launch platform assets & rollout schedule',
          'Initial paid acquisition channel testing framework'
        ],
        timeline: '4 – 8 Weeks',
        whoNeedsThis: 'Teams with a functional product struggling to generate their first 100 to 1,000 active users.'
      },
      {
        id: 'growth-strategy',
        name: 'Startup Growth Strategy',
        category: 'grow',
        shortDesc: 'Funnel economics, retention loops, activation bottlenecks, and pricing experiments.',
        detailedDesc: 'Acquisition without retention is a leaky bucket. We analyze user journeys, instrument tracking metrics, diagnose churn points, and structure pricing tiers that reflect the value delivered.',
        deliverables: [
          'Core funnel metric instrumentation & tracking',
          'Activation & onboarding friction diagnosis',
          'Cohort retention analysis & recommendations',
          'Pricing tier restructuring roadmap'
        ],
        timeline: '4 – 6 Weeks',
        whoNeedsThis: 'Post-launch startups experiencing traffic drop-off, low conversion, or high customer churn.'
      },
      {
        id: 'funding-support',
        name: 'Funding Support & Investor Readiness',
        category: 'grow',
        shortDesc: 'Narrative structuring, financial models, data room preparation, and pitch deck refinement.',
        detailedDesc: 'Investors review hundreds of decks a week. We help founders translate complex technical achievements into sharp, defensible business narratives with clear unit economics, total addressable market (TAM), and capital deployment plans.',
        deliverables: [
          'Institutional-ready 12-slide pitch deck',
          '3-year financial model with clear unit economics & assumptions',
          'Cap table scenario modeling (dilution & SAFEs/CCPS)',
          'Curated investor data room checklist'
        ],
        timeline: '3 – 5 Weeks',
        whoNeedsThis: 'Founders gearing up for angel, pre-seed, or seed rounds seeking rigorous preparation before meeting funds.'
      },
      {
        id: 'investor-connections',
        name: 'Investor Connections',
        category: 'grow',
        shortDesc: 'Targeted introductions to angel investors, micro-VCs, and syndicates aligned with your sector.',
        detailedDesc: 'We connect investment-ready startups directly with investors whose thesis matches the founder’s sector, geography, and ticket size. We never blast blind lists; every introduction is grounded in mutual context.',
        deliverables: [
          'Sector-specific target investor list & syndicate mapping',
          'Curated warm intro packaging & forwardable blurb',
          'Pitch practice & mock partner Q&A simulations',
          'Term sheet review advisory & negotiation context'
        ],
        timeline: 'Ongoing upon readiness qualification',
        whoNeedsThis: 'Founders with validated metrics and an audited data room seeking strategic, value-add capital.'
      }
    ]
  }
];

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    step: '01',
    title: 'IDEA',
    label: 'Hypothesis Formulation',
    tagline: 'Deconstructing the hunch into an addressable commercial thesis.',
    whatHappens: 'You have identified a market inefficiency, friction, or unmet customer demand. At this stage, excitement is high, but assumptions remain unverified.',
    whatStartmetHelpsWith: [
      'Dissecting problem statements to identify root causes rather than symptoms',
      'Mapping current manual workarounds and incumbent solutions',
      'Assessing technological feasibility and business model unit economics'
    ],
    founderOutcome: 'A structured concept brief with prioritized assumptions that need testing.',
    typicalDuration: '1 – 2 Weeks'
  },
  {
    step: '02',
    title: 'VALIDATE',
    label: 'Market Verification',
    tagline: 'Engaging real target users before burning engineering budget.',
    whatHappens: 'Testing whether the problem is painful enough that customers will actively seek, adopt, and pay for a solution.',
    whatStartmetHelpsWith: [
      'Structuring objective customer discovery interviews without leading questions',
      'Building lean smoke tests, landing tests, and mock workflows',
      'Analyzing pricing sensitivity and purchasing authority across segments'
    ],
    founderOutcome: 'Empirical data proving or disproving market demand before committing significant capital.',
    typicalDuration: '2 – 3 Weeks'
  },
  {
    step: '03',
    title: 'BUILD',
    label: 'MVP Engineering',
    tagline: 'Delivering the tightest possible functional software to early adopters.',
    whatHappens: 'Translating validated requirements into clean code, dependable backend architecture, and seamless user experiences.',
    whatStartmetHelpsWith: [
      'Ruthless feature triage: separating must-haves from post-launch distractions',
      'Modern, scalable tech stack implementation (React, Node, PostgreSQL, Cloud APIs)',
      'Rigorous testing, security sanitization, and automated deployments'
    ],
    founderOutcome: 'A production-grade web or mobile MVP in the hands of early users.',
    typicalDuration: '6 – 8 Weeks'
  },
  {
    step: '04',
    title: 'BRAND',
    label: 'Positioning & Identity',
    tagline: 'Creating a high-trust, memorable brand that commands authority.',
    whatHappens: 'Moving from a functional tool to a distinct company that customers remember, trust, and recommend.',
    whatStartmetHelpsWith: [
      'Formulating unique value proposition and crisp category positioning',
      'Designing visual identity systems (typography, palette, iconography, guidelines)',
      'Writing website copy that speaks directly to decision-makers without fluff'
    ],
    founderOutcome: 'A cohesive, professional brand identity ready for market debut.',
    typicalDuration: '2 – 3 Weeks'
  },
  {
    step: '05',
    title: 'LAUNCH',
    label: 'Go-To-Market Execution',
    tagline: 'Orchestrating public debut and acquiring the first 100 active users.',
    whatHappens: 'Unveiling the product to the target ecosystem, onboarding initial cohorts, and gathering real-time telemetry.',
    whatStartmetHelpsWith: [
      'Designing launch day playbooks (communities, platforms, industry press)',
      'Setting up user behavior analytics (mixpanel, posthog, search console)',
      'Structuring customer feedback loops and rapid bug resolution channels'
    ],
    founderOutcome: 'A live operational product with active users and measurable feedback metrics.',
    typicalDuration: '2 – 4 Weeks'
  },
  {
    step: '06',
    title: 'FUND',
    label: 'Investor Readiness',
    tagline: 'Structuring financial models and narratives that stand up to institutional diligence.',
    whatHappens: 'When the business requires growth capital to expand engineering, distribution, or working capital.',
    whatStartmetHelpsWith: [
      'Structuring the pitch narrative: TAM, defensibility, unit economics, traction',
      'Building dynamic financial models showing runway, hiring plans, and CAC:LTV',
      'Targeted matching with angel investors and syndicates with relevant sector interest'
    ],
    founderOutcome: 'An audited investor data room, compelling deck, and warm introduction readiness.',
    typicalDuration: '3 – 6 Weeks'
  },
  {
    step: '07',
    title: 'GROW',
    label: 'Systematic Scaling',
    tagline: 'Optimizing retention, expanding distribution, and scaling operations.',
    whatHappens: 'Transitioning from founder-led survival to repeatable operational rhythms and sustained growth.',
    whatStartmetHelpsWith: [
      'Diagnosing churn and optimizing user onboarding flows',
      'Structuring referral loops, content flywheels, and strategic distribution partnerships',
      'Long-term technical architecture planning and governance compliance'
    ],
    founderOutcome: 'Predictable growth metrics, improved gross margins, and organizational resilience.',
    typicalDuration: 'Continuous'
  }
];

export const TALKS_EPISODES: TalkEpisode[] = [
  {
    id: 'talk-01',
    number: 'EP. 01',
    title: 'The Silent Killers of Early-Stage Indian Startups',
    topicCategory: 'Founder Failures',
    duration: '42 min',
    summary: 'A deep retrospective on why promising Indian early-stage ventures run out of runway before finding product-market fit. We examine premature scaling, ignoring compliance until it breaks, and misreading vanity engagement.',
    keyTakeaways: [
      'Why burning capital on paid acquisition before day-30 retention stabilizes is fatal',
      'The true cost of delayed trademark and founder equity vesting agreements',
      'How to recognize "polite customer enthusiasm" vs. true intent to purchase'
    ],
    date: 'August 2026',
    featuredQuote: '“Most startups don’t die from competition; they die from building things people say they like, but nobody pays for.”',
    speakerRole: 'Venture Studio Panel & Guest Founders'
  },
  {
    id: 'talk-02',
    number: 'EP. 02',
    title: 'Scoping an MVP You Can Actually Ship in 60 Days',
    topicCategory: 'Product & MVP',
    duration: '38 min',
    summary: 'Technical founders often over-engineer for 100,000 concurrent users before their first 10 register. We break down the exact framework to trim 80% of feature bloat and focus on the singular transaction that validates the business.',
    keyTakeaways: [
      'The single-core action framework: identifying the one metric that matters',
      'Choosing unglamorous, dependable tech stacks over fragile new trends',
      'How to deliver concierge MVPs to validate operations without complex automated backends'
    ],
    date: 'July 2026',
    featuredQuote: '“Your first version should solve exactly one painful problem extraordinarily well.”',
    speakerRole: 'Engineering Leads & Product Architects'
  },
  {
    id: 'talk-03',
    number: 'EP. 03',
    title: 'Selling in Bharat: GTM Realities Outside Tier-1 Tech Bubbles',
    topicCategory: 'India Market GTM',
    duration: '47 min',
    summary: 'Building for MSMEs, regional trade, and emerging Indian consumers demands a fundamentally different distribution and support model. An honest look at WhatsApp workflows, trust deficits, and local collection realities.',
    keyTakeaways: [
      'Why self-serve SaaS often fails in India without assisted onboarding support',
      'UPI payment collection patterns, cash-flow friction, and credit dynamics',
      'Building trust through vernacular touchpoints and direct human contact'
    ],
    date: 'June 2026',
    featuredQuote: '“In the Indian market, high-touch onboarding is often the fastest path to high-retention software.”',
    speakerRole: 'Founders & Regional Distribution Strategists'
  },
  {
    id: 'talk-04',
    number: 'EP. 04',
    title: 'What Seed Investors Actually Look for in 2026',
    topicCategory: 'Fundraising Realities',
    duration: '35 min',
    summary: 'Moving beyond buzzwords and vanity metrics. How angel networks, micro-VCs, and family offices evaluate unit economics, founder resilience, gross margins, and regulatory clarity.',
    keyTakeaways: [
      'The difference between a story-driven deck and an execution-audited data room',
      'Why clear unit economics (CAC, payback period, gross margin) outrank vague TAM numbers',
      'How clean corporate structuring and DPIIT recognition speed up due diligence'
    ],
    date: 'May 2026',
    featuredQuote: '“Investors back founders who understand their own numbers better than anyone in the room.”',
    speakerRole: 'Early-stage Investors & Financial Advisors'
  }
];

export const RESOURCE_GUIDES: ResourceGuide[] = [
  {
    id: 'res-01',
    title: 'Indian Company Incorporation & MCA Compliance Checklist',
    category: 'Compliance',
    readTime: '12 min read',
    description: 'A comprehensive step-by-step breakdown of SPICe+ MCA filing, DIN acquisition, MoA/AoA structuring, founder share vesting clauses, and statutory compliance timeline.',
    keyTopics: [
      'SPICe+ Part A & Part B submission process',
      'Authorized vs. Paid-up share capital considerations',
      'Founder vesting and reverse-vesting legal agreements',
      'First-year compliance calendar (Auditor appointment, AGM, DIN KYC)'
    ],
    downloadName: 'startmet-india-incorporation-guide.pdf',
    updatedAt: 'Q3 2026'
  },
  {
    id: 'res-02',
    title: 'The 60-Day MVP Scoping & Feature Triage Matrix',
    category: 'Product',
    readTime: '8 min read',
    description: 'Practical framework to ruthlessly eliminate secondary feature creep and prioritize the single core loop required to prove customer willingness to adopt.',
    keyTopics: [
      'MoSCoW analysis adjusted for early-stage capital constraints',
      'Tech stack selection: tradeoffs between speed, cost, and maintainability',
      'Concierge testing vs. automated software buildout',
      'Pre-launch telemetry instrumentation checklist'
    ],
    downloadName: 'startmet-mvp-scoping-matrix.pdf',
    updatedAt: 'Q3 2026'
  },
  {
    id: 'res-03',
    title: '12-Slide Pitch Deck Architecture for Indian Seed Rounds',
    category: 'Funding',
    readTime: '10 min read',
    description: 'Deconstructing what angel investors and micro-VCs look for on every single slide. Eliminating fluffy buzzwords in favor of empirical clarity.',
    keyTopics: [
      'Slide-by-slide content guidelines and common founder traps',
      'Calculating defensible SAM and SOM for the Indian landscape',
      'Unit economics breakdown: Gross margin, Payback period, and Contribution margin',
      'Data room setup checklist before sending cold investor blurbs'
    ],
    downloadName: 'startmet-pitch-deck-framework.pdf',
    updatedAt: 'Q3 2026'
  },
  {
    id: 'res-04',
    title: 'DPIIT Recognition & Tax Exemption Master Guide',
    category: 'Guides',
    readTime: '7 min read',
    description: 'How to register on the Startup India portal, qualify for Section 80-IAC tax holiday, navigate Angel Tax relief, and utilize fast-track patent/trademark filing benefits.',
    keyTopics: [
      'DPIIT eligibility criteria and innovation narrative crafting',
      'Section 80-IAC application requirements and common rejection causes',
      'Government procurement benefits (GeM portal exemption)',
      'Subsidized IPR filing for Indian registered startups'
    ],
    downloadName: 'startmet-dpiit-benefits-playbook.pdf',
    updatedAt: 'Q2 2026'
  }
];

export const VENTURE_PROGRAMS: VentureProgram[] = [
  {
    id: 'prog-01',
    name: '0-to-1 Venture Incubation',
    badge: 'Foundational',
    duration: '12 Weeks',
    stage: 'Idea to First Working Product',
    summary: 'An intensive, hands-on journey taking early founders from an unverified concept to a validated problem, incorporated entity, and functional first product release.',
    focus: [
      'Problem validation & customer discovery interviews',
      'Full technical architecture & MVP development',
      'Company incorporation (Pvt Ltd) & DPIIT recognition',
      'Brand creation & launch positioning'
    ],
    deliverables: [
      'Incorporated legal entity with clean founder agreements',
      'Live, deployed MVP with analytics and authentication',
      'Complete brand identity package and landing page',
      'First 50 verified user onboardings'
    ],
    idealFor: 'Solo founders, technical pairs, or industry operators launching their first venture in India.'
  },
  {
    id: 'prog-02',
    name: 'MVP Fast-Track Sprint',
    badge: 'Technical Acceleration',
    duration: '60 Days',
    stage: 'Validated Idea to Live Product',
    summary: 'Designed specifically for founders who have verified demand and need high-caliber software engineering without wasting months hiring agency freelancers.',
    focus: [
      'Feature pruning & database schema design',
      'Full-stack web or mobile app development',
      'Payment gateway, SMS/WhatsApp API, & KYC integrations',
      'Code audit, security tests, and hosting setup'
    ],
    deliverables: [
      'Fully functional, production-deployed web or mobile application',
      'Complete intellectual property & code ownership handover',
      'Technical architecture documentation & deployment runbooks',
      '30 days post-launch bug support and stability monitoring'
    ],
    idealFor: 'Domain experts and business founders with validated concepts who need an execution partner for software.'
  },
  {
    id: 'prog-03',
    name: 'Investor Readiness & Capital Sprint',
    badge: 'Funding Advisory',
    duration: '4 – 6 Weeks',
    stage: 'Early Traction to Seed Fundraising',
    summary: 'Preparing early companies for institutional scrutiny. We refine the business model, stress-test unit economics, build investor-grade financial models, and facilitate targeted introductions.',
    focus: [
      'Pitch deck narrative reconstruction',
      'Financial model & unit economics stress-testing',
      'Due diligence data room assembly',
      'Targeted investor curation & pitch simulation'
    ],
    deliverables: [
      'Audited 12-slide institutional pitch deck',
      'Dynamic 3-year financial model with cohort assumptions',
      'Due diligence compliance checklist',
      'Curated list of matching angel syndicates & micro-VCs'
    ],
    idealFor: 'Startups with early user adoption or revenue preparing to raise angel or institutional seed rounds.'
  }
];

export const WHY_STARTMET_POINTS = [
  {
    title: 'One Cohesive Ecosystem',
    description: 'Founders typically waste 40% of their early runway coordinating disconnected freelancers for legal, tech, branding, and marketing. STARTMET unifies all core disciplines under one disciplined execution team.'
  },
  {
    title: 'Founder-First Reality',
    description: 'We prioritize sustainable unit economics and actual product adoption over vanity PR or artificial burn. We build businesses structured to survive market downturns.'
  },
  {
    title: 'Hands-On Execution, Not Generic Advice',
    description: 'We don’t hand you a 40-page theoretical PDF and walk away. Our teams write the code, draft the legal paperwork, design the brand assets, and deploy the infrastructure beside you.'
  },
  {
    title: 'Integrated Product + Brand + Business Thinking',
    description: 'A great product fails without distribution; great marketing fails with poor software. We ensure your architecture, brand perception, and business model reinforce each other.'
  },
  {
    title: 'Support Beyond Launch Day',
    description: 'Launching is day zero. We remain beside you to analyze post-launch telemetry, fix onboarding bottlenecks, resolve compliance questions, and stabilize operational reliability.'
  },
  {
    title: 'Pragmatic Investor Readiness',
    description: 'We do not promise instant funding or pitch fake statistics. We prepare your business, metrics, and data room so genuine investors can understand your real value proposition.'
  }
];
