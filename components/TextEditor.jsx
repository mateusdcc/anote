import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import AiFillPlusCircle from "./icons/AiFillPlusCircle";
import { supabase } from "../utils/supabaseClient";
import { useEffect } from "react";
import AiOutlineMenu from "./icons/AiOutlineMenu";
import AiOutlineClose from "./icons/AiOutlineClose";
import supabaseLogout from "../utils/supabaseLogout";
import AiOutlineLoading3Quarters from "./icons/AiOutlineLoading3Quarters";

const ReactMDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);
const EditerMarkdown = dynamic(
  () =>
    import("@uiw/react-md-editor").then((mod) => {
      return mod.default.Markdown;
    }),
  { ssr: false }
);
const Markdown = dynamic(
  () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
  { ssr: false }
);

function formatContent(content, length) {
  content = content.split("\n")[0];
  if (content.length > length) {
    content = content.slice(0, length).trim() + "...";
  }
  return content;
}
export default function TextEditor() {
  const NoteSideBar = (props) => {
    const [show, setShow] = useState(false);
    const toggleShow = () => setShow(!show);
    const SideElement = (props) => (
      <div className="flex flex-col mt-3">
        <button onClick={() => props.method("All")} className="flex flex-row">
          <div
            className={"w-3 h-3 ml-3 mt-3 rounded-full " + props.bgClassName}
          />
          <h1 className="m-2 font-elmessiri text-sm">All</h1>
        </button>
        {props.tags.map((tag) => (
          <button
            onClick={() => props.method(tag)}
            key={tag}
            className="flex flex-row"
          >
            <div
              className={"w-3 h-3 ml-3 mt-3 rounded-full " + props.colors[tag]}
            />
            <h1 className="m-2 font-elmessiri text-sm">
              {formatContent(tag, 20)}
            </h1>
          </button>
        ))}
      </div>
    );
    return (
      <div>
        <div className="fixed top-0 bg-base-100 flex items-center justify-center space-x-12 lg:hidden shadow-sm w-screen">
          {props.showEditor ? (
            <button
              className="flex items-center rounded-lg w-12 h-12 justify-center"
              onClick={() => {
                props.setShowEditor(false);
                props.setEditorProps({
                  title: "",
                  content: "",
                  tag: "",
                  color: "",
                  id: null,
                });
              }}
            >
              <AiOutlineClose />
            </button>
          ) : (
            <button
              onClick={toggleShow}
              className="items-center rounded-lg w-12 h-12 flex justify-center"
            >
              {show ? (
                <AiOutlineClose className="transition-all" />
              ) : (
                <AiOutlineMenu className="transition-all" />
              )}
            </button>
          )}
        </div>
        <div className="item left-0 top-0 fixed transition-all">
          <button
            onClick={toggleShow}
            className={
              "w-screen h-screen transition-all" + (show ? " flex" : " hidden")
            }
          />
          <div
            className={
              "lg:flex fixed flex-col shadow-xl transition-all w-52 min-h-screen left-0 top-0 bg-base-100" +
              (show ? " flex" : " hidden")
            }
          >
            <SideElement
              method={props.method}
              tags={props.tags}
              colors={props.colors}
              bgClassName="bg-red-200"
            />
            <button
              onClick={supabaseLogout}
              className="bottom-0 fixed rounded-sm w-52 h-16 text-center"
            >
              {" "}
              Logout{" "}
            </button>
          </div>
        </div>
      </div>
    );
  };

  async function getNotes() {
    const { data, error } = await supabase
      .from("notes")
      .select("title, content, tags, color, id")
      .order("created_at", { ascending: false });
    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  const [notes, setNotes] = useState([]);
  const [uniqueTags, setUniqueTags] = useState([]);
  const [tagsWithColors, setTagsWithColors] = useState({});
  const [selectedNote, setSelectedNote] = useState(null);
  const [nonFilteredNotes, setNonFilteredNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All"); // Tag filter
  const [activeName, setActiveName] = useState("All"); // Name filter
  const [filteredNotesByTag, setFilteredNotesByTag] = useState([]);
  const [ToastContent, setToastContent] = useState(null);
  const [showTextEditor, setShowTextEditor] = useState(false);

  useEffect(() => {
    getNotes().then((data) => {
      setNotes(data);
      setNonFilteredNotes(data);
      let tags = data.map((note) => note.tags);
      const uniqueTags = [...new Set(tags.flat())];
      setUniqueTags(uniqueTags);
      let tagsWithColors = {};
      uniqueTags.forEach((tag) => {
        tagsWithColors[tag] = data.find((note) =>
          note.tags.includes(tag)
        ).color;
      });
      setTagsWithColors(tagsWithColors);
      setLoading(false);
    });
  }, []);

  const filterNotes = (tag) => {
    if (tag === "All") {
      setNotes(nonFilteredNotes);
      setActiveFilter("All");
      setFilteredNotesByTag([]);
    } else {
      const filteredNotes = nonFilteredNotes.filter((note) =>
        note.tags.includes(tag)
      );
      setNotes(filteredNotes);
      setActiveFilter(formatContent(tag, 30));
      setFilteredNotesByTag(filteredNotes);
    }
  };

  const filterNotesByName = (name) => {
    name = name.toLowerCase();
    if (name === "All" || name === "") {
      if (activeFilter === "All") {
        setNotes(nonFilteredNotes);
      } else {
        setNotes(filteredNotesByTag);
      }
      setActiveName("All");
    } else {
      if (activeFilter === "All") {
        const filteredNotes = nonFilteredNotes.filter((note) =>
          note.title.toLowerCase().includes(name)
        );
        setNotes(filteredNotes);
      } else {
        const filteredNotes = filteredNotesByTag.filter((note) =>
          note.title.toLowerCase().includes(name)
        );
        setNotes(filteredNotes);
      }
      setActiveName(formatContent(name, 30));
    }
  };

  const newFileHandlerSave = async (props) => {
    const { title, content, tag, color } = props;
    const { data, error } = await supabase.from("notes").insert(
      [
        {
          title: title,
          content: content,
          tags: tag,
          color: color,
        },
      ],
      {
        returning: "minimal",
      }
    );
    if (error) {
      throw new Error(error.message);
    }

    setToastContent("Note saved");
    setTimeout(() => {
      setToastContent(null);
    }, 1000);
    refreshNotes();
  };

  const deleteNoteHandler = async (id) => {
    const { data, error } = await supabase
      .from("notes")
      .delete()
      .match({ id: id });
    if (error) {
      throw new Error(error.message);
    }

    setToastContent("Note deleted");
    setEditorProps({
      title: "",
      content: "",
      tag: "",
      color: "",
      id: null,
    });
    setTimeout(() => {
      setToastContent(null);
    }, 1000);
    refreshNotes();
  };

  const editNoteHandler = async (props) => {
    const { id, title, content, tag, color } = props;
    const { data, error } = await supabase
      .from("notes")
      .update({
        title: title,
        content: content,
        tags: tag,
        color: color,
      })
      .match({ id: id });

    if (error) {
      throw new Error(error.message);
    }

    setToastContent("Note edited successfully");
    setEditorProps({
      title: title,
      content: content,
      tag: tag,
      color: color,
      id: id,
    });
    setTimeout(() => {
      setToastContent(null);
    }, 1000);
    refreshNotes();
  };

  let refreshNotes = () => {
    getNotes().then((data) => {
      setNotes(data);
      setNonFilteredNotes(data);
      let tags = data.map((note) => note.tags);
      const uniqueTags = [...new Set(tags.flat())];
      setUniqueTags(uniqueTags);
      let tagsWithColors = {};
      uniqueTags.forEach((tag) => {
        tagsWithColors[tag] = data.find((note) =>
          note.tags.includes(tag)
        ).color;
      });
      setTagsWithColors(tagsWithColors);
      setLoading(false);
    });
  };
  let [showEditor, setShowEditor] = useState(false);
  let [editorProps, setEditorPropsHandler] = useState({
    title: "",
    content: "",
    tag: "",
    color: "",
    id: null,
  });

  let setEditorProps = (props) => {
    setEditorPropsHandler(props);
    if (!showEditor) {
      setShowEditor(true);
    }
  };

  const NoteBox = (props) => {
    const preview = formatContent(props.content, 50);
    const title = formatContent(props.title, 30);
    const tag = formatContent(props.tagName, 10);

    return (
      <button
        onClick={() =>
          setEditorProps({
            title: props.title,
            content: props.content,
            tag: props.tagName,
            color: props.colors[props.tagName],
            id: props.id,
          })
        }
        className="flex mb-4 border-b-2 pb-2 hover:cursor-pointer border-0 p-0 flex-col mx-6 lg:ml-6 lg:mr-0 justify-start"
      >
        <div
          className={
            "py-1 rounded-sm w-20  font-light text-sm text-center " +
            props.colors[props.tagName]
          }
        >
          {tag}
        </div>
        <div className="ml-2">
          <h1 className="text-lg mt-2 font-semibold">{title}</h1>
          <p className="text-sm font-elmessiri">{preview}</p>
        </div>
      </button>
    );
  };

  const MDEditor = (props) => {
    const colors = {
      red: "bg-red-200",
      darkerred: "bg-red-300",
      green: "bg-green-200",
      darkergreen: "bg-green-300",
      blue: "bg-blue-200",
      darkerblue: "bg-blue-300",
      yellow: "bg-yellow-200",
      darkeryellow: "bg-yellow-300",
      purple: "bg-purple-200",
      darkerpurple: "bg-purple-300",
      pink: "bg-pink-200",
      darkerpink: "bg-pink-300",
    };

    const [actualColor, setActualColor] = useState(
      props.color || "bg-gray-200"
    );
    const [actualTag, setActualTag] = useState(props.tag || "General");
    const [actualContent, setActualContent] = useState(props.content || "");
    const [actualTitle, setActualTitle] = useState(
      props.noteTitle || "Your Title"
    );
    return (
      <>
        <div
          className={
            "flex items-center lg:items-start flex-col lg:pl-5 lg:ml-6 absolute w-screen lg:border-l-2 top-12 pt-2 lg:top-5 lg:right-0 lg:w-full bg-base-100 min-h-screen lg:relative lg:pr-5" +
            (props.show ? " " : " hidden lg:flex")
          }
        >
          <div className="flex items-start justify-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                className={
                  "py-1 tooltip hover:cursor-pointer rounded-sm w-20 font-light text-sm text-center " +
                  actualColor
                }
                data-tip={formatContent(actualTag, 50)}
              >
                {formatContent(actualTag, 10)}
              </div>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <label htmlFor="tagname">Tag Name</label>
                </li>
                <li>
                  <label htmlFor="color">Color</label>
                </li>
              </ul>
            </div>
          </div>
          <input type="checkbox" id="tagname" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Change Tag Name</h3>
              <textarea
                className="w-full h-20 resize-none mt-2 text-lg textarea"
                placeholder="Tag Name"
                value={actualTag}
                onChange={(e) => setActualTag(e.target.value)}
              />
              <div className="modal-action">
                <label htmlFor="tagname" className="btn">
                  Done
                </label>
              </div>
            </div>
          </div>
          <input type="checkbox" id="color" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Change Color</h3>
              <div className="flex flex-wrap">
                {Object.keys(colors).map((color) => (
                  <div
                    className="tooltip"
                    data-tip={colors[color].slice(3, colors[color].length)}
                    key={color}
                  >
                    <div
                      onClick={() => setActualColor(colors[color])}
                      className={
                        "w-8 h-8 rounded-full m-1 hover:cursor-pointer" +
                        " " +
                        colors[color]
                      }
                    ></div>
                  </div>
                ))}
              </div>
              <div className="modal-action">
                <label htmlFor="color" className="btn">
                  Done
                </label>
              </div>
            </div>
          </div>
          <div>
            <textarea
              className="textarea mt-5 resize-none text-xl w-full h-1/3"
              placeholder="Title"
              onChange={(e) => setActualTitle(e.target.value)}
              defaultValue={actualTitle}
            />
          </div>
          <textarea
            className="textarea resize-none text-md w-full h-52 lg:h-1/5 mb-3 mx-12 lg:m-0"
            placeholder="Content"
            onChange={(e) => setActualContent(e.target.value)}
            defaultValue={actualContent}
          />
          <div className="divider">OUTPUT</div>
          <div
            data-color-mode="light"
            className="lg:overflow-y-auto h-1/2 prose lg:prose-lg overflow-y-scroll px-2"
          >
            <Markdown source={"# " + actualTitle + "\n" + actualContent} />
          </div>
          <div className="flex flex-row fixed mb-2 bottom-0 items-end right-0 justify-end">
            <button
              onClick={() => {
                if (props.id) {
                  props.updateNote({
                    id: props.id,
                    title: actualTitle,
                    content: actualContent,
                    tag: actualTag,
                    color: actualColor,
                  });
                } else {
                  props.addNote({
                    title: actualTitle,
                    content: actualContent,
                    tag: actualTag,
                    color: actualColor,
                  });
                }
              }}
              className="btn btn-outline mr-2"
            >
              Save
            </button>
            {props.id && (
              <button
                onClick={() => props.deleteNote(props.id)}
                className="btn btn-outline mr-2"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="lg:ml-56">
        <div className="flex flex-row">
          <div className="flex top-0 w-screen min-h-screen flex-col lg:w-1/3 mr-2">
            <div className="flex flex-row lg:ml-2 lg:mb-6 items-center justify-evenly">
              <h1 className="font-elmessiri font-sm"> All Notes </h1>
              <button
                className="hidden lg:flex right-0"
                onClick={() => {
                  setEditorProps({
                    id: null,
                    noteTitle: "",
                    content: "",
                    tag: "",
                    color: "",
                  });
                }}
              >
                <AiFillPlusCircle />
              </button>
              <button
                className="fixed bottom-6 lg:hidden"
                onClick={() => {
                  setEditorProps({
                    id: null,
                    noteTitle: "",
                    content: "",
                    tag: "",
                    color: "",
                  });
                }}
              >
                <AiFillPlusCircle width="50px" height="30px" />
              </button>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="input mx-5 my-3 lg:mx-0 lg:mt-0"
              onChange={(e) => {
                filterNotesByName(e.target.value);
              }}
            />
            {activeFilter !== "All" && (
              <div className="flex lg:ml-0 ml-5 mb-5 font-light flex-row space-x-1">
                <p>Active Tag Filter:</p>
                <p className="italic">{activeFilter}</p>
              </div>
            )}
            {notes.map((note) => {
              return (
                <NoteBox
                  colors={tagsWithColors}
                  key={note.title}
                  tagName={note.tags}
                  title={note.title}
                  content={note.content}
                  id={note.id}
                />
              );
            })}
            {loading ? (
              <div className="flex items-center justify-center fixed top-0 left-0 w-screen min-h-screen">
                <AiOutlineLoading3Quarters
                  className="animate-spin"
                  height="120px"
                />
              </div>
            ) : (
              <></>
            )}
          </div>
          <MDEditor
            noteTitle={editorProps.title}
            content={editorProps.content}
            tag={editorProps.tag}
            color={editorProps.color}
            id={editorProps.id}
            addNote={newFileHandlerSave}
            updateNote={editNoteHandler}
            deleteNote={deleteNoteHandler}
            show={showEditor}
          />
        </div>
      </div>

      <NoteSideBar
        colors={tagsWithColors}
        method={filterNotes}
        tags={uniqueTags}
        setShowEditor={setShowEditor}
        showEditor={showEditor}
        setEditorProps={setEditorProps}
      />
      {ToastContent && (
        <div className="toast">
          <div className="alert alert-info">
            <div>
              <span>{ToastContent}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
