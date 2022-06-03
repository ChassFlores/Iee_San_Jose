const models = require('../models');
const createTeacher = async (req, res) => {
    try {
      await models.teacher.create(req.body);
      return res.status(201).send('Created');
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  const getAllTeachers = async (req, res) => {
    try {
      const Teachers = await models.teacher.findAll();
        return res.status(200).json({
          Teachers
        });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const getTeacherById = async (req, res) => {
    try {
      const { id } = req.params;
      const Teacher = await models.teacher.findOne({
        where: { tcr_id: id },
      });
      if (Teacher) {
        return res.status(200).json({ Teacher });
      }
      return res.status(404).send('The specified ID does not exists');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const updateTeacher = async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await models.teacher.update(req.body, {
        where: { tcr_id: id },
      });
      if (updated) {
        return res.status(200).send('Updated');
      }
      throw new Error('Not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const deleteTeacher = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await models.teacher.destroy({
          where: {tcr_id: id},
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
    createTeacher,
    getAllTeachers,
    getTeacherById,
    updateTeacher,
    deleteTeacher,
  };