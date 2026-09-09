import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import React from "react";

const Contact = () => {
  return (
    <>
      <header id="window-header">
        <WindowControls target="contact" />
        <h2>Contact me</h2>
      </header>

      <section className="p-5 space-y-5">
        <img 
          src="/images/mangalam.jpeg"
          alt="Mangalam"
          className="w-24 rounded-full"
        />

        <h3>Let's connect</h3>
        <p>Got an idea? A bug to squash? Or just want to talk tech? I'm in</p>
        <p>contact@kmangalam910@gmail.com</p>

        <ul>
          {socials.map(({id, bg, link, icon, text}) => (
            <li 
              key={id}
              style={{backgroundColor: bg}}
            >
              <a 
                href={link}
                target="_blank"
                rel="noopner noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-7" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact")

export default ContactWindow;
