const { Router } = require("express");
const NationalityController = require("../controllers/nationality");
const Identity_documentController = require("../controllers/identity_document");
const UserController = require("../controllers/user");
const Representative_roleController = require("../controllers/representative_role");
const Basic_serviceController = require("../controllers/basic_service");
const Institution_typeController = require("../controllers/institution_type");
const router = Router();

router.get("/", (req, res) => res.send("Welcome"));
router.post("/Nationality", NationalityController.createNationality);
router.get("/Nationalitys", NationalityController.getAllNationalitys);
router.get("/Nationality/:id", NationalityController.getNationalityById);
router.put("/Nationality/:id", NationalityController.updateNationality);
router.delete("/Nationality/:id", NationalityController.deleteNationality);
router.post(
  "/Identity_document",
  Identity_documentController.createIdentity_document
);
router.get(
  "/Identity_documents",
  Identity_documentController.getAllIdentity_documents
);
router.get(
  "/Identity_document/:id",
  Identity_documentController.getIdentity_documentById
);
router.put(
  "/Identity_document/:id",
  Identity_documentController.updateIdentity_document
);
router.delete(
  "/Identity_document/:id",
  Identity_documentController.deleteIdentity_document
);
router.post("/User", UserController.createUser);
router.get("/Users", UserController.getAllUsers);
router.get("/User/:id", UserController.getUserById);
router.put("/User/:id", UserController.updateUser);
router.delete("/User/:id", UserController.deleteUser);
router.post(
  "/Representative_role",
  Representative_roleController.createRepresentative_role
);
router.get(
  "/Representative_roles",
  Representative_roleController.getAllRepresentative_roles
);
router.get(
  "/Representative_role/:id",
  Representative_roleController.getRepresentative_roleById
);
router.put(
  "/Representative_role/:id",
  Representative_roleController.updateRepresentative_role
);
router.delete(
  "/Representative_role/:id",
  Representative_roleController.deleteRepresentative_role
);
router.post("/Basic_service", Basic_serviceController.createBasic_service);
router.get("/Basic_services", Basic_serviceController.getAllBasic_services);
router.get("/Basic_service/:id", Basic_serviceController.getBasic_serviceById);
router.put("/Basic_service/:id", Basic_serviceController.updateBasic_service);
router.delete(
  "/Basic_service/:id",
  Basic_serviceController.deleteBasic_service
);
router.post(
  "/Institution_type",
  Institution_typeController.createInstitution_type
);
router.get(
  "/Institution_types",
  Institution_typeController.getAllInstitution_types
);
router.get(
  "/Institution_type/:id",
  Institution_typeController.getInstitution_typeById
);
router.put(
  "/Institution_type/:id",
  Institution_typeController.updateInstitution_type
);
router.delete(
  "/Institution_type/:id",
  Institution_typeController.deleteInstitution_type
);
module.exports = router;
