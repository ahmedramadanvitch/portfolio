"use client";
import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import js_dashboard from "../../../assets/dash-board.png";
import js_crud from "../../../assets/crud.PNG";
import js_school from "../../../assets/school.png";
import js_hospital from "../../../assets/hospital1.png";
import react_cartFresh from "../../../assets/freshCart.PNG";
import react_medz from "../../../assets/medz.PNG";
import react_furniture from "../../../assets/furniture.PNG";
import ProductCart from "@/app/(components)/ProductCart/ProductCart";
export default function page() {
  const js = [
    {
      id: 1,
      img: js_crud,
      title: "crud system",
      description: "Html - Css - Bootstrap - Js",
      link: "https://ahmedramadanvitch.github.io/management-Products/",
    },
    {
      id: 2,
      img: js_dashboard,
      title: "dashboard",
      description: "Html - Css (Sass) - Bootstrap - Js",
      link: "https://ahmedramadanvitch.github.io/dash-board/",
    },
    {
      id: 3,
      img: js_school,
      title: "school",
      description: "Html - Css - Bootstrap - Js , Aos.js",
      link: "https://ahmedramadanvitch.github.io/school/",
    },
    {
      id: 4,
      img: js_hospital,
      title: "hospital",
      description: "Html - Css - Bootstrap - Js ",
      link: "https://ahmedramadanvitch.github.io/dar-hospital/",
    },
  ];
  const react = [
    {
      id: 1,
      img: react_cartFresh,
      title: "fresh cart",
      description:
        "react-router-dom | axios | api(route) | bootstrap | formik | yup | react-query | react-slick | react-loader-spinner | react-helmet | react-hot-toast",
      link: "https://ahmedramadanvitch.github.io/newFresh/",
    },
    {
      id: 2,
      img: react_medz,
      title: "medical",
      description:
        "react-router-dom | axios | json-server | redux/toolkit | material-tailwind/react | formik | yup | react-hot-toast | react-loader-spinner",
      link: "https://medical-navy.vercel.app/",
    },
    {
      id: 3,
      img: react_furniture,
      title: "furniture",
      description:
        "react-router-dom | axios | redux/toolkit | redux/query | material-tailwind/react | formik | yup | react-hot-toast | react-loader-spinner | react-helmet",
      link: "https://furniture-omega-one.vercel.app",
    },
  ];
  return (
    <div className="">
      <Tab.Group>
        <Tab.List
          className={
            "flex gap-5 justify-center items-center text-lg md:text-2xl text-white"
          }
        >
          <Tab
            as={Fragment}
            className={
              "bg-cyan-900  hover:bg-slate-300 hover:text-cyan-800 rounded-xl p-2  block text-center px-8 outline-none"
            }
          >
            {({ selected }) => (
              <button
                className={
                  selected ? "bg-slate-300 text-red-700" : "bg-cyan-900"
                }
              >
                JavaScript
              </button>
            )}
          </Tab>
          <Tab
            as={Fragment}
            className={
              "bg-cyan-900  hover:bg-slate-300 hover:text-cyan-800 rounded-xl p-2  block text-center px-8 outline-none"
            }
          >
            {({ selected }) => (
              <button
                className={
                  selected ? "bg-slate-300 text-red-700" : "bg-cyan-900"
                }
              >
                React.js
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className={"mt-10 mb-24"}>
          <Tab.Panel>
            <div className="my-5">
              <div className="flex flex-wrap -m-4 justify-center">
                {js.map((item, index) => {
                  return (
                    <ProductCart
                      key={index}
                      img={item.img}
                      description={item.description}
                      link={item.link}
                      title={item.title}
                    />
                  );
                })}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className=" my-5">
              <div className="flex flex-wrap -m-4 justify-center">
                {react.map((item, index) => {
                  return (
                    <ProductCart
                      key={index}
                      img={item.img}
                      description={item.description}
                      link={item.link}
                      title={item.title}
                    />
                  );
                })}
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
