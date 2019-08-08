import React, { Component } from "react";
import { connect } from "react-redux";
import { getPatient } from "../../../../actions/patientsActions";

import Spinner from "../../../common/Spinner";
import Modal from "../Modal/Modal";

import "../MainContent.scss";
import "./Patient.scss";
// import { timingSafeEqual } from "crypto";

class Patient extends Component {
  state = {
    modal: false,
    edit: false,
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
    dificultadEmbarazo: false,
    id: "",
    owner: {},
    date: ""
  };

  toggleModal = e => {
    this.setState({ modal: !this.state.modal, edit: false });
  };

  toggleEditModal = (name, age, sex, height, weight, 
    // diabetesMellitus, cancer, 
    // hipertensionArterial, 
    // litiasisRenal, hipotiroidismo, hipertiroidismo, dislipidemia, 
    ingestaActualMedicamentos, cirugias,transfusiones,
    // hepatitis,diabetesMellitusPersonal, litiasisRenalPersonal, hipotiroidismoPersonal, hipertiroidismoPersonal, bebidasAlcoholicas, drogas, realizaEjercicio, tabaquismo, menarca, gestaciones, continuaMenstruando, edadDejoMenstruar, embarazo, dificultadEmbarazo, 
    id, owner, e) => {
    e.stopPropagation();
    this.setState({
      modal: !this.state.modal,
      edit: !this.state.edit,
      name: name,
      age: age,
      sex: sex,
      height: height,
      weight: weight,
      // diabetesMellitus: diabetesMellitus,
      // cancer: cancer,
      // hipertensionArterial: hipertensionArterial,
      // litiasisRenal: litiasisRenal,
      // hipotiroidismo: hipotiroidismo,
      // hipertiroidismo: hipertiroidismo,
      // dislipidemia: dislipidemia,
      ingestaActualMedicamentos: ingestaActualMedicamentos,
      cirugias: cirugias,
      transfusiones: transfusiones,
      // hepatitis: hepatitis,
      // diabetesMellitusPersonal: diabetesMellitusPersonal,
      // litiasisRenalPersonal: litiasisRenalPersonal,
      // hipotiroidismoPersonal: hipotiroidismoPersonal,
      // hipertiroidismoPersonal: hipertiroidismoPersonal,
      // bebidasAlcoholicas: bebidasAlcoholicas,
      // drogas: drogas,
      // realizaEjercicio: realizaEjercicio,
      // tabaquismo: tabaquismo,
      // menarca: menarca,
      // gestaciones: gestaciones,
      // continuaMenstruando: continuaMenstruando,
      // edadDejoMenstruar: edadDejoMenstruar,
      // embarazo: embarazo,
      // dificultadEmbarazo: dificultadEmbarazo,
      id: id,
      owner: owner
    });
  };

  updatePatient(patient) {
    this.setState({
      name: patient.name,
      age: patient.age,
      sex: patient.sex,
      height: patient.height,
      weight: patient.weight,
      diabetesMellitus: patient.diabetesMellitus,
      cancer: patient.cancer,
      hipertensionArterial: patient.hipertensionArterial,
      litiasisRenal: patient.litiasisRenal,
      hipotiroidismo: patient.hipotiroidismo,
      hipertiroidismo: patient.hipertiroidismo,
      dislipidemia: patient.dislipidemia,
      ingestaActualMedicamentos: patient.ingestaActualMedicamentos,
      cirugias: patient.cirugias,
      transfusiones: patient.transfusiones,
      hepatitis: patient.hepatitis,
      diabetesMellitusPersonal: patient.diabetesMellitusPersonal,
      litiasisRenalPersonal: patient.litiasisRenalPersonal,
      hipotiroidismoPersonal: patient.hipotiroidismoPersonal,
      hipertiroidismoPersonal: patient.hipertiroidismoPersonal,
      bebidasAlcoholicas: patient.bebidasAlcoholicas,
      drogas: patient.drogas,
      realizaEjercicio: patient.realizaEjercicio,
      tabaquismo: patient.tabaquismo,
      menarca: patient.menarca,
      gestaciones: patient.gestaciones,
      continuaMenstruando: patient.continuaMenstruando,
      edadDejoMenstruar: patient.edadDejoMenstruar,
      embarazo: patient.embarazo,
      dificultadEmbarazo: patient.dificultadEmbarazo
    });
  }

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
      console.log(patient);

      return (

        <div className="main-content">
          <h1 className="patient-header">{patient.name}</h1>
          <button
            onClick={this.toggleEditModal.bind(
              this,
              patient.name,
              patient.age,
              patient.sex,
              patient.height,
              patient.weight,
              // patient.diabetesMellitus,
              // patient.cancer,
              // patient.hipertensionArterial,
              // patient.dislipidemia,
              patient.ingestaActualMedicamentos,
              patient.cirugias,
              patient.transfusiones,
              // patient.hepatitis,
              // patient.diabetesMellitusPersonal,
              // patient.litiasisRenalPersonal,
              // patient.hipotiroidismoPersonal,
              // patient.hipertiroidismoPersonal,
              // patient.bebidasAlcoholicas,
              // patient.drogas,
              // patient.realizaEjercicio,
              // patient.tabaquismo,
              // patient.menarca,
              // patient.gestaciones,
              // patient.continuaMenstruando,
              // patient.edadDejoMenstruar,
              // patient.embarazo,
              // patient.dificultadEmbarazo,
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
              sex={this.state.sex}
              height={this.state.height}
              weight={this.state.weight}
              // diabetesMellitus={this.state.diabetesMellitus}
              // cancer={this.state.cancer}
              // hipertensionArterial={this.state.hipertensionArterial}
              // litiasisRenal={this.state.litiasisRenal}
              // hipotiroidismo={this.state.hipotiroidismo}
              // hipertiroidismo={this.state.hipertiroidismo}
              // dislipidemia={this.state.dislipidemia}
              ingestaActualMedicamentos={this.state.ingestaActualMedicamentos}
              cirugias={this.state.cirugias}
              transfusiones={this.state.transfusiones}
              // hepatitis={this.state.hepatitis}
              // diabetesMellitusPersonal={this.state.diabetesMellitusPersonal}
              // litiasisRenalPersonal={this.state.litiasisRenalPersonal}
              // hipotiroidismoPersonal={this.state.hipotiroidismoPersonal}
              // hipertiroidismoPersonal={this.state.hipertiroidismoPersonal}
              // bebidasAlcoholicas={this.state.bebidasAlcoholicas}
              // drogas={this.state.drogas}
              // realizaEjercicio={this.state.realizaEjercicio}
              // tabaquismo={this.state.tabaquismo}
              // menarca={this.state.menarca}
              // gestaciones={this.state.gestaciones}
              // continuaMenstruando={this.state.continuaMenstruando}
              // edadDejoMenstruar={this.state.edadDejoMenstruar}
              // embarazo={this.state.embarazo}
              // dificultadEmbarazo={this.state.dificultadEmbarazo}
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
            <h2 className="header">Sex</h2>
            <div className="form-label">{patient.sex}</div>
            <h2 className="header">Height</h2>
            <div className="form-label">{patient.height}</div>
            <h2 className="header">Weight</h2>
            <div className="form-label">{patient.weight}</div>
            <h2 className="header">cancer</h2>
            {/* <div className="form-label">{patient.owner.email}</div> */}
            {/* <div className="form-label">{patient.historiaClinica.antecedentesFamiliares.hipertiroidismo}</div> */}
       
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
