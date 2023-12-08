/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Card({ card, handleClick, gameState }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["15.5deg", "-15.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-15.5deg", "15.5deg"]
  );

  function onMouseMove(e) {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  }

  function onMouseLeave() {
    y.set(0);
    x.set(0);
  }

  //checks what cards are selected, if its this one it will rotate it

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
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial={{
        opacity: 0,
        y: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 1000,
        x: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 1000,
      }}
      whileHover={{ scale: 1.03, opacity: 1 }}
      animate={{
        opacity: gameState.restarting ? 0 : 0.7,
        y: 0,
        x: 0,
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
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
