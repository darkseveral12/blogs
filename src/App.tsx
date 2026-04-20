import Navigation from "./components/Navigation";
import PeopleToFollow from "./components/PeopleToFollow";
import TrendList from "./components/TrendList";
import TopicsList from "./components/TopicsList";
import { IoMdAddCircle } from "react-icons/io";
import { useState } from "react";
import type { Blog } from "./types";
import Modal from "./components/Modal";
import BlogForm from "./components/BlogForm";
import { BlogProvider } from "./shared/BlogContext";
import ArticleList from "./components/ArticleList";
function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  const openModalForNewBlog = () => {
    setEditingBlog(null);
    setIsModalOpen(true);
  };

  const openModalForEdit = () => {
    setEditingBlog(blog);
    setIsModalOpen(true);
  };

  return (
    <div>
      <Navigation />
      <div className="flex justify-center">
        <section className="mx-auto p-6">
          <BlogProvider>
            <div>
              <button
                onClick={openModalForNewBlog}
                className="ml-28 bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4"
              >
                Add New Blog <IoMdAddCircle className="ml-2" />
              </button>
            </div>

            <ArticleList onEdit={openModalForEdit} />
            {isModalOpen && (
              <Modal onClose={() => setIsModalOpen(false)}>
                <BlogForm
                  existingBlog={editingBlog}
                  onClose={() => setIsModalOpen(false)}
                />
              </Modal>
            )}
          </BlogProvider>
        </section>

        <div className="w-[30%]">
          <PeopleToFollow />
          <TrendList />
          <TopicsList />
        </div>
      </div>
    </div>
  );
}

export default App;
