import styles from "./Flashcard.module.css";
import { useState } from "react";
import { motion } from "framer-motion";


function Flashcard({ question, answer, cardIndex, onDelete }) {

  const [flipped, setFlipped] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ question, answer });


  // Toggles the flipped state

  function handleFlip() {
    setFlipped(!flipped);
  }

  // Toggles edit mode
  function handleEdit() {
    setEditMode((prev) => !prev);
  }

  // Handles saving the updated question/answer
  function handleSave(e) {
    e.preventDefault();
    setEditMode(false); // Exit edit mode after saving
  }

  return (
    <motion.div
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.1 }}
//
      className={`${styles.card} ${flipped ? styles.flipped : ""}`}
      onClick={!editMode ? handleFlip : undefined} // Disable flipping in edit mode
    >
      {editMode ? (
        <form onSubmit={handleSave}>
          <button type="submit" className={styles.saveButton}>
            ✔️
          </button>
          <div className={styles.formGroup}>
            <label>
              Question:
              <input
                type="text"
                className={styles.input}
                name="question"
                value={formData.question}
                onChange={(e) =>
                  setFormData({ ...formData, question: e.target.value })
                }
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>
              Answer:
              <input
                type="text"
                className={styles.input}
                name="answer"
                value={formData.answer}
                onChange={(e) =>
                  setFormData({ ...formData, answer: e.target.value })
                }
              />
            </label>
          </div>
        </form>
      ) : (
        <>
          <div className={styles.buttonGroup}>
          <button className={styles.editButton} onClick={handleEdit}>
            {editMode ? "✔️" : "✏️"}
          </button>
          <button
            type="button"
            className={styles.deleteButton}
            onClick={onDelete}
          >
            ❌
          </button>
          </div>
          <div className={styles.front}>
        <p>{cardIndex}</p>
        <p className={styles.emoji}>🤔</p>
        <div>{flipped ? formData.answer : formData.question}</div>
       // <div>{question}</div>
      </div>
      <div className={styles.back}>
        <p>{cardIndex}</p>
        <p className={styles.emoji}>🤓</p>
        <div>{answer}</div>
      </div>
          
          
         
        </>
      )}

    >
    </motion.div>
  );
}

export default Flashcard;
