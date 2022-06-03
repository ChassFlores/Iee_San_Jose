const models = require('../models');
const createFormation_level = async (req, res) => {
    try {
      await models.formation_level.create(req.body);
      return res.status(201).send('Created');
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  const getAllFormation_levels = async (req, res) => {
    try {
      const Formation_levels = await models.formation_level.findAll();
        return res.status(200).json({
          Formation_levels
        });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const getFormation_levelById = async (req, res) => {
    try {
      const { id } = req.params;
      const Formation_level = await models.formation_level.findOne({
        where: { fl_id: id },
      });
      if (Formation_level) {
        return res.status(200).json({ Formation_level });
      }
      return res.status(404).send('The specified ID does not exists');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const updateFormation_level = async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await models.formation_level.update(req.body, {
        where: { fl_id: id },
      });
      if (updated) {
        return res.status(200).send('Updated');
      }
      throw new Error('Not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const deleteFormation_level = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await models.formation_level.destroy({
          where: {fl_id: id},
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
    createFormation_level,
    getAllFormation_levels,
    getFormation_levelById,
    updateFormation_level,
    deleteFormation_level,
  };