/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import styles from "./form.module.css";

function Form({ cards, setCards }) {
  function handleSubmit(event) {
    event.preventDefault(); // Stops the page from refreshing
    console.log("Form submitted");
    const newFlashcard = {
      question: event.target.question.value,
      answer: event.target.answer.value,
    };
    // Update the parent state with the new flashcard
    setCards([...cards, newFlashcard]);

    // Log the updated cards (optional)
    console.log("Updated cards:", [...cards, newFlashcard]);
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3 className={styles.h3}> Add a new flashcard:</h3>
      <div className={styles.field}>
        <label className={styles.label}>
          Question:
          <input
            className={styles.input}
            type="text"
            name="question"
            placeholder="Enter the question"
          />
        </label>
        <label className={styles.label}>
          Answer:
          <input
            className={styles.input}
            type="text"
            name="answer"
            placeholder="Enter the answer"
          />
        </label>{" "}
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          type="submit"
          className={styles.button}
        >
          Add
        </motion.button>
      </div>
    </form>
  );
}

export default Form;
