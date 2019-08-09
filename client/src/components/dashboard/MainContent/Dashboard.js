import React, { Component } from "react";
import "./MainContent.scss";
import "./Dashboard.scss";

import { connect } from "react-redux";

import Modal from "./Modal/Modal";
// import SearchBar from "./Search/Search"
import SearchExampleStandard from "./Search/Search2"
// import { PATIENT_LOADING } from "../../../actions/types";


class Dashboard extends Component {
  state = {
    modal: false,
    edit: false,
    name: "",
    age: "",
    sex: "",
    height: "",
    weight: "",
    historiaClinica: {
      antecedentesFamiliares:
      {
        diabetesMellitus: false,
        cancer: false,
        hipertensionArterial: false,
        litiasisRenal: false,
        hipotiroidismo: false,
        hipertiroidismo: false,
        dislipidemia: false,
      },
      antecedentesPersonalesPatologicos:
      {
        ingestaActualMedicamentos: "",
        cirugias: "",
        transfusiones: "",
        hepatitis: false,
        diabetesMellitus: false,
        litiasisRenal: false,
        hipertiroidismo: false,
        hipotiroidismo: false,
      },
      antecedentesPersonalesNoPatologicos:
      {
        bebidasAlcoholicas: false,
        drogas: false,
        realizaEjercicio: false,
        tabaquismo: false,
      },
      antecedentesGinecologicos:
      {
        menarca: "",
        gestaciones: "",
        continuaMenstruando: false,
        edadDejoMenstruar: "",
        embarazo: false,
        dificultadEmbarazo: false
        // fechaUltimoPapanicolaou: req.body.fechaUltimoPapanicolaou
      }
    },
    id: "",
    // search: "",
    owner: {}
  };

  toggleModal = e => {
    this.setState({ modal: !this.state.modal, edit: false });
  };

  render() {
    const { patients } = this.props.patients;

    let content;
    // let search = [];
    // let searchData;

    let patientData = patients.sort().map(patient => (
      <div
        key={patient._id}
        className="patient-icon"
        onClick={() => this.props.history.push(`/patients/${patient._id}`)}
      >
        <div className="patient-name">{patient.name}</div>
      </div>
    ));

    // for (var x = 0; x < patientData.length; x++) {
    //   if (patientData[x].props.children.props.children) {
    //     // console.log(patientData);
    //     console.log("id " + patientData[x].key);
    //     console.log("patient name " + patientData[x].props.children.props.children);

    //     searchData = {
    //       key: patientData[x].key,
    //       name: patientData[x].props.children.props.children
    //     };


    //     search.push(searchData);

    //     console.log(search);
    //   }
    // }


    if (patients.length > 0 && patientData[patientData.length - 1].props.children.props.children) {
      // At least one patient
      content = (
        <>

          {/* <ReactSearchBox
            placeholder="Placeholder"
            value={this.state.search}
            data={search}
            onChange={record => console.log(record)}
          /> */}
          {/* <SearchBar></SearchBar> */}
          <SearchExampleStandard></SearchExampleStandard>

          <button className="main-btn" onClick={this.toggleModal}>
            Create another patient
          </button>
          <div className="modal-wrapper">
            <Modal
              onClose={this.toggleModal}
              modal={this.state.modal}
              edit={this.state.edit}
            // name={this.state.name}
            // age={this.state.age}
            // height={this.state.height}
            // weight={this.state.weight}
            // id={this.state.id}
            // owner={this.state.owner}
            />
          </div>
          <div className="patients-wrapper">{patientData}</div>

        </>
      );
    } else {
      // No patients
      content = (
        <>
          <div className="patients">
            <div className="no-patients">
              <h1 className="header">You have no patients</h1>
              <button className="main-btn" onClick={this.toggleModal}>
                Create your first patient
              </button>
              <div className="modal-wrapper">
                <Modal onClose={this.toggleModal} modal={this.state.modal} />
              </div>
            </div>
          </div>
        </>
      );
    }

    return (

      <div className="main-content">

        <h1 className="header">Your patients</h1>
        {content}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  patients: state.patients
});

export default connect(
  mapStateToProps,
  {}
)(Dashboard);
