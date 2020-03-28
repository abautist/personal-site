import { ThemeProvider } from 'pcln-design-system'
import Layout from '../components/Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
