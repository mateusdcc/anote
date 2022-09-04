import Navbar from "../components/Navbar";
import {
  HomeHero,
  FeaturesHero,
  AboutHero,
} from "../components/home/InfoHeros";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div id="content" className="min-h-screen mt-5">
        <div className="mt-36">
          <HomeHero />
        </div>
        <FeaturesHero />
        <div className="flex lg:flex-row flex-col">
          <AboutHero
            title="About ANote"
            content="Anote is a tag based note-taking plataform where you can organize your notes with a powerful markdown editor that supports images, tables, videos, and much more. Anote provides a clean, simple and intuitive interface to help you organize your notes using tags and make your life easier."
          />
          <AboutHero
            title="Organizing your notes with tags"
            content="Anote provides a powerful tag system that allows you to organize your notes in a simple and intuitive way. You can create tags and add them to your notes to organize them in a way that makes sense to you. You can also search for notes by tags. That powerful tag system allows you to improve your organization, thus improving your productivity."
          />
        </div>
        <div className="flex lg:flex-row flex-col">
          <AboutHero
            title="Markdown editor"
            content="Anote provides a powerful markdown editor that allows you to write your notes in a simple and intuitive way. You can write your notes using markdown syntax and Anote will render them in a beautiful way. You can also add images, tables, videos, and much more to your notes."
          />
          <AboutHero
            title="Support this project"
            content="This project is open source and it code is hosted on github. By accessing https://github.com/mateusdcc/anote and giving a star or contributing to the project you are helping to improve and motivate this project and the creator of it, making it better for everyone. Thank you for your support."
          />
        </div>
      </div>
      <Navbar />
      <Footer />
    </div>
  );
}
