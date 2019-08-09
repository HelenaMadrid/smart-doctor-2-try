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
    diabetesMellitus: false,
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

  };

  componentWillReceiveProps(nextProps) {
    if (this.props.patient.antecedentesFamiliares
      &&
      this.props.patient.antecedentesPersonalesNoPatologicos
      &&
      this.props.patient.antecedentesPersonalesPatologicos
      &&
      this.props.patient.antecedentesGinecologicos) {
      if (nextProps.edit) {
        this.setState({
          patientName: nextProps.name,
          age: nextProps.age,
          sex: nextProps.sex,
          height: nextProps.height,
          weight: nextProps.weight,
          diabetesMellitus: nextProps.diabetesMellitus,
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
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
    // const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    
    let value = e.target.type;
    if (value === 'checkbox') {
      this.setState({ [e.target.id]: e.target.checked });
      // console.log("value: "+ value + " e.target.checked: " + e.target.checked + " e.target.value: " + e.target.value);
      console.log(e.target.value);
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
      diabetesMellitus: this.state.diabetesMellitus,
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
      diabetesMellitus: this.state.diabetesMellitus,
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
    this.onCloseDelete();
  };

  onCloseDelete = e => {
    this.resetState();
    window.location = "/dashboard";
  }

  resetState(){
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
  }

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
    this.resetState();

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

    if (this.props.edit && this.props.patient
      &&
      this.props.patient.antecedentesFamiliares
      &&
      this.props.patient.antecedentesPersonalesNoPatologicos
      &&
      this.props.patient.antecedentesPersonalesPatologicos
      &&
      this.props.patient.antecedentesGinecologicos) {
      console.log(this.props.patient.antecedentesFamiliares);
      console.log(this.props.patient.antecedentesFamiliares.diabetesMellitus);
      // const { patient } = this.props;
      // const { antecedentesFamiliares, antecedentesGinecologicos, antecedentesPersonalesNoPatologicos, antecedentesPersonalesPatologicos } = patient;

      return (
        <div className="modal">
          <span className="close-modal" onClick={this.onClose}>
            &times;
          </span>
          <h1 className="header">Edit Patient Info</h1>
          <p className="created-by">
            Created by {this.props.owner.name} ({this.props.owner.email})
          </p>
          
          <div className="form-group" style={{ width: "30%" }}>
            <label>
              <div className="form-label" >Patient (required)</div>
              <input
                onChange={this.onChange}
                value={this.state.patientName}
                id="patientName"
                type="text"
                placeholder="Patient name"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "17%" }}>
            <label>
              <div className="form-label" >Age</div>
              <input
                onChange={this.onChange}
                value={this.state.age}
                id="age"
                type="number"
                placeholder="Patient age"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "17%" }}>
            <label>
              <div className="form-label">Sex</div>
              <input
                onChange={this.onChange}
                value={this.state.sex}
                id="sex"
                type="text"
                placeholder="Patient sex"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "17%" }}>
            <label>
              <div className="form-label">Height</div>
              <input
                onChange={this.onChange}
                value={this.state.height}
                id="height"
                type="number"
                placeholder="Patient height"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "17%" }}>
            <label>
              <div className="form-label">Weight</div>
              <input
                onChange={this.onChange}
                value={this.state.weight}
                id="weight"
                type="number"
                placeholder="Patient weight"
                className="form-input"
              />
            </label>
          </div>
          <h1 className="header">Family background</h1>
          <div className="form-group" style={{ width: "10%" }}>
            <label>
              <div className="form-label">Diabetes mellitus</div>
              <input
                onChange={this.onChange}
                checked={this.state.diabetesMellitus}
                id="diabetesMellitus"
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
              <div className="form-label">Arterial hypertension</div>
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
              <div className="form-label">Nephrolithiasis</div>
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
              <div className="form-label">Hypothyroidism</div>
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
              <div className="form-label">Hyperthyroidism</div>
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
              <div className="form-label">Dyslipidemia</div>
              <input
                onChange={this.onChange}
                checked={this.state.dislipidemia}
                id="dislipidemia"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <h1 className="header">Pathological personal history</h1>
          <div className="form-group" style={{ width: "50%" }}>
            <label>
              <div className="form-label">Current intake medications</div>
              <input
                onChange={this.onChange}
                value={this.state.ingestaActualMedicamentos}
                id="ingestaActualMedicamentos"
                type="text"
                placeholder="Medications"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "20%" }}>
            <label>
              <div className="form-label">Surgeries</div>
              <input
                onChange={this.onChange}
                value={this.state.cirugias}
                id="cirugias"
                type="text"
                placeholder="Surgeries"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "20%" }}>
            <label>
              <div className="form-label">Transfusions</div>
              <input
                onChange={this.onChange}
                value={this.state.transfusiones}
                id="transfusiones"
                type="text"
                placeholder="Transfusions"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "20%", marginTop: "40px"}}>
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
          <div className="form-group" style={{ width: "17%" }}>
            <label>
              <div className="form-label">Diabetes mellitus</div>
              <input
                onChange={this.onChange}
                checked={this.state.diabetesMellitusPersonal}
                id="diabetesMellitusPersonal"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "17%" }}>
            <label>
              <div className="form-label">Nephrolithiasis</div>
              <input
                onChange={this.onChange}
                checked={this.state.litiasisRenalPersonal}
                id="litiasisRenalPersonal"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "17%" }}>
            <label>
              <div className="form-label">Hypothyroidism</div>
              <input
                onChange={this.onChange}
                checked={this.state.hipotiroidismoPersonal}
                id="hipotiroidismoPersonal"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "17%" }}>
            <label>
              <div className="form-label">Hyperthyroidism</div>
              <input
                onChange={this.onChange}
                checked={this.state.hipertiroidismoPersonal}
                id="hipertiroidismoPersonal"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <h1 className="header">Non-pathological personal history</h1>
          <div className="form-group" style={{ width: "23%" }}>
            <label>
              <div className="form-label">Alcoholic beverages</div>
              <input
                onChange={this.onChange}
                checked={this.state.bebidasAlcoholicas}
                id="bebidasAlcoholicas"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "23%" }}>
            <label>
              <div className="form-label">Drugs</div>
              <input
                onChange={this.onChange}
                checked={this.state.drogas}
                id="drogas"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "23%" }}>
            <label>
              <div className="form-label">Perform exercise</div>
              <input
                onChange={this.onChange}
                checked={this.state.realizaEjercicio}
                id="realizaEjercicio"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "23%" }}>
            <label>
              <div className="form-label">Smoking</div>
              <input
                onChange={this.onChange}
                checked={this.state.tabaquismo}
                id="tabaquismo"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <h1 className="header">Gynecological Background</h1>
          <div className="form-group" style={{ width: "20%" }}>
            <label>
              <div className="form-label">Menarche</div>
              <input
                onChange={this.onChange}
                value={this.state.menarca}
                id="menarca"
                type="number"
                placeholder="Menarches"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "20%" }}>
            <label>
              <div className="form-label">Gestations</div>
              <input
                onChange={this.onChange}
                value={this.state.gestaciones}
                id="gestaciones"
                type="number"
                placeholder="Number of Gestations"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "15%" }}>
            <label>
              <div className="form-label">Continue menstruating</div>
              <input
                onChange={this.onChange}
                checked={this.state.continuaMenstruando}
                id="continuaMenstruando"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "15%" }}>
            <label>
              <div className="form-label">Age Leave Menstruating</div>
              <input
                onChange={this.onChange}
                value={this.state.edadDejoMenstruar}
                id="edadDejoMenstruar"
                type="number"
                placeholder="Age"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "15%" }}>
            <label>
              <div className="form-label">Pregnant</div>
              <input
                onChange={this.onChange}
                checked={this.state.embarazo}
                id="embarazo"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "15%" }}>
            <label>
              <div className="form-label">Difficulty pregnancy</div>
              <input
                onChange={this.onChange}
                checked={this.state.dificultadEmbarazo}
                id="dificultadEmbarazo"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="buttons">
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
          <div className="form-group" style={{ width: "30%" }}>
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
          <div className="form-group" style={{ width: "17%" }}>
            <label>
              <div className="form-label" >Age</div>
              <input
                onChange={this.onChange}
                value={this.state.age}
                id="age"
                type="number"
                placeholder="Patient age"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "17%" }}>
            <label>
              <div className="form-label">Sex</div>
              <input
                onChange={this.onChange}
                value={this.state.sex}
                id="sex"
                type="text"
                placeholder="Patient sex"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "17%" }}>
            <label>
              <div className="form-label">Height</div>
              <input
                onChange={this.onChange}
                value={this.state.height}
                id="height"
                type="number"
                placeholder="Patient height"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "17%" }}>
            <label>
              <div className="form-label">Weight</div>
              <input
                onChange={this.onChange}
                value={this.state.weight}
                id="weight"
                type="number"
                placeholder="Patient weight"
                className="form-input"
              />
            </label>
          </div>
          <h1 className="header">Family background</h1>
          <div className="form-group" style={{ width: "10%" }}>
            <label>
              <div className="form-label">Diabetes mellitus</div>
              <input
                onChange={this.onChange}
                checked={this.state.diabetesMellitus}
                id="diabetesMellitus"
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
              <div className="form-label">Arterial hypertension</div>
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
              <div className="form-label">Nephrolithiasis</div>
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
              <div className="form-label">Hypothyroidism</div>
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
              <div className="form-label">Hyperthyroidism</div>
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
              <div className="form-label">Dyslipidemia</div>
              <input
                onChange={this.onChange}
                checked={this.state.dislipidemia}
                id="dislipidemia"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <h1 className="header">Pathological personal history</h1>
          <div className="form-group" style={{ width: "50%" }}>
            <label>
              <div className="form-label">Current intake medications</div>
              <input
                onChange={this.onChange}
                value={this.state.ingestaActualMedicamentos}
                id="ingestaActualMedicamentos"
                type="text"
                placeholder="Medications"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "20%" }}>
            <label>
              <div className="form-label">Surgeries</div>
              <input
                onChange={this.onChange}
                value={this.state.cirugias}
                id="cirugias"
                type="text"
                placeholder="Surgeries"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "20%" }}>
            <label>
              <div className="form-label">Transfusions</div>
              <input
                onChange={this.onChange}
                value={this.state.transfusiones}
                id="transfusiones"
                type="text"
                placeholder="Transfusions"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "20%", marginTop: "40px"}}>
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
          <div className="form-group" style={{ width: "17%" }}>
            <label>
              <div className="form-label">Diabetes mellitus</div>
              <input
                onChange={this.onChange}
                checked={this.state.diabetesMellitusPersonal}
                id="diabetesMellitusPersonal"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "17%" }}>
            <label>
              <div className="form-label">Nephrolithiasis</div>
              <input
                onChange={this.onChange}
                checked={this.state.litiasisRenalPersonal}
                id="litiasisRenalPersonal"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "17%" }}>
            <label>
              <div className="form-label">Hypothyroidism</div>
              <input
                onChange={this.onChange}
                checked={this.state.hipotiroidismoPersonal}
                id="hipotiroidismoPersonal"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "17%" }}>
            <label>
              <div className="form-label">Hyperthyroidism</div>
              <input
                onChange={this.onChange}
                checked={this.state.hipertiroidismoPersonal}
                id="hipertiroidismoPersonal"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <h1 className="header">Non-pathological personal history</h1>
          <div className="form-group" style={{ width: "23%" }}>
            <label>
              <div className="form-label">Alcoholic beverages</div>
              <input
                onChange={this.onChange}
                checked={this.state.bebidasAlcoholicas}
                id="bebidasAlcoholicas"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "23%" }}>
            <label>
              <div className="form-label">Drugs</div>
              <input
                onChange={this.onChange}
                checked={this.state.drogas}
                id="drogas"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "23%" }}>
            <label>
              <div className="form-label">Perform exercise</div>
              <input
                onChange={this.onChange}
                checked={this.state.realizaEjercicio}
                id="realizaEjercicio"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "23%" }}>
            <label>
              <div className="form-label">Smoking</div>
              <input
                onChange={this.onChange}
                checked={this.state.tabaquismo}
                id="tabaquismo"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <h1 className="header">Gynecological Background</h1>
          <div className="form-group" style={{ width: "20%" }}>
            <label>
              <div className="form-label">Menarche</div>
              <input
                onChange={this.onChange}
                value={this.state.menarca}
                id="menarca"
                type="number"
                placeholder="Menarche"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "20%" }}>
            <label>
              <div className="form-label">Gestations</div>
              <input
                onChange={this.onChange}
                value={this.state.gestaciones}
                id="gestaciones"
                type="number"
                placeholder="Number of Gestations"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "15%" }}>
            <label>
              <div className="form-label">Continue menstruating</div>
              <input
                onChange={this.onChange}
                checked={this.state.continuaMenstruando}
                id="continuaMenstruando"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "15%" }}>
            <label>
              <div className="form-label">Age Leave Menstruating</div>
              <input
                onChange={this.onChange}
                value={this.state.edadDejoMenstruar}
                id="edadDejoMenstruar"
                type="number"
                placeholder="Age"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "5%" }}>
            <label>
              <div className="form-label">Pregnant</div>
              <input
                onChange={this.onChange}
                checked={this.state.embarazo}
                id="embarazo"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>
          <div className="form-group" style={{ width: "15%" }}>
            <label>
              <div className="form-label">Difficulty pregnancy</div>
              <input
                onChange={this.onChange}
                checked={this.state.dificultadEmbarazo}
                id="dificultadEmbarazo"
                type="checkbox"
                className="form-input"
              />
            </label>
          </div>

          <div>
            <button
              // className="main-btn create-patient"
              className="main-btn"
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
  patients: state.patients,
  patient: state.patients.patient, //lo agregué yo
});

export default connect(
  mapStateToProps,
  { createPatient, updatePatient, deletePatient }
)(Modal);
