// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'anmmashud', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'LMI-Tool',
          description:
            'A customizable automation tool for flashing and recovery processes for Xiaomi devices.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/anmmashud/LMI-Tool',
        },
        
      ],
    },
  },
  seo: {
    title: 'Portfolio of A N M Mashud',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'anmmashud',
    twitter: 'anm_mashud',
    mastodon: '',
    researchGate: '',
    facebook: 'anm.mashud.9',
    instagram: 'anmmashud',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: 'anmmashud',
    website: '',
    phone: '01746823075',
    email: 'anmmashud123@gmail.com',
  },
  resume: {
    fileUrl:
      'https://example.com/my-resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },

  skills: [
    'Python',
    'R',
    'Bash',
    'MySQL',
    'Git',
    'GitHub',
    'HTML',
    'Web Pentesting',
  ],

  experiences: [
    {
      company: '',
      position: '',
      from: '',
      to: '',
      companyLink: '',
    },
  ],


  certifications: [
    {
      name: 'HSC: Dept. of Science, GPA-4.83',
      body: 'From Lakshmipur Govt. College, Lakshmipur.',
      year: '2023',
      gpa: '4.83',
      department: 'Science',
      link: '', 
    },
    {
      name: 'SSC: Dept. of Science, GPA-5.00',
      body: 'From Lakshmipur Adarsha Samad Govt. High School, Lakshmipur.',
      year: '2021',
      gpa: '5.00',
      department: 'Science',
      link: '',
    },
    {
      name: 'PSC: GPA-5.00',
      body: 'From Kakoli Shishu Angan, Lakshmipur.',
      year: '2024',
      gpa: '5.00',
      department: '',
      link: '',
    },
  ],

  educations: [
    {
      institution: 'Chittagong College, Chittagong',
      degree: '[BSc] - Bachelor of Science in Statistics',
      from: '2024',
      to: 'Present',
    },
    {
      institution: 'Lakshmipur Govt. College, Lakshmipur',
      degree: '[HSC] - Higher Secondary Certificate in Science',
      from: '2021',
      to: '2022',
    },
    {
      institution: 'Lakshmipur Adarsha Samad Govt. High School, Lakshmipur',
      degree: '[SSC] - Secondary School Certificate in Science',
      from: '2019',
      to: '2020',
    },
    {
      institution: 'Kakoli Shishu Angan, Lakshmipur',
      degree: '[PSC] - Primary School Certificate',
      from: '2015',
      to: '2015',
    },            
  ],


  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '', 
    },

  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'night',
      'forest',
      'synthwave',
      'cupcake',
      'valentine',
      'pastel',
      'halloween',
      'garden',
      'lofi',
      'fantasy',
      'black',
      'luxury',
      'dracula',
      'business',
      'acid',
      'lemonade',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `© 2024 - All rights resered to <a 
      class="text-primary" href="https://github.com/anmmashud"
      target="_blank"
      rel="noreferrer"
    >A N M Mashud</a>`,

  enablePWA: false,
};

export default CONFIG;
