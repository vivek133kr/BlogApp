import "../styles/globals.css";
import Layout from "../Components/Layout"
import "bootstrap/dist/css/bootstrap.min.css";
import { Roboto } from "next/font/google";
import SSRProvider from "react-bootstrap/SSRProvider";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <SSRProvider>
        {" "}
        <main className={roboto.className}>
          <Component {...pageProps} />
        </main>
      </SSRProvider>
    </Layout>
  );

}
