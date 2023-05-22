import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

export default {
  logo: (
    <>
      <img src="logo.svg" width={32} height={32} />
      <h1 style={{ fontSize: 18, marginLeft: 5, fontWeight: 600 }}>Documentation</h1>
    </>
  ),
  sidebar: {
    titleComponent({ title, type }: { title: string, type: string }) {
      if (type === 'separator') {
        return (
          <div style={{ background: 'cyan', textAlign: 'center' }}>{title}</div>
        )
      }
      if (title === 'About') {
        return <>{title}</>
      }
      return <>{title}</>
    }
  },
  footer: {
    text: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
      <img style={{ opacity: 0.4 }} src="logo.svg" width={32} height={32} />
      <span>
      © {new Date().getFullYear()} {' '}
        <a href="https://bot.hs50.cc">
          Avoku
        </a>
        .
      </span>
      </div>
    )
  },
  project: {
    link: "https://github.com/avoku/avoku.github.io",
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
        <meta property="og:title" content={frontMatter.title || 'Avoku'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Documentation page for all projects made by Avoku.'}
        />
      </>
    )
  }
};
