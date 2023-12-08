export default function Instructions() {
  return (
    <div className="container mx-auto my-4 w-full rounded-lg p-4">
      {" "}
      <h1 className="mb-4 text-3xl font-bold">The Concentration Game: Rules</h1>
      <div className="mb-4">
        <h2 className="mb-2 text-2xl font-bold">Objective:</h2>
        <p>
          The goal of the game is to match pairs of cards with identical
          pictures of web development tools. The player aims to find all
          matching pairs in as few turns as possible.
        </p>
      </div>
      <div className="mb-4">
        <h2 className="mb-2 text-2xl font-bold">Gameplay:</h2>
        <ol className="list-decimal pl-6">
          <li>Start with all cards face-down.</li>
          <li>Flip over any two cards in the grid.</li>
          <li>
            If the two cards turned over match (i.e., they feature the same web
            development tool), you keep the pair and take another turn.
          </li>
          <li>
            If the cards do not match, you must turn them back face-down in the
            same position.
          </li>
          <li>
            Remember the positions of cards that have been revealed to make
            matching easier.
          </li>
          <li>
            Continue flipping pairs until all 8 pairs have been successfully
            matched.
          </li>
        </ol>
      </div>
      <div className="mb-4">
        <h2 className="mb-2 text-2xl font-bold">Winning:</h2>
        <p>The game ends when all 8 pairs have been successfully matched.</p>
      </div>
      <div className="mb-4">
        <h2 className="mb-2 text-2xl font-bold">Scoring:</h2>
        <ol className="list-decimal pl-6">
          <li>Each turn is counted as one move.</li>
          <li>
            Your score is the total number of moves taken to complete the game.
          </li>
          <li>
            Aim for the lowest possible score; fewer moves indicate better
            memory and concentration.
          </li>
        </ol>
      </div>
      <div className="mb-4">
        <h2 className="mb-2 text-2xl font-bold">Tips:</h2>
        <ol className="list-decimal pl-6">
          <li>Take your time and study the cards before making a move.</li>
          <li>
            Create a mental map of where different tools are located to speed up
            matching.
          </li>
          <li>
            Try to memorize the positions of tools you&apos;ve already seen to
            avoid flipping the same cards multiple times.
          </li>
        </ol>
      </div>
    </div>
  );
}
