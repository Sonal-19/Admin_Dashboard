import React, { useEffect, useState } from "react";

export default function AddBlog() {
  useEffect(() => {
    function setPageTitle(pageName) {
      document.title = `${pageName}`;
    }
    setPageTitle('Add Blog');
  }, []);

  const [blog, setBlog] = useState({
    name: "",
    description: "",
    image: null,
  });

  const handleAddBlog = (e) => {
    e.preventDefault();
    console.log("Blog added:", blog);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setBlog((prevBlog) => ({
      ...prevBlog,
      image: file,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-bold font-monospace text-center m-3">Add Blog</h2>
        <div className="cardA rounded bg-white border shadow p-4 mb-5 pb-5">
          <form className="row g-3">
            <div className="col-12">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Blog name"
                value={blog.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                type="text"
                name="description"
                placeholder="Enter description"
                value={blog.description}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="col-12">
              <label className="form-label">Image</label>
              <input
                className="form-control"
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <div className="col-12">
              <button
                className="btn btnA w-100"
                type="button"
                onClick={handleAddBlog}
              >
                Add Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
