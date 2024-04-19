/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import aboutImage from "../../../assets/wired-lineal-268-avatar-man.gif";
import birthdayImage from "../../../assets/wired-lineal-1106-birthday-hat.gif";
import locationImage from "../../../assets/wired-lineal-18-location-pin.gif";
import phoneImage from "../../../assets/wired-lineal-1676-telephone-call-hand.gif";
import mailImage from "../../../assets/wired-lineal-1141-email.gif";
import manWorkingImage from "../../../assets/man_working.png";
function About() {
  const informationData = [
    { id: 1, image: aboutImage, text: "Ahmed Ramadan Goda" },
    { id: 2, image: birthdayImage, text: "8 - 6 - 1995" },
    { id: 3, image: locationImage, text: "Egypt" },
    { id: 4, image: phoneImage, text: "01147998560" },
    { id: 5, image: mailImage, text: "ahmedramadanvitch989@gmail.com" },
  ];
  return (
    <div className="relative lg:top-[-120px] mb-[80px] lg:mb-5">
      <div className="container mx-auto px-6 my-5 flex flex-col  justify-center items-center lg:items-start gap-4">
        <div className="p-4 md:w-[70%] px-3  mx-auto text-2xl text-center   leading-10 tracking-wider text-[#5ba9ab]">
          I'm a Front-End developer, I'm in love with web development All my
          experience in it is through what I learned from Route academy and
          educational channels on YouTube. Iam available onsite and remote
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center mx-auto">
          <div>
            <Image src={manWorkingImage} alt="image" priority />
          </div>
          <ul className="flex flex-col gap-2 p-4 w-full md:w-[70%] mx-auto">
            {informationData.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex justify-start items-center flex-wrap gap-3 text-[#3b898a] hover:text-[#2acbce]"
                >
                  <Image src={item.image} alt="image2" priority />
                  <span className="text-lg md:text-xl text-wrap">
                    {item.text}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
