import { CSSProperties, ReactNode } from 'react';
import styles from './Button.module.css';

export type Props = {
  children: ReactNode;
  style?: CSSProperties;
  variant?: 'filled' | 'outlined';
  colorScheme?: 'primary' | 'secondary';
};

export const Button: React.FC<Props> = ({
  style,
  variant = 'filled',
  colorScheme = 'primary',
  children,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[colorScheme]}`}
      style={style}
    >
      {children}
    </button>
  );
};
