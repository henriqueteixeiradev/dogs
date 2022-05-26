import { ButtonProps } from "../types/ButtonProps";
import styles from "./Button.module.css";

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}
