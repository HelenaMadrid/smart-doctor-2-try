import React, { Component } from "react";
import { connect } from "react-redux";
import { getPatient } from "../../../../actions/patientsActions";

import Spinner from "../../../common/Spinner";
import Modal from "../Modal/Modal";

import "../MainContent.scss";
import "./Patient.scss";

class Patient extends Component {
  state = {
    modal: false,
    edit: false,
    name: "",
    age: "",
    sex: "",
    height: "",
    weight: "",
    yesorno: "",
    id: "",
    owner: {},
    date: ""
  };

  toggleModal = e => {
    this.setState({ modal: !this.state.modal, edit: false });
  };

  toggleEditModal = (name, age, height, weight, id, owner, e) => {
    // e.stopPropagation();
    this.setState({
      modal: !this.state.modal,
      edit: !this.state.edit,
      name: name,
      age: age,
      height: height,
      weight: weight,
      id: id,
      owner: owner
    });
  };


  // updatePatient(patient) {
  //   this.setState({
  //     name: patient.name,
  //     age: patient.age,
  //     height: patient.height,
  //     weight: patient.weight
  //   });
  // }


  componentDidMount() {
    this.props.getPatient(this.props.match.params.patient);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.patient !== prevProps.match.params.patient) {
      this.props.getPatient(this.props.match.params.patient);
    }
  }

  // onChange = async e => {
  //   await this.setState({ patients: this.props.patients.patient });

  //   let patient = await [...this.state.patient];

  //   await alert(patient[e.target.id].name);

  //   patient[e.target.id].name = await e.target.value;

  //   await this.setState({ patient });
  // };

  render() {

    if (
      this.props.patient 
      &&
      !this.props.patients.patientLoading
    ) {
      const { patient } = this.props;

      return (

        <div className="main-content">
          <h1 className="patient-header">{patient.name}</h1>
          <button
            onClick={this.toggleEditModal.bind(
              this,
              patient.name,
              patient.age,
              patient.height,
              patient.weight,
              patient._id,
              patient.owner
            )}
            className="main-btn center-btn"
          >
            Edit Patient Info
          </button>

          <div className="modal-wrapper">
            <Modal
              onClose={this.toggleModal}
              modal={this.state.modal}
              edit={this.state.edit}
              name={this.state.name}
              age={this.state.age}
              height={this.state.height}
              weight={this.state.weight}
              id={this.state.id}
              owner={this.state.owner}
            />
          </div>

          {/* <div className="tasks-container">
            <div className="patients-first-row">
              <button
                className="main-btn add-btn"
                onClick={this.toggleTaskModal}
              >
                Add task
              </button>
              <div className="patients-column-headers">
                <p>Assignee</p>
                <p>Due</p>
              </div>
            </div>
            <div className="patient-tasks">{tasksList}</div>
          </div> */}
          <div className="tasks-container">
            <h2 className="header">Age</h2>
            <div className="form-label">{patient.age}</div>
            <h2 className="header">Height</h2>
            <div className="form-label">{patient.height}</div>
            <h2 className="header">Weight</h2>
            <div className="form-label">{patient.weight}</div>
            <h2 className="header">Sex</h2>
            <div className="form-label">{patient.sex}</div>
            <h2 className="header">cancer in family?</h2>
            <div className="form-label">{patient.yesorno}</div>
          </div>

          {/* <div className="tasks-container">
            <div className="patients-first-row">
              <div className="patients-column-headers">
                <p>{patient.age}</p>
                <p>{patient.height}</p>
                <p>{patient.weight}</p>
              </div>
            </div>
          </div> */}


        </div>
      );
    }

    return (
      <div className="patient-spinner">
        <Spinner />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  patient: state.patients.patient,
  patients: state.patients
});

export default connect(
  mapStateToProps,
  { getPatient }
)(Patient);
