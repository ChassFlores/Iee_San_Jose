const models = require('../models');
const createSubject = async (req, res) => {
    try {
      await models.subject.create(req.body);
      return res.status(201).send('Created');
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  const getAllSubjects = async (req, res) => {
    try {
      const Subjects = await models.subject.findAll();
        return res.status(200).json({
          Subjects
        });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const getSubjectById = async (req, res) => {
    try {
      const { id } = req.params;
      const Subject = await models.subject.findOne({
        where: { sub_id: id },
      });
      if (Subject) {
        return res.status(200).json({ Subject });
      }
      return res.status(404).send('The specified ID does not exists');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const updateSubject = async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await models.subject.update(req.body, {
        where: { sub_id: id },
      });
      if (updated) {
        return res.status(200).send('Updated');
      }
      throw new Error('Not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const deleteSubject = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await models.subject.destroy({
          where: {sub_id: id},
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
    createSubject,
    getAllSubjects,
    getSubjectById,
    updateSubject,
    deleteSubject,
  };