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
    diabatesMellitus: false,
    cancer: false,
    hipertensionArterial: false,
    litiasisRenal: false,
    hipotiroidismo: false,
    hipertiroidismo: false,
    dislipidemia: false,
    ingestaActualMedicamentos: "",
    cirugias: "",
    transfusiones: "",
    hepatitis: false,
    diabetesMellitusPersonal: false,
    litiasisRenalPersonal: false,
    hipotiroidismoPersonal: false,
    hipertiroidismoPersonal: false,
    bebidasAlcoholicas: false,
    drogas: false,
    realizaEjercicio: false,
    tabaquismo: false,
    menarca: "",
    gestaciones: "",
    continuaMenstruando: false,
    edadDejoMenstruar: "",
    embarazo: false,
    dificultadEmbarazo: false
    // fechaUltimoPapanicolaou: "",

  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.edit) {
      this.setState({
        patientName: nextProps.name,
        age: nextProps.age,
        sex: nextProps.sex,
        height: nextProps.height,
        weight: nextProps.weight,
        diabatesMellitus: nextProps.diabatesMellitus,
        cancer: nextProps.cancer,
        hipertensionArterial: nextProps.hipertensionArterial,
        litiasisRenal: nextProps.litiasisRenal,
        hipotiroidismo: nextProps.hipotiroidismo,
        hipertiroidismo: nextProps.hipertiroidismo,
        dislipidemia: nextProps.dislipidemia,
        ingestaActualMedicamentos: nextProps.ingestaActualMedicamentos,
        cirugias: nextProps.cirugias,
        transfusiones: nextProps.transfusiones,
        hepatitis: nextProps.hepatitis,
        diabetesMellitusPersonal: nextProps.diabetesMellitusPersonal,
        litiasisRenalPersonal: nextProps.litiasisRenalPersonal,
        hipotiroidismoPersonal: nextProps.hipotiroidismoPersonal,
        hipertiroidismoPersonal: nextProps.hipertiroidismoPersonal,
        bebidasAlcoholicas: nextProps.bebidasAlcoholicas,
        drogas: nextProps.drogas,
        realizaEjercicio: nextProps.realizaEjercicio,
        tabaquismo: nextProps.tabaquismo,
        menarca: nextProps.menarca,
        gestaciones: nextProps.gestaciones,
        continuaMenstruando: nextProps.continuaMenstruando,
        edadDejoMenstruar: nextProps.edadDejoMenstruar,
        embarazo: nextProps.embarazo,
        dificultadEmbarazo: nextProps.dificultadEmbarazo
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
    // const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    let value = e.target.type;
    if (value === 'checkbox') {
      this.setState({ [e.target.id]: e.target.checked });
      // console.log("value: "+ value + " e.target.checked: " + e.target.checked + " e.target.value: " + e.target.value);
      return;
    }

    this.setState({ [e.target.id]: e.target.value });
  };


  createPatient = () => {
    let patient = {
      patientName: this.state.patientName,
      age: this.state.age,
      sex: this.state.sex,
      height: this.state.height,
      weight: this.state.weight,
      diabatesMellitus: this.state.diabatesMellitus,
      cancer: this.state.cancer,
      hipertensionArterial: this.state.hipertensionArterial,
      litiasisRenal: this.state.litiasisRenal,
      hipotiroidismo: this.state.hipotiroidismo,
      hipertiroidismo: this.state.hipertiroidismo,
      dislipidemia: this.state.dislipidemia,
      ingestaActualMedicamentos: this.state.ingestaActualMedicamentos,
      cirugias: this.state.cirugias,
      transfusiones: this.state.transfusiones,
      hepatitis: this.state.hepatitis,
      diabetesMellitusPersonal: this.state.diabetesMellitusPersonal,
      litiasisRenalPersonal: this.state.litiasisRenalPersonal,
      hipotiroidismoPersonal: this.state.hipotiroidismoPersonal,
      hipertiroidismoPersonal: this.state.hipertiroidismoPersonal,
      bebidasAlcoholicas: this.state.bebidasAlcoholicas,
      drogas: this.state.drogas,
      realizaEjercicio: this.state.realizaEjercicio,
      tabaquismo: this.state.tabaquismo,
      menarca: this.state.menarca,
      gestaciones: this.state.gestaciones,
      continuaMenstruando: this.state.continuaMenstruando,
      edadDejoMenstruar: this.state.edadDejoMenstruar,
      embarazo: this.state.embarazo,
      dificultadEmbarazo: this.state.dificultadEmbarazo
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
      diabatesMellitus: this.state.diabatesMellitus,
      cancer: this.state.cancer,
      hipertensionArterial: this.state.hipertensionArterial,
      litiasisRenal: this.state.litiasisRenal,
      hipotiroidismo: this.state.hipotiroidismo,
      hipertiroidismo: this.state.hipertiroidismo,
      dislipidemia: this.state.dislipidemia,
      ingestaActualMedicamentos: this.state.ingestaActualMedicamentos,
      cirugias: this.state.cirugias,
      transfusiones: this.state.transfusiones,
      hepatitis: this.state.hepatitis,
      diabetesMellitusPersonal: this.state.diabetesMellitusPersonal,
      litiasisRenalPersonal: this.state.litiasisRenalPersonal,
      hipotiroidismoPersonal: this.state.hipotiroidismoPersonal,
      hipertiroidismoPersonal: this.state.hipertiroidismoPersonal,
      bebidasAlcoholicas: this.state.bebidasAlcoholicas,
      drogas: this.state.drogas,
      realizaEjercicio: this.state.realizaEjercicio,
      tabaquismo: this.state.tabaquismo,
      menarca: this.state.menarca,
      gestaciones: this.state.gestaciones,
      continuaMenstruando: this.state.continuaMenstruando,
      edadDejoMenstruar: this.state.edadDejoMenstruar,
      embarazo: this.state.embarazo,
      dificultadEmbarazo: this.state.dificultadEmbarazo
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
      diabatesMellitus: false,
      cancer: false,
      hipertensionArterial: false,
      litiasisRenal: false,
      hipotiroidismo: false,
      hipertiroidismo: false,
      dislipidemia: false,
      ingestaActualMedicamentos: "",
      cirugias: "",
      transfusiones: "",
      hepatitis: false,
      diabetesMellitusPersonal: false,
      litiasisRenalPersonal: false,
      hipotiroidismoPersonal: false,
      hipertiroidismoPersonal: false,
      bebidasAlcoholicas: false,
      drogas: false,
      realizaEjercicio: false,
      tabaquismo: false,
      menarca: "",
      gestaciones: "",
      continuaMenstruando: false,
      edadDejoMenstruar: "",
      embarazo: false,
      dificultadEmbarazo: false
    });

    if (window.location.pathname === "/dashboard") {
      console.log("no reload " + window.location);

    }
    else {
      window.location.reload();
    }
  };

  // onSelectChange = e => {
  //   this.setState({ [e.target.id]: e.target.value });
  // };

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
              <div className="form-label" >Patient (required)</div>
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
          <div className="form-group" style={{ width: "20%" }}>
            <label>
              <div className="form-label" >age</div>
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
          <div className="form-group" style={{ width: "20%" }}>
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
          <div className="form-group" style={{ width: "20%" }}>
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
          <div className="form-group" style={{ width: "20%" }}>
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
          <h1 className="header">Antecedentes Familiares</h1>
          <div className="form-group" style={{ width: "10%" }}>
            <label>
              <div className="form-label">Diabates Mellitus</div>
              <input
                onChange={this.onChange}
                checked={this.state.diabatesMellitus}
                id="diabatesMellitus"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "10%" }}>
            <label>
              <div className="form-label">Cancer</div>
              <input
                onChange={this.onChange}
                checked={this.state.cancer}
                id="cancer"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "10%" }}>
            <label>
              <div className="form-label">Hipertension Arterial</div>
              <input
                onChange={this.onChange}
                checked={this.state.hipertensionArterial}
                id="hipertensionArterial"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "10%" }}>
            <label>
              <div className="form-label">Litiasis Renal</div>
              <input
                onChange={this.onChange}
                checked={this.state.litiasisRenal}
                id="litiasisRenal"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "10%" }}>
            <label>
              <div className="form-label">Hipo- tiroidismo</div>
              <input
                onChange={this.onChange}
                checked={this.state.hipotiroidismo}
                id="hipotiroidismo"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "10%" }}>
            <label>
              <div className="form-label">Hiper- tiroidismo</div>
              <input
                onChange={this.onChange}
                checked={this.state.hipertiroidismo}
                id="hipertiroidismo"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "10%" }}>
            <label>
              <div className="form-label">Dislipidemia</div>
              <input
                onChange={this.onChange}
                checked={this.state.dislipidemia}
                id="dislipidemia"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <h1 className="header">Antecedentes Personales Patológicos</h1>
          <div className="form-group" style={{ width: "20%" }}>
            <label>
              <div className="form-label">Ingesta Actual Medicamentos</div>
              <input
                onChange={this.onChange}
                value={this.state.ingestaActualMedicamentos}
                id="ingestaActualMedicamentos"
                type="text"
                placeholder="ingesta Actual de Medicamentos"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "20%" }}>
            <label>
              <div className="form-label">Cirugías</div>
              <input
                onChange={this.onChange}
                value={this.state.cirugias}
                id="cirugias"
                type="text"
                placeholder="cirugias"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "20%" }}>
            <label>
              <div className="form-label">Transfusiones</div>
              <input
                onChange={this.onChange}
                value={this.state.transfusiones}
                id="transfusiones"
                type="text"
                placeholder="transfusiones"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "20%" }}>
            <label>
              <div className="form-label">Hepatitis</div>
              <input
                onChange={this.onChange}
                checked={this.state.hepatitis}
                id="hepatitis"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "10%" }}>
            <label>
              <div className="form-label">diabetes Mellitus</div>
              <input
                onChange={this.onChange}
                checked={this.state.diabetesMellitusPersonal}
                id="diabetesMellitusPersonal"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "10%" }}>
            <label>
              <div className="form-label">Litiasis Renal</div>
              <input
                onChange={this.onChange}
                checked={this.state.litiasisRenalPersonal}
                id="litiasisRenalPersonal"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "10%" }}>
            <label>
              <div className="form-label">Hipo- tiroidismo</div>
              <input
                onChange={this.onChange}
                checked={this.state.hipotiroidismoPersonal}
                id="hipotiroidismoPersonal"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "10%" }}>
            <label>
              <div className="form-label">Hiper- tiroidismo</div>
              <input
                onChange={this.onChange}
                checked={this.state.hipertiroidismoPersonal}
                id="hipertiroidismoPersonal"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "10%" }}>
            <label>
              <div className="form-label">hipotiroidismo</div>
              <input
                onChange={this.onChange}
                checked={this.state.hipotiroidismo}
                id="hipotiroidismo"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "20%" }}>
            <label>
              <div className="form-label">hipotiroidismo</div>
              <input
                onChange={this.onChange}
                checked={this.state.hipotiroidismo}
                id="hipotiroidismo"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "20%" }}>
            <label>
              <div className="form-label">hipotiroidismo</div>
              <input
                onChange={this.onChange}
                checked={this.state.hipotiroidismo}
                id="hipotiroidismo"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "20%" }}>
            <label>
              <div className="form-label">hipotiroidismo</div>
              <input
                onChange={this.onChange}
                checked={this.state.hipotiroidismo}
                id="hipotiroidismo"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "20%" }}>
            <label>
              <div className="form-label">hipotiroidismo</div>
              <input
                onChange={this.onChange}
                checked={this.state.hipotiroidismo}
                id="hipotiroidismo"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "20%" }}>
            <label>
              <div className="form-label">hipotiroidismo</div>
              <input
                onChange={this.onChange}
                checked={this.state.hipotiroidismo}
                id="hipotiroidismo"
                type="checkbox"
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
