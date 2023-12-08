import { useEffect, useState } from "react";
import { cards } from "../constants/Index";
import Card from "../components/Card";
import { AnimatePresence, motion } from "framer-motion";
import ResetButton from "../components/ResetButton";

export default function Play() {
  const [gameState, setGameState] = useState({
    cardDeck: [],
    firstCard: null,
    secondCard: null,
    score: 0,
    turns: 0,
    restarting: false,
    winner: false,
  });

  // start game function
  // shuffles array every time it is called

  function startGame() {
    const playingCards = [...cards, ...cards]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => {
        return { ...card, key: index };
      });
    setGameState((prev) => {
      return {
        ...prev,
        cardDeck: playingCards,
        score: 0,
        turns: 0,
        winner: false,
      };
    });
    resetCards();
  }

  // restart game

  function restartGame() {
    setGameState((prev) => {
      return { ...prev, restarting: true };
    });
    resetCards();
    setTimeout(() => startGame(), 500);
    setTimeout(
      () =>
        setGameState((prev) => {
          return { ...prev, restarting: false };
        }),
      1000,
    );
    setGameState((prev) => {
      return { ...prev, winner: false };
    });
  }

  // handle click when selected card pressed

  function handleClick(card) {
    if (gameState.firstCard) {
      setGameState((prev) => {
        return { ...prev, secondCard: card };
      });
    } else {
      setGameState((prev) => {
        return { ...prev, firstCard: card };
      });
    }
  }

  // function to reset selected cards

  function resetCards() {
    setGameState((prev) => {
      return { ...prev, firstCard: null, secondCard: null };
    });
  }

  // calls function startGame when page is loaded

  useEffect(() => {
    startGame();
  }, []);

  // useEffect which controls if score = 16, if score equals to 16 game is finished

  useEffect(() => {
    if (gameState.score === 16) {
      setGameState((prev) => {
        return { ...prev, winner: true };
      });
      if (!localStorage.getItem("highscore")) {
        localStorage.setItem("highscore", gameState.turns);
      } else if (gameState.turns < Number(localStorage.getItem("highscore"))) {
        localStorage.setItem("highscore", gameState.turns);
      } else localStorage.setItem("highscore", gameState.turns);
    }
  }, [gameState.score, gameState.turns]);

  useEffect(() => {
    function setMatched() {
      setGameState((prev) => {
        return {
          ...prev,
          cardDeck: prev.cardDeck.map((card) => {
            if (card.id === gameState.firstCard.id) {
              return { ...card, matched: true };
            } else return card;
          }),
        };
      });
      setTimeout(resetCards, 1500);
      setGameState((prev) => {
        return { ...prev, score: prev.score + 2 };
      });
    }

    if (gameState.firstCard && gameState.secondCard) {
      if (gameState.firstCard.id === gameState.secondCard.id) setMatched();
      else setTimeout(resetCards, 1000);
      setGameState((prev) => {
        return { ...prev, turns: prev.turns + 1 };
      });
    }
  }, [gameState.firstCard, gameState.secondCard]);

  return (
    <div className="relative my-4 flex h-full flex-col-reverse items-center justify-center overflow-hidden px-4 py-10">
      <div className="relative grid w-full grid-cols-2  grid-rows-4 gap-4  sm:w-fit sm:grid-cols-3 md:grid-cols-4">
        {gameState.cardDeck.map((card, index) => (
          <Card
            key={index}
            card={card}
            handleClick={handleClick}
            gameState={gameState}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bottom-10 mb-4 flex h-fit w-full flex-col gap-4 rounded-lg border-2 border-white bg-primaryDark p-8 md:absolute md:right-8 md:top-0 md:z-50 md:w-64"
      >
        <div className="flex flex-col items-center rounded-lg bg-white/5 p-2">
          <p>
            High score: {Number(localStorage.getItem("highscore")) || 0} turns!
          </p>
          <div className="flex gap-4">
            <p>Score: {gameState.score}</p>
            <p>Turns: {gameState.turns}</p>
          </div>
        </div>
        <ResetButton restartGame={restartGame} />
      </motion.div>
      <AnimatePresence>
        {gameState.winner && (
          <div className="fixed left-1/2 top-1/2 w-full -translate-x-1/2  -translate-y-1/2 p-4 md:absolute md:w-fit">
            <motion.div
              initial={{ opacity: 0, display: "flex" }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, display: "none" }}
              transition={{ opacity: { delay: 0.5 } }}
              className="flex w-full flex-col items-center justify-center gap-4 rounded-lg border-2 border-primaryGreen bg-primaryDark px-10 py-6 md:w-96"
            >
              <h1>Congratulations, you won!</h1>
              <div className="flex w-full flex-col items-center rounded-lg bg-white/5 p-2">
                <p>
                  High Score:{" "}
                  {localStorage.getItem("highscore") || gameState.turns} Turns!
                </p>
                <div className="flex gap-4">
                  <p>Score: {gameState.score}</p>
                  <p>Turns: {gameState.turns}</p>
                </div>
              </div>
              <ResetButton restartGame={restartGame}>Restart Game</ResetButton>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
