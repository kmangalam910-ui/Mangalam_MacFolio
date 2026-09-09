import { WindowControls } from "#components";
import { locations } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { Search } from "lucide-react";
import { setActiveLocation } from "#store/locationSlice";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import { openWindow } from "#store/windowSlice";

const Finder = () => {
  const { activeLocation } = useSelector((store) => store.location);
  const dispatch = useDispatch();

  const renderList = (name, items) => (
    <div>
      <h3>Favourites</h3>

      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => dispatch(setActiveLocation(item))}
            className={clsx(
              item.id === activeLocation.id ? "active" : "not-active",
            )}
          >
            <img src={item.icon} className="w-4" alt={item.name} />
            <p className="font-medium text-sm truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  const openItem = (item) => {
    if(item.fileType === "pdf") return dispatch(openWindow("resume"));
    if(item.kind === "folder") return dispatch(setActiveLocation(item));
    if(['fig', 'url'].includes(item.fileType) && item.href) return window.open(item.href, "_blank");

    dispatch(
      openWindow({
        key: `${item.fileType}${item.kind}`,
        data: item,
      }),
    );
  };

  return (
    <>
      <header id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </header>

      <section className="bg-white flex h-full">
        <div className="sidebar">
          {renderList("Favourites", Object.values(locations))}
          {renderList("Work", locations.work.children)}
        </div>

        <ul className="content">
          {activeLocation?.children.map((item) => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => openItem(item)}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;