import styles from "./Flashcard.module.css";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

function Flashcard({ question, answer, cardIndex, onDelete }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ question, answer });

  // Toggle the flipped state
  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  // Toggle edit mode
  function handleEdit() {
    setEditMode((prev) => !prev);
  }

  // Save updated question/answer
  function handleSave(e) {
    e.preventDefault();
    setEditMode(false); // Exit edit mode after saving
  }

  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
      className={styles.card}
    >
      {/* FRONT SIDE */}
      <div
        className={styles.front}
        onClick={!editMode ? handleFlip : undefined} // Disable flipping in edit mode
      >
        {!editMode && (
          <>
            <div className={styles.buttonGroup}>
              <button className={styles.editButton} onClick={handleEdit}>
                ✏️
              </button>
              <button
                className={styles.deleteButton}
                onClick={() => onDelete(cardIndex)}
              >
                ❌
              </button>
            </div>
            <p className={styles.emoji}>🤔</p>
            <h1>{formData.question}</h1>
          </>
        )}
      </div>

      {/* BACK SIDE */}
      <div
        className={styles.back}
        onClick={!editMode ? handleFlip : undefined} // Disable flipping in edit mode
      >
        {editMode ? (
          <form onSubmit={handleSave}>
            <div className={styles.formGroup}>
            <button type="submit" className={styles.saveButton}>
              ✔️ Save
            </button>
              <label>
                Question:
                <input
                  type="text"
                  className={styles.input}
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
            <p className={styles.emoji}>🤓</p>
            <h1>{formData.answer}</h1>
          </>
        )}
      </div>
    </ReactCardFlip>
  );
}

export default Flashcard;