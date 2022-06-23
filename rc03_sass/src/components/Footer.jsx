import footerStyle from "../scss/modules/footer.module.scss";

const Footer = () => {
  return (
    <footer className={footerStyle["footer"]}>
      <p className={footerStyle["title"]}>
        Copyright by 0xkiichiro {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
