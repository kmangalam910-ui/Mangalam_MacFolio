import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";
import { openWindow } from "#store/windowSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {

  const dispatch = useDispatch()

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt='Logo' />
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
              <img src={img} alt={`icon-${id}`} className="icon-hover cursor-pointer" />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  )
}

export default Navbar;