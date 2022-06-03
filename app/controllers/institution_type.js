const models = require('../models');
const institution_type = require('../models/institution_type');
const createInstitution_type = async (req, res) => {
    try {
      await models.institution_type.create(req.body);
      return res.status(201).send('Created');
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  const getAllInstitution_types = async (req, res) => {
    try {
      const Institution_types = await models.institution_type.findAll();
        return res.status(200).json({
          Institution_types
        });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const getInstitution_typeById = async (req, res) => {
    try {
      const { id } = req.params;
      const Institution_type = await models.institution_type.findOne({
        where: { inst_id: id },
      });
      if (Institution_type) {
        return res.status(200).json({ Institution_type });
      }
      return res.status(404).send('The specified ID does not exists');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const updateInstitution_type = async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await models.institution_type.update(req.body, {
        where: { inst_id: id },
      });
      if (updated) {
        return res.status(200).send('Updated');
      }
      throw new Error('Not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const deleteInstitution_type = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await models.institution_type.destroy({
          where: {inst_id: id},
      });
      if (deleted) {
        return res.status(204).send('Deleted');
      }
      throw new Error('Not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  module.exports = {
    createInstitution_type,
    getAllInstitution_types,
    getInstitution_typeById,
    updateInstitution_type,
    deleteInstitution_type,
  };