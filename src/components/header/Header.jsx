import styles from './styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquarePollHorizontal,
  faSquarePlus,
} from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import ButtonGroup from './ButtonGroup';

export default function Header() {
  // TODO: implement proper onClicks
  const buttonGroupData = {
    left: {
      textPrimary: 'My',
      textSecondary: 'Tasks',
      onClick: () => console.log('left clicked'),
    },
    centerGroup: {
      textPrimary: 'Test',
      textSecondary: 'Text',
      onClick: () => console.log('center clicked'),
    },
    right: {
      textPrimary: 'All',
      textSecondary: 'Tasks',
      onClick: () => console.log('right clicked'),
    },
  };

  return (
    <header>
      <div className={styles.titleContainer}>
        <FontAwesomeIcon
          className={styles.logo}
          icon={faSquarePollHorizontal}
        />
        <h1>TaskManager</h1>
      </div>
      <div className={styles.myAndAllTasksContainer}>
        {/* <button className={styles.myTasksButton}>My Tasks</button>
        <button className={styles.allTasksButton}>All Tasks</button> */}
        <ButtonGroup buttonGroupData={buttonGroupData} />
      </div>

      <div className={styles.addTaskContainer}>
        {/* TODO: implement proper onClick */}
        <Button
          icon={<FontAwesomeIcon icon={faSquarePlus} />}
          text='Add Task'
          onClick={() => console.log('clicked')}
        />
      </div>
    </header>
  );
}
