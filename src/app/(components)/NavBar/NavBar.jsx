"use client";
import homeImage from "../../../assets/wired-lineal-63-home.gif";
import aboutImage from "../../../assets/wired-lineal-268-avatar-man.gif";
import skillsImage from "../../../assets/wired-lineal-153-bar-chart.gif";
import projectsImage from "../../../assets/wired-lineal-478-computer-display.gif";
import cvImage from "../../../assets/wired-lineal-245-edit-document.gif";
import Link from "next/link";
import Image from "next/image";
function NavBar() {
  const navData = [
    { id: 1, name: "Home", href: "/", image: homeImage },
    { id: 2, name: "About", href: "about", image: aboutImage },
    { id: 3, name: "Skills", href: "skills", image: skillsImage },
    { id: 4, name: "Projects", href: "project", image: projectsImage },
    { id: 5, name: "Cv", href: "cv", image: cvImage },
  ];
  return (
    <>
      <div className="flex justify-center fixed bottom-2 w-[100%] z-10">
        <ul className="flex justify-center items-center gap-5 bg-[#3a6f9573] p-4 rounded-xl border-2 border-cyan-800">
          {navData.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.href}>
                  <Image src={item.image} alt="" title={item.name} priority />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default NavBar;
