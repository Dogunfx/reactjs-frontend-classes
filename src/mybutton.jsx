import React from "react";
import { useState } from "react";
import styles from "./button.module.css";

export default function({ disabled }) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    var newCount = count + 1;
    setCount(newCount);
  };
  return (
    <button
      onClick={handleClick}
      className={!disabled ? styles.button : styles.disabled_button}
    >
      Clicked {count} times
    </button>
  );
}
