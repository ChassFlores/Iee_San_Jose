const models = require('../models');
const createRepresent = async (req, res) => {
    try {
      await models.represent.create(req.body);
      return res.status(201).send('Created');
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  const getAllRepresents = async (req, res) => {
    try {
      const Represents = await models.represent.findAll();
        return res.status(200).json({
          Represents
        });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const getRepresentById = async (req, res) => {
    try {
      const { id } = req.params;
      const Represent = await models.represent.findOne({
        where: { representative_rps_id: id },
      });
      if (Represent) {
        return res.status(200).json({ Represent });
      }
      return res.status(404).send('The specified ID does not exists');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const updateRepresent = async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await models.represent.update(req.body, {
        where: { representative_rps_id: id },
      });
      if (updated) {
        return res.status(200).send('Updated');
      }
      throw new Error('Not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const deleteRepresent = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await models.represent.destroy({
          where: {representative_rps_id: id},
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
    createRepresent,
    getAllRepresents,
    getRepresentById,
    updateRepresent,
    deleteRepresent,
  };