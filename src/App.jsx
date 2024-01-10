import { useState } from "react";

import Work from "/src/components/Work";
import Skills from "/src/components/Skills";
import linkedin from "/src/assets/images/linkedin.svg";
import skype from "/src/assets/images/skype.svg";
import mail from "/src/assets/images/email.svg";

import "./App.scss";

const tabs = [
  {
    id: "designs",
    title: "designs",
    component: <Work type="designs" />,
  },
  {
    id: "drawings",
    title: "drawings",
    component: <Work type="drawings" />,
  },
  {
    id: "skills",
    title: "Skills",
    component: <Skills />,
  },
];

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="appContainer">
      <div className="backgroundEffect" />

      <header className="header">
        <h4>
          Hi there, This is <bold>Sahar</bold>. <br /> Besides everything I do,
          I mainly <bold>Design</bold>, <bold>Draw</bold> and sometimes{" "}
          <bold>Develop</bold>.
        </h4>

        {tabs.map((tabItem, index) => (
          <button
            key={tabItem.title}
            id={tabItem.id}
            className={tabIndex === index ? "active" : ""}
            onClick={() => setTabIndex(index)}
          >
            {tabItem.title}
          </button>
        ))}
      </header>

      <div className="contentContainer">{tabs[tabIndex].component}</div>

      <footer className="footer">
        <a
          href="https://www.linkedin.com/in/sahar-shirmardi-b33230199"
          target="blank"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>

        <a href="https://join.skype.com/invite/vJxgaN4V0IE7" target="blank">
          <img src={skype} alt="Skype" />
        </a>

        <a href="mailto:saharshirmardii@gmail.com" target="blank">
          <img src={mail} alt="Email" />
        </a>
      </footer>
    </div>
  );
}

export default App;
