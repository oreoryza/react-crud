import React from "react";

function StudentTable({ toggleModalForm, toggleModalDetail, students, handleEditStudent, handleDeleteStudent }) {
  return (
    <div className="table-responsive">
      <table className="table table-hover table-bordered  caption-top">
        <caption>List of Student</caption>
        <thead>
          <tr>
            <th scope="col" colSpan="4">
              Student ID
              <button
                onClick={() => toggleModalForm(false)}
                className="btn btn-outline-primary float-end fw-bold"
              >
                <i className="bi bi-plus-lg"></i> Add New
              </button>
            </th>
          </tr>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">NIM</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {students.map((student, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{student.name}</td>
              <td>{student.nim}</td>
              <td>
                <button
                  type="button"
                  onClick={() => handleEditStudent(student, index)}
                  className="btn btn-primary btn-sm float-end"
                >
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button
                onClick={() => handleDeleteStudent(index)}
                  type="button"
                  className="btn btn-danger btn-sm float-end mx-2"
                >
                  <i className="bi bi-trash"></i>
                </button>
                <button
                  onClick={() => toggleModalDetail(student)}
                  type="button"
                  className="btn btn-success btn-sm float-end"
                >
                  <i className="bi bi-eye"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
