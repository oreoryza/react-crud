import React from "react";

function studentsForm({ toggleModal, students, onChange, onSubmit, isEdit }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{isEdit ? "Edit Student" : "Form New Student"}</h5>
          <button
            onClick={() => toggleModal(isEdit)}
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <form action="">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Student Name
              </label>
              <input
                type="text"
                name="name"
                onChange={onChange}
                value={students.name}
                className="form-control"
                id="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nim" className="form-label">
                NIM
              </label>
              <input
                type="text"
                value={students.nim}
                onChange={onChange}
                inputMode="numeric"
                name="nim"
                className="form-control"
                id="nim"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="birthDate" className="form-label">
                Birth Date
              </label>
              <input
                type="date"
                value={students.birthDate}
                onChange={onChange}
                name="birthDate"
                className="form-control"
                id="birthDate"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <textarea name="address" value={students.address} onChange={onChange} className="form-control" id="address" />
            </div>
            <div className="mb-3">
              <label htmlFor="guardian" className="form-label">
                Guardian Name
              </label>
              <input
                type="text"
                value={students.guardian}
                onChange={onChange}
                name="guardian"
                className="form-control"
                id="guardian"
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          {
            isEdit ? (
              <button
                onClick={onSubmit}
                type="button"
                className="btn btn-primary"
              >
                <i className="bi bi-pencil-square"></i> Update
              </button>
            ) : (
              <button
                onClick={() => onSubmit(students)}
                type="button"
                className="btn btn-primary"
              >
                <i className="bi bi-plus-lg"></i> Add
              </button>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default studentsForm;
