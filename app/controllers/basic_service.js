const models = require('../models');
const basic_service = require('../models/basic_service');
const createBasic_service = async (req, res) => {
    try {
      await models.basic_service.create(req.body);
      return res.status(201).send('Created');
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  const getAllBasic_services = async (req, res) => {
    try {
      const Basic_services = await models.basic_service.findAll();
        return res.status(200).json({
          Basic_services
        });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const getBasic_serviceById = async (req, res) => {
    try {
      const { id } = req.params;
      const Basic_service = await models.basic_service.findOne({
        where: { bs_id: id },
      });
      if (Basic_service) {
        return res.status(200).json({ Basic_service });
      }
      return res.status(404).send('The specified ID does not exists');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const updateBasic_service = async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await models.basic_service.update(req.body, {
        where: { bs_id: id },
      });
      if (updated) {
        return res.status(200).send('Updated');
      }
      throw new Error('Not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const deleteBasic_service = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await models.basic_service.destroy({
          where: {bs_id: id},
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
    createBasic_service,
    getAllBasic_services,
    getBasic_serviceById,
    updateBasic_service,
    deleteBasic_service,
  };