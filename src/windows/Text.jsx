import { useSelector } from "react-redux";
import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";

const TextFile = () => {
  const windows = useSelector((store) => store.window);
  const data = windows.txtfile.data;

  if (!data) return null;

  return (
    <>
      <header id="window-header">
        <WindowControls target="txtfile" />
        <h2>{data.name}</h2>
      </header>

      <article className="textfile-content p-5">
        {data.image && <img src={data.image} alt={data.name} className="w-46 h-46 place-self-center" />}
        {data.subtitle && <h3>{data.subtitle}</h3>}
        <div>
          {data.description?.map((paragraph, index) => (
            <p key={`${data.name}-${index}`}>{paragraph}</p>
          ))}
        </div>
      </article>
    </>
  );
};

const TextFileWindow = WindowWrapper(TextFile, "txtfile");

export default TextFileWindow;