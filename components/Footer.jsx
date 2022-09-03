import AiFillGithub from "./icons/AiFillGitHub";
import FaStickyNote from "./icons/FaStickyNote";

export default function Footer() {
  return (
    <footer className="footer items-center bottom-0 p-4 bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <FaStickyNote />
        <p>
          Copyright © 2022 - All right reserved <br /> Made to the
          &quot;Esquenta Programa de Formação&quot; program of Orange Juice!
        </p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end mr-6">
        <a href="https://github.com/mateusdcc/anote" target="blank">
          <AiFillGithub width="24" height="24" />
        </a>
      </div>
    </footer>
  );
}
