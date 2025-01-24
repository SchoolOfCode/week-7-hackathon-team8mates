/* eslint-disable react/prop-types */
// Aim is to build a carousel component that can be used to display images in a carousel format.
// The component should be able to take in an array of images and display them in a carousel format.
// https://stackademic.com/blog/mastering-react-carousel-building-dynamic-image-sliders and copilot

import { useState } from "react";
import Flashcard from "../Flashcard/Flashcard";
import styles from "./Carousel.module.css";

// The component should have the following features:
function Carousel({ existingCards }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // New state for implementing shuffling
  const [cards, setCards] = useState(existingCards);

  // 1. Display the first three images in the array by default
  // 2. Display the next three images when the right arrow is clicked
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % existingCards.length);
  };
  // 3. Display the previous three images when the left arrow is clicked
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? existingCards.length - 3 : prevIndex - 3
    );
  };

  const displayedCards = cards.slice(currentIndex, currentIndex + 3);

  // LOGIC FOR SHUFFLING (fisher yates algorithm. Used in 3rd week hackathon)
  // incomplete. come back to tomorrow
  function shuffleArray() {
    let shuffledArray = [...cards]; // create a copy
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    setCards(shuffledArray);
    setCurrentIndex(0);
  }

  return (
    <div>
      <h1>Number of flashcards: {existingCards.length}</h1>
      <button className={styles.shuffle} onClick={shuffleArray}>
        Shuffle
      </button>
      <div className={styles.carousel}>
        <button className={styles.arrowLeft} onClick={handlePrev}>
          {"<"}
        </button>
        <div className={styles.images}>
          {displayedCards.map((card, index) => (
            <Flashcard
              key={currentIndex + index}
              cardIndex={currentIndex + index + 1}
              question={card.question}
              answer={card.answer}
            />
          ))}
        </div>
        <button className={styles.arrowRight} onClick={handleNext}>
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Carousel;
