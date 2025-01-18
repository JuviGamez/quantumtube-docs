import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "QuantumTube Docs",
  description: "Documentation for QuantumTube",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/what-is-quantumtube' }
    ],
    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'What is QuantumTube?', link: '/what-is-quantumtube' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Architecture', link: '/architecture' },
          { text: 'API Reference', link: '/api' },
          { text: 'Services', link: '/services' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/JuviGamez/quantumtube' }
    ]
  }
}) 