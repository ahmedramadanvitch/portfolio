/* eslint-disable react/prop-types */
import Image from "next/image";
import "./project.css";
function ProductCart({ img, description, link, title }) {
  return (
    <div className="p-4 xsm:w-full md:w-1/2 lg:w-1/3">
      <a
        title={title}
        href={link}
        data-description={description}
        className="image_project relative w-[280px] md:w-full h-[250px] max-h-[400px] inline-flex items-center justify-center rounded-md bg-black text-white  overflow-hidden border-2 border-cyan-700"
      >
        <Image
          alt="ecommerce"
          className="object-cover block  h-full cursor-pointer"
          src={img}
          priority
        />
      </a>
    </div>
  );
}

export default ProductCart;
