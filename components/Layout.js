import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

//  The layout which takes care of placing the navbar above
// the main content and the footer beneath the main content.
// Bootstrap styling is applied from here.
const layout = (props) => (
  <div className="container">
    <Head>
      <title>Generisk Bank</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
        crossorigin="anonymous"
      />
    </Head>
    <Navbar />
    {props.children}
    <Footer />
  </div>
);

export default layout;
