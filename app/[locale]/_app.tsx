import {IntlProvider} from 'next-intl';


function App({ Component, pageProps }: any) {
  return (
    <IntlProvider locale="es" >
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default App;
