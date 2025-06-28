<ul className="flex space-x-12 text-white font-semibold text-base relative">
  <li className="cursor-pointer transition px-2">
    <Link to="/" className="no-underline text-inherit">HOME</Link>
  </li>
  <li className="cursor-pointer transition px-2">
    <Link to="/about" className="no-underline text-inherit">ABOUT</Link>
  </li>
  {/* Popover */}
  <li
    className="relative px-2"
    ref={popoverRef}
    onMouseEnter={() => setPopoverActive(true)}
    onMouseLeave={() => setPopoverActive(false)}
  >
    <div className="cursor-pointer transition font-semibold text-base flex items-center space-x-1">
      <span>SERVICES</span>
      <span className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-white"></span>
    </div>
    {popoverActive && (
      <div className="absolute left-0 mt-8 w-32 bg-black/50 rounded shadow-lg z-50">
        <ul className="py-1 text-white">
          <li className="px-4 py-2 hover:text-gray-300 hover:bg-black/50 cursor-pointer">
            PLACE dbt.
          </li>
          <li className="px-4 py-2 hover:text-gray-300 hover:bg-black/50 cursor-pointer">
            VIEW dbt.
          </li>
        </ul>
      </div>
    )}
  </li>
  <li className="cursor-pointer hover:text-gray-700 transition px-2">
    CARRIER VS. GROWING THREAT
  </li>
</ul>
