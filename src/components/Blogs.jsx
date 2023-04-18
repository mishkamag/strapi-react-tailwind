import React from "react";

const Blogs = () => {
  return (
    <div className="w-full py-[50px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 px-4 text-black">
          <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
            <img
              src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/01/19/16741678015034.jpg"
              alt=""
              className="h-56 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
