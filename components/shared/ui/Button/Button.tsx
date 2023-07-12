import { CSSProperties, ReactNode } from 'react';
import styles from './Button.module.css';

export type Props = {
  children: ReactNode;
  style?: CSSProperties;
  variant?: 'filled' | 'outlined';
};

export const Button: React.FC<Props> = ({
  style,
  variant = 'filled',
  children,
}) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} style={style}>
      {children}
    </button>
  );
};
