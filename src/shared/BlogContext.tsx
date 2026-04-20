import { createContext, useState, useContext } from "react";
import type { Blog } from "../../types";

interface BlogContextType {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
  updateBlog: (blog: Blog) => void;
  deleteBlog: (id: number) => void;
}

interface BlogProviderProp {
  children: React.ReactNode;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

const BlogProvider = ({ children }: BlogProviderProp) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const addBlog = (blog: Blog) => setBlogs([...blogs, blog]);

  const updateBlog = (updatedBlog: Blog) =>
    setBlogs(
      blogs.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
    );

  const deleteBlog = (id: number) =>
    setBlogs(blogs.filter((blog) => blog.id !== id));

  return (
    <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

const useBlog = () => {
  const context = useContext(BlogContext);

  if (!context)
    throw new Error("use blogs must be used within a blog provider");

  return context;
};

export { BlogContext, BlogProvider, useBlog };
