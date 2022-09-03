import TemplateHero from "../templates/TemplateHero";
import Separator from "../Separator";
import AiFillCloud from "../icons/AiFillCloud";
import GoMarkdown from "../icons/GoMarkdown";
import AiOutlineFileText from "../icons/AiOutlineFileText";
import VscSourceControl from "../icons/VscSourceControl";
import FaRegGrinTongue from "../icons/FaRegGrinTongue";
import AiOutlineMobile from "../icons/AiOutlineMobile";
import Link from "next/link";

export function HomeHero() {
  const content = () => (
    <>
      <h1 className="text-5xl font-elmessiri font-bold">Stay Focused,</h1>
      <h1 className="text-5xl font-elmessiri font-bold">Stay Simple.</h1>
    </>
  );
  return (
    <>
      <TemplateHero
        component={content}
        content="An open source note-taking web application that has only the needed features, so you can stay focused on noting."
      />
      <Link href="/register">
        <div className="flex justify-center items-center">
          <div className="btn-ghost btn">Get Started</div>
        </div>
      </Link>
      <Separator />
    </>
  );
}

export function FeaturesHero() {
  const content = {
    1: {
      title: "Use it anywhere.",
      icon: () => (
        <AiOutlineMobile
          width="30px"
          height="40px"
          className="mb-2 text-gray-500"
        />
      ),
      content:
        "You can use it on your phone, tablet, or desktop. No matter where you are, you can use it, just needs a browser.",
    },
    2: {
      title: "Markdown support.",
      icon: () => (
        <GoMarkdown width="30px" height="40px" className="mb-2 text-gray-500" />
      ),
      content:
        "You can use markdown to write your notes. You can use markdown to write your notes.",
    },
    3: {
      title: "Tag Oriented.",
      icon: () => (
        <AiOutlineFileText
          width="30px"
          height="30px"
          className="mb-2 text-gray-500"
        />
      ),
      content:
        "Organize your notes in tags. Studying Javascript? Create a tag for it.",
    },
    4: {
      title: "Open source.",
      icon: () => (
        <VscSourceControl
          width="30px"
          height="30px"
          className="mb-2 text-gray-500"
        />
      ),
      content:
        "It's open source, so you can use it entirely for free, without ads, and contribute to the project.",
    },
    5: {
      title: "Keep it simple, stupid.",
      icon: () => (
        <FaRegGrinTongue
          width="30px"
          height="40px"
          className="mb-2 text-gray-500"
        />
      ),
      content: "It's simple, so you won't get distracted by bloated features.",
    },
    6: {
      title: "Sync with cloud.",
      icon: () => (
        <AiFillCloud
          width="30px"
          height="40px"
          className="mb-2 text-gray-500"
        />
      ),
      content:
        "Notes automatically synced with cloud, you don't need to worry about losing your notes.",
    },
  };
  const box = (props) => (
    <div
      key={props.key}
      className="flex flex-col self-stretch justify-center mb-6 shadow-xl h-52 md:h-36  lg:h-48 lg:w-1/3"
    >
      <div className="flex flex-row items-center space-x-2 justify-center">
        {props.icon({
          width: "50px",
        })}
        <h1 className="text-3xl font-bold mb-2">{props.title}</h1>
      </div>
      <div className=" px-12">{props.content}</div>
    </div>
  );
  return (
    <>
      <h1 className="text-5xl mb-5 flex justify-center items-center">
        Features
      </h1>
      <div className="flex flex-col lg:flex-row lg:flex-wrap mx-12 first-letter:justify-center items-center content-around">
        {Object.keys(content).map((key) =>
          box({
            key: key,
            title: content[key].title,
            icon: content[key].icon,
            content: content[key].content,
          })
        )}
      </div>
    </>
  );
}
