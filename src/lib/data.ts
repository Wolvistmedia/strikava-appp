export interface TierModule {
  title: string;
  focus: string;
  duration?: string;
  desc: string;
}

export interface ProgramTier {
  level: string;
  desc: string;
  modules: TierModule[];
}

export interface Program {
  slug: string;
  title: string;
  category: string;
  desc: string;
  duration: string;
  mode: string;
  level: string;
  iconName: string;
  syllabus?: string[];
  tiers?: ProgramTier[];
}

export interface Category {
  slug: string;
  title: string;
  desc: string;
}

export const categories: Category[] = [
  { slug: "aws", title: "AWS", desc: "Amazon Web Services training and certification paths." },
  { slug: "google-cloud", title: "Google Cloud", desc: "GCP certifications for data and architecture." },
  { slug: "cybersecurity", title: "Cybersecurity", desc: "Defensive and offensive security training." },
  { slug: "networking", title: "Networking", desc: "Enterprise networking and CCNA/CCNP paths." },
  { slug: "devops", title: "DevOps", desc: "CI/CD, Kubernetes, and infrastructure automation." },
  { slug: "data", title: "Data & Analytics", desc: "Data engineering and analytics bootcamps." },
  { slug: "project-management", title: "Project Management", desc: "Agile, Scrum, and enterprise management." },
  { slug: "microsoft-azure", title: "Microsoft Azure", desc: "Azure administration and architecture tracks." }
];

export const programs: Program[] = [
  {
    slug: "aws-certifications-roadmap",
    title: "AWS Certifications Roadmap",
    category: "aws",
    desc: "Master AWS cloud certifications with structured learning paths across Foundational, Associate, Professional, and Specialty levels.",
    duration: "Flexible",
    mode: "Live",
    level: "Foundation to Advanced",
    iconName: "Cloud",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Entry-level certifications for cloud beginners and foundational AWS knowledge.",
        modules: [
          {
            title: "Cloud Practitioner",
            focus: "AWS cloud fundamentals, services overview, pricing",
            duration: "1-2 months",
            desc: "Perfect starting point for anyone new to cloud computing and AWS platform. No technical prerequisites required."
          },
          {
            title: "AI/ML Introduction",
            focus: "AI fundamentals",
            duration: "1-2 months",
            desc: "Foundational understanding of AI/ML concepts on AWS."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Intermediate certifications for AWS professionals with hands-on experience and technical expertise.",
        modules: [
          {
            title: "Cloud Architecture",
            focus: "Cloud architecture, design principles, solution deployment",
            duration: "2-3 months",
            desc: "Design and deploy scalable, secure, and reliable applications on AWS infrastructure."
          },
          {
            title: "Application Development",
            focus: "Development tools",
            duration: "2-3 months",
            desc: "Build and deploy cloud-native applications on AWS."
          },
          {
            title: "Operations & Management",
            focus: "SysOps & Infrastructure",
            duration: "2-3 months",
            desc: "Manage and operate AWS systems and infrastructure."
          }
        ]
      },
      {
        level: "Professional Level",
        desc: "Advanced certifications for experienced AWS professionals with deep technical expertise.",
        modules: [
          {
            title: "Advanced Architecture",
            focus: "Complex architectures, multi-tier systems, enterprise design",
            duration: "3-4 months",
            desc: "Design and deploy robust, scalable solutions for enterprise customers at AWS cloud scale."
          },
          {
            title: "DevOps & Automation",
            focus: "CI/CD & CloudFormation",
            duration: "3-4 months",
            desc: "Implement and manage continuous delivery systems on AWS."
          }
        ]
      },
      {
        level: "Specialty Certifications",
        desc: "Domain-specific certifications for deep expertise in specialized AWS areas.",
        modules: [
          {
            title: "Network Design",
            focus: "VPCs, hybrid networking, edge technologies",
            duration: "3-4 months",
            desc: "Design and implement complex networking architectures on AWS including hybrid cloud setups."
          },
          {
            title: "Cloud Security",
            focus: "IAM & Workload Protection",
            duration: "3-4 months",
            desc: "Secure AWS workloads and implement security controls."
          },
          {
            title: "Machine Learning Engineering",
            focus: "SageMaker & AI",
            duration: "3-4 months",
            desc: "Build, train, and deploy ML models on AWS."
          },
          {
            title: "Data Analytics",
            focus: "Big Data & Redshift",
            duration: "3-4 months",
            desc: "Design and implement big data solutions on AWS."
          },
          {
            title: "Database Administration",
            focus: "RDS & DynamoDB",
            duration: "3-4 months",
            desc: "Design and manage AWS database services."
          },
          {
            title: "Enterprise Applications",
            focus: "SAP on AWS",
            duration: "3-4 months",
            desc: "Run SAP workloads on AWS cloud infrastructure."
          }
        ]
      }
    ]
  },
  {
    slug: "splunk-certifications-roadmap",
    title: "Splunk Certification Roadmap",
    category: "data",
    desc: "Search, SIEM, observability, and enterprise Splunk certification paths.",
    duration: "42 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Database",
    tiers: [
      {
        level: "Core Power User",
        desc: "Foundational log parsing and analytics capabilities.",
        modules: [
          {
            title: "Splunk Core Fundamentals",
            focus: "Data ingestion, basic search syntax, and platform navigation",
            duration: "2 Weeks",
            desc: "Learn to navigate Splunk, perform basic searches, and understand the core data pipeline architecture."
          },
          {
            title: "Advanced Search & Reporting",
            focus: "SPL Mastery, Data Models, Timecharts",
            duration: "3 Weeks",
            desc: "Master the Search Processing Language (SPL) to create advanced visualizations, statistical reports, and alerts."
          }
        ]
      },
      {
        level: "Enterprise Admin",
        desc: "Managing Splunk infrastructure at scale.",
        modules: [
          {
            title: "Splunk Enterprise Administration",
            focus: "Cluster Management, Indexers, Forwarders",
            duration: "4 Weeks",
            desc: "Deploy, configure, and manage Splunk Enterprise environments, focusing on data lifecycle and high availability."
          }
        ]
      },
      {
        level: "Security SIEM Specialist",
        desc: "Advanced threat hunting using Splunk ES.",
        modules: [
          {
            title: "Splunk Enterprise Security (ES)",
            focus: "Correlation Searches, Notable Events, Incident Review",
            duration: "4 Weeks",
            desc: "Implement and utilize Splunk ES to detect, investigate, and respond to cyber threats in real-time."
          }
        ]
      }
    ]
  },
  {
    slug: "sentinel-siem-cloud-security",
    title: "Azure Sentinel SIEM",
    category: "microsoft-azure",
    desc: "Microsoft Sentinel detection engineering, threat hunting, and SOC workflows.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Cloud",
    tiers: [
      {
        level: "Security Operations Foundation",
        desc: "Setting up the Azure security environment.",
        modules: [
          {
            title: "Azure Security Fundamentals",
            focus: "Azure Active Directory, Network Security Groups, Defender for Cloud",
            duration: "2 Weeks",
            desc: "Understand the core security mechanisms within the Azure ecosystem before diving into SIEM."
          },
          {
            title: "Sentinel Workspace Deployment",
            focus: "Log Analytics, Data Connectors, Retention Policies",
            duration: "2 Weeks",
            desc: "Configure the Log Analytics Workspace and connect data sources from Azure, AWS, and on-premises."
          }
        ]
      },
      {
        level: "Detection Engineering",
        desc: "Writing rules and hunting threats.",
        modules: [
          {
            title: "KQL Query Construction",
            focus: "Kusto Query Language, Parsing, Joins",
            duration: "3 Weeks",
            desc: "Master KQL to proactively hunt for anomalies and write custom analytic rules."
          },
          {
            title: "Playbooks and Automation (SOAR)",
            focus: "Logic Apps, Automated Responses, Incident Triage",
            duration: "3 Weeks",
            desc: "Build automated SOAR playbooks using Azure Logic Apps to respond to incidents instantly."
          }
        ]
      }
    ]
  },
  {
    slug: "ethical-hacking-certification-roadmap",
    title: "Ethical Hacking Roadmap",
    category: "cybersecurity",
    desc: "Ethical hacking path from fundamentals to advanced offensive security.",
    duration: "45 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Lock",
    tiers: [
      {
        level: "Foundational Penetration Testing",
        desc: "Core concepts of networking and enumeration.",
        modules: [
          {
            title: "Networking & Protocol Basics",
            focus: "TCP/IP, DNS, HTTP, Subnetting",
            duration: "1 Week",
            desc: "Deep dive into how the internet works to understand exactly how it can be exploited."
          },
          {
            title: "Vulnerability Scanning & Enum",
            focus: "Nmap, Nessus, OpenVAS, OSINT",
            duration: "2 Weeks",
            desc: "Learn reconnaissance techniques to map out attack surfaces and identify vulnerable systems."
          }
        ]
      },
      {
        level: "Exploitation & Post-Exploitation",
        desc: "Taking control of vulnerable targets.",
        modules: [
          {
            title: "Web App Penetration Testing",
            focus: "OWASP Top 10, SQLi, XSS, Burp Suite",
            duration: "3 Weeks",
            desc: "Identify and exploit vulnerabilities in web applications using industry-standard tools."
          },
          {
            title: "Privilege Escalation",
            focus: "Linux/Windows PrivEsc, Kernels, Misconfigurations",
            duration: "2 Weeks",
            desc: "Elevate your access from a low-level user shell to root/SYSTEM level control."
          }
        ]
      },
      {
        level: "Practical Application",
        desc: "Real-world testing scenarios.",
        modules: [
          {
            title: "Capture The Flag (CTF) Labs",
            focus: "HackTheBox, TryHackMe, Custom AD Labs",
            duration: "2 Weeks",
            desc: "Apply your skills in entirely simulated enterprise environments to prepare for certifications."
          }
        ]
      }
    ]
  },
  {
    slug: "qradar-certifications-roadmap",
    title: "QRadar SIEM Roadmap",
    category: "cybersecurity",
    desc: "IBM QRadar certifications for analyst, operator, admin, and architect roles.",
    duration: "41 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    tiers: [
      {
        level: "QRadar Analyst",
        desc: "Day-to-day SOC monitoring and investigation.",
        modules: [
          {
            title: "Log & Flow Integration",
            focus: "Event collectors, Flow processors, DSMs",
            duration: "2 Weeks",
            desc: "Understand how QRadar ingests, normalizes, and correlates log and network flow data."
          },
          {
            title: "Offense Management",
            focus: "Investigating offenses, false positives, tuning",
            duration: "2 Weeks",
            desc: "Analyze and close offenses efficiently within a high-tempo SOC environment."
          }
        ]
      },
      {
        level: "QRadar Administrator",
        desc: "System management and custom engineering.",
        modules: [
          {
            title: "Rule Creation and Tuning",
            focus: "Building custom correlation rules, AQL, Building Blocks",
            duration: "3 Weeks",
            desc: "Design complex correlation rules using AQL to catch advanced persistent threats (APTs)."
          },
          {
            title: "Custom Dashboarding & API",
            focus: "Pulse App, REST API, Report Generation",
            duration: "2 Weeks",
            desc: "Create custom visualizations and integrate QRadar with external ticketing and threat intel systems."
          }
        ]
      }
    ]
  },
  {
    slug: "elk-certifications-roadmap",
    title: "Elastic ELK Certifications",
    category: "data",
    desc: "Elastic Engineer, Analyst, Observability, and SIEM certification path.",
    duration: "38 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Server",
    tiers: [
      {
        level: "Data Pipeline Engineering",
        desc: "Ingesting and parsing massive datasets.",
        modules: [
          {
            title: "Logstash Pipelines & Beats",
            focus: "Filebeat, Metricbeat, Grok parsing, Filters",
            duration: "2 Weeks",
            desc: "Build robust data ingestion pipelines using Logstash and Beats to ship data to Elasticsearch."
          },
          {
            title: "Elasticsearch Cluster Architecture",
            focus: "Nodes, Shards, Replicas, Index Lifecycle",
            duration: "3 Weeks",
            desc: "Design and optimize Elasticsearch clusters for high-speed indexing and querying."
          }
        ]
      },
      {
        level: "Analytics & Security",
        desc: "Visualizing data and detecting threats.",
        modules: [
          {
            title: "Kibana Visualizations",
            focus: "Dashboards, Canvas, TSVB, Machine Learning",
            duration: "2 Weeks",
            desc: "Build powerful interactive dashboards to visualize logs and metrics in Kibana."
          },
          {
            title: "Elastic Security Deployment",
            focus: "Elastic SIEM, Detection Rules, Endpoint Security",
            duration: "3 Weeks",
            desc: "Utilize the Elastic Security app to detect anomalies and manage endpoint protections."
          }
        ]
      }
    ]
  },
  {
    slug: "cloud-security-certifications-roadmap",
    title: "Cloud Security Roadmap",
    category: "cybersecurity",
    desc: "Cloud security pathways for AWS, Azure, GCP, and enterprise SOC use cases.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Cloud",
    tiers: [
      {
        level: "Cloud Infrastructure Defense",
        desc: "Securing the perimeter and workloads.",
        modules: [
          {
            title: "Cloud IAM Hardening",
            focus: "Role-based Access Control, Zero Trust, Federation",
            duration: "2 Weeks",
            desc: "Implement least privilege access and secure identity management across multi-cloud environments."
          },
          {
            title: "Network Security Controls",
            focus: "WAF, Shield, NSGs, Private Links",
            duration: "2 Weeks",
            desc: "Design secure network boundaries and protect against DDoS and application-layer attacks."
          }
        ]
      },
      {
        level: "Compliance & Response",
        desc: "Governance and incident handling.",
        modules: [
          {
            title: "Cloud Workload Protection",
            focus: "Container Security, CSPM, CWPP",
            duration: "3 Weeks",
            desc: "Secure Kubernetes clusters, serverless functions, and VM instances using cloud-native tools."
          },
          {
            title: "Cloud Incident Response",
            focus: "Forensics in the Cloud, Automation, Logging",
            duration: "2 Weeks",
            desc: "Execute IR procedures specifically designed for ephemeral cloud environments."
          }
        ]
      }
    ]
  },
  {
    slug: "comptia-enterprise-certification-roadmap",
    title: "CompTIA Certification Roadmap",
    category: "networking",
    desc: "Comptia tracks across Security+, Network+, Linux+, CASP+, and Cloud+.",
    duration: "44 Hrs",
    mode: "Live",
    level: "Foundation to Advanced",
    iconName: "Shield",
    tiers: [
      {
        level: "Core Infrastructure",
        desc: "Building the foundation of IT operations.",
        modules: [
          {
            title: "Network+ Infrastructure",
            focus: "Routing, Switching, Wireless, Troubleshooting",
            duration: "3 Weeks",
            desc: "Master the fundamentals of network infrastructure and protocols."
          },
          {
            title: "Linux+ Administration",
            focus: "Command Line, Scripting, Permissions",
            duration: "3 Weeks",
            desc: "Gain deep proficiency in managing and securing Linux operating systems."
          }
        ]
      },
      {
        level: "Security Professional",
        desc: "Securing enterprise environments.",
        modules: [
          {
            title: "Security+ Fundamentals",
            focus: "Threats, Attacks, Vulnerabilities, Crypto",
            duration: "3 Weeks",
            desc: "Establish core knowledge required of any cybersecurity role and earn DOD 8570 compliance."
          },
          {
            title: "CASP+ Advanced Security",
            focus: "Enterprise Architecture, Risk Management",
            duration: "4 Weeks",
            desc: "Advanced-level certification for senior security practitioners focusing on enterprise solutions."
          }
        ]
      }
    ]
  },
  {
    slug: "networking-certifications-roadmap",
    title: "Networking Certifications Roadmap",
    category: "networking",
    desc: "Networking path covering CCNA, CCNP, and enterprise network engineering skills.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Foundation to Advanced",
    iconName: "Network",
    tiers: [
      {
        level: "CCNA Foundation",
        desc: "Core routing and switching concepts.",
        modules: [
          {
            title: "OSI Model & IP Addressing",
            focus: "Subnetting, IPv4/IPv6, Protocols",
            duration: "2 Weeks",
            desc: "Understand the fundamental building blocks of data transmission across networks."
          },
          {
            title: "Switching and VLANs",
            focus: "Spanning Tree, Trunking, EtherChannel",
            duration: "2 Weeks",
            desc: "Configure and troubleshoot complex Layer 2 switching environments."
          }
        ]
      },
      {
        level: "CCNP Enterprise",
        desc: "Advanced routing and network automation.",
        modules: [
          {
            title: "Routing Protocols (OSPF, EIGRP, BGP)",
            focus: "Path Selection, Redistribution, Tuning",
            duration: "3 Weeks",
            desc: "Implement scalable and highly available Layer 3 routing architectures."
          },
          {
            title: "Network Automation Basics",
            focus: "Python, REST APIs, JSON, SD-WAN",
            duration: "3 Weeks",
            desc: "Transition from CLI administration to programmatic network automation."
          }
        ]
      }
    ]
  },
  {
    slug: "aws-solutions-architect-associate",
    title: "AWS Solutions Architect Associate",
    category: "aws",
    desc: "Master AWS architecture, compute, storage, and database services to design robust cloud solutions.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Cloud",
    tiers: [
      {
        level: "Core AWS Infrastructure",
        desc: "Building scalable compute and storage foundations.",
        modules: [
          {
            title: "AWS Core Services & EC2",
            focus: "AMIs, Auto Scaling, Load Balancing (ELB)",
            duration: "2 Weeks",
            desc: "Deploy highly available compute clusters using Elastic Compute Cloud."
          },
          {
            title: "VPC and Networking",
            focus: "Subnets, Route Tables, NAT Gateways, Peering",
            duration: "2 Weeks",
            desc: "Design secure virtual private clouds and manage network traffic flow."
          }
        ]
      },
      {
        level: "Data & Architecture",
        desc: "Managing state and decoupling applications.",
        modules: [
          {
            title: "S3 & Storage Solutions",
            focus: "Object Storage, EBS, EFS, Glacier",
            duration: "1 Week",
            desc: "Implement the correct storage tiering strategies for cost and performance."
          },
          {
            title: "RDS & DynamoDB",
            focus: "Relational vs NoSQL, Multi-AZ, Read Replicas",
            duration: "2 Weeks",
            desc: "Deploy and manage highly available database architectures."
          },
          {
            title: "High Availability & Scaling",
            focus: "SQS, SNS, Route53, CloudFront",
            duration: "2 Weeks",
            desc: "Architect globally distributed, decoupled, and fault-tolerant applications."
          }
        ]
      }
    ]
  },
  {
    slug: "aws-devops-engineer-professional",
    title: "AWS DevOps Engineer Professional",
    category: "devops",
    desc: "Advanced training for implementing CI/CD pipelines, automation, and infrastructure as code on AWS.",
    duration: "45 Hrs",
    mode: "Live",
    level: "Advanced",
    iconName: "Server",
    tiers: [
      {
        level: "Automation & CI/CD",
        desc: "Automating software delivery.",
        modules: [
          {
            title: "CI/CD Pipelines on AWS",
            focus: "CodeCommit, CodeBuild, CodeDeploy, CodePipeline",
            duration: "3 Weeks",
            desc: "Build fully automated, end-to-end continuous integration and deployment pipelines."
          },
          {
            title: "Infrastructure as Code",
            focus: "CloudFormation, AWS SAM, Terraform",
            duration: "3 Weeks",
            desc: "Provision and manage AWS infrastructure programmatically using templates."
          }
        ]
      },
      {
        level: "Operations & Observability",
        desc: "Managing deployments at scale.",
        modules: [
          {
            title: "Monitoring and Logging",
            focus: "CloudWatch, EventBridge, AWS X-Ray, CloudTrail",
            duration: "2 Weeks",
            desc: "Implement comprehensive observability to detect issues before they impact users."
          },
          {
            title: "Configuration Management",
            focus: "Systems Manager, OpsWorks, Elastic Beanstalk",
            duration: "2 Weeks",
            desc: "Manage fleet configurations and orchestrate application updates securely."
          }
        ]
      }
    ]
  },
  {
    slug: "azure-az104",
    title: "Azure Administrator (AZ-104)",
    category: "microsoft-azure",
    desc: "Learn to manage Azure subscriptions, secure identities, administer infrastructure, configure virtual networking, and manage resource traffic.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Cloud",
    tiers: [
      {
        level: "Identity & Governance",
        desc: "Securing access and managing costs.",
        modules: [
          {
            title: "Manage Azure Identities",
            focus: "Entra ID (Azure AD), Users, Groups, RBAC",
            duration: "2 Weeks",
            desc: "Implement role-based access control and manage enterprise identities."
          },
          {
            title: "Subscriptions & Governance",
            focus: "Azure Policies, Resource Groups, Cost Management",
            duration: "1 Week",
            desc: "Enforce compliance and control cloud spend across the organization."
          }
        ]
      },
      {
        level: "Compute & Networking",
        desc: "Deploying core infrastructure.",
        modules: [
          {
            title: "Deploy Compute Resources",
            focus: "Virtual Machines, App Services, AKS",
            duration: "2 Weeks",
            desc: "Provision and manage Windows and Linux virtual machines and containers."
          },
          {
            title: "Configure Virtual Networking",
            focus: "VNet Peering, VPN Gateway, Azure Firewall",
            duration: "3 Weeks",
            desc: "Design and implement complex Azure networking topologies."
          },
          {
            title: "Storage & Backup",
            focus: "Storage Accounts, Blob, File Shares, Recovery Services",
            duration: "2 Weeks",
            desc: "Manage data lifecycle and implement disaster recovery solutions."
          }
        ]
      }
    ]
  },
  {
    slug: "comptia-certifications-roadmap",
    title: "CompTIA Certification Roadmap",
    category: "cybersecurity",
    desc: "Complete CompTIA Security+ to SecurityX journey with DoD 8570 compliance and enterprise architecture training.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ 4 globally recognized CompTIA certifications",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ 4 globally recognized CompTIA certifications including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Entry-level to Expert progression",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Entry-level to Expert progression including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Real-world security lab environments",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Real-world security lab environments including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ CompTIA-approved training partners",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ CompTIA-approved training partners including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Exam prep and success guarantee",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Exam prep and success guarantee including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Career advancement roadmap",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Career advancement roadmap including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
    slug: "elastic-siem-operations",
    title: "Splunk Core Certified User",
    category: "data",
    desc: "Build strong Splunk foundation: searching, fields, look-ups, alerts, reports, and dashboards. Entry-level certification for Enterprise and Cloud.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Database",
    syllabus: [
      "Splunk Fundamentals",
      "Search and Reporting",
      "Using Fields",
      "Scheduling Reports and Alerts",
      "Visualizations and Dashboards"
    ]
  },
  {
    slug: "splunk-core-certified-user",
    title: "Splunk Core Certified Power User",
    category: "data",
    desc: "Master advanced Splunk skills: knowledge objects, data models, field aliases, calculated fields, macros, and Common Information Model normalization.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Database",
    syllabus: [
      "▹ Comprehensive Splunk fundamentals training",
      "▹ Hands-on labs with real Splunk instances",
      "▹ Works with Enterprise and Cloud platforms",
      "▹ Exam SPLK-1001 preparation included",
      "▹ Reporting, dashboards, and alerting mastery",
      "▹ Guided practical exercises and projects"
    ]
  },
  {
    slug: "splunk-core-certified-power-user",
    title: "Splunk Core Certified Advanced Power User",
    category: "data",
    desc: "Deepen your Splunk expertise with complex search commands, advanced knowledge objects, and best practices for dashboards and forms to get the most out of your data.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Database",
    syllabus: [
      "▹ Advanced Splunk power user training SPLK-1002",
      "▹ Knowledge object creation and management",
      "▹ Data model design and normalization",
      "▹ Field enrichment and calculated fields",
      "▹ Common Information Model (CIM) implementation",
      "▹ Real-world enterprise data analysis"
    ]
  },
  {
    slug: "splunk-core-certified-advanced-power-user",
    title: "Splunk Cloud Certified Admin",
    category: "data",
    desc: "Build competence in managing and configuring Splunk Cloud ΓÇö data inputs, forwarder configuration, data management, user accounts, monitoring, and problem isolation.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Database",
    syllabus: [
      "▹ Advanced SPLK-1003 exam preparation",
      "▹ Complex SPL search command mastery",
      "▹ Advanced knowledge objects and use cases",
      "▹ Enterprise dashboard and form design",
      "▹ Advanced reporting and data visualization",
      "▹ Real-world enterprise data analysis projects"
    ]
  },
  {
    slug: "splunk-enterprise-certified-admin",
    title: "Splunk Enterprise Certified Admin",
    category: "data",
    desc: "Develop expertise in daily Splunk Enterprise management ΓÇö license management, indexers, search heads, configuration, monitoring, and getting data into the Splunk platform.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Database",
    syllabus: [
      "▹ SPLK-2001 exam preparation and certification",
      "▹ Splunk Enterprise deployment and architecture",
      "▹ Indexer and search head cluster administration",
      "▹ License management and quota monitoring",
      "▹ Configuration file management best practices",
      "▹ Data ingestion, forwarders, and input pipelines"
    ]
  },
  {
    slug: "splunk-enterprise-certified-architect",
    title: "Splunk Enterprise Certified Architect",
    category: "data",
    desc: "Gain a thorough understanding of Splunk deployment methodology, planning, data collection, sizing, and managing distributed deployments with indexer and search head clustering.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Database",
    syllabus: [
      "▹ SPLK-3001 exam preparation and certification",
      "▹ Splunk deployment methodology and architecture planning",
      "▹ Data collection design and intake strategy",
      "▹ Distributed deployment sizing and capacity planning",
      "▹ Indexer clustering and search head clustering",
      "▹ Deployment troubleshooting and operational best practices"
    ]
  },
  {
    slug: "splunk-core-certified-consultant",
    title: "Splunk Core Certified Consultant",
    category: "data",
    desc: "Expand your understanding of Splunk deployment methodology and implementation for large installations, including multi-tier architecture, clustering, scalability, sizing, and advisory best practices.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Database",
    syllabus: [
      "▹ SPLK-3002 exam preparation and certification",
      "▹ Splunk deployment methodology for large installations",
      "▹ Multi-tier architecture, clustering, and scalability",
      "▹ Sizing, installation, and implementation planning",
      "▹ Distributed platform rollout best practices",
      "▹ Consulting guidance for maximum Splunk value"
    ]
  },
  {
    slug: "splunk-enterprise-security-certified-admin",
    title: "Splunk Enterprise Security Certified Admin",
    category: "cybersecurity",
    desc: "Enhance your ability to manage Splunk Enterprise Security with event processing, normalization, deployment planning, technology add-ons, risk analysis, threat intelligence, and protocol intelligence.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    syllabus: [
      "▹ Splunk Enterprise Security administration and certification prep",
      "▹ Event processing and data normalization workflows",
      "▹ Deployment requirements and ES installation planning",
      "▹ Technology add-ons and data source onboarding",
      "▹ Risk analysis, threat intelligence, and protocol intelligence",
      "▹ Customizations, tuning, and ES platform management"
    ]
  },
  {
    slug: "splunk-siem-operations",
    title: "Splunk SIEM and SOC Operations",
    category: "cybersecurity",
    desc: "Comprehensive 13-module hands-on training for Splunk SIEM operations covering architecture, data normalization, detection engineering, risk-based alerting, threat hunting, incident response, and automation.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    syllabus: [
      "▹ Splunk Enterprise Security operations and SOC training",
      "▹ Event processing and data normalization workflows",
      "▹ ES architecture and deployment planning",
      "▹ Technology add-ons and data source onboarding",
      "▹ Detection engineering and correlation rule creation",
      "▹ Risk-based alerting and incident management",
      "▹ Threat hunting and use case implementation",
      "▹ Automation and SOAR integration"
    ]
  },
  {
    slug: "splunk-it-service-intelligence",
    title: "Splunk IT Service Intelligence",
    category: "data",
    desc: "Grow your knowledge of monitoring mission-critical services with Splunk IT Service Intelligence, including architecture, deployment planning, service design, notable events, glass tables, and deep dives.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Database",
    syllabus: [
      "▹ Splunk ITSI installation and configuration training",
      "▹ ITSI architecture and deployment planning",
      "▹ Service design, service trees, and implementation",
      "▹ Notable event aggregation and event management",
      "▹ Glass tables and deep dive development",
      "▹ Monitoring mission-critical services end to end"
    ]
  },
  {
    slug: "splunk-soar-certified-automation-developer",
    title: "Splunk SOAR Certified Automation Developer",
    category: "data",
    desc: "Learn to install, configure, and use Splunk SOAR servers, design and debug playbooks, integrate with Splunk, and build advanced automation using custom code and REST APIs.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Database",
    syllabus: [
      "▹ Splunk SOAR server installation and configuration",
      "▹ Playbook planning, design, creation, and debugging",
      "▹ Complex automation solution development",
      "▹ Splunk platform integration patterns",
      "▹ Custom coding and REST API usage",
      "▹ Production-ready SOAR automation workflows"
    ]
  },
  {
    slug: "splunk-o11y-cloud-certified-metrics-user",
    title: "Splunk O11y Cloud Certified Metrics User",
    category: "data",
    desc: "Enhance your Splunk Observability Cloud monitoring with OpenTelemetry Collector deployment, real-time metrics analytics, detectors, dashboards, and efficient visualization workflows.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Database",
    syllabus: [
      "▹ Splunk Observability Cloud metrics workflow training",
      "▹ OpenTelemetry Collector deployment and configuration",
      "▹ Metrics ingestion and analytics for real-time insights",
      "▹ Visualization, detectors, and alert design",
      "▹ Efficient dashboard creation for multiple environments",
      "▹ Scalable monitoring across application layers"
    ]
  },
  {
    slug: "splunk-certified-cybersecurity-defense-analyst",
    title: "Splunk Certified Cybersecurity Defense Analyst",
    category: "cybersecurity",
    desc: "Grow your skills for SOC analyst work using Splunk analytics, threat hunting, risk-based alerting, vulnerability management, and common cyber defense systems for continual monitoring.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    syllabus: [
      "▹ SOC analyst workflow and cyber defense training",
      "▹ Splunk analytics for investigation and monitoring",
      "▹ Threat hunting and risk-based alerting practices",
      "▹ Vulnerability and threat management workflows",
      "▹ Common cyber defense systems and use cases",
      "▹ Continuous monitoring for business protection"
    ]
  },
  {
    slug: "siem-soc-operations",
    title: "SIEM SOC Operations with Microsoft Sentinel",
    category: "cybersecurity",
    desc: "Master SIEM and cloud security operations with Microsoft Sentinel: data ingestion, KQL, detection rules, incident response, threat hunting, automation, and SOC dashboards.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    syllabus: [
      "▹ End-to-end SOC workflow implementation",
      "▹ Microsoft Sentinel setup and architecture",
      "▹ Data connectors and real log ingestion labs",
      "▹ KQL queries, analytics, and dashboards",
      "▹ Detection rules, incident triage, and hunting",
      "▹ Logic Apps playbooks for auto-response"
    ]
  },
  {
    slug: "qradar-siem-operations",
    title: "QRadar SIEM and SOC Operations",
    category: "cybersecurity",
    desc: "Comprehensive 13-module IBM QRadar SIEM operations training covering architecture, event monitoring, threat detection, offense management, rules & correlation, and advanced security operations.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    syllabus: [
      "▹ Complete QRadar SIEM platform training",
      "▹ 13 comprehensive modules with hands-on labs",
      "▹ Architecture, configuration, and operations",
      "▹ Event monitoring and threat detection",
      "▹ Offense management and investigation",
      "▹ Advanced rules, AQL, and automation"
    ]
  },
  {
    slug: "aws-cloud-architecture-professional",
    title: "AWS Cloud Architecture Professional",
    category: "aws",
    desc: "Advanced 12-module AWS Cloud Architecture training for Solutions Architect Professional covering design patterns, multi-region solutions, networking, security, DevOps, and enterprise best practices.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Cloud",
    syllabus: [
      "▹ Advanced cloud architecture and design patterns",
      "▹ 12 comprehensive modules with hands-on labs",
      "▹ Multi-region and multi-account solutions",
      "▹ Enterprise security and compliance",
      "▹ Performance optimization and cost management",
      "▹ Real-world architecture scenarios and best practices"
    ]
  },
  {
    slug: "google-cloud-certifications-roadmap",
    title: "Google Cloud Certifications Roadmap",
    category: "google-cloud",
    desc: "Google Cloud certifications roadmap covering Foundational, Associate, Professional, and AI/ML certification pathways for cloud engineers and architects.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Cloud",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ Foundational: Google Cloud Digital Leader",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Foundational: Google Cloud Digital Leader including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Associate: Associate Cloud Engineer",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Associate: Associate Cloud Engineer including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Professional: Architect, Data, Dev, Network, Security, DevOps, Database",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Professional: Architect, Data, Dev, Network, Security, DevOps, Database including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ AI/ML: Machine Learning Engineer and Generative AI Engineer",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ AI/ML: Machine Learning Engineer and Generative AI Engineer including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Role-based exam preparation with lab practice",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Role-based exam preparation with lab practice including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Guided progression from beginner to specialist",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Guided progression from beginner to specialist including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
    slug: "google-cloud-professional-track",
    title: "Google Cloud Professional Track",
    category: "google-cloud",
    desc: "Comprehensive 11-module Google Cloud Professional Track aligned to Digital Leader, Associate, Professional, and AI certifications with practical labs.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Cloud",
    syllabus: [
      "▹ Module-by-module certification preparation",
      "▹ Practical hands-on cloud labs",
      "▹ Architecture and troubleshooting scenarios",
      "▹ Security, networking, and DevOps depth",
      "▹ Data and database engineering practices",
      "▹ AI/ML and Generative AI preparation"
    ]
  },
  {
    slug: "network-engineering-professional-track",
    title: "Network Engineering Professional Track",
    category: "networking",
    desc: "Comprehensive 10-module Network Engineering Professional Track covering fundamentals, Cisco, Juniper, Azure networking, and security-focused networking skills.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Network",
    syllabus: [
      "▹ Network+ fundamentals for beginners",
      "▹ CCNA concepts and practical implementation",
      "▹ CCNP enterprise and SD-WAN depth",
      "▹ CCIE expert-level infrastructure focus",
      "▹ Juniper routing and switching modules",
      "▹ Azure networking and security integration"
    ]
  },
  {
    slug: "audit-certifications-roadmap",
    title: "Information Security Audit Certifications Roadmap",
    category: "cybersecurity",
    desc: "Audit and governance certifications roadmap covering CISA, CISM, CRISC, ISO 27001 Lead Auditor, and CISSP with role-based progression guidance.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ CISA: Information systems auditing and governance",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ CISA: Information systems auditing and governance including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ CISM: Security governance and incident management",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ CISM: Security governance and incident management including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ CRISC: Risk management and control design",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ CRISC: Risk management and control design including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ ISO 27001 Lead Auditor: ISMS and compliance audits",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ ISO 27001 Lead Auditor: ISMS and compliance audits including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ CISSP: Security architecture and governance depth",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ CISSP: Security architecture and governance depth including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Comparison matrix and suggested progression",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Comparison matrix and suggested progression including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
    slug: "security-audit-and-governance-operations",
    title: "Security Audit and Governance Operations",
    category: "cybersecurity",
    desc: "Comprehensive 10-module security audit and governance training aligned to CISA, CISM, CRISC, ISO 27001 Lead Auditor, and CISSP domains.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    syllabus: [
      "▹ CISA-aligned IS auditing foundations",
      "▹ CISM governance and incident management",
      "▹ CRISC risk and controls design",
      "▹ ISO 27001 lead audit lifecycle",
      "▹ CISSP governance and architecture context",
      "▹ Real-world compliance and evidence workflows"
    ]
  },
  {
    slug: "governance-certifications-roadmap",
    title: "IT and Security Governance Certifications Roadmap",
    category: "cybersecurity",
    desc: "Single-page governance certifications roadmap covering CGEIT, COBIT, CISM, CRISC, and ISO 27001 Lead Implementer for IT and security governance careers.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ CGEIT for enterprise IT governance leadership",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ CGEIT for enterprise IT governance leadership including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ COBIT framework for process and control design",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ COBIT framework for process and control design including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ CISM for security governance and management",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ CISM for security governance and management including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ CRISC for risk governance and control monitoring",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ CRISC for risk governance and control monitoring including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ ISO 27001 Lead Implementer for ISMS implementation",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ ISO 27001 Lead Implementer for ISMS implementation including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Single-page comparison for role-based decisions",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Single-page comparison for role-based decisions including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
    slug: "linux-certifications-roadmap",
    title: "Linux Certifications Roadmap",
    category: "devops",
    desc: "Single-page Linux certifications roadmap covering Linux+, RHCSA, RHCE, LPIC, and Linux Foundation paths for system administration and enterprise operations.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Server",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ CompTIA Linux+ for beginner to intermediate skills",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ CompTIA Linux+ for beginner to intermediate skills including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ RHCSA for core Red Hat administration",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ RHCSA for core Red Hat administration including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ RHCE for advanced automation and enterprise operations",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ RHCE for advanced automation and enterprise operations including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ LPIC-1, LPIC-2, LPIC-3 progression",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ LPIC-1, LPIC-2, LPIC-3 progression including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Linux Foundation LFCS and LFCE tracks",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Linux Foundation LFCS and LFCE tracks including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Role alignment for admin, security, and operations",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Role alignment for admin, security, and operations including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
    slug: "kali-linux-ethical-hacking-fundamentals",
    title: "Kali Linux Ethical Hacking Fundamentals",
    category: "devops",
    desc: "HComprehensive 12-module Kali Linux ethical hacking fundamentals program covering installation, commands, networking, scanning, vulnerability assessment, wireless testing, exploitation basics, and reporting.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Server",
    syllabus: [
      "▹ Ethical hacking and cybersecurity foundation",
      "▹ Kali Linux setup on VMware, VirtualBox, and USB",
      "▹ Linux command-line and networking basics",
      "▹ Scanning and vulnerability assessment workflows",
      "▹ Password and wireless security testing introduction",
      "▹ Basic exploitation and reporting best practices"
    ]
  },
  {
    slug: "vmware-certification-courses-roadmap",
    title: "VMware Certification Courses Roadmap",
    category: "cybersecurity",
    desc: "Single-page VMware certification roadmap covering vSphere, NSX, vSAN, Cloud Foundation, disaster recovery, SD-WAN, Aria operations, Kubernetes, and Azure integration.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ ESXi and vCenter administration",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ ESXi and vCenter administration including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Network virtualization and micro-segmentation",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Network virtualization and micro-segmentation including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Software-defined storage and vSAN clusters",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Software-defined storage and vSAN clusters including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ Hybrid cloud and cloud lifecycle operations",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Hybrid cloud and cloud lifecycle operations including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Disaster recovery and replication planning",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Disaster recovery and replication planning including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Automation, performance monitoring, and capacity planning",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Automation, performance monitoring, and capacity planning including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
    slug: "azure-certifications-roadmap",
    title: "Microsoft Azure Certification Roadmap",
    category: "microsoft-azure",
    desc: "Complete Microsoft Azure certification roadmap covering Fundamental (AZ-900, AI-900, DP-900, SC-900), Associate, Expert, and Security specialist tracks. 13+ certifications with hands-on Azure lab training.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Cloud",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "Azure architecture and core services",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into Azure architecture and core services including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "Virtual machines, networking, and storage",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into Virtual machines, networking, and storage including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "Identity and access management (IAM)",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into Identity and access management (IAM) including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "Azure subscription and cost management",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into Azure subscription and cost management including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
    slug: "azure-az900",
    title: "Microsoft Azure Fundamentals AZ-900",
    category: "microsoft-azure",
    desc: "Cloud concepts and Azure services for beginners. Entry-level certification covering Azure architecture, pricing, and support.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Cloud",
    syllabus: [
      "Definition and benefits of cloud computing",
      "CapEx vs. OpEx cost models",
      "Shared responsibility model",
      "High availability, scalability, and reliability"
    ]
  },
  {
    slug: "azure-az500",
    title: "Microsoft Azure Security Engineer AZ-500",
    category: "microsoft-azure",
    desc: "Implement security controls, identity and access management, platform protection, and security operations in Azure.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Cloud",
    syllabus: [
      "• Configure Azure AD users, groups, and external identities",
      "• Implement Azure AD Connect and hybrid identity",
      "• Manage Managed Identities for Azure resources",
      "• Configure Azure AD application registrations"
    ]
  },
  {
    slug: "azure-az305",
    title: "Microsoft Azure Solutions Architect AZ-305",
    category: "microsoft-azure",
    desc: "Design governance, data storage, business continuity, and infrastructure solutions for enterprise Azure environments.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Cloud",
    syllabus: [
      "Design Azure AD (Entra ID) tenant architecture",
      "Design hybrid identity with Azure AD Connect",
      "Architect external identity and B2B/B2C solutions",
      "Design Privileged Identity Management (PIM) strategy"
    ]
  },
  {
    slug: "azure-devops-az400",
    title: "Microsoft DevOps Engineer AZ-400",
    category: "microsoft-azure",
    desc: "DevOps practices, Azure DevOps pipelines, CI/CD, infrastructure as code, and release management on Azure.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Cloud",
    syllabus: [
      "• Design team structures and DevOps operating model",
      "• Implement communication and handoff workflows",
      "• Define value stream mapping practices",
      "• Set measurable DevOps KPIs and goals"
    ]
  },
  {
    slug: "cloud-data-security-certification-roadmap",
    title: "Oracle Enterprise and Cloud Certification Roadmap",
    category: "cybersecurity",
    desc: "Integrated 15-course Oracle roadmap covering Database 19c administration, SQL, multitenant, Data Guard, backup and recovery, OCI architecture, WebLogic, ODI, SOA, Exadata, Primavera, and Oracle 23ai features.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ Cloud administration and architecture design",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Cloud administration and architecture design including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Power BI and Fabric analytics engineering",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Power BI and Fabric analytics engineering including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Azure AI solution implementation",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Azure AI solution implementation including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ Security operations, identity, and cloud security controls",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Security operations, identity, and cloud security controls including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ DevOps automation and cloud app development",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ DevOps automation and cloud app development including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ ITSM fundamentals and enterprise networking basics",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ ITSM fundamentals and enterprise networking basics including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
    slug: "oracle-enterprise-cloud-certification-roadmap",
    title: "CompTIA Enterprise Certification Roadmap",
    category: "cybersecurity",
    desc: "Integrated 15-course CompTIA roadmap: SY0-701, N10-009, 1101-1102, 220-1101/220-1102, CySA+, PT0-002, XK0-005, DA0-001, CAS-004, CV0-004, CAS-005 (SecurityX), N10-008, ITF+, Cloud Essentials+, SK0-005.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ Oracle database administration and SQL proficiency",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Oracle database administration and SQL proficiency including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Multitenant architecture, Data Guard, and backup recovery expertise",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Multitenant architecture, Data Guard, and backup recovery expertise including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ OCI architecture and cloud integration design",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ OCI architecture and cloud integration design including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ WebLogic, ODI, and SOA middleware administration skills",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ WebLogic, ODI, and SOA middleware administration skills including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Exadata implementation and platform operations",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Exadata implementation and platform operations including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Primavera project planning and delivery management workflows",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Primavera project planning and delivery management workflows including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
    slug: "isc2-certification-roadmap",
    title: "ISC2 Cybersecurity Certification Roadmap",
    category: "cybersecurity",
    desc: "ISC2 roadmap covering CISSP, CCSP, CGRC, ISSAP, SSCP, Certified in Cybersecurity, ISSEP, ISSMP, and CAP for architecture, engineering, compliance, and leadership roles.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ Security fundamentals, operations, and control implementation",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Security fundamentals, operations, and control implementation including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Enterprise security governance and risk compliance capabilities",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Enterprise security governance and risk compliance capabilities including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Cloud security architecture and data protection practices",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Cloud security architecture and data protection practices including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ Security architecture and engineering depth",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Security architecture and engineering depth including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Authorization, governance, and compliance management",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Authorization, governance, and compliance management including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Leadership readiness for senior security management roles",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Leadership readiness for senior security management roles including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
    slug: "itil-prince2-six-sigma-roadmap",
    title: "ITIL, PRINCE2 and Lean Six Sigma Roadmap",
    category: "project-management",
    desc: "Integrated 15-course roadmap covering ITIL 4 specialist/strategist/leader tracks, PRINCE2 and PRINCE2 Agile pathways, and IASSC Lean Six Sigma Yellow/Green/Black Belt certifications.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Briefcase",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ End-to-end ITIL service value chain and operating model understanding",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ End-to-end ITIL service value chain and operating model understanding including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Project governance and control using PRINCE2 principles and practices",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Project governance and control using PRINCE2 principles and practices including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Agile project leadership with PRINCE2 Agile practices",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Agile project leadership with PRINCE2 Agile practices including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ Process optimization using Lean Six Sigma DMAIC approaches",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Process optimization using Lean Six Sigma DMAIC approaches including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Stakeholder value, strategy alignment, and continual improvement delivery",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Stakeholder value, strategy alignment, and continual improvement delivery including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Leadership readiness across operations, delivery, and transformation programs",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Leadership readiness across operations, delivery, and transformation programs including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
    slug: "sap-s4hana-enterprise-roadmap",
    title: "SAP S/4HANA Enterprise Certification Roadmap",
    category: "cybersecurity",
    desc: "Integrated 15-course SAP roadmap covering S4H00, UX100, ACT100, MDG100, MDG200, S4140, SAP Basis, S/4HANA Cloud Private Edition, RISE onboarding, ADM328 upgrade, HCM, Ariba AR710, DS10, and TS4F01.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ S/4HANA platform understanding and end-to-end process awareness",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ S/4HANA platform understanding and end-to-end process awareness including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ SAP implementation lifecycle with SAP Activate methodology",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ SAP implementation lifecycle with SAP Activate methodology including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Master data governance and quality process integration skills",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Master data governance and quality process integration skills including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ System administration, conversion, upgrade, and cloud onboarding readiness",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ System administration, conversion, upgrade, and cloud onboarding readiness including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Functional capabilities across HCM, SuccessFactors, Ariba, and Finance",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Functional capabilities across HCM, SuccessFactors, Ariba, and Finance including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Data transformation and integration with SAP Data Services and MDG",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Data transformation and integration with SAP Data Services and MDG including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
    slug: "ec-council-certification-roadmap",
    title: "EC-Council Cybersecurity Certification Roadmap",
    category: "cybersecurity",
    desc: "Integrated 15-course EC-Council roadmap covering CEH v13 AI, CPENT, CCISO, CEH v12, CSA, ECIH, ICS/SCADA cybersecurity, WAHS, CHFI v11, CCSE v2, CTIA v2, CBP v2, CND v3, EDRP v3, and CCT v1.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ Ethical hacking, penetration testing, and web security assessment skills",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Ethical hacking, penetration testing, and web security assessment skills including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ SOC monitoring, threat intelligence, and incident handling capabilities",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ SOC monitoring, threat intelligence, and incident handling capabilities including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Forensics investigation and evidence handling practices",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Forensics investigation and evidence handling practices including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ Cloud security engineering and critical infrastructure defense readiness",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Cloud security engineering and critical infrastructure defense readiness including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Network defense, disaster recovery, and operational resilience knowledge",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Network defense, disaster recovery, and operational resilience knowledge including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Leadership pathway from technical defense to CISO-level strategy",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Leadership pathway from technical defense to CISO-level strategy including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
    slug: "redhat-openshift-enterprise-roadmap",
    title: "Red Hat and OpenShift Enterprise Roadmap",
    category: "devops",
    desc: "Integrated 15-course Red Hat and OpenShift roadmap covering RH124, RH134, RH199, RH294, DO180, DO188, DO280, DO288, RH415, AD248, RH436, DO322, CL260, and DO328 for enterprise platform engineering.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Server",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ RHEL 9 system administration and Linux automation workflows",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ RHEL 9 system administration and Linux automation workflows including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ OpenShift cluster operations, upgrades, and production hardening",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ OpenShift cluster operations, upgrades, and production hardening including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Container development using Podman and Kubernetes-native patterns",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Container development using Podman and Kubernetes-native patterns including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "▹ High availability clustering, security hardening, and disaster readiness",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ High availability clustering, security hardening, and disaster readiness including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Storage integration with Ceph and OpenStack environments",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Storage integration with Ceph and OpenStack environments including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "▹ Resilient microservices with service mesh and Istio architectures",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into ▹ Resilient microservices with service mesh and Istio architectures including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
    slug: "show-all-courses-roadmap",
    title: "VMware Private Cloud Professional Roadmap",
    category: "cybersecurity",
    desc: "Integrated 15-course VMware private cloud roadmap covering vSphere, Cloud Foundation, NSX, vSAN, Azure VMware Solution, Kubernetes operations, Aria Automation, Aria Operations, SRM, and SD-WAN design and deployment.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "Cloud Security Roadmap",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into Cloud Security Roadmap including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "AWS Security Specialty",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into AWS Security Specialty including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "Microsoft Azure Security Engineer (AZ-500)",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into Microsoft Azure Security Engineer (AZ-500) including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "Google Cloud Professional Security Engineer",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into Google Cloud Professional Security Engineer including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "Cyber Security Fundamentals",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into Cyber Security Fundamentals including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "Ethical Hacking and Penetration Testing",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into Ethical Hacking and Penetration Testing including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Professional Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "DevSecOps and Automation",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into DevSecOps and Automation including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "Data Protection and Privacy Governance",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into Data Protection and Privacy Governance including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
    slug: "bcs-business-analysis-roadmap",
    title: "Enterprise Cloud and Security Professional Roadmap",
    category: "cybersecurity",
    desc: "Show all selected 15 courses in one page: PL-300, AZ-104, AI-102, AWS Cloud Practitioner, DP-600, AZ-305, CISSP, SC-200, ITIL 4 Foundation, CCNA v2.1, SC-300, AZ-500, AZ-400, DW-101, and AZ-204.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "BCS Foundation Certificate in Business Analysis",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into BCS Foundation Certificate in Business Analysis including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "BCS Practitioner Certificate in Business Analysis Practice",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into BCS Practitioner Certificate in Business Analysis Practice including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "BCS Practitioner Certificate in Requirements Engineering",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into BCS Practitioner Certificate in Requirements Engineering including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "BCS Practitioner Certificate in Modelling Business Processes",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into BCS Practitioner Certificate in Modelling Business Processes including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "BCS Foundation Certificate in Agile",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into BCS Foundation Certificate in Agile including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "BCS Foundation Certificate in IS Project Management",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into BCS Foundation Certificate in IS Project Management including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Professional Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "BCS Foundation Certificate in Business Change",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into BCS Foundation Certificate in Business Change including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "BCS Foundation Certificate in Data Management",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into BCS Foundation Certificate in Data Management including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "BCS Practitioner Certificate in Data Protection",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into BCS Practitioner Certificate in Data Protection including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
    slug: "pmi-project-leadership-roadmap",
    title: "PMI Project, Program and Portfolio Leadership Roadmap",
    category: "project-management",
    desc: "Integrated 15-course PMI roadmap covering PMP, CAPM, PMI-ACP, PgMP, PfMP, PMI-PBA, DASM, DAC, DASSM, PMI-SP, project budgeting, change management, and portfolio management.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Briefcase",
    tiers: [
      {
        level: "Foundational Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "PMP (Project Management Professional)",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into PMP (Project Management Professional) including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "CAPM (Certified Associate in Project Management)",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into CAPM (Certified Associate in Project Management) including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "PMI-ACP (Agile Certified Practitioner)",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into PMI-ACP (Agile Certified Practitioner) including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Associate Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "PgMP & PfMP (Program & Portfolio Management)",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into PgMP & PfMP (Program & Portfolio Management) including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "PMI-PBA (Professional in Business Analysis)",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into PMI-PBA (Professional in Business Analysis) including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "DASM & DASSM (Disciplined Agile Scrum Master)",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into DASM & DASSM (Disciplined Agile Scrum Master) including hands-on enterprise labs and real-world scenarios."
          }
        ]
      },
      {
        level: "Professional Level",
        desc: "Master the core principles and practical skills required at this certification tier.",
        modules: [
          {
            title: "DAC (Disciplined Agile Coach)",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into DAC (Disciplined Agile Coach) including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "Project Budgeting and Cost Control",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into Project Budgeting and Cost Control including hands-on enterprise labs and real-world scenarios."
          },
          {
            title: "Change Management in Projects",
            focus: "Implementation & Architecture",
            duration: "20 Hrs",
            desc: "Comprehensive deep-dive into Change Management in Projects including hands-on enterprise labs and real-world scenarios."
          }
        ]
      }
    ]
  },
  {
    slug: "vmware-private-cloud-professional-roadmap",
    title: "BCS Business Analysis and Architecture Roadmap",
    category: "cybersecurity",
    desc: "Integrated 9-course BCS roadmap covering Business Analysis foundation and practice, enterprise and solution architecture, agile BA, information assurance architecture, business architecture, data management essentials, and IS project management.",
    duration: "40 Hrs",
    mode: "Live",
    level: "Intermediate",
    iconName: "Shield",
    syllabus: [
      "VMware vSphere: Install, Configure, Manage [V8]",
      "VMware vSphere: Optimize and Scale",
      "VMware NSX-T Data Center: Install, Configure, Manage",
      "VMware vRealize Automation: Install, Configure, Manage",
      "VMware vSAN: Deploy and Manage",
      "VMware Horizon: Deploy and Manage",
      "VMware Cloud Foundation: Management and Operations",
      "Advanced Troubleshooting for vSphere"
    ]
  }
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find(p => p.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

export function getProgramsByCategory(categorySlug: string): Program[] {
  return programs.filter(p => p.category === categorySlug);
}
