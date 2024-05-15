import PropTypes from 'prop-types';
import styles from './styles/Button.module.css';

export default function Button({ icon, text, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <i className={styles.buttonIcon}>{icon}</i>
      <span className={styles.buttonText}>{text}</span>
    </button>
  );
}

Button.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
