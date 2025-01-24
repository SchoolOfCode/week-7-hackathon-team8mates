/* eslint-disable react/prop-types */
import styles from "./Flashcard.module.css";
import { useState } from "react";
import { motion } from "motion/react";

function Flashcard({ question, answer, cardIndex }) {
  const [flipped, setFlipped] = useState(false);

  function handleFlip() {
    setFlipped(!flipped);
  }

  return (
    <motion.div
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.1 }}
      className={`${styles.card} ${flipped ? styles.flipped : ""}`}
      onClick={handleFlip}
    >
      <div className={styles.front}>
        <p>{cardIndex}</p>
        <p className={styles.emoji}>🤔</p>
        <div>{question}</div>
      </div>
      <div className={styles.back}>
        <p>{cardIndex}</p>
        <p className={styles.emoji}>🤓</p>
        <div>{answer}</div>
      </div>
    </motion.div>
  );
}

export default Flashcard;
