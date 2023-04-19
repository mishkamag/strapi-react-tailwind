import React from "react";

const SingleBlog = () => {
  const blog = {
    id: 1,
    title: "10 days of Solidaty",
    desc: "Learn on how to learn solidity in 10 Days",
    coverImg:
      "https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.6435-9/71698868_1100255983510799_7974481038502002688_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GBEKZ7yYWgIAX9rdQtS&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfD7HsocOLQoevLUirXpDRLNHu-DaBAVOErPIhFioOQ4MA&oe=646780EC",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, tempora unde provident vel ex aspernatur quas obcaecati aperiam error quos impedit eius. Praesentium, eum velit corrupti sequi quisquam beatae sed! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, tempora unde provident vel ex aspernatur quas obcaecati aperiam error quos impedit eius. Praesentium, eum velit corrupti sequi quisquam beatae sed! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, tempora unde provident vel ex aspernatur quas obcaecati aperiam error quos impedit eius. Praesentium, eum velit corrupti sequi quisquam beatae sed! Lorem",
    author: "Martha Maglaperidze",
    authorImg:
      "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-6/326493388_493769512886424_6395891366361973906_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=9Zcuf4rwHqgAX-34RwI&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfDavbEgNrzWKi4uhC3Zwm0ZkLIAOIyq7QzqLnUdUBJvBQ&oe=6445749B",
    authorDesc: "Web Developer",
  };

  return (
    <div className="w-full pb-10 bg-[#f9f9f9]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 sm:grid-cols-3 ss:grid-cols-1 xs:grid-cols-1 md:gap-8 sm:gap-y-8 xs:gap-y-8  ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black">
          <div className="col-span-2 gap-8">
            <img
              className="h-56 w-full object-cover"
              src={blog.coverImg}
              alt=""
            />
            <h1 className="font-bold text-2xl my-1 pt-5">{blog.title}</h1>
            <div className="pt-5">
              <p>{blog.content}</p>
            </div>
          </div>
          <div className="w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]">
            <div>
              <img
                className="p-2 w-32 h-32 rounded-full mx-auto object-cover "
                src={blog.authorImg}
                alt=""
              />
              <h1 className="font-bold text-2xl text-center text-gray-900 pt-3">
                {blog.author}
              </h1>
              <p className="text-center text-gray-900 font-medium py-1 italic">
                {blog.authorDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
