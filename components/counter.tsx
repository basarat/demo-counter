import { useState } from 'react';
import styles from './counter.module.css';

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const inc = () => setCount(count => count + 1);
  const dec = () => setCount(count => count - 1);
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={dec}>-</button>
      <div className={styles.count}>{count}</div>
      <button className={styles.button} onClick={inc}>+</button>
    </div>
  );
}