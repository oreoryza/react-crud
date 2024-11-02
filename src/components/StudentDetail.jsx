import React from 'react'

function StudentDetail({toggleModal, student}) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Modal title</h5>
          <button
            onClick={toggleModal}
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <p>
            <strong>Student Name:</strong> {student.name}
          </p>
          <p>
            <strong>NIM:</strong> {student.nim}
          </p>
          <p>
            <strong>Birth Date:</strong> {student.birthDate}
          </p>
          <p>
            <strong>Address:</strong> {student.address}
          </p>
          <p>
            <strong>Guardian:</strong> {student.guardian}
          </p>
        </div>
      </div>
    </div>
  )
}

export default StudentDetail