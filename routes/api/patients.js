const express = require("express");
const router = express.Router();
const passport = require("passport");

const Patient = require("../../models/Patient");

// @route GET api/patients
// @desc Get all projects for a specific user
// @access Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    let patientsArr = [];

    const OWNER = {
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    };

    // Combine with owner projects
    await Patient.find({ owner: OWNER })
      .then(patients => {
        let finalArr = [...patients, ...patientsArr];
        res.json(finalArr);
      })
      .catch(err => console.log(err));
  }
);

// @route GET api/patients/:id
// @desc Get specific project by id
// @access Private
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let id = req.params.id;
    Patient.findById(id).then(patient => res.json(patient));

  }
);

// @route POST api/patients/create
// @desc Create a new project
// @access Private
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const OWNER = {
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    };

    var antecedentesFamiliares =
    {
      diabetesMellitus: req.body.diabetesMellitus,
      cancer: req.body.cancer,
      hipertensionArterial: req.body.hipertensionArterial,
      litiasisRenal: req.body.litiasisRenal,
      hipotiroidismo: req.body.hipotiroidismo,
      hipertiroidismo: req.body.hipertiroidismo,
      dislipidemia: req.body.dislipidemia
    };
    var antecedentesPersonalesPatologicos =
    {
      ingestaActualMedicamentos: req.body.ingestaActualMedicamentos,
      cirugias: req.body.cirugias,
      transfusiones: req.body.transfusiones,
      hepatitis: req.body.hepatitis,
      diabetesMellitus: req.body.diabetesMellitusPersonal,
      litiasisRenal: req.body.litiasisRenalPersonal,
      hipertiroidismo: req.body.hipertiroidismoPersonal,
      hipotiroidismo: req.body.hipotiroidismoPersonal
    };
    var antecedentesPersonalesNoPatologicos =
    {
      bebidasAlcoholicas: req.body.bebidasAlcoholicas,
      drogas: req.body.drogas,
      realizaEjercicio: req.body.realizaEjercicio,
      tabaquismo: req.body.tabaquismo
    };
    var antecedentesGinecologicos =
    {
      menarca: req.body.menarca,
      gestaciones: req.body.gestaciones,
      continuaMenstruando: req.body.continuaMenstruando,
      edadDejoMenstruar: req.body.edadDejoMenstruar,
      embarazo: req.body.embarazo,
      dificultadEmbarazo: req.body.dificultadEmbarazo,
      fechaUltimoPapanicolaou: req.body.fechaUltimoPapanicolaou
    };

    const NEW_PATIENT = await new Patient({
      owner: OWNER,
      name: req.body.patientName,
      age: req.body.age,
      sex: req.body.sex,
      height: req.body.height,
      weight: req.body.weight,
      antecedentesFamiliares: antecedentesFamiliares,
      antecedentesPersonalesPatologicos: antecedentesPersonalesPatologicos,
      antecedentesPersonalesNoPatologicos: antecedentesPersonalesNoPatologicos,
      antecedentesGinecologicos: antecedentesGinecologicos
    });

    NEW_PATIENT.save().then(patient => res.json(patient));
  }
);

// @route PATCH api/patients/update
// @desc Update an existing project
// @access Private
router.patch(
  "/update",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let patientFields = {};

    var antecedentesFamiliares =
    {
      diabetesMellitus: req.body.diabetesMellitus,
      cancer: req.body.cancer,
      hipertensionArterial: req.body.hipertensionArterial,
      litiasisRenal: req.body.litiasisRenal,
      hipotiroidismo: req.body.hipotiroidismo,
      hipertiroidismo: req.body.hipertiroidismo,
      dislipidemia: req.body.dislipidemia
    };
    var antecedentesPersonalesPatologicos =
    {
      ingestaActualMedicamentos: req.body.ingestaActualMedicamentos,
      cirugias: req.body.cirugias,
      transfusiones: req.body.transfusiones,
      hepatitis: req.body.hepatitis,
      diabetesMellitus: req.body.diabetesMellitusPersonal,
      litiasisRenal: req.body.litiasisRenalPersonal,
      hipertiroidismo: req.body.hipertiroidismoPersonal,
      hipotiroidismo: req.body.hipotiroidismoPersonal
    };
    var antecedentesPersonalesNoPatologicos =
    {
      bebidasAlcoholicas: req.body.bebidasAlcoholicas,
      drogas: req.body.drogas,
      realizaEjercicio: req.body.realizaEjercicio,
      tabaquismo: req.body.tabaquismo
    };
    var antecedentesGinecologicos =
    {
      menarca: req.body.menarca,
      gestaciones: req.body.gestaciones,
      continuaMenstruando: req.body.continuaMenstruando,
      edadDejoMenstruar: req.body.edadDejoMenstruar,
      embarazo: req.body.embarazo,
      dificultadEmbarazo: req.body.dificultadEmbarazo,
      fechaUltimoPapanicolaou: req.body.fechaUltimoPapanicolaou
    };

    patientFields.name = req.body.patientName;
    patientFields.age = req.body.age;
    patientFields.height = req.body.height;
    patientFields.weight = req.body.weight;
    patientFields.sex = req.body.sex;
    patientFields.antecedentesFamiliares = antecedentesFamiliares;
    patientFields.antecedentesPersonalesPatologicos = antecedentesPersonalesPatologicos;
    patientFields.antecedentesPersonalesNoPatologicos = antecedentesPersonalesNoPatologicos;
    patientFields.antecedentesGinecologicos = antecedentesGinecologicos;

    Patient.findOneAndUpdate(
      { _id: req.body.id },
      { $set: patientFields },
      { new: true }
    )
      .then(patient => {
        res.json(patient);
      })
      .catch(err => console.log(err));
  }
);

// @route DELETE api/patients/delete/:id
// @desc Delete an existing project
// @access Private
router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Patient.findById(req.params.id).then(patient => {
      patient.remove().then(() => res.json({ success: true }));
    });
  }
);

module.exports = router;
