import React, { useEffect, useState } from 'react'
import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal } from "react-bootstrap";

export default function ContactList() {
  useEffect(() => {
    function setPageTitle(pageName) {
      document.title = `${pageName}`;
    }
    setPageTitle('Contact List');
  }, []);

  const [contactForms, setContactForms] = useState([]);
  const [selectedContactForm, setSelectedContactForm] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (contactForm) => {
    setSelectedContactForm(contactForm);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedContactForm(null);
    setIsModalOpen(false);
  };

  const deleteContactFormById = (contactFormId) => {
    setContactForms(contactForms.filter(contactForm => contactForm.id !== contactFormId));
  };

  useEffect(() => {
    const mockContactForms = [
      { id: 1, name: "Riya", email: "riya@example.com", message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet." },
      { id: 2, name: "Jiya", email: "jiya@example.com", message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet." },
      { id: 3, name: "Siya", email: "siya@example.com", message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet." },
      { id: 4, name: "John Doe", email: "john@example.com", message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
      { id: 5, name: "Jane Doe", email: "jane@example.com", message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet." },
      { id: 6, name: "Piya", email: "piya@example.com", message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet." },
      { id: 7, name: "Tiya", email: "tiya@example.com", message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet." },
      { id: 8, name: "Kiya", email: "kiya@example.com", message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet." },
    ];
    setContactForms(mockContactForms);
  }, []);

  return (
    <>
      <div className="d-flex flex-column p-1 m-1 justify-content-center align-items-center">
        <h2 className="mb-4 text-bold font-monospace text-center">All Contact Form Data</h2>
        <div className="cardAP rounded bg-white border shadow p-4 pb-5 mb-5">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(contactForms) && contactForms.map((contactForm, index) => (
                <tr key={contactForm.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{contactForm.name}</td>
                  <td>{contactForm.email}</td>
                  <td>
                    <button className="btn btn-info me-2" onClick={() => openModal(contactForm)}>
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                    <button className="btn btn-danger" onClick={() => deleteContactFormById(contactForm.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for displaying contact form details */}
      <Modal show={isModalOpen} onHide={closeModal} contentLabel="Contact Form Detail" className="modal">
        <Modal.Header closeButton>
          <Modal.Title>
            <h2 className="text-bold font-monospace text-center">Contact Form Detail</h2>
          </Modal.Title>
        </Modal.Header>
        {selectedContactForm && (
          <Modal.Body>
            <div>
              <div className="col-12 m-3">
                <div style={{ fontStyle: "italic" }}>Name</div>
                <div className="fw-bold">{selectedContactForm.name}</div>
              </div>
              <div className="col-12 m-3">
                <div style={{ fontStyle: "italic" }}>Email</div>
                <div className="fw-bold">{selectedContactForm.email}</div>
              </div>
              <div className="col-12 m-3">
                <div style={{ fontStyle: "italic" }}>Message</div>
                <div className="fw-bold">{selectedContactForm.message}</div>
              </div>
            </div>
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button className="btn btn-secondary" onClick={closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
