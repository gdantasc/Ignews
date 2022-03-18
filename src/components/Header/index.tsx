import styles from "./styles.module.scss";
import Image from "next/image";
import logoSvg from "../../../public/logo.svg";
import { SigninButton } from "../SigninButton";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logoSvg} alt=" ig.news" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
        <SigninButton />
      </div>
    </header>
  );
}
