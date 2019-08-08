const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PatientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    // required: true
  },
  sex: {
    type: String
  },
  weight: {
    type: Number,
    // required: true
  },
  height: {
    type: Number,
    // required: true
  },
  notes: {
    type: String,
  },
  yesorno: {
    type: Boolean
  },
  historiaClinica: {
    antecedentesFamiliares:
    {
      diabetesMellitus: {
        type: Boolean
      },
      cancer: {
        type: Boolean
      },
      hipertensionArterial: {
        type: Boolean
      },
      litiasisRenal: {
        type: Boolean
      },
      hipotiroidismo: {
        type: Boolean
      },
      hipertiroidismo: {
        type: Boolean
      },
      dislipidemia: {
        type: Boolean
      }
    },
    antecedentesPersonalesPatologicos:
    {
      ingestaActualMedicamentos: {
        type: String
      },
      cirugias: {
        type: String
      },
      transfusiones: {
        type: String
      },
      hepatitis: {
        type: Boolean
      },
      diabetesMellitus: {
        type: Boolean
      },
      litiasisRenal: {
        type: Boolean
      },
      hipertiroidismo: {
        type: Boolean
      },
      hipotiroidismo: {
        type: Boolean
      }
    },
    antecedentesPersonalesNoPatologicos:
    {
      bebidasAlcoholicas: {
        type: Boolean
      },
      drogas: {
        type: Boolean
      },
      realizaEjercicio: {
        type: Boolean
      },
      tabaquismo: {
        type: Boolean
      }
    },
    antecedentesGinecologicos:
    {
      menarca: {
        type: Number
      },
      gestaciones: {
        type: Number
      },
      continuaMenstruando: {
        type: Boolean
      },
      edadDejoMenstruar: {
        type: Number
      },
      embarazo: {
        type: Boolean
      },
      dificultadEmbarazo: {
        type: Boolean
      },
      fechaUltimoPapanicolaou: {
        type: Date
      }
    }
  },
  owner: {
    type: Object,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Patient = mongoose.model("patients", PatientSchema);
