import { Html, Head, Main, NextScript } from 'next/document'
import { Lenis as ReactLenis, useLenis } from '@studio-freight/react-lenis'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <ReactLenis root options={{}}>
        <Main />
        <NextScript />
      </ReactLenis>
      </body>
    </Html>
  )
}
