import "../styles/globals.css";
import Layout from "../Components/Layout"
import "bootstrap/dist/css/bootstrap.min.css";
import SSRProvider from "react-bootstrap/SSRProvider";
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <SSRProvider>
        <Component {...pageProps} />;
      </SSRProvider>
    </Layout>
  );

}
