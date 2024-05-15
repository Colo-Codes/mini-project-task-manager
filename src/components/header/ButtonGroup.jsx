import PropTypes from 'prop-types';
import styles from './styles/ButtonGroup.module.css';

export default function ButtonGroup({ buttonGroupData }) {
  const buttonElements = Object.entries(buttonGroupData).map(
    ([key, { textPrimary, textSecondary, onClick }]) => (
      <button key={key} className={styles[`${key}Button`]} onClick={onClick}>
        <span className={styles.primaryText}>{textPrimary}</span>
        <span className={styles.secondaryText}>{textSecondary}</span>
      </button>
    ),
  );

  return buttonElements;
}

ButtonGroup.propTypes = {
  buttonGroupData: PropTypes.shape({
    left: PropTypes.shape({
      textPrimary: PropTypes.string.isRequired,
      textSecondary: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    }).isRequired,
    centerGroup: PropTypes.shape({
      textPrimary: PropTypes.string.isRequired,
      textSecondary: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    }),
    right: PropTypes.shape({
      textPrimary: PropTypes.string.isRequired,
      textSecondary: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
};
