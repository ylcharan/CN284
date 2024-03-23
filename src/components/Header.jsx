const NavBar = () => {
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center base-wrapper shadow-sm">
      <div className="text-[30px] font-semibold uppercase">events</div>
      <ul className="flex space-x-6">
        <li className={`text-zinc-500 hover:text-zinc-800 transition-colors`}>
          <a href={"/"}>Dashboard</a>
        </li>

        <li className={`text-zinc-500 hover:text-zinc-800 transition-colors`}>
          <a href="/event">Event creation</a>
        </li>
        <li className={`text-zinc-500 hover:text-zinc-800 transition-colors`}>
          <a href="/">Feedback</a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
