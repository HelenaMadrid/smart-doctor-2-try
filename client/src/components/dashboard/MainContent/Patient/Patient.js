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

  toggleEditModal = (name, age, sex, height, weight, diabetesMellitus,cancer, hipertensionArterial, litiasisRenal, hipotiroidismo, hipertiroidismo, dislipidemia, ingestaActualMedicamentos, cirugias, transfusiones, hepatitis, diabetesMellitusPersonal, litiasisRenalPersonal, hipotiroidismoPersonal, hipertiroidismoPersonal, bebidasAlcoholicas, drogas, realizaEjercicio, tabaquismo, menarca, gestaciones, continuaMenstruando, edadDejoMenstruar, embarazo, dificultadEmbarazo, id, owner, e) => {
    e.stopPropagation();
    this.setState({
      modal: !this.state.modal,
      edit: !this.state.edit,
      name: name,
      age: age,
      sex: sex,
      height: height,
      weight: weight,
      diabetesMellitus: diabetesMellitus,
      cancer: cancer,
      hipertensionArterial: hipertensionArterial,
      litiasisRenal: litiasisRenal,
      hipotiroidismo: hipotiroidismo,
      hipertiroidismo: hipertiroidismo,
      dislipidemia: dislipidemia,
      ingestaActualMedicamentos: ingestaActualMedicamentos,
      cirugias: cirugias,
      transfusiones: transfusiones,
      hepatitis: hepatitis,
      diabetesMellitusPersonal: diabetesMellitusPersonal,
      litiasisRenalPersonal: litiasisRenalPersonal,
      hipotiroidismoPersonal: hipotiroidismoPersonal,
      hipertiroidismoPersonal: hipertiroidismoPersonal,
      bebidasAlcoholicas: bebidasAlcoholicas,
      drogas: drogas,
      realizaEjercicio: realizaEjercicio,
      tabaquismo: tabaquismo,
      menarca: menarca,
      gestaciones: gestaciones,
      continuaMenstruando: continuaMenstruando,
      edadDejoMenstruar: edadDejoMenstruar,
      embarazo: embarazo,
      dificultadEmbarazo: dificultadEmbarazo,
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
      this.props.patient.antecedentesFamiliares
      &&
      this.props.patient.antecedentesPersonalesNoPatologicos
      &&
      this.props.patient.antecedentesPersonalesPatologicos
      &&
      this.props.patient.antecedentesGinecologicos
      // !this.props.patients.patientLoading
    ) {

      const { patient } = this.props;
      // const { antecedentesFamiliares, antecedentesGinecologicos, antecedentesPersonalesNoPatologicos, antecedentesPersonalesPatologicos } = patient;
      console.log(patient);
      // console.log(antecedentesFamiliares);
      // console.log(antecedentesFamiliares.cancer);
      // console.log(antecedentesGinecologicos.embarazo);
      // console.log(antecedentesPersonalesNoPatologicos.drogas);
      console.log("litiasis renal personal "+patient.antecedentesPersonalesPatologicos.litiasisRenal);
      // console.log(historiaClinica);
      // console.log(patient.historiaClinica);
      // console.log(historiaClinica);
      // console.log(antecedentesFamiliares.cancer);

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
              patient.antecedentesFamiliares.diabetesMellitus,
              patient.antecedentesFamiliares.cancer,
              patient.antecedentesFamiliares.hipertensionArterial,
              patient.antecedentesFamiliares.litiasisRenal,
              patient.antecedentesFamiliares.hipotiroidismo,
              patient.antecedentesFamiliares.hipertiroidismo,
              patient.antecedentesFamiliares.dislipidemia,
              patient.antecedentesPersonalesPatologicos.ingestaActualMedicamentos,
              patient.antecedentesPersonalesPatologicos.cirugias,
              patient.antecedentesPersonalesPatologicos.transfusiones,
              patient.antecedentesPersonalesPatologicos.hepatitis,
              patient.antecedentesPersonalesPatologicos.diabetesMellitus,
              patient.antecedentesPersonalesPatologicos.litiasisRenal,
              patient.antecedentesPersonalesPatologicos.hipotiroidismo,
              patient.antecedentesPersonalesPatologicos.hipertiroidismo,
              patient.antecedentesPersonalesNoPatologicos.bebidasAlcoholicas,
              patient.antecedentesPersonalesNoPatologicos.drogas,
              patient.antecedentesPersonalesNoPatologicos.realizaEjercicio,
              patient.antecedentesPersonalesNoPatologicos.tabaquismo,
              patient.antecedentesGinecologicos.menarca,
              patient.antecedentesGinecologicos.gestaciones,
              patient.antecedentesGinecologicos.continuaMenstruando,
              patient.antecedentesGinecologicos.edadDejoMenstruar,
              patient.antecedentesGinecologicos.embarazo,
              patient.antecedentesGinecologicos.dificultadEmbarazo,
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
              diabetesMellitus={this.state.diabetesMellitus}
              cancer={this.state.cancer}
              hipertensionArterial={this.state.hipertensionArterial}
              litiasisRenal={this.state.litiasisRenal}
              hipotiroidismo={this.state.hipotiroidismo}
              hipertiroidismo={this.state.hipertiroidismo}
              dislipidemia={this.state.dislipidemia}
              ingestaActualMedicamentos={this.state.ingestaActualMedicamentos}
              cirugias={this.state.cirugias}
              transfusiones={this.state.transfusiones}
              hepatitis={this.state.hepatitis}
              diabetesMellitusPersonal={this.state.diabetesMellitusPersonal}
              litiasisRenalPersonal={this.state.litiasisRenalPersonal}
              hipotiroidismoPersonal={this.state.hipotiroidismoPersonal}
              hipertiroidismoPersonal={this.state.hipertiroidismoPersonal}
              bebidasAlcoholicas={this.state.bebidasAlcoholicas}
              drogas={this.state.drogas}
              realizaEjercicio={this.state.realizaEjercicio}
              tabaquismo={this.state.tabaquismo}
              menarca={this.state.menarca}
              gestaciones={this.state.gestaciones}
              continuaMenstruando={this.state.continuaMenstruando}
              edadDejoMenstruar={this.state.edadDejoMenstruar}
              embarazo={this.state.embarazo}
              dificultadEmbarazo={this.state.dificultadEmbarazo}
              id={this.state.id}
              owner={this.state.owner}
            />
          </div>
          <div className="tasks-container">
            <div className="info-general">
              <div className="info-gral-patient">
                <h2 className="header">Age</h2>
                <div className="form-label">{patient.age}</div>
              </div>
              <div className="info-gral-patient">
                <h2 className="header">Sex</h2>
                <div className="form-label">{patient.sex}</div>
              </div>
              <div className="info-gral-patient">
                <h2 className="header">Height</h2>
                <div className="form-label">{patient.height}</div>
              </div>
              <div className="info-gral-patient">
                <h2 className="header">Weight</h2>
                <div className="form-label">{patient.weight}</div>
              </div>
            </div>
            <div className="antecedentesFamiliares">
              <h1>Family background</h1>
              <div className="info-antecedentes">
                <h2 className="header">Diabetes mellitus</h2>
                <div className="form-label">{String(patient.antecedentesFamiliares.diabetesMellitus)}</div>
              </div>
              <div className="info-antecedentes">
                <h2 className="header">Cancer</h2>
                <div className="form-label">{String(patient.antecedentesFamiliares.cancer)}</div>
              </div>
              <div className="info-antecedentes">
                <h2 className="header">Arterial hypertension</h2>
                <div className="form-label">{String(patient.antecedentesFamiliares.hipertensionArterial)}</div>
              </div>
              <div className="info-antecedentes">
                <h2 className="header">Nephrolithiasis</h2>
                <div className="form-label">{String(patient.antecedentesFamiliares.litiasisRenal)}</div>
              </div>
              <div className="info-antecedentes">
                <h2 className="header">Hypothyroidism</h2>
                <div className="form-label">{String(patient.antecedentesFamiliares.hipotiroidismo)}</div>
              </div>
              <div className="info-antecedentes">
                <h2 className="header">Hyperthyroidism</h2>
                <div className="form-label">{String(patient.antecedentesFamiliares.hipertiroidismo)}</div>
              </div>
              <div className="info-antecedentes">
                <h2 className="header">Dyslipidemia</h2>
                <div className="form-label">{String(patient.antecedentesFamiliares.dislipidemia)}</div>
              </div>
            </div>
            <div className="antecedentesPersonalesPatologicos">
              <h1>Pathological personal history</h1>
              <div className="info-antecedentes">
                <h2 className="header">Current intake medications</h2>
                <div className="form-label">{String(patient.antecedentesPersonalesPatologicos.ingestaActualMedicamentos)}</div>
              </div>
              <div className="info-antecedentes">
                <h2 className="header">Surgeries</h2>
                <div className="form-label">{String(patient.antecedentesPersonalesPatologicos.cirugias)}</div>
              </div>
              <div className="info-antecedentes">
                <h2 className="header">Transfusions</h2>
                <div className="form-label">{String(patient.antecedentesPersonalesPatologicos.transfusiones)}</div>
              </div>
              <div className="info-antecedentes">
                <h2 className="header">Hepatitis</h2>
                <div className="form-label">{String(patient.antecedentesPersonalesPatologicos.hepatitis)}</div>
              </div>
              <div className="info-antecedentes">
                <h2 className="header">Diabetes mellitus</h2>
                <div className="form-label">{String(patient.antecedentesPersonalesPatologicos.diabetesMellitus)}</div>
              </div>
              <div className="info-antecedentes">
                <h2 className="header">Nephrolithiasis</h2>
                <div className="form-label">{String(patient.antecedentesPersonalesPatologicos.litiasisRenal)}</div>
              </div>
              <div className="info-antecedentes">
                <h2 className="header">Hypothyroidism</h2>
                <div className="form-label">{String(patient.antecedentesPersonalesPatologicos.hipotiroidismo)}</div>
              </div>
              <div className="info-antecedentes">
                <h2 className="header">Hyperthyroidism</h2>
                <div className="form-label">{String(patient.antecedentesPersonalesPatologicos.hipertiroidismo)}</div>
              </div>
            </div>
            <div className="antecedentesPersonalesNoPatologicos">
              <h1>Non-pathological personal history</h1>
              <div className="info-antecedentes">
                <h2 className="header">Alcoholic beverages</h2>
                <div className="form-label">{String(patient.antecedentesPersonalesNoPatologicos.bebidasAlcoholicas)}</div>
              </div>
              <div className="info-antecedentes">
                <h2 className="header">Drugs</h2>
                <div className="form-label">{String(patient.antecedentesPersonalesNoPatologicos.drogas)}</div>
              </div>
              <div className="info-antecedentes">
                <h2 className="header">Perform exercise</h2>
                <div className="form-label">{String(patient.antecedentesPersonalesNoPatologicos.realizaEjercicio)}</div>
              </div>
              <div className="info-antecedentes">
                <h2 className="header">Smoking</h2>
                <div className="form-label">{String(patient.antecedentesPersonalesNoPatologicos.tabaquismo)}</div>
              </div>
            </div>
            <div className="antecedentesGinecologicos">
              <h1>Gynecological Background</h1>
              <div className="info-antecedentes">
                <h2 className="header">Menarche</h2>
                <div className="form-label">{String(patient.antecedentesGinecologicos.menarca)}</div>
              </div>
              <div className="info-antecedentes">
                <h2 className="header">Gestations</h2>
                <div className="form-label">{String(patient.antecedentesGinecologicos.gestaciones)}</div>
              </div>
              <div className="info-antecedentes">
                <h2 className="header">Continue menstruating</h2>
                <div className="form-label">{String(patient.antecedentesGinecologicos.continuaMenstruando)}</div>
              </div>
              <div className="info-antecedentes">
                <h2 className="header">Age Leave Menstruating</h2>
                <div className="form-label">{String(patient.antecedentesGinecologicos.edadDejoMenstruar)}</div>
              </div>
              <div className="info-antecedentes">
                <h2 className="header">Pregnant</h2>
                <div className="form-label">{String(patient.antecedentesGinecologicos.embarazo)}</div>
              </div>
              <div className="info-antecedentes">
                <h2 className="header">Difficulty pregnancy</h2>
                <div className="form-label">{String(patient.antecedentesGinecologicos.dificultadEmbarazo)}</div>
              </div>
            </div>

            {/* <div className="form-label">{JSON.stringify(patient.antecedentesFamiliares)}</div>
            <JSONPretty id="json-pretty" data={patient.antecedentesFamiliares}></JSONPretty>
            <JSONPretty id="json-pretty" data={patient.antecedentesPersonalesNoPatologicos}></JSONPretty>
            <JSONPretty id="json-pretty" data={patient.antecedentesPersonalesPatologicos}></JSONPretty>
            <JSONPretty id="json-pretty" data={patient.antecedentesGinecologicos}></JSONPretty> */}





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

    else {
      return (
        <div className="patient-spinner">
          <Spinner />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  patient: state.patients.patient,
  // patients: state.patients
});

export default connect(
  mapStateToProps,
  { getPatient }
)(Patient);
