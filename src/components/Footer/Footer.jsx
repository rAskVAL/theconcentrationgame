export default function Footer() {
  return (
    <footer className="z-10 flex h-20 w-full items-center border-t-4 border-primaryGreen bg-primaryDark p-4 text-center">
      <div className="container mx-auto flex w-full items-center justify-between text-sm">
        <div className="text-start">
          <p>
            © The Concentration Game{" "}
            <span className="text-xs font-thin opacity-50">V1.4</span>
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
