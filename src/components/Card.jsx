/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Card({ card, handleClick, gameState }) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
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
      animate={{
        opacity: gameState.restarting ? 0 : 1,
        y: 0,
        x: 0,
      }}
      exit={{ opacity: 0 }}
      transition={{ delay: Math.random() * 0.5, duration: 0.5 }}
      className="flip-card h-36 sm:w-40 sm:h-40"
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
            "opacity-50 grayscale cursor-default"
          } ${
            card.matched && "opacity-5 grayscale cursor-default"
          } duration-500 flip-card-front cursor-pointer transition-all h-full w-full aspect-square p-8 flex items-center bg-gradient-to-tr from-primaryGreen border-2 border-white to-primaryDark rounded-lg justify-center`}
        >
          <img
            className="h-20 opacity-5 object-contain pointer-events-none"
            src="/img/logo_small.png"
            alt="game logo"
          />
        </div>
        <div className="flip-card-back p-8 flex items-center h-full w-full bg-gradient-to-tr from-primaryGreen border-2 border-white to-primaryDark rounded-lg justify-center">
          <div className="rounded-full bg-primaryDark aspect-square flex items-center justify-center overflow-hidden">
            <img src={card.src} className="object-contain w-1/2" alt="card" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
