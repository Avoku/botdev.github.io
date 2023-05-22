import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

export default {
  logo: (
    <>
      <img src="logo.svg" width={32} height={32} />
      <h1 style={{ fontSize: 21, marginLeft: 5, fontWeight: 600 }}>Developer</h1>
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
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://nextra.site" target="_blank">
          Nextra
        </a>
        .
      </span>
    )
  },
  project: {
    link: "https://github.com/avoku/docs",
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://my-app.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Nextra'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'The next site builder'}
        />
      </>
    )
  }
};
