import { useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

import Logo from './components/logo'
import Footer from './components/footer'
import Statistics from './components/statistics'

export default {
    logo: <Logo wordmark={false} label={true} />,
    footer: {
        text: <Footer />,
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
    head: () => {
        const { asPath, defaultLocale, locale } = useRouter()
        const { frontMatter } = useConfig()
        const url =
            'https://avoku.github.io' +
            (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

        return (
            <>
                <meta property="og:url" content={url} />
                <meta
                    property="og:title"
                    content={frontMatter.title || 'Avoku'}
                />
                <meta
                    property="og:description"
                    content={
                        frontMatter.description ||
                        'Documentation page for the ranked bot.'
                    }
                />
            </>
        )
    },
}
