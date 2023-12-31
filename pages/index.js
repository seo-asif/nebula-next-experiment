import Head from "next/head";

import styles from "../styles/Home.module.css";
import Image from "next/image";
import plane from "../public/plane.webp";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Home() {
  const session = useSession();
  console.log(session);

  if (session.data == null) {
    return <button onClick={() => signIn()}> Login</button>;
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>Hello Welcome </div>
      <Image src={plane} alt="image" height={500} width={700} />
      <button onClick={() => signOut()}>SignOut</button>
    </div>
  );
}
