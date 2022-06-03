const models = require('../models');
const createAssistance = async (req, res) => {
    try {
      await models.assistance.create(req.body);
      return res.status(201).send('Created');
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  const getAllAssistances = async (req, res) => {
    try {
      const Assistances = await models.assistance.findAll();
        return res.status(200).json({
          Assistances
        });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const getAssistanceById = async (req, res) => {
    try {
      const { id } = req.params;
      const Assistance = await models.assistance.findOne({
        where: { asc_id: id },
      });
      if (Assistance) {
        return res.status(200).json({ Assistance });
      }
      return res.status(404).send('The specified ID does not exists');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const updateAssistance = async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await models.assistance.update(req.body, {
        where: { asc_id: id },
      });
      if (updated) {
        return res.status(200).send('Updated');
      }
      throw new Error('Not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const deleteAssistance = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await models.assistance.destroy({
          where: {asc_id: id},
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
    createAssistance,
    getAllAssistances,
    getAssistanceById,
    updateAssistance,
    deleteAssistance,
  };