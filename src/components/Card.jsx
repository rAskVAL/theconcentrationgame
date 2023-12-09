/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import VanillaTilt from "vanilla-tilt";

export default function Card({ card, handleClick, gameState }) {
  const [isFlipped, setIsFlipped] = useState(false);

  //checks what cards are selected, if its this one it will rotate it

  useEffect(() => {
    const element = document.querySelectorAll(".card");
    VanillaTilt.init(element, {
      scale: 1.03,
      max: 10,
    });
    if (
      gameState.firstCard?.key === card.key ||
      gameState.secondCard?.key === card.key
    ) {
      setIsFlipped(true);
    } else {
      setIsFlipped(false);
    }
  }, [gameState.firstCard, gameState.secondCard, card.key]);

  function rotateCard() {
    if ((gameState.firstCard && gameState.secondCard) || card.matched) return;
    else {
      setIsFlipped(true);
      handleClick(card);
    }
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 1000,
        x: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 1000,
      }}
      whileHover={{ opacity: 1 }}
      animate={{
        opacity: gameState.restarting ? 0 : 0.7,
        y: 0,
        x: 0,
      }}
      style={{ transformStyle: "preserve-3d" }}
      exit={{ opacity: 0 }}
      transition={{ opacity: { delay: Math.random() * 0.5, duration: 0.5 } }}
      className="flip-card card h-36 sm:h-40 sm:w-40"
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.05 }}
        className="flip-card-inner h-full w-full"
      >
        <div
          onClick={rotateCard}
          className={`${
            gameState.firstCard &&
            gameState.secondCard &&
            !card.matched &&
            "cursor-default opacity-50 grayscale"
          } ${
            card.matched && "cursor-default opacity-5 grayscale"
          } flip-card-front flex aspect-square h-full w-full cursor-pointer items-center justify-center rounded-lg border-2 border-white bg-gradient-to-tr from-primaryGreen to-primaryDark p-8 transition-all duration-500`}
        >
          <img
            className="pointer-events-none h-20 object-contain opacity-5"
            src="/img/logo_small.png"
            alt="game logo"
          />
        </div>
        <div className="flip-card-back flex h-full w-full items-center justify-center rounded-lg border-2 border-white bg-gradient-to-tr from-primaryGreen to-primaryDark p-8">
          <div className="flex aspect-square items-center justify-center overflow-hidden rounded-full bg-primaryDark">
            <img src={card.src} className="w-1/2 object-contain" alt="card" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
