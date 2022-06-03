const models = require('../models');
const createStudent = async (req, res) => {
    try {
      await models.student.create(req.body);
      return res.status(201).send('Created');
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  const getAllStudents = async (req, res) => {
    try {
      const Students = await models.student.findAll();
        return res.status(200).json({
          Students
        });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const getStudentById = async (req, res) => {
    try {
      const { id } = req.params;
      const Student = await models.student.findOne({
        where: { std_id: id },
      });
      if (Student) {
        return res.status(200).json({ Student });
      }
      return res.status(404).send('The specified ID does not exists');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const updateStudent = async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await models.student.update(req.body, {
        where: { std_id: id },
      });
      if (updated) {
        return res.status(200).send('Updated');
      }
      throw new Error('Not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const deleteStudent = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await models.student.destroy({
          where: {std_id: id},
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
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
  };