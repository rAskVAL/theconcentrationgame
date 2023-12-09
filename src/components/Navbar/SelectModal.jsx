export default function SelectModal() {
  return (
    <div className="absolute z-50 mt-2 flex flex-col whitespace-nowrap rounded-lg border border-primaryGreen bg-primaryDark py-2">
      <a
        href="https://theconcentrationgame-vue.vercel.app/"
        className="flex w-full items-center px-4 py-2 hover:bg-primaryGreen"
      >
        <i className="ti ti-brand-vue mr-2 mt-0.5"></i>
        <p>Vue.js Version</p>
      </a>
      <a
        href="/"
        className="flex w-full items-center px-4 py-2 hover:bg-primaryGreen"
      >
        <i className="ti ti-brand-react mr-2 mt-0.5"></i>
        <p>React.js Version</p>
      </a>
    </div>
  );
}
