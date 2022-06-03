const models = require('../models');
const createRepresentative = async (req, res) => {
    try {
      await models.representative.create(req.body);
      return res.status(201).send('Created');
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  const getAllRepresentatives = async (req, res) => {
    try {
      const Representatives = await models.representative.findAll();
        return res.status(200).json({
          Representatives
        });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const getRepresentativeById = async (req, res) => {
    try {
      const { id } = req.params;
      const Representative = await models.representative.findOne({
        where: { rps_id: id },
      });
      if (Representative) {
        return res.status(200).json({ Representative });
      }
      return res.status(404).send('The specified ID does not exists');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const updateRepresentative = async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await models.representative.update(req.body, {
        where: { rps_id: id },
      });
      if (updated) {
        return res.status(200).send('Updated');
      }
      throw new Error('Not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const deleteRepresentative = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await models.representative.destroy({
          where: {rps_id: id},
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
    createRepresentative,
    getAllRepresentatives,
    getRepresentativeById,
    updateRepresentative,
    deleteRepresentative,
  };