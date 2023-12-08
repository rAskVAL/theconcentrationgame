/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

export default function ResetButton({ restartGame, children = "Reset" }) {
  return (
    <button
      onClick={restartGame}
      className="w-full rounded-lg bg-primaryGreen py-2 font-semibold text-primaryDark"
    >
      {children}
    </button>
  );
}
