import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.page__container}>
      <div className={styles.page__content}>
        <h1 className={styles.page__heading}>Bryan Haskin</h1>
        <p>
          <strong>Coder</strong> | <strong>Sailor</strong> | <strong>Explorer</strong>
        </p>
      </div>
    </main>
  );
}
