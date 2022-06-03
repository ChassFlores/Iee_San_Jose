const models = require('../models');
const createCourse = async (req, res) => {
    try {
      await models.course.create(req.body);
      return res.status(201).send('Created');
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  const getAllCourses = async (req, res) => {
    try {
      const Courses = await models.course.findAll();
        return res.status(200).json({
          Courses
        });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const getCourseById = async (req, res) => {
    try {
      const { id } = req.params;
      const Course = await models.course.findOne({
        where: { crs_id: id },
      });
      if (Course) {
        return res.status(200).json({ Course });
      }
      return res.status(404).send('The specified ID does not exists');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const updateCourse = async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await models.course.update(req.body, {
        where: { crs_id: id },
      });
      if (updated) {
        return res.status(200).send('Updated');
      }
      throw new Error('Not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const deleteCourse = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await models.course.destroy({
          where: {crs_id: id},
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
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
    deleteCourse,
  };