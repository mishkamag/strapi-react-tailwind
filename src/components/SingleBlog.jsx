import React from "react";
import { useParams } from "react-router-dom";

const SingleBlog = ({ blogs }) => {
  const { id } = useParams();

  let blog = {};
  if (blog) {
    let arr = blogs?.data?.filter((blog) => blog.id == id);
    blog = arr[0];
  } else {
    blog = {};
  }

  return (
    <div className="w-full pb-10 bg-[#f9f9f9]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 sm:grid-cols-3 ss:grid-cols-1 xs:grid-cols-1 md:gap-8 sm:gap-y-8 xs:gap-y-8  ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black">
          <div className="col-span-2 gap-8">
            <img
              className="h-56 w-full object-cover"
              src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`}
              alt=""
            />
            <h1 className="font-bold text-2xl my-1 pt-5">
              {blog.attributes.blogTitle}
            </h1>
            <div className="pt-5">
              <p>{blog.attributes.blogContent}</p>
            </div>
          </div>
          <div className="w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]">
            <div>
              <img
                className="p-2 w-32 h-32 rounded-full mx-auto object-cover "
                src={`http://localhost:1337${blog.attributes.authorImg.data.attributes.url}`}
                alt=""
              />
              <h1 className="font-bold text-2xl text-center text-gray-900 pt-3">
                {blog.attributes.authorName}
              </h1>
              <p className="text-center text-gray-900 font-medium py-1 italic">
                {blog.attributes.authorDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;

// const blogs1 = [
//   {
//     id: 1,
//     title: "Blog 1",
//     desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
//     coverImg:
//       "https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png",
//     content:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, tempora unde provident vel ex aspernatur quas obcaecati aperiam error quos impedit eius. Praesentium, eum velit corrupti sequi quisquam beatae sed! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, tempora unde provident vel ex aspernatur quas obcaecati aperiam error quos impedit eius. Praesentium, eum velit corrupti sequi quisquam beatae sed! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, tempora unde provident vel ex aspernatur quas obcaecati aperiam error quos impedit eius. Praesentium, eum velit corrupti sequi quisquam beatae sed! Lorem",
//     author: "Martha Maglaperidze",
//     authorImg:
//       "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-6/326493388_493769512886424_6395891366361973906_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=9Zcuf4rwHqgAX-34RwI&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfDavbEgNrzWKi4uhC3Zwm0ZkLIAOIyq7QzqLnUdUBJvBQ&oe=6445749B",
//     authorDesc: "Web Developer",
//   },
//   {
//     id: 2,
//     title: "Blog 2",
//     desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
//     coverImg:
//       "https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png",
//     content:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, tempora unde provident vel ex aspernatur quas obcaecati aperiam error quos impedit eius. Praesentium, eum velit corrupti sequi quisquam beatae sed! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, tempora unde provident vel ex aspernatur quas obcaecati aperiam error quos impedit eius. Praesentium, eum velit corrupti sequi quisquam beatae sed! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, tempora unde provident vel ex aspernatur quas obcaecati aperiam error quos impedit eius. Praesentium, eum velit corrupti sequi quisquam beatae sed! Lorem",
//     author: "Martha Maglaperidze",
//     authorImg:
//       "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-6/326493388_493769512886424_6395891366361973906_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=9Zcuf4rwHqgAX-34RwI&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfDavbEgNrzWKi4uhC3Zwm0ZkLIAOIyq7QzqLnUdUBJvBQ&oe=6445749B",
//     authorDesc: "Web Developer",
//   },
//   {
//     id: 3,
//     title: "Blog 3",
//     desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
//     coverImg:
//       "https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png",
//     content:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, tempora unde provident vel ex aspernatur quas obcaecati aperiam error quos impedit eius. Praesentium, eum velit corrupti sequi quisquam beatae sed! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, tempora unde provident vel ex aspernatur quas obcaecati aperiam error quos impedit eius. Praesentium, eum velit corrupti sequi quisquam beatae sed! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, tempora unde provident vel ex aspernatur quas obcaecati aperiam error quos impedit eius. Praesentium, eum velit corrupti sequi quisquam beatae sed! Lorem",
//     author: "Martha Maglaperidze",
//     authorImg:
//       "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-6/326493388_493769512886424_6395891366361973906_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=9Zcuf4rwHqgAX-34RwI&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfDavbEgNrzWKi4uhC3Zwm0ZkLIAOIyq7QzqLnUdUBJvBQ&oe=6445749B",
//     authorDesc: "Web Developer",
//   },
// ];
