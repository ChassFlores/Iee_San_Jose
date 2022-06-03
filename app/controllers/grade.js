const models = require('../models');
const createGrade = async (req, res) => {
    try {
      await models.grade.create(req.body);
      return res.status(201).send('Created');
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  const getAllGrades = async (req, res) => {
    try {
      const Grades = await models.grade.findAll();
        return res.status(200).json({
          Grades
        });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const getGradeById = async (req, res) => {
    try {
      const { id } = req.params;
      const Grade = await models.grade.findOne({
        where: { grd_id: id },
      });
      if (Grade) {
        return res.status(200).json({ Grade });
      }
      return res.status(404).send('The specified ID does not exists');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const updateGrade = async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await models.grade.update(req.body, {
        where: { grd_id: id },
      });
      if (updated) {
        return res.status(200).send('Updated');
      }
      throw new Error('Not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const deleteGrade = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await models.grade.destroy({
          where: {grd_id: id},
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
    createGrade,
    getAllGrades,
    getGradeById,
    updateGrade,
    deleteGrade,
  };