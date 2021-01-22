module.exports = {
  //-- SITE SETTINGS -----
  author: 'Melissa Wong',
  siteTitle: "Melissa's Developer Portfolio",
  siteShortTitle: 'Melissa Wong',
  siteDescription: 'Personal portfolio of Melissa Wong',
  siteUrl: 'https://melissawong.com',
  siteLanguage: 'en_US',
  siteIcon: 'content/initialM.png',
  seoTitleSuffix: 'Full Stack Developer Portfolio',

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: '#000000',
      secondary: '#59EAD2',
      tertiary: '#FF00FF',
      text: '#000000',
      subtext: '#555555',
      background: '#FFFFFF',
      card: '#FFFFFF',
      scrollBar: 'rgba(0, 0, 0, 0.5)',
      boxShadow: 'rgba(0, 0, 0, 0.16)',
      boxShadowHover: 'rgba(0, 0, 0, 0.32)'
    },
    darkTheme: {
      primary: '#FAFAFA',
      secondary: '#59EAD2',
      tertiary: '#FF00FF',
      text: 'rgba(255, 255, 255, 0.87)',
      subtext: '#AAAAAA',
      background: '#121212',
      card: '#1C1C1C',
      scrollBar: 'rgba(255, 255, 255, 0.5)',
      boxShadow: 'rgba(0, 0, 0, 0.16)',
      boxShadowHover: 'rgba(0, 0, 0, 0.32)'
    }
  },
  fonts: {
    primary: 'Roboto, Arial, sans-serif'
  },

  //-- ARTICLES SECTION SETTINGS -----
  mediumRssFeed:
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40melissakw',

  shownArticles: 2,

  //-- SOCIAL MEDIA SETTINGS -----
  socialMedia: [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/melissa-wong-91001129/'
    },
    {
      name: 'Github',
      url: 'https://github.com/melissakw'
    }
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: 'About Me',
        url: '/#about'
      },
      {
        name: 'Articles',
        url: '/#articles'
      },
      {
        name: 'Projects',
        url: '/#projects'
      }
    ],
    button: {
      name: 'Contact',
      url: '/#contact'
    }
  }
};
