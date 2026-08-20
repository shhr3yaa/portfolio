export const profile = {
  name: "Shreya P",
  tagline: "Strategy & Operations · M&A · AI-Powered Product Builder",
  blurb:
    "I work in M&A at Microsoft — rebuilding legacy tools into modern AI-powered apps, shipping Copilot agents, and turning messy data into decisions across gaming and AI startups. I'm a huge gamer, obsessed with fashion, style, and all things creative, and you'll catch me outdoors or cheering on my Michigan teams (proud bandwagon Lions & Tigers fan 🦁🐯).",
  location: "Redmond, WA",
  email: "shreyavibha@gmail.com",
  linkedin: "https://www.linkedin.com/in/shhr3yaa",
  badges: ["Microsoft M&A", "Ex-Activision Blizzard", "Michigan State Grad", "AI + Copilot"],
};

export const interests = [
  { emoji: "🎮", label: "Huge gamer" },
  { emoji: "👗", label: "Fashion & style" },
  { emoji: "🎨", label: "Creative & design" },
  { emoji: "🏔️", label: "Outdoor sports" },
  { emoji: "🦁", label: "Detroit Lions" },
  { emoji: "🐯", label: "Detroit Tigers" },
];

export const creativeGallery = {
  title: "Creative & social",
  subtitle:
    "Real work I helped build — Vim Magazine issues, brand campaigns, and the social presence behind MSU's biggest style publication.",
  note: "Vim Magazine on Issuu & @vimmsu · MSU CANR @canratmsu",
  images: [
    { src: "/images/vim-2024.png", caption: "Vim Spring 2024 — 'Art of Hobbying'" },
    { src: "/images/vim-protein.png", caption: "Protein Pints promo campaign — a brand partnership we produced" },
    { src: "/images/vim-2023.png", caption: "Vim Spring 2023 — Meet the Directors" },
    { src: "/images/vim-ig.png", caption: "Vim on Instagram — @vimmsu (7.3K)" },
    { src: "/images/canr-ig.png", caption: "MSU CANR — @canratmsu" },
    { src: "/images/canr-twitter.png", caption: "MSU CANR — @CANRatMSU" },
  ],
};

export type Job = {
  role: string;
  company: string;
  location: string;
  dates: string;
  emoji: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    role: "Manager, Strategy & Operations M&A — Gaming & AI Startups",
    company: "Microsoft",
    location: "Redmond, WA",
    dates: "May 2026 – Now",
    emoji: "🎮",
    bullets: [
      "Rebuilt a legacy M&A tool using AI workflows (GitHub Copilot CLI, GitHub CLI) and migrated it from PowerApps to an Azure-hosted React + Tailwind app — cutting build time from ~1.5 years to ~3 months while letting deal teams self-serve insights.",
      "Designed a centralized onboarding and knowledge hub as primary PM, consolidating 1,000+ materials to improve access, adoption, and engagement across deal teams.",
      "Led cross-functional due diligence (legal, marketing, comms) across gaming acquisition targets and executed employee transition + onboarding for 50+ FTEs.",
      "Transformed static initiative tracking into a dynamic planning app using AI SCOUT, giving stakeholders self-serve insights via a Copilot agent.",
      "Ran front-facing AI enablement sessions — presenting live Copilot demos to Procurement, Finance, and Sales teams and walking them through function-specific use cases (RFP analysis, forecasting, deal onboarding) to drive hands-on adoption across the org.",
    ],
  },
  {
    role: "Strategy & Product Marketing Analyst — Activision Mobile Finance & Strategy",
    company: "Activision Blizzard",
    location: "Santa Monica, CA",
    dates: "Feb 2026 – May 2026",
    emoji: "🕹️",
    bullets: [
      "Prepared executive strategy materials for the CEO of Gaming and CEO of Activision, synthesizing portfolio risk, financials, and growth drivers for FY25 board-level investment decisions.",
      "Led alignment across Strategy Finance, Marketing, Live Ops, Product, and Engineering on an $800M Call of Duty: Mobile portfolio across East Asia and the US — including the Season 3: Paranoia launch (March 2026).",
      "Built a real-time, AI-powered Tableau dashboard consolidating 10+ data sources across the US, LATAM, and Africa — eliminating manual workflows and surfacing actuals vs. forecast.",
      "Partnered with Procurement on end-to-end RFP execution: live supplier Q&A, Excel bid models, and iterative scope adjustments prior to award.",
      "Supported go-to-market across China, Korea, and Garena — identifying underperforming titles and shaping targeted messaging and promos.",
    ],
  },
  {
    role: "Procurement Analyst — Azure Marketing, CoreAI & E+D",
    company: "Microsoft",
    location: "Redmond, WA",
    dates: "Sept 2025 – Feb 2026",
    emoji: "🤖",
    bullets: [
      "Led end-to-end RFP execution across E+D, Azure Marketing, CoreAI, and GWS — coordinating 300+ vendors and translating bid analysis into sourcing decisions.",
      "Completed advanced AI training (low-code/no-code, Python, Copilot CLI) and published a research paper on using AI in ERP systems on the Microsoft Data Science page.",
      "Designed an AI-powered Copilot RFP tool/agent that auto-creates worksheets, analyzes vendor offers, and outputs side-by-side comparison charts — tested on 12+ RFPs.",
    ],
  },
  {
    role: "Financial Capability Analyst — Partner Incentives + FinOps",
    company: "Microsoft",
    location: "Redmond, WA",
    dates: "March 2025 – Sept 2025",
    emoji: "📊",
    bullets: [
      "Spearheaded a 5-month Six Sigma DMAIC initiative to optimize Commercial Co-op claims processing, targeting reduced cycle time and escalation volume.",
      "Built and deployed AI Copilot bots for 200+ ICM inquiries and onboarding, automating 100+ tasks and cutting onboarding from 8 weeks to 4.",
      "Built an Excel forecasting model for high-risk OEM co-op claims (42K+ claims, $392M FYTD), improving accuracy and spend visibility.",
    ],
  },
  {
    role: "Operations PM — MCAPS Field Operations + Security",
    company: "Microsoft",
    location: "Redmond, WA",
    dates: "Sept 2024 – March 2025",
    emoji: "🔐",
    bullets: [
      "Coordinated 100+ stakeholders to support $500K+ deals and built 10+ Copilot prompts translating deal structures into role-specific onboarding checklists.",
      "Launched an Azure-hosted Copilot Studio onboarding agent connected to SharePoint and Power BI — adopted by 20+ users, validated with 340+ prompts, saving ~10 hrs/week.",
      "Translated complex product workflows into clear user stories for 100+ security sellers and built a Copilot self-service support agent.",
    ],
  },
  {
    role: "Operations Project Manager — Partner Operations",
    company: "Microsoft",
    location: "Redmond, WA",
    dates: "May 2023 – Aug 2023",
    emoji: "📈",
    bullets: [
      "Built 10+ end-to-end Power BI dashboards integrating 5+ data sources with custom DAX for consistent deal performance tracking across SMC & Americas.",
      "Coded a dynamic partner performance dashboard metric using SQL, Kusto, DAX, Tableau, and Power BI for 50+ stakeholders across EMEA and Americas.",
    ],
  },
  {
    role: "Teaching Assistant — MKT/STT 317: Quantitative Business Research Methods",
    company: "Michigan State University",
    location: "East Lansing, MI",
    dates: "Aug 2023 – May 2024",
    emoji: "🎓",
    bullets: [
      "Led 100+ instructional sessions on R, ERP systems, Tableau, and SQL, tailoring methods to diverse learning styles.",
      "Held bi-weekly office hours supporting students through data analysis challenges across 3+ projects and 10+ quizzes.",
    ],
  },
  {
    role: "Inventory Data Analyst Intern",
    company: "Target Corporation",
    location: "Remote",
    dates: "May 2022 – Aug 2022",
    emoji: "🎯",
    bullets: [
      "Designed an inventory dashboard in Greenfield BI to track 200+ out-of-stock seasonal products, reducing discrepancies and improving replenishment timing.",
      "Streamlined tracking for 300+ SKUs across Starbucks & food service teams, informing targeted promotions that improved sell-through.",
    ],
  },
];

export type Involvement = {
  org: string;
  role: string;
  dates: string;
  emoji: string;
  featured?: boolean;
  blurb: string;
  links?: { label: string; href: string }[];
  images?: { src: string; caption: string }[];
};

export const involvement: Involvement[] = [
  {
    org: "Vim Magazine Collective",
    role: "Finance Director — Finance & Social Media",
    dates: "May 2021 – May 2024",
    emoji: "💌",
    featured: true,
    blurb:
      "Ran finance AND social media for MSU's largest student organization (500+ members). Built budgeting and payment systems, managed 50+ partnerships, secured $4K+ in sponsorships, scaled flagship events to 500+ attendees, and established nonprofit status for long-term growth.",
    links: [
      { label: "Website", href: "https://www.vimmagazinemsu.com" },
      { label: "@vimmsu", href: "https://www.instagram.com/vimmsu" },
      { label: "Read the issues", href: "https://www.vimmagazinemsu.com/issues-page" },
    ],
    images: [
      { src: "/images/vim-ig.png", caption: "Vim on Instagram — @vimmsu (7.3K)" },
      { src: "/images/vim-2024.png", caption: "Vim Spring 2024 issue" },
      { src: "/images/vim-protein.png", caption: "Protein Pints promo campaign" },
    ],
  },
  {
    org: "Phi Gamma Nu",
    role: "VP of Finance + Marketing Chair",
    dates: "Dec 2021 – Dec 2023",
    emoji: "💼",
    blurb:
      "Grew fraternity revenue 24% by managing a $20K+ budget for 70+ members, building local business partnerships, and streamlining finances with an Excel tracking system — scaling it into the largest business fraternity on campus while leading social growth across Instagram, Twitter, and Facebook.",
  },
  {
    org: "MSU CANR & PSM",
    role: "Social Media, Communications & Community Relations Intern",
    dates: "Michigan State University",
    emoji: "🌱",
    featured: true,
    blurb:
      "Ran social media, communications, and community relations for MSU's College of Agriculture & Natural Resources (CANR) and the Professional Science Master's (PSM) program — creating content, growing the accounts, and connecting students to events and resources.",
    links: [
      { label: "canr.msu.edu", href: "https://www.canr.msu.edu" },
      { label: "@canratmsu", href: "https://www.instagram.com/canratmsu" },
      { label: "@msunatsci", href: "https://www.instagram.com/msunatsci" },
    ],
    images: [
      { src: "/images/canr-ig.png", caption: "MSU CANR — @canratmsu" },
      { src: "/images/canr-twitter.png", caption: "MSU CANR — @CANRatMSU" },
    ],
  },
  {
    org: "Victoria's Secret PINK",
    role: "Campus Rep — Community Relations & Marketing",
    dates: "Feb 2021 – May 2023",
    emoji: "💖",
    blurb:
      "Scaled campus social media from ~3K to 16K+ followers across Instagram, Facebook & Twitter, drove high-engagement campaigns for 300+ attendees, and built multi-year brand partnerships (Celsius, Estée Lauder, Tree Hut, 50+ local businesses) with repeatable growth strategies adopted across campus accounts.",
  },
];

export const writing = {
  article: {
    title: "AI, Cloud Storage & the Future of ERP Systems",
    outlet: "Data Science @ Microsoft",
    status: "Publishing July 21",
    href: "https://medium.com/data-science-at-microsoft",
    text: "A research paper on how AI can transform ERP systems — accelerating issue resolution and driving operational efficiency — alongside the role of cloud storage. Grounded in the Copilot-powered RFP tooling we built in Procurement to auto-analyze vendor offers and surface side-by-side comparisons.",
    tags: ["AI", "ERP Systems", "Cloud Storage", "Procurement"],
  },
  hackathons: [
    {
      name: "EmpowerED — AI for Inclusive Education Advocacy",
      role: "Hack for Families 2025 · Product Marketing",
      href: "https://innovationstudio.microsoft.com/hackathons/hackathon2025/project/95998",
      text: "An AI-powered tool that turns complex IEP special-education documents into clear, actionable, emotionally intelligent resources — translating jargon, summarizing key sections, and generating meeting-prep checklists so families can advocate with clarity and confidence. Built on Azure OpenAI + React.",
    },
    {
      name: "Prisere — Climate & Disaster Resilience for Small Business",
      role: "Hack for Positive Impact 2024 · Product Marketing",
      href: "https://innovationstudio.microsoft.com/hackathons/hackathon2024/project/74535",
      text: "A Gen-AI layer over small-business accounting platforms that flags business-interruption risks, surfaces declared disasters, and automates insurance-claim prep — helping the 43% of small businesses that fail after a disaster stay resilient. Built for Prisere (clients incl. the UN Office for Disaster Risk Reduction).",
    },
  ],
};

export const education = {
  school: "Michigan State University",
  college: "Eli Broad College of Business",
  degree: "B.A. in Supply Chain Management",
  concentration: "Concentration: Sustainability & Marketing Analytics",
  emoji: "🎓",
  honors: [
    "Microsoft Hackathon Finalist — Hack for Good 2024",
    "Microsoft Hackathon Finalist — Hack for Families 2025",
    "McLamore Foundation Scholar",
    "Ford Motor Scholarship",
    "Beacon Scholar",
    "Harvard Academies — Best Business Consulting Award 2019–2020",
    "Columbia University Model Entrepreneur — Top 10 Finalist 2020",
    "Project Paradigm Pitch USA — Finalist",
    "Target Case Study Competition — 1st Place 2021",
    "MSU Design-Day Sustainability Award",
    "Dean's List — 7/7 semesters",
  ],
};

export const companies = [
  { name: "Call of Duty: Mobile", emoji: "🎯" },
  { name: "CoD S3 — Paranoia", emoji: "🎮" },
  { name: "CoD S4 — Eternal Prison", emoji: "🎮" },
  { name: "Microsoft Azure", emoji: "☁️" },
  { name: "Microsoft M365", emoji: "🟦" },
  { name: "Microsoft Dynamics", emoji: "🔗" },
  { name: "ERP Systems", emoji: "⚙️" },
  { name: "Target BDFS", emoji: "🎯" },
  { name: "Target Starbucks", emoji: "☕" },
  { name: "Gaming Studios", emoji: "🎮" },
  { name: "Social & Creative", emoji: "✨" },
  { name: "Copilot Agents", emoji: "🤖" },
];

export type Deliverable = {
  title: string;
  tag: string;
  emoji: string;
  text: string;
  metrics: string[];
};

export const deliverables: Deliverable[] = [
  {
    title: "Legacy M&A Tool → Modern AI App",
    tag: "Product Build · GTM",
    emoji: "🚀",
    text: "Rebuilt a PowerApps M&A tool into an Azure-hosted React + Tailwind app using GitHub Copilot CLI, so deal teams could self-serve insights.",
    metrics: ["1.5 yrs → 3 mos build", "Self-serve for deal teams", "React + Azure"],
  },
  {
    title: "AI Copilot RFP Agent",
    tag: "AI Agent · Procurement",
    emoji: "🤖",
    text: "Designed a Copilot agent that auto-creates worksheets, analyzes vendor offers, and outputs side-by-side comparison charts.",
    metrics: ["Tested on 12+ RFPs", "300+ vendors coordinated", "Auto comparison charts"],
  },
  {
    title: "Real-Time Gaming Dashboard",
    tag: "Analytics · Storytelling",
    emoji: "📊",
    text: "Built an AI-powered Tableau dashboard consolidating 10+ data sources to track actuals vs. forecast across an $800M CoD: Mobile portfolio.",
    metrics: ["$800M portfolio", "10+ data sources", "US · LATAM · Africa"],
  },
  {
    title: "Copilot Studio Onboarding Agent",
    tag: "Enablement · Adoption",
    emoji: "🎓",
    text: "Launched an Azure-hosted onboarding agent connected to SharePoint & Power BI, validated with 340+ prompts for self-serve answers.",
    metrics: ["~10 hrs/week saved", "20+ adopters", "340+ prompts"],
  },
  {
    title: "Copilot Demos & AI Enablement",
    tag: "Enablement · Cross-Functional",
    emoji: "🎤",
    text: "Presented live, front-facing Copilot demos to Procurement, Finance, and Sales teams — turning \"how do I actually use this?\" into concrete, function-specific workflows and use cases.",
    metrics: ["Procurement · Finance · Sales", "Live team demos", "Real use-case walkthroughs"],
  },
];

export const skillDivisions = [
  {
    key: "Strategy & PM",
    color: "#7c3aed",
    tools: ["M&A Strategy", "Product PM", "Go-to-Market", "Six Sigma (Green Belt)", "Roadmapping"],
  },
  {
    key: "Data & Analytics",
    color: "#2d9cff",
    tools: ["Tableau", "Power BI", "SQL", "KQL / Kusto", "DAX", "Excel Modeling"],
  },
  {
    key: "AI & Automation",
    color: "#17c98b",
    tools: ["Copilot Studio", "GitHub Copilot CLI", "Power Automate", "Power Apps", "Python"],
  },
  {
    key: "Marketing & GTM",
    color: "#ff4d94",
    tools: ["Product Marketing", "Positioning", "Social Growth", "Partnerships", "Campaigns"],
  },
  {
    key: "Creative",
    color: "#ff8a3d",
    tools: ["Photoshop", "Lightroom", "Premiere Pro", "After Effects"],
  },
];

export const codMobile = {
  title: "Call of Duty: Mobile — Global Live Ops",
  subtitle: "$800M portfolio · East Asia & US",
  launch: "Worked on the Season 3: Paranoia (March 2026) & Season 4: Eternal Prison launches",
  intro:
    "At Activision I led cross-functional alignment across Strategy Finance, Marketing, Live Ops, Product & Engineering on the $800M Call of Duty: Mobile portfolio — including the Season 3: Paranoia (March 2026) and Season 4: Eternal Prison launches. I owned international campaigns end-to-end across China, Korea & Garena: positioning each release with the product marketing team, partnering with engineering to build and ship the in-game product, pulling performance data from the sales team, and packaging those insights into targeted, data-backed launch campaigns.",
  chips: [
    "🎮 Season 3: Paranoia (Mar 2026)",
    "🎮 Season 4: Eternal Prison",
    "$800M portfolio",
    "East Asia + US",
    "Data-driven go-to-market",
  ],
  regions: [
    {
      name: "China",
      flag: "🇨🇳",
      story:
        "Drove international campaigns for major gaming releases — positioning each launch with the product marketing team, partnering with engineering to build and produce the in-game product, and pulling performance data from the sales team. I packaged those insights into a clear narrative so we could launch targeted, data-backed campaigns in-market.",
    },
    {
      name: "Korea",
      flag: "🇰🇷",
      story:
        "Partnered with product marketing to develop targeted messaging that improved in-market performance.",
    },
    {
      name: "Garena (Vietnam)",
      flag: "🇻🇳",
      story:
        "Developed targeted promotional campaigns that improved engagement across the region.",
    },
  ],
};

export const pmmFit = [
  {
    icon: "📊",
    title: "Storytelling with data",
    pitch: "I turn messy data into narratives leaders act on.",
    proof: [
      "Prepared executive strategy materials for the CEO of Gaming and CEO of Activision — synthesizing portfolio risk, financials, and growth drivers into board-level decisions.",
      "Built AI-powered Tableau dashboards consolidating 10+ data sources across the US, LATAM & Africa.",
    ],
  },
  {
    icon: "🚀",
    title: "Go-to-market strategy",
    pitch: "I position products and launch them in-market.",
    proof: [
      "Led go-to-market across China, Korea & Garena for the $800M Call of Duty: Mobile portfolio.",
      "Identified underperforming titles and partnered with product marketing on targeted messaging & promo campaigns that improved engagement.",
    ],
  },
  {
    icon: "🔍",
    title: "Customer & market insight",
    pitch: "I find the signal that tells teams what to build and say.",
    proof: [
      "Generated customer insights from 10+ data sources that product & marketing teams acted on weekly.",
      "Optimized global launch performance by reading monetization trends and actuals vs. forecast.",
    ],
  },
  {
    icon: "🤝",
    title: "Cross-functional leadership",
    pitch: "I get Finance, Product, Eng & Marketing rowing together.",
    proof: [
      "Aligned Strategy Finance, Marketing, Live Ops, Product & Engineering on high-stakes product decisions.",
      "Coordinated 100+ stakeholders to support $500K+ deals across the field.",
    ],
  },
  {
    icon: "✨",
    title: "Brand, content & social",
    pitch: "I build brands and the content that grows them.",
    proof: [
      "Ran finance AND social for Vim, MSU's largest student org (7K+ on Instagram).",
      "Grew campus social to 16K+ across Instagram, Facebook & Twitter at Victoria's Secret PINK.",
      "2x Microsoft product-marketing hackathon finalist (EmpowerED, Prisere).",
    ],
  },
  {
    icon: "⚙️",
    title: "Product & technical fluency",
    pitch: "I speak engineer — and ship, not just spec.",
    proof: [
      "Builds AI-powered apps & Copilot agents (RFP agent, onboarding agent) with React + Tailwind on Azure.",
      "Fluent in SQL, KQL, DAX, Power BI & Python to self-serve the data behind the story.",
    ],
  },
];

export const skills = {
  Technical: [
    "Python",
    "JavaScript",
    "HTML/CSS",
    "MySQL",
    "KQL / Kusto",
    "DAX",
    "GitHub CLI & Actions",
    "Azure",
    "Microsoft Fabric",
    "Replit",
  ],
  "Data & BI": ["Tableau", "Power BI", "Excel", "Google Analytics", "Google Ads"],
  "Low-Code & AI": [
    "Copilot Studio",
    "GitHub Copilot CLI",
    "Power Automate",
    "Power Apps",
  ],
  Creative: ["Photoshop", "Lightroom", "After Effects", "Premiere Pro"],
  Certifications: [
    "Azure CORE PM Bootcamp",
    "Kusto Query Language",
    "Power BI DAX",
    "Microsoft Entra",
    "Defender for Identity",
    "Y Combinator Startup School",
    "Lean Six Sigma (White, Yellow, Green Belt)",
    "Product Marketing Essentials",
  ],
};
