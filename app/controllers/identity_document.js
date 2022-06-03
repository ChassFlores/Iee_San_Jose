const models = require('../models');
const createIdentity_document = async (req, res) => {
    try {
      await models.identity_document.create(req.body);
      return res.status(201).send('Created');
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  const getAllIdentity_documents = async (req, res) => {
    try {
      const Identity_documents = await models.identity_document.findAll();
        return res.status(200).json({
          Identity_documents
        });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const getIdentity_documentById = async (req, res) => {
    try {
      const { id } = req.params;
      const Identity_document = await models.identity_document.findOne({
        where: { idoc_id: id },
      });
      if (Identity_document) {
        return res.status(200).json({ Identity_document });
      }
      return res.status(404).send('The specified ID does not exists');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const updateIdentity_document = async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await models.identity_document.update(req.body, {
        where: { idoc_id: id },
      });
      if (updated) {
        return res.status(200).send('Updated');
      }
      throw new Error('Not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const deleteIdentity_document = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await models.identity_document.destroy({
          where: {idoc_id: id},
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
    createIdentity_document,
    getAllIdentity_documents,
    getIdentity_documentById,
    updateIdentity_document,
    deleteIdentity_document,
  };