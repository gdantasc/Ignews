import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";

export function SignInButton() {
  const { data: session } = useSession();

  return session ? (
    <button
      type="button"
      className={styles.signinButton}
      onClick={() => signOut()}
    >
      <FaGithub color="#04d361"></FaGithub>
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon}></FiX>
    </button>
  ) : (
    <button
      type="button"
      className={styles.signinButton}
      onClick={() => signIn("github")}
    >
      <FaGithub color="#eba417"></FaGithub>
      Sign In with GitHub
    </button>
  );
}
