/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

export default function ResetButton({ restartGame, children = "Reset" }) {
  return (
    <button
      onClick={restartGame}
      className="w-full bg-primaryGreen py-2 rounded-lg text-primaryDark font-semibold"
    >
      {children}
    </button>
  );
}
