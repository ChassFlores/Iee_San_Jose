const models = require('../models');
const representative_role = require('../models/representative_role');
const createRepresentative_role = async (req, res) => {
    try {
      await models.representative_role.create(req.body);
      return res.status(201).send('Created');
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  const getAllRepresentative_roles = async (req, res) => {
    try {
      const Representative_roles = await models.representative_role.findAll();
        return res.status(200).json({
          Representative_roles
        });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const getRepresentative_roleById = async (req, res) => {
    try {
      const { id } = req.params;
      const Representative_role = await models.representative_role.findOne({
        where: { rr_id: id },
      });
      if (Representative_role) {
        return res.status(200).json({ Representative_role });
      }
      return res.status(404).send('The specified ID does not exists');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const updateRepresentative_role = async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await models.representative_role.update(req.body, {
        where: { rr_id: id },
      });
      if (updated) {
        return res.status(200).send('Updated');
      }
      throw new Error('Not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const deleteRepresentative_role = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await models.representative_role.destroy({
          where: {rr_id: id},
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
    createRepresentative_role,
    getAllRepresentative_roles,
    getRepresentative_roleById,
    updateRepresentative_role,
    deleteRepresentative_role,
  };