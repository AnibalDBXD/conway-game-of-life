import { appWithTranslation } from 'next-i18next';
import "../common/styles/globals.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
export default appWithTranslation(MyApp);