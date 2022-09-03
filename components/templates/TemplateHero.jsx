export default function TemplateHero(props) {
  return (
    <div
      className={
        "hero " +
        (props.className ? props.className : "") +
        (props.size ? props.size : "min-h-2/3")
      }
    >
      <div
        className={
          "hero-content lg:flex-row " +
          (props.reverse == "non-reverse" ? "flex-col" : "flex-col-reverse")
        }
      >
        <div className="space-y-2 px-12">
          {props.component()}
          {/* <h1 className="text-5xl font-bold font-lobster">{props.title}</h1>
          <h1 className="text-5xl font-bold font-lobster">{props.subtitle}</h1> */}
          <p className="py-6 text-gray-600">{props.content}</p>
        </div>
      </div>
    </div>
  );
}
