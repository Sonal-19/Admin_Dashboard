import React, { useEffect, useState } from "react";
import { faEdit, faEye, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import blog1 from "../../Images/blog1.jpg";
import blog2 from "../../Images/blog2.jpg";
import blog3 from "../../Images/blog3.jpg";
import blog5 from "../../Images/blog5.jpg";
import blog6 from "../../Images/blog6.jpg";
import blog7 from "../../Images/blog7.jpg";

export default function BlogList() {
  useEffect(() => {
    function setPageTitle(pageName) {
      document.title = `${pageName}`;
    }
    setPageTitle('Blog List');
  }, []);

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const mockBlogs = [
      { _id: 1, name: "Festive Fashion: Inspiring Winter Wedding Outfit", image: blog2 },
      { _id: 2, name: "A Glamorous Guide to Fascinating Diwali Outfit Ideas for Women", image: blog3 },
      { _id: 3, name: "Explore Unique Christmas Outfit Ideas for a Holly Jolly Look", image: blog6 },
      { _id: 4, name: "Effortless Elegance: Mastering the Art of Casual Chic", image: blog7 },
      { _id: 5, name: "Sartorial Harmony: Crafting the Perfect Family Wedding Ensemble", image: blog1 },
      { _id: 6, name: "Festive Frolics: Unwrapping the Magic of Christmas Outfits for Kids", image: blog5 },
    ];
    setBlogs(mockBlogs);
  }, []);

  const deleteBlog = (blogId) => {
    setBlogs(blogs.filter(blog => blog._id !== blogId));
  };

  return (
    <>
      <div className="d-flex flex-column p-1 m-1 justify-content-center align-items-center">
        <h2 className="mb-4 text-bold font-monospace text-center">
          All Blogs
        </h2>
        <div className="cardAP rounded bg-white border shadow p-4 pb-5 mb-5">
          <div className="d-flex justify-content-end">
            <Link to="/addblog" className="btn btn-primary">
              <FontAwesomeIcon icon={faPlus} />
            </Link>
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, index) => (
                <tr key={blog._id}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img
                      src={blog.image}
                      alt={blog.name}
                      className="img-thumbnail"
                      style={{ width: "100px", height: "100px" }}
                    />
                  </td>
                  <td>{blog.name}</td>
                  <td>
                    <Link to={`/viewblog/${blog._id}`} className="btn btn-info me-2">
                      <FontAwesomeIcon icon={faEye} />
                    </Link>
                    <Link to={`/editblog/${blog._id}`} className="btn btn-primary me-2">
                      <FontAwesomeIcon icon={faEdit} />
                    </Link>
                    <button className="btn btn-danger" onClick={() => deleteBlog(blog._id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
