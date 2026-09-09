import { useSelector } from "react-redux";
import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";

const ImageFile = () => {
  const windows = useSelector((store) => store.window);
  const data = windows.imgfile.data;

  if (!data) return null;

  return (
    <>
      <header id="window-header">
        <WindowControls target="imgfile" />
        <p>{data.name}</p>
      </header>

      <section className="preview">
        <img src={data.imageUrl} alt={data.name} className={data.imageUrl.includes("mangalam") ? "h-96 w-full place-self-center" : ""} />
      </section>
    </>
  );
};

const ImageFileWindow = WindowWrapper(ImageFile, "imgfile");

export default ImageFileWindow;