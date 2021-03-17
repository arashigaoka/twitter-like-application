import 'tailwindcss/tailwind.css';
import type { AppProps /*, AppContext */ } from 'next/app';
import { DatabaseProvider } from '../hooks/use-database';
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <DatabaseProvider>
      <Component {...pageProps} />
    </DatabaseProvider>
  );
}

export default MyApp;
