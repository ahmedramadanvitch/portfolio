function Skills() {
  const skillsData = [
    { id: 1, text: "html", icon: <i className="fa-brands fa-html5"></i> },
    {
      id: 2,
      text: "css",
      icon: <i className="fa-brands fa-css3-alt"></i>,
    },
    { id: 3, text: "js", icon: <i className="fa-brands fa-js"></i> },
    { id: 4, text: "react", icon: <i className="fa-brands fa-react"></i> },
    {
      id: 5,
      text: "bootstrap",
      icon: <i className="fa-brands fa-bootstrap"></i>,
    },
    { id: 6, text: "sass", icon: <i className="fa-brands fa-sass"></i> },
    {
      id: 7,
      text: "tailwind",
      icon: <i className="fa-solid fa-t"></i>,
    },
    {
      id: 8,
      text: "redux-toolkit",
      icon: <i className="fa-solid fa-registered"></i>,
    },
    {
      id: 9,
      text: "react-query",
      icon: <i className="fa-solid fa-registered"></i>,
    },
    {
      id: 10,
      text: "next.js",
      icon: <i className="fa-brands fa-neos"></i>,
    },
  ];
  return (
    <div className="relative lg:top-[-100px] mb-[80px] lg:mb-5 container mx-auto px-4">
      <div className="flex flex-wrap w-full gap-8 justify-center">
        {skillsData.map((item, index) => {
          return (
            <div
              key={index}
              className="border-2 border-cyan-700 rounded-2xl w-3/4 md:w-1/4 p-6 flex flex-col justify-center items-center gap-4"
            >
              <span className="text-7xl text-[#28d6d9]">{item.icon}</span>
              <span className="text-2xl font-semibold text-[#b1b1b1] capitalize tracking-widest text-center">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
