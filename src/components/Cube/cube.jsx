import styles from './Cube.module.css';

export const Cube = () => {
  return (
    <div className={styles.scene}>
      <div className={styles.cube}>
        <div className={styles.front}></div>
        <div className={styles.back}></div>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
        <div className={styles.top}></div>
        <div className={styles.bottom}></div>
      </div>
    </div>
  );
};