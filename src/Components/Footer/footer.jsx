import styles from "./footer.module.css";

function Footer() {
  console.log("I am rendering");
  return (
    <div className={styles.footer}>
      <h2>Copyright Team 8 Mates</h2>
    </div>
  );
}

export default Footer;
