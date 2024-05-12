import styles from './styles/Header.module.css';
export default function Header() {
  return (
    <header>
      <div className={styles.titleContainer}>
        <h1>TaskManager</h1>
      </div>
      <div className={styles.myAndAllTasksContainer}>
        <button className={styles.myTasksButton}>My Tasks</button>
        <button className={styles.allTasksButton}>All Tasks</button>
      </div>

      <div className={styles.addTaskContainer}>
        <button className={styles.addTaskButton}>Add Task</button>
      </div>
    </header>
  );
}