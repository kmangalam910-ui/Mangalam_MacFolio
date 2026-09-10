import { locations } from "#constants";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import clsx from "clsx";
import { openWindow } from "#store/windowSlice";
import { setActiveLocation } from "#store/locationSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const projects = locations.work?.children ?? [];
  const dispatch = useDispatch();

  const handleOpenProject = (project) => {
    dispatch(setActiveLocation(project))
    dispatch(openWindow("finder"));
  };

  useGSAP(() => {
    Draggable.create(".folder");
  }, []);

  return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx("group folder", project.position)}
            onClick={() => handleOpenProject(project)}
          >
            <img src="/images/folder.png" alt={project.name} />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
