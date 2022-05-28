import { InputProps } from "../types/InputProps";
import styles from "./Input.module.css";

export function Input({
  label,
  name,
  value,
  onChange,
  error,
  ...props
}: InputProps) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
      <p className={styles.error}>{error}</p>
    </div>
  );
}
