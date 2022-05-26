import { InputProps } from "../types/inputProps";
import styles from "./Input.module.css";

export function Input({ label, name, ...props }: InputProps) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input className={styles.input} id={name} name={name} {...props} />
      <p className={styles.error}>Error</p>
    </div>
  );
}
