// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Some stuff I&#39;ve done...with varying levels of both pride and effort (page is a work in progress)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-rediscovering-the-tetons",
        
          title: "Rediscovering the Tetons",
        
        description: "Some classics in one of America&#39;s most famous national parks",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/Tetons_Trip/";
          
        },
      },{id: "post-a-long-day-on-the-eastside-aren-39-t-they-all",
        
          title: "A Long Day on the Eastside (aren&#39;t they all)",
        
        description: "A creative linkup and some thoughts on ego in the mountains",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/firstpost/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
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
          section: "News",},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-airbrakes-material-selection",
          title: 'Airbrakes Material Selection',
          description: "Comprehensive material selection analysis for rocket airbrakes",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Airbrakes_Materials_selection/";
            },},{id: "projects-the-usual-ish-cylinder-project",
          title: 'The Usual(ish) Cylinder Project',
          description: "Unsteady Flow around an Infinite Cylinder...with a bit of extra effort 🤷",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CylinderProject/";
            },},{id: "projects-biconvex-airfoil-project",
          title: 'Biconvex Airfoil Project',
          description: "Comparing supersonic airfoil analysis methods for the GU2 airfoil",
          section: "Projects",handler: () => {
              window.location.href = "/projects/compressible_airfoils/";
            },},{id: "projects-spatula-selection",
          title: 'Spatula Selection',
          description: "In case you needed a materials and manufacturing analysis for a spatula",
          section: "Projects",handler: () => {
              window.location.href = "/projects/spatula_selection/";
            },},{id: "projects-carbon-fiber-naca-0012",
          title: 'Carbon Fiber NACA 0012',
          description: "Analyzing and manufacturing a carbon fiber wing for Aerospace Structures II",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wing_carbon/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%61%63%68%73%65%6C%7A%6D%61%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/zachsstms", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/zach-s-87ba23290", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.chess.com/member/zachsstms", "_blank");
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
