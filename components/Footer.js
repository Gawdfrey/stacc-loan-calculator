import Logo from "../components/Logo";

var style = {
  position: "relative",
  bottom: "0",
  width: "100%",
  height: "6rem" /* Set the fixed height of the footer here */,
  lineHeight: "60px" /* Vertically center the text there */,
  backgroundColor: "#ffffff",
  marginTop: "5rem",
};

const Footer = () => (
  <footer style={style}>
    <div className="container">
      <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm">
          <div className="row justify-content-center">
            <Logo />
          </div>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </footer>
);

export default Footer;
