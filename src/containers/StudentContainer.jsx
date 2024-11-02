import React, { Component } from "react";
import StudentTable from "../components/StudentTable";
import StudentForm from "../components/StudentForm";
import StudentDetail from "../components/StudentDetail";

class StudentContainer extends Component {
  state = {
    modalForm: false,
    modalDetail: false,
    isEdit: false,
    editStudent: null,
    currentStudent: {
      name: "",
      nim: "",
      birthDate: "",
      address: "",
      guardian: "",
    },
    selectedStudent: null,
    students: [
      {
        name: "Jane Doe",
        nim: "50055",
        birthDate: "2000-01-01",
        address: "",
        guardian: "",
      },
      {
        name: "Seth",
        nim: "50005005",
        birthDate: "2000-01-01",
        address: "",
        guardian: "",
      },
      {
        name: "Ellen Joe",
        nim: "5000500",
        birthDate: "2000-01-01",
        address: "",
        guardian: "",
      },
    ],
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      currentStudent: {
        ...prevState.currentStudent,
        [name]: value,
      },
    }));
    // console.log(this.state.currentStudent);
  };

  toggleModalForm = (isEdit = false) => {
    this.setState({ isEdit: isEdit, modalForm: !this.state.modalForm });
  };

  handleEditStudent = (student, index) => {
    this.setState({
      currentStudent: student,
      isEdit: true,
      modalForm: !this.state.modalForm,
      editStudent: index,
    });
  };

  toggleModalDetail = () => {
    this.setState({ modalDetail: !this.state.modalDetail });
  };

  handleAddorUpdateStudent = () => {
    const { currentStudent, isEdit } = this.state;

    if (isEdit) {
      const index = this.state.editStudent;
      const updateStudent = [...this.state.students];
      updateStudent[index] = currentStudent;
      this.setState({ students: updateStudent });
    } else {
      this.setState((prevState) => ({
        students: [...prevState.students, currentStudent],
        currentStudent: {
          name: "",
          nim: "",
          birthDate: "",
          address: "",
          guardian: "",
        }
      }));
    }
    this.toggleModalForm(this.state.isEdit);
 //clear data new
  };

  handleDeleteStudent = (index) => {
    const { students } = this.state;
    const newStudents = students.slice(0, index).concat(
      students.slice(index + 1)
    );
    this.setState(() => ({
      students: newStudents,
    }));
  };

  handleInfoStudent = (student) => {
    this.setState({
      selectedStudent: student,
    });
    this.toggleModalDetail();
  }

  render() {
    return (
      <div>
        <StudentTable
          students={this.state.students}
          handleEditStudent={this.handleEditStudent}
          toggleModalForm={this.toggleModalForm}
          toggleModalDetail={this.handleInfoStudent}
          handleDeleteStudent={this.handleDeleteStudent}
        />
        {this.state.modalForm && (
          <StudentForm
            isEdit={this.state.isEdit}
            onSubmit={this.handleAddorUpdateStudent}
            onChange={this.handleInputChange}
            toggleModal={this.toggleModalForm}
            students={this.state.currentStudent}
          />
        )}
        {this.state.modalDetail && (
          <StudentDetail toggleModal={this.toggleModalDetail} student={this.state.selectedStudent} />
        )}
      </div>
    );
  }
}

export default StudentContainer;
