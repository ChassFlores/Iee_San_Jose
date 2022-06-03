const models = require('../models');
const nationality = require('../models/nationality');
const createNationality = async (req, res) => {
    try {
      await models.nationality.create(req.body);
      return res.status(201).send('Created');
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  const getAllNationalitys = async (req, res) => {
    try {
      const Nationalitys = await models.nationality.findAll();
        return res.status(200).json({
          Nationalitys
        });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const getNationalityById = async (req, res) => {
    try {
      const { id } = req.params;
      const Nationality = await models.nationality.findOne({
        where: { nat_id: id },
      });
      if (Nationality) {
        return res.status(200).json({ Nationality });
      }
      return res.status(404).send('The specified ID does not exists');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const updateNationality = async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await models.nationality.update(req.body, {
        where: { nat_id: id },
      });
      if (updated) {
        return res.status(200).send('Updated');
      }
      throw new Error('Not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const deleteNationality = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await models.nationality.destroy({
          where: {nat_id: id},
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
    createNationality,
    getAllNationalitys,
    getNationalityById,
    updateNationality,
    deleteNationality,
  };