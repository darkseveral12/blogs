import type { Blog } from "../types";
import { useBlog } from "../shared/BlogContext";
import { useState, useEffect } from "react";
interface BlogFormProp {
  existingBlog: Blog;
  onClose: () => void;
}
const BlogForm = ({ existingBlog, onClose }: BlogFormProp) => {
  const { addBlog, updateBlog } = useBlog();
  const [title, setTitle] = useState(existingBlog?.title || "");
  const [description, setDescription] = useState(
    existingBlog?.description || ""
  );

  const [image, setImage] = useState(existingBlog?.image || "");
  const [time, setTime] = useState(existingBlog?.time || "");

  useEffect(() => {
    if (existingBlog) {
      setTitle(existingBlog.title);
      setDescription(existingBlog.description);
      setImage(existingBlog.image);
      setTime(existingBlog.time);
    }
  }, [existingBlog]);

  const handleSubmit = () => {
    const blog: Blog = {
      id: existingBlog ? existingBlog.id : Date.now(),
      title,
      description,
      image,
      time,
    };

    if (existingBlog) updateBlog(blog);
    else addBlog(blog);

    onClose();
  };
  return (
    <div className="bg-white p-6 rounded-lg w-120 mx-auto">
      <h3 className="font-semibold text-xl mb-2 text-gray-800">
        {existingBlog ? "EditBlog" : "Add Blog"}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-black resize-none h-32"
          />

          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-black "
          />

          <input
            type="date"
            placeholder="Time"
            onChange={(e) => setTime(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-black "
          />

          <section className="flex justify-end mt-6 space-x-4">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-black"
            >
              {existingBlog ? "Update" : "Add "}
            </button>

            <button
              onClick={onClose}
              className="bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-gray-500"
            >
              Close
            </button>
          </section>
        </div>
      </h3>
    </div>
  );
};

export default BlogForm;
