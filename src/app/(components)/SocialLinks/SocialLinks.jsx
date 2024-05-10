function SocialLinks() {
  const socialData = [
    {
      id: 2,
      icon: <i className="fa-brands fa-square-facebook text-blue-700"></i>,
      to: "https://www.facebook.com/vitch2016?mibextid=ZbWKwL",
    },
    {
      id: 1,
      icon: <i className="fa-brands fa-square-whatsapp text-green-600 "></i>,
      to: "https://api.whatsapp.com/send/?phone=2001147998560&text&type=phone_number&app_absent=0",
    },
    {
      id: 4,
      icon: <i className="fa-brands fa-square-github text-gray-600"></i>,
      to: "https://github.com/ahmedramadanvitch",
    },
    {
      id: 3,
      icon: <i className="fa-brands fa-linkedin text-blue-500"></i>,
      to: "https://www.linkedin.com/in/ahmed-ramadan-3542212b1/",
    },
  ];
  return (
    <>
      <ul className="fixed left-2 z-10 top-[40%]">
        {socialData.map((item, index) => {
          return (
            <li key={index} className=" text-3xl hover:opacity-40">
              <a href={item.to} target="blank">
                {item.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default SocialLinks;
