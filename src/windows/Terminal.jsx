import WindowWrapper from "#hoc/WindowWrapper";
import { techStack } from "#constants";
import { FlagIcon, ShieldCheck } from "lucide-react";
import { WindowControls } from "#components";

const Terminal = () => {
  return (
    <>
      <header id="window-header">
        <WindowControls target="terminal" />
        <h2>Tech Stack</h2>
      </header>

      <section className="techstack">
        <p>
          <span className="font-semibold">@Mangalam %</span>
          show tech stack
        </p>

        <div className="label">
          <p className="w-32">Categories</p>
          <p>Technologies</p>
        </div>

        <ul className="content">
          {techStack.map(({category, items}) => (
            <li key={category} className="flex items-center">
              <ShieldCheck className="check" size={30} />
              <h3>{category}</h3>
              <ul>
                {items.map((item, i) => (
                  <li key={i}>{item}{i < items.length - 1 ? "," : ""}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="footnote">
          <p className="text-black">
            <FlagIcon size={20} fill="black" />
            Render time: 7ms
          </p>
        </div>
      </section>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
