import { faEdit, faEye, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pp1 from "../../Images/pp1.jpg";
import pp2 from "../../Images/pp2.jpg";
import pp3 from "../../Images/pp3.jpg";

export default function AdminList() {
  const [admins, setAdmins] = useState([]);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const adminData = [
      { _id: "1", name: "Sonal", email: "sonal@example.com", contact: "1234567890", address: "123 Main St", birthday: "1990-01-01", gender: "female", image: pp1 },
      { _id: "2", name: "Priya", email: "priya@example.com", contact: "1234567890", address: "123 Main St", birthday: "1990-01-01", gender: "female", image: pp2 },
      { _id: "3", name: "Jane Smith", email: "jane@example.com", contact: "9876543210", address: "456 Elm St", birthday: "1992-05-15", gender: "Female", image: pp3 },
      
    ];
    setAdmins(adminData);
  }, []);

  const fetchAdminById = (adminId) => {
    const admin = admins.find(admin => admin._id === adminId);
    if (admin) {
      setSelectedAdmin(admin);
      setShowModal(true);
    } else {
      console.error('Admin not found.');
    }
  };

  const deleteAdminById = (adminId) => {
    const updatedAdmins = admins.filter(admin => admin._id !== adminId);
    setAdmins(updatedAdmins);
    setShowModal(false); 
  };

  return (
    <>
      <div className="d-flex flex-column p-1 m-1 justify-content-center align-items-center">
        <h2 className="mb-4 text-bold font-monospace text-center">All Admins Data</h2>
        <div className="cardAP rounded bg-white border shadow p-4 pb-5 mb-5">
          <div className="d-flex justify-content-end">
            <Link to="/addadmin" className="btn btn-primary">
              <FontAwesomeIcon icon={faPlus} />
            </Link>
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact</th>
                <th scope="col">Address</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(admins) && admins.map((admin, index) => (
                <tr key={admin._id}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img
                      src={admin.image}
                      alt={`${admin.name}'s Profile`}
                      className="img-thumbnail"
                      style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                    />
                  </td>
                  <td>{admin.name}</td>
                  <td>{admin.email}</td>
                  <td>{admin.contact}</td>
                  <td>{admin.address}</td>
                  <td>
                    <button className="btn btn-info me-2" onClick={() => fetchAdminById(admin._id)}>
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                    <Link to={`/editadmin/${admin._id}`} className="me-2 btn btn-primary">
                      <FontAwesomeIcon icon={faEdit} />
                    </Link>
                    <button className="btn btn-danger" onClick={() => deleteAdminById(admin._id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} className='mb-5 pb-5 mt-3 pt-2'>
        <Modal.Header closeButton>
          <Modal.Title>
            <h2 className="text-bold font-monospace text-center ms-5 ps-5">Admin Details</h2>
          </Modal.Title>
        </Modal.Header>
        {selectedAdmin && (
          <Modal.Body>
            <div>
              <div className="col-12">
                <div className="fw-bold text-center">
                  <img
                    src={selectedAdmin.image}
                    alt={`${selectedAdmin.name}'s Profile`}
                    className="img-thumbnail"
                    style={{ width: "100px", height: "100px", borderRadius: "50%", borderColor: 'black' }}
                  />
                </div>
              </div>
              <div className="col-12 m-3">
                <div style={{ fontStyle: "italic" }}>Name</div>
                <div className="fw-bold">{selectedAdmin.name}</div>
              </div>
              <div className="col-12 m-3">
                <div style={{ fontStyle: "italic" }}>Email</div>
                <div className="fw-bold">{selectedAdmin.email}</div>
              </div>
              <div className="col-12 m-3">
                <div style={{ fontStyle: "italic" }}>Contact</div>
                <div className="fw-bold">{selectedAdmin.contact}</div>
              </div>
              <div className="col-12 m-3">
                <div style={{ fontStyle: "italic" }}>Address</div>
                <div className="fw-bold">{selectedAdmin.address}</div>
              </div>
              <div className="col-12 m-3">
                <div style={{ fontStyle: "italic" }}>Birthday</div>
                <div className="fw-bold">{selectedAdmin.birthday}</div>
              </div>
              <div className="col-12 m-3">
                <div style={{ fontStyle: "italic" }}>Gender</div>
                <div className="fw-bold">{selectedAdmin.gender}</div>
              </div>
            </div>
          </Modal.Body>
        )}
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
