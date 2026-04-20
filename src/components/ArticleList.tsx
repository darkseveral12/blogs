import type { Blog } from "../types";
import { useBlog } from "../shared/BlogContext";
import ArticleCard from "./ArticleCard";
interface ArticleListProps {
  onEdit: (blog: Blog) => void;
}

const ArticleList = ({ onEdit }: ArticleListProps) => {
  const { blogs, deleteBlog } = useBlog();
  return (
    <div className="ml-20">
      {blogs.map((blog) => (
        <ArticleCard
          key={blog.id}
          article={blog}
          onDelete={() => deleteBlog(blog.id)}
          onEdit={() => onEdit(blog)}
        />
      ))}
    </div>
  );
};

export default ArticleList;
