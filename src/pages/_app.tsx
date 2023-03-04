import type { AppProps } from 'next/app'
import '../styles/global.scss';
// import '../styles/header.module.scss';
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
