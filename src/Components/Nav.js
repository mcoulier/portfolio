import { NavLink } from "react-router-dom";
import githubIcon from "../Assets/github.png";
import linkedinIcon from "../Assets/linkedin.png";
import mailIcon from "../Assets/email.png";

export default function Nav() {
  return (
    <nav>
      <ul>
        <NavLink to="/">
          <button>Home</button>
        </NavLink>
        <a
          href="https://drive.google.com/file/d/1LzJv2tEIMf3JVmkP7OvdazTlBVkygVWH/view?usp=sharing"
          download
          target="_blank"
          rel="noreferrer"
        >
          <button>
            <i className="fa fa-download" /> CV
          </button>
        </a>
        <a href="https://github.com/mcoulier" target="_blank" rel="noreferrer">
          <img
            className="githubIcon"
            src={githubIcon}
            alt="githubIcon"
            width={35}
            height={35}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/michiel-coulier/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="linkedinIcon"
            src={linkedinIcon}
            alt="linkedinIcon"
            width={35}
            height={35}
          />
        </a>
        <a href="mailto:michielcoulier@gmail.com">
          <img
            className="mailIcon"
            src={mailIcon}
            alt="mailIcon"
            width={35}
            height={35}
          />
        </a>
      </ul>
    </nav>
  );
}
