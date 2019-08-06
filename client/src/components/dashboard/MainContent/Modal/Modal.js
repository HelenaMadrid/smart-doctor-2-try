import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createPatient,
  updatePatient,
  deletePatient
} from "../../../../actions/patientsActions";


// import moment from "moment";

import "./Modal.scss";

class Modal extends Component {
  state = {
    patientName: "",
    age: "",
    sex: "",
    height: "",
    weight: "",
    yesorno: false,
    cancer: ""
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.edit) {
      this.setState({
        patientName: nextProps.name,
        age: nextProps.age,
        sex: nextProps.sex,
        height: nextProps.height,
        weight: nextProps.weight,
        yesorno: nextProps.yesorno,
        cancer: nextProps.cancer
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value});
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    console.log(value);
    this.setState({ [e.target.id]: e.target.value});
  };


  createPatient = () => {
    let patient = {
      patientName: this.state.patientName,
      age: this.state.age,
      sex: this.state.sex,
      height: this.state.height,
      weight: this.state.weight,
      yesorno: this.state.yesorno,
      cancer: this.state.cancer
    };

    this.props.createPatient(patient);
    this.onClose();
  };

  updatePatient = async id => {
    let patient = {
      id: this.props.id,
      patientName: this.state.patientName,
      age: this.state.age,
      sex: this.state.sex,
      height: this.state.height,
      weight: this.state.weight,
      yesorno: this.state.yesorno
    };

    await this.props.updatePatient(patient);

    this.onClose();
  };

  deletePatient = id => {
    this.props.deletePatient(id);
    this.onClose();
  };

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
    this.setState({
      patientName: "",
      age: "",
      sex: "",
      height: "",
      weight: "",
      yesorno: false
    });

    if (window.location.pathname === "/dashboard") {
      console.log("no reload " + window.location);

    }
    else {
      window.location.reload();
    }
  };

  onSelectChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };



  render() {
    if (!this.props.modal) {
      return null;
    }

    document.onkeyup = e => {
      if (e.keyCode === 27 && this.props.modal) {
        this.onClose();
      }
    };

    // Edit patient modal
    if (this.props.edit) {
      return (
        <div className="modal">
          <span className="close-modal" onClick={this.onClose}>
            &times;
          </span>
          <h1 className="header">Edit Patient Info</h1>
          <p className="created-by">
            Created by {this.props.owner.name} ({this.props.owner.email})
          </p>
          <div className="form-group">
            <label>
              <div className="form-label">Patient Name (required)</div>
              <input
                onChange={this.onChange}
                value={this.state.patientName}
                id="patientName"
                type="text"
                placeholder={"My patient name"}
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              <div className="form-label">age</div>
              <input
                onChange={this.onChange}
                value={this.state.age}
                id="age"
                type="number"
                placeholder="patient age"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              <div className="form-label">height</div>
              <input
                onChange={this.onChange}
                value={this.state.height}
                id="height"
                type="number"
                placeholder="patient height"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              <div className="form-label">weight</div>
              <input
                onChange={this.onChange}
                value={this.state.weight}
                id="weight"
                type="number"
                placeholder="patient weight"
                className="form-input"
              />
            </label>
          </div>
          <div>
            <button
              className="main-btn update-patient"
              onClick={this.updatePatient.bind(this, this.props.id)}
            >
              Update Patient
            </button>
            {this.props.owner.id === this.props.auth.user.id ? (
              <button
                className="main-btn delete-patient"
                onClick={this.deletePatient.bind(this, this.props.id)}
              >
                Delete Patient
              </button>
            ) : null}
          </div>
        </div>
      );
    }

    // Create patient modal
    else
      return (
        <div className="modal">
          <span className="close-modal" onClick={this.onClose}>
            &times;
          </span>
          <h1 className="header">Create a patient</h1>
          <div className="form-group">
            <label>
              <div className="form-label">Patient (required)</div>
              <input
                onChange={this.onChange}
                value={this.state.patientName}
                id="patientName"
                type="text"
                placeholder="My patient name"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              <div className="form-label">age</div>
              <input
                onChange={this.onChange}
                value={this.state.age}
                id="age"
                type="number"
                placeholder="patient age"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              <div className="form-label">height</div>
              <input
                onChange={this.onChange}
                value={this.state.height}
                id="height"
                type="number"
                placeholder="patient height"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              <div className="form-label">weight</div>
              <input
                onChange={this.onChange}
                value={this.state.weight}
                id="weight"
                type="number"
                placeholder="patient weight"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              <div className="form-label">sex</div>
              <input
                onChange={this.onChange}
                value={this.state.sex}
                id="sex"
                type="text"
                placeholder="patient sex"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              <div className="form-label">yesorno</div>
              <input
                onChange={this.onChange}
                checked={this.state.yesorno}
                id="yesorno"
                type="checkbox"
                placeholder="family history cancer?"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              <div className="form-label">cancer</div>
              <input
                onChange={this.onChange}
                value={this.state.cancer}
                id="cancer"
                type="text"
                placeholder="cancer"
                className="form-input"
              />
            </label>
          </div>
          <div>
            <button
              className="main-btn create-patient"
              onClick={this.createPatient}
            >
              Create Patient
            </button>
          </div>
        </div>
      );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  patients: state.patients
});

export default connect(
  mapStateToProps,
  { createPatient, updatePatient, deletePatient }
)(Modal);
