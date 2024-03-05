import Head from "next/head";
import { Menu } from "@/componentes/Menu";
import styles from "../styles/styles.module.css";

export default function Home() {
  return (
    <div className="container-fluid m-0 p-0 h-100">
      <Head>
        <title>Loja Next</title>
      </Head>
      <Menu />
      <main className={styles.main}>
        <h1 className={styles.title}>Página Inicial</h1>
      </main>
    </div>
  );
}
