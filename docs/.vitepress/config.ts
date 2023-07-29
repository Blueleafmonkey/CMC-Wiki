import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CMC Wiki",
  description: "In-depth guide on UE5's CMC",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'CharacterMovementComponent', link: '/CharacterMovementComponent/cmc-header' }
    ],

    sidebar: [
      {
        text: 'CharacterMovementComponent',
        items: [
          { 
            text: 'FSavedMove_Character',
            collapsed: true,
            items: [ 
              { text: 'Header', link: '/CharacterMovementComponent/FSavedMove_Character/header' },
              { text: 'Source', link: '/CharacterMovementComponent/FSavedMove_Character/source' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Blueleafmonkey/CMC-Wiki' }
    ]
  },
  base: '/CMC-Wiki/'
})
