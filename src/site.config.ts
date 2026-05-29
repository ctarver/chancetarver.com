export const site = {
  name: 'Chance Tarver',
  title: 'Chance Tarver',
  tagline: 'Wireless systems and DSP at Samsung Research America.',
  role: 'Senior Staff Research Engineer',
  org: 'Samsung Research America',
  url: 'https://chancetarver.com',
  // Burner alias routed via Cloudflare Email Routing to a private inbox.
  // To change: edit here, then update the CF Email Routing rule.
  email: 'hello@chancetarver.com',
  description:
    'Personal site of Chance Tarver, Senior Staff Research Engineer at Samsung Research America. Wireless systems, DSP, digital predistortion, and MIMO.',
  social: {
    github: 'https://github.com/ctarver',
    linkedin: 'https://www.linkedin.com/in/chance-tarver-93299466',
    scholar: 'https://scholar.google.com/citations?user=Ugx0hjwAAAAJ',
    orcid: '',
  },
  nav: [
    { label: 'About', href: '/about' },
    { label: 'Publications', href: '/publications' },
    { label: 'Projects', href: '/projects' },
    { label: 'Posts', href: '/posts' },
    { label: 'CV', href: '/cv.pdf' },
  ],
  links: {
    samsungResearch: 'https://research.samsung.com/sra',
    rice: 'https://www.rice.edu/',
    louisianaTech: 'https://www.latech.edu/',
    lockheedMartin: 'https://www.lockheedmartin.com/',
    cavallaro: 'https://cavallaro.rice.edu/',
  },
  experience: [
    {
      org: 'Samsung Research America',
      url: 'https://research.samsung.com/sra',
      period: '2017–Present',
      roles: [
        {
          title: 'Senior Staff Research Engineer',
          period: '2026–Present',
          summary:
            'Manage the Platform Innovation Team within the Advanced MIMO Lab. Drive GPU-based AI-RAN testbed development on a cuBB DU with a proprietary MIMO RU, and lead AI-based digital predistortion work for a high-efficiency PA architecture targeting commercial radio units.',
        },
        {
          title: 'Staff Research Engineer',
          period: '2023–2026',
          summary:
            'Led precommercial development of an upper mid-band (FR3) 256-TRX massive MIMO platform. Coordinated a global cross-functional effort from architecture through lab validation and reported progress to senior leadership.',
        },
        {
          title: 'Senior Systems Design / Architecture Engineer',
          period: '2020–2023',
          summary:
            'Three concurrent projects across cross-functional teams: sub-band full-duplex (digital SIC and massive-MIMO DPD, simulation through FPGA/RF integration to field evaluation, meeting 5G emission requirements), satellite NR (RACH/HARQ modifications in srsLTE C++, validated on USRP with a channel emulator), and distributed-MIMO field testing for channel reciprocity and calibration.',
        },
        {
          title: 'RF and PoC Intern',
          period: '2017 · 2019',
          summary:
            'GPU-accelerated LDPC decoder enabling real-time vRAN. LTE spectrum-sharing tools in the CBRS band on LabVIEW Communications and USRP, demonstrating dynamic spectrum access.',
        },
      ],
    },
    {
      org: 'Lockheed Martin',
      url: 'https://www.lockheedmartin.com/',
      period: 'Summer 2016',
      roles: [
        {
          title: 'College Student Tech SR. Specialist, Intern',
          period: 'May–Aug 2016',
          summary:
            'Cyber Solutions IRAD group in Hanover, MD. Designed and delivered a real-time wireless sensing application in GNU Radio on SDR. Working prototype within a single internship term.',
        },
      ],
    },
    {
      org: 'Rice University',
      url: 'https://www.rice.edu/',
      period: '2014–2022',
      roles: [
        {
          title: 'Ph.D. in Electrical & Computer Engineering',
          period: '2016–2022',
          summary:
            'Advised by <a class="link-quiet" href="https://cavallaro.rice.edu/" target="_blank" rel="noopener noreferrer">Joseph R. Cavallaro</a>. Dissertation: "Nonlinearity Correction in Massive MIMO Systems via Virtual DPD." Built a neural-network predistortion architecture that operates before precoding in massive MIMO, cutting per-antenna complexity while preserving linearity, validated in simulation and on GPU.',
        },
        {
          title: 'M.S. in Electrical & Computer Engineering',
          period: '2014–2016',
          summary:
            'Thesis: "Sub-band Digital Predistortion for Noncontiguous Carriers: Implementation and Testing." Reduced-complexity, reduced-sample-rate DPD for LTE carrier aggregation.',
        },
      ],
    },
    {
      org: 'Louisiana Tech University',
      url: 'https://www.latech.edu/',
      period: '2010–2014',
      roles: [
        {
          title: 'B.S. in Electrical Engineering',
          period: '2010–2014',
          summary:
            'Senior design: 250 W HF Type-AB broadband power amplifier with 12 dB gain. Design, fabrication, and analysis.',
        },
        {
          title: 'B.S. in Mathematics',
          period: '2010–2014',
          summary: 'Advanced study of linear algebra and analysis.',
        },
      ],
    },
  ],
} as const;

export type SiteConfig = typeof site;
