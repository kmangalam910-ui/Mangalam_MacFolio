import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";
import { openWindow } from "#store/windowSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const Navbar = () => {

  const dispatch = useDispatch()
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem("theme") === "dark")

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode)
    localStorage.setItem("theme", isDarkMode ? "dark" : "light")
  }, [isDarkMode])

  const toggleDarkMode = () => setIsDarkMode((current) => !current)

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt='Logo' className="logo" />
        <p className='font-bold'>Mangalam's Portfolio</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <button key={id} onClick={() => dispatch(openWindow(type))}>
              <p>{name}</p>
            </button>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({id, img}) => (
            <li key={id}>
              {id === 4 ? (
                <button
                  type="button"
                  onClick={toggleDarkMode}
                  aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                  title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                  <img src={img} alt={img} className="icon-hover cursor-pointer" />
                </button>
              ) : (
                <img src={img} alt={`icon-${id}`} className="icon-hover cursor-pointer" />
              )}
            </li>
          ))}
        </ul>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  )
}

export default Navbar;