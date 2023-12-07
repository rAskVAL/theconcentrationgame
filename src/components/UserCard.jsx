export default function UserCard() {
  return (
    <div className="rounded-lg w-full bg-primaryDark p-4 space-y-4 relative overflow-hidden group">
      <div className="h-28 w-28 rounded-full bg-primaryGreen absolute -top-14 -right-14 group-hover:h-60 group-hover:w-60 transition-all blur-2xl"></div>
      <img
        src="https://media.licdn.com/dms/image/D4D03AQE8GVKHbdudTg/profile-displayphoto-shrink_800_800/0/1693032335611?e=2147483647&v=beta&t=ihzTDGRFEuRNKJnl26msY-Qjy-TEydl_fqe08QyEkVc"
        alt="Creator Picture"
        className="rounded-lg aspect-square relative"
      ></img>
      <div className="flex justify-between items-center text-primaryGreen relative">
        <a href="https://www.linkedin.com/in/roberts-ribakovs-81a33616a/">
          Roberts Ribakovs
        </a>
        <i className="ti ti-external-link"></i>
      </div>
    </div>
  );
}
