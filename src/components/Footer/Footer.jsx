export default function Footer() {
  return (
    <footer className="h-20 border-t-4 w-full p-4 text-center border-primaryGreen bg-primaryDark z-10 flex items-center">
      <div className="container mx-auto flex justify-between items-center w-full 0 text-sm">
        <div className="text-start">
          <p>
            © The Concentration Game{" "}
            <span className="opacity-50 text-xs font-thin">V1.4</span>
          </p>
          <p>All right reserved</p>
        </div>
        <img
          src="https://madewithreactjs.com/images/powered-madewithreactjs--white.png?1"
          alt="React JS"
          className="h-11"
        />
      </div>
    </footer>
  );
}
