import styles from './App.module.css';

export default function App() {
  return (
    <main className={styles.mainContainer}>
      <header className={styles.headerContainer}>This is the header</header>
      <section className={styles.toDoTasksContainer}>
        List of TO DO tasks
      </section>
      <section className={styles.doingTasksContainer}>
        List of DOING tasks
      </section>
      <section className={styles.doneTasksContainer}>
        List of DONE tasks
      </section>
    </main>
  );
}
