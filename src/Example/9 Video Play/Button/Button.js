import clsx from "clsx";
import styles from "./Button.module.css";

export default function Button({ primary }) {
  const classes = clsx(styles.button, {
    [styles.primary]: primary,
  });

  return <button className={classes}>Hello world</button>;
}
