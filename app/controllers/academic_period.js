const models = require('../models');
const createAcademic_period = async (req, res) => {
    try {
      await models.academic_period.create(req.body);
      return res.status(201).send('Created');
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  const getAllAcademic_periods = async (req, res) => {
    try {
      const Academic_periods = await models.academic_period.findAll();
        return res.status(200).json({
          Academic_periods
        });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const getAcademic_periodById = async (req, res) => {
    try {
      const { id } = req.params;
      const Academic_period = await models.academic_period.findOne({
        where: { acp_id: id },
      });
      if (Academic_period) {
        return res.status(200).json({ Academic_period });
      }
      return res.status(404).send('The specified ID does not exists');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const updateAcademic_period = async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await models.academic_period.update(req.body, {
        where: { acp_id: id },
      });
      if (updated) {
        return res.status(200).send('Updated');
      }
      throw new Error('Not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const deleteAcademic_period = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await models.academic_period.destroy({
          where: {acp_id: id},
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
    createAcademic_period,
    getAllAcademic_periods,
    getAcademic_periodById,
    updateAcademic_period,
    deleteAcademic_period,
  };