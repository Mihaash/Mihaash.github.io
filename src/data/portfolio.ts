export const NAV_LINKS: { label: string; href: string; external?: boolean }[] = [
  { label: 'Home', href: '#header' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#portfolio' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: 'https://drive.google.com/file/d/1ZSd3k1JiLyvS7suwvkWYEuvF4fPKgEGP/view?usp=sharing', external: true },
  { label: 'Contact', href: '#contacts' },
]

export const SOCIAL_LINKS = [
  { icon: 'linkedin', url: 'https://www.linkedin.com/in/mihaash-dharan/' },
  { icon: 'github', url: 'https://github.com/Mihaash' },
  { icon: 'email', url: 'mailto:mihaashdharan68@gmail.com' },
] as const

export const TYPING_WORDS = ['Web Developer', 'DevOps', 'Linux Explorer']

export const INTERESTS = [
  { icon: 'globe', label: 'Web Development' },
  { icon: 'shield', label: 'Penetration Testing' },
  { icon: 'linux', label: 'Linux Explorer' },
  { icon: 'user-secret', label: 'DevOps' },
] as const

export const EDUCATION = [
  {
    image: '/assets/img/education/College Logo.png',
    school: 'Sri Shakthi Institute of Engineering & Technology',
    year: '2023 \u2013 2027',
    degree: 'B.E. Computer Science & Engineering (Cyber Security)',
  },
  {
    image: '/assets/img/certification/44360eb7-22d2-49d3-ba0b-63552fa67b8b.png',
    school: 'The R.V. Matriculation Higher Secondary School',
    year: '2022 \u2013 2023',
    degree: 'Higher Secondary Education \u2014 Grade: 72.6',
  },
]

export const CERTIFICATIONS = [
  { image: '/assets/img/certification/ctf.jpg', title: 'LYKNCTF -2026' },
  { image: '/assets/img/certification/API Security.jpeg', title: 'Certified API Security Analyst (CASA)' },
  { image: '/assets/img/certification/1772197685571.jpeg', title: 'HackQuest 2K26 \u2013 CyberHeals & Jamal Mohamed' },
  { image: '/assets/img/certification/1771571897051.jpeg', title: 'OXfunctf' },
  { image: '/assets/img/certification/IMG_20250822_112657.jpg', title: 'Dhruva 2025 \u2013 Karpagam College' },
  { image: '/assets/img/certification/714023107058_6.png', title: 'HackQuest 2K25 \u2013 CyberHeals & Jamal Mohamed' },
  { image: '/assets/img/certification/IMG_20250822_112629.jpg', title: 'Exploit-X CTF \u2013 KPR Institute' },
  { image: '/assets/img/certification/IMG_20250822_121050.jpg', title: 'ROOT@W4R CTF 2025 \u2013 PSNA College' },
  { image: '/assets/img/certification/714023107058.jpg', title: 'Publication in Journal' },
  { image: '/assets/img/certification/714023107058_1.jpg', title: 'Linux 100: Fundamentals \u2013 TCM Security' },
  { image: '/assets/img/certification/714023107058_3.jpg', title: 'TryHackMe' },
  { image: '/assets/img/certification/vapt.jpg', title: 'VAPT \u2013 Udemy' },
  { image: '/assets/img/certification/ec.png', title: 'EC-Council' },
  { image: '/assets/img/certification/ecsql.png', title: 'EC-Council SQL' },
  { image: '/assets/img/certification/root.jpeg', title: 'Rootcipher' },
  { image: '/assets/img/certification/bash.jpg', title: 'Bash Scripting \u2013 Udemy' },
  { image: '/assets/img/certification/certificate-crpo-certified-ransomware-protection-officer-Mihaash.jpg', title: 'CRPO \u2013 Certified Ransomware Protection Officer' },
  { image: '/assets/img/certification/docker.jpg', title: 'Docker \u2013 Udemy' },
  { image: '/assets/img/certification/tryhackme.jpg', title: 'TryHackMe Badge' },
  { image: '/assets/img/certification/jenkins.jpg', title: 'Jenkins - Udemy' },
  { image: '/assets/img/certification/Kubernetes.jpg', title: 'Kubernetes \u2013 Udemy' },
  { image: '/assets/img/certification/Chaitanya CTF.png', title: 'Chaitanya CTF' },
  { image: '/assets/img/certification/Amrita Vishwa ctf.jpg', title: 'Amrita Vishwa CTF' },
  { image: '/assets/img/certification/workshop.jpg', title: 'Workshop Certificate' },
]

export const PROJECTS = [
  {
    id: 'malware-capy',
    image: '/assets/img/project/image.png',
    title: 'Malware-capy',
    slug: 'project2',
  },
  {
    id: 'static-analysis',
    image: '/assets/img/project/Screenshot3.png',
    title: 'Multi-Tool Static Code Analysis and Security Dashboard',
    slug: 'project1',
  },
  {
    id: 'threat-intel',
    image: '/assets/img/project/threat.png',
    title: 'Threat Intelligence Dashboard',
    slug: 'project4',
  },
  {
    id: 'url-analyzer',
    image: '/assets/img/project/url_detect.png',
    title: 'The URL Analyzer',
    slug: 'project3',
  },
]

export const LANGUAGES = [
  { name: 'Python', logo: 'https://www.vectorlogo.zone/logos/python/python-horizontal.svg' },
  { name: 'Java', logo: 'https://www.vectorlogo.zone/logos/java/java-horizontal.svg' },
  { name: 'HTML5', logo: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg' },
  { name: 'CSS3', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
  { name: 'MySQL', logo: 'https://www.vectorlogo.zone/logos/mysql/mysql-horizontal.svg' },
]

export const SECURITY_TOOLS = [
  { name: 'Nmap', logo: 'https://nmap.org/images/nmap-logo-256x256.png' },
  { name: 'Nikto', logo: 'https://avatars.githubusercontent.com/u/8257440?s=200&v=4' },
  { name: 'SQLmap', logo: 'https://www.kali.org/tools/sqlmap/images/sqlmap-logo.svg' },
  { name: 'Hydra', logo: 'https://www.kali.org/tools/hydra/images/hydra-logo.svg' },
  { name: 'John the Ripper', logo: 'https://www.kali.org/tools/john/images/john-logo.svg' },
  { name: 'Gobuster', logo: 'https://www.kali.org/tools/gobuster/images/gobuster-logo.svg' },
  { name: 'Burp Suite', logo: 'https://www.svgrepo.com/show/454430/burpsuite-security-software.svg' },
  { name: 'Wireshark', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Wireshark_icon.svg' },
]

export const DEVOPS_TOOLS = [
  { name: 'Git', logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg' },
  { name: 'GitHub', logo: 'https://www.vectorlogo.zone/logos/github/github-ar21.svg' },
  { name: 'Docker', logo: 'https://www.vectorlogo.zone/logos/docker/docker-official.svg' },
  { name: 'Kubernetes', logo: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-ar21.svg' },
  { name: 'Jenkins', logo: 'https://www.vectorlogo.zone/logos/jenkins/jenkins-ar21.svg' },
  { name: 'AWS', logo: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg' },
  { name: 'Maven', logo: 'https://www.vectorlogo.zone/logos/apache_maven/apache_maven-ar21.svg' },
]

export interface ProjectDetail {
  title: string
  subtitle: string
  badges?: string[]
  sections: {
    icon: string
    heading: string
    content: string[]
  }[]
  github?: string
  feedLines?: { time: string; source: string; severity: string; url: string }[]
  verdicts?: { url: string; verdict: 'SAFE' | 'NOT SAFE' }[]
}

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  project1: {
    title: 'Multi-Tool Static Code Analysis Dashboard',
    subtitle: 'Unified platform to scan source code using multiple security tools and visualize results in one dashboard.',
    sections: [
      { icon: 'rocket', heading: 'Key Features', content: ['Upload source code (file / ZIP)', 'Runs multiple analyzers automatically', 'Aggregated results dashboard', 'Severity classification (Critical / Warning / OK)', 'Downloadable HTML & PDF reports'] },
      { icon: 'tools', heading: 'Integrated Tools', content: ['Bandit, Semgrep, ESLint, Checkov, Flawfinder, PMD, Gitleaks, TruffleHog, Hadolint, TFLint, Yamllint, and more.'] },
      { icon: 'cog', heading: 'Workflow', content: ['Upload code (file or ZIP)', 'Auto-detect file types', 'Run relevant security tools', 'Classify findings by severity', 'Display results in dashboard'] },
      { icon: 'shield', heading: 'Security Impact', content: ['Detects vulnerabilities & weak cryptography', 'Finds hardcoded secrets (API keys, tokens)', 'Identifies insecure configurations', 'Improves code quality & security posture'] },
    ],
    github: 'https://github.com/Mihaash/Multi-Tool-Static-Code-Analysis-and-Security-Dashboard',
  },
  project2: {
    title: 'Malware-Capy',
    subtitle: 'Automated malware analysis system using YARA and CAPA for fast detection and behavioral insights.',
    sections: [
      { icon: 'info', heading: 'Overview', content: ['Malware-Capy is a framework that automates malware detection and analysis using signature-based scanning and capability extraction. It helps security teams quickly identify threats and understand malicious behavior.'] },
      { icon: 'cog', heading: 'Key Features', content: ['YARA-based malware detection', 'CAPA capability analysis (behavior insights)', 'Automated analysis pipeline', 'File hash generation (MD5 / SHA256)', 'Structured report generation'] },
      { icon: 'brain', heading: 'Detected Capabilities', content: ['Keylogging behavior', 'Persistence mechanisms', 'Network communication', 'Encryption & obfuscation'] },
      { icon: 'tasks', heading: 'Workflow', content: ['Upload suspicious file', 'Generate file hash', 'Run YARA scan', 'Run CAPA analysis', 'Aggregate results', 'Generate final report'] },
      { icon: 'shield', heading: 'Use Cases', content: ['SOC malware triage', 'Threat intelligence analysis', 'Incident response automation', 'File reputation checking'] },
      { icon: 'tools', heading: 'Tech Stack', content: ['Python (Flask/FastAPI), YARA, CAPA, HTML, CSS, JavaScript, Hashlib, Subprocess'] },
    ],
  },
  project3: {
    title: 'The URL Analyzer',
    subtitle: 'A web-based URL safety analyser that lets users paste any link and instantly receive a Safe or Not Safe verdict.',
    badges: ['Flask', 'tldextract', 'Bootstrap', 'Regex'],
    sections: [
      { icon: 'search', heading: 'Overview', content: ['The tool inspects domain structure, TLD reputation, and pattern signatures to flag phishing sites, malware distributors, spam links, and suspicious domains \u2014 before the user ever clicks.'] },
      { icon: 'alert-triangle', heading: 'Threat Detection Categories', content: ['Phishing Sites: Detects spoofed login pages and credential-harvesting domains.', 'Malware / Virus: Flags URLs serving known malicious payloads.', 'Spam / Scam Links: Identifies spam domains and lottery scams.', 'Suspicious Domains: Catches newly registered or typosquatted domains.'] },
    ],
    github: 'https://github.com/Mihaash/Malicious-url-detection',
    verdicts: [
      { url: 'https://github.com/torvalds/linux', verdict: 'SAFE' },
      { url: 'hxxp://secure-login-verify.xyz/account', verdict: 'NOT SAFE' },
    ],
  },
  project4: {
    title: 'Threat Intelligence Dashboard',
    subtitle: 'Collects malicious URL data from threat feeds including Abuse.ch, stores entries in a structured database, and visualises threat trends.',
    badges: ['Python', 'Flask', 'APScheduler', 'MySQL'],
    sections: [
      { icon: 'eye', heading: 'Overview', content: ['The system updates every minute via a scheduled job and is designed to support actionable threat response \u2014 including automatic detection and blocking through firewall integration.'] },
      { icon: 'list', heading: 'Key Features', content: ['60-second auto-refresh from threat feeds', 'Firewall integration for automatic blocking', 'Threat visualisation dashboard', 'Database persistence for historical analysis'] },
    ],
    github: 'https://github.com/Mihaash/threat-intel-dashboard',
    feedLines: [
      { time: '00:01:22', source: 'abuse.ch/urlhaus', severity: 'HIGH', url: 'hxxp://194.165.16.28/bins/arm7' },
      { time: '00:01:19', source: 'abuse.ch/urlhaus', severity: 'MED', url: 'hxxps://malware-cdn.ru/payload.exe' },
      { time: '00:01:14', source: 'abuse.ch/feodo', severity: 'HIGH', url: 'hxxp://45.142.212.100/c2/gate.php' },
      { time: '00:01:05', source: 'abuse.ch/bazaar', severity: 'HIGH', url: 'hxxp://103.75.186.122/agent.bin' },
    ],
  },
}
