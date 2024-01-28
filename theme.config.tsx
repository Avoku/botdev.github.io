import { useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

import Logo from './components/logo'
import Footer from './components/footer'
import Statistics from './components/statistics'

export default {
    logo: <Logo />,
    footer: {
        text: <Footer />
    },
    useNextSeoProps() {
        return {
          titleTemplate: '%s | Avoku'
        }
      },
    project: {
        link: 'https://github.com/avoku/avoku.github.io',
    },
    chat: {
        link: 'https://discord.gg/zKe7dW7Z3T',
    },
    sidebar: {
        defaultMenuCollapseLevel: 1,
        toggleButton: true,
    },
    toc: {
        extraContent: <Statistics />,
    },
    nextThemes: {
        defaultTheme: 'dark'
    }
}
