// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-resume",
          title: "Resume",
          description: "Explore my skills, experience, and achievements in data science, machine learning, and software development. Download the full PDF to learn more.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-aventis-tech",
          title: "Aventis-Tech",
          description: "Materials for courses you taught. Replace this text with your description.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https:/aventis-tech.github.io/";
          },
        },{id: "nav-contacts",
          title: "Contacts",
          description: "Get in touch for collaborations, inquiries, or a chat about data science.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contacts/";
          },
        },{id: "dropdown-forms",
              title: "Forms",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-github",
              title: "GitHub",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-people",
              title: "People",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "post-eda-on-us-road-accident-2016-2023",
      
        title: "EDA on US Road Accident (2016-2023)",
      
      description: "A Step by step guied on Exploratory Data Analysis",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/:2025/eda-on-us-road-accident-2016-2023/";
        
      },
    },{id: "post-install-jupyter-on-windows",
      
        title: "Install Jupyter on Windows",
      
      description: "Description for jupyter installation is coming soon...!",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/:2025/jupyter-installation-on-windows/";
        
      },
    },{id: "post-install-python-on-windows",
      
        title: "Install Python on Windows",
      
      description: "Python is a versatile programming language widely used in data analysis, web development, and more. This guide explains how to install the latest version.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/:2025/python-installation-on-windows/";
        
      },
    },{id: "post-a-post-with-jupyter-notebook",
      
        title: "a post with jupyter notebook",
      
      description: "an example of a blog post with jupyter notebook",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/:2025/jupyter-notebook/";
        
      },
    },{id: "post-blog",
      
        title: "Blog",
      
      description: "an example of a blog post with custom blockquotes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/:2025/blog/";
        
      },
    },{id: "post-a-distill-style-blog-post",
      
        title: "a distill-style blog post",
      
      description: "an example of a distill-style blog post and main elements",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/:2025/distill/";
        
      },
    },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-blinkit-grocery-analysis-in-excel",
          title: 'BlinkIT - Grocery Analysis in Excel',
          description: "To conduct a comprehensive analysis of Blinkit&#39;s sales to identify key insights using various KPIs and visualizations in Excel.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Blinkit_Grocery_Analysis_Excel/";
            },},{id: "projects-sql-project-1-retail-sales-analysis",
          title: 'SQL Project 1 - Retail Sales Analysis',
          description: "This project is ideal for beginners looking to build a solid foundation in SQL.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Retail_Sales_Analysis_SQL_Project_1/";
            },},{id: "projects-vrinda-store-data-analysis-in-excel",
          title: 'Vrinda Store - Data Analysis in Excel',
          description: "This project involves analyzing sales data for Vrinda Store from 2022.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Vrinda_Store_Data_Analysis_Excel/";
            },},{id: "projects-eda-on-us-road-accident-2016-2023",
          title: 'EDA on US Road Accident (2016-2023)',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/eda-on-us-road-accident-2016-2023/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6E%6D%6D%61%73%68%75%64%31%32%33@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-facebook',
        title: 'Facebook',
        section: 'Socials',
        handler: () => {
          window.open("https://facebook.com/anmmashud01", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/anmmashud", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-kaggle',
        title: 'Kaggle',
        section: 'Socials',
        handler: () => {
          window.open("https://www.kaggle.com/anmmashud", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-telegram',
        title: 'telegram',
        section: 'Socials',
        handler: () => {
          window.open("https://telegram.me/anmmashud", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@youtube.com/@anmmashud", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
