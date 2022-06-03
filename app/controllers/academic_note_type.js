const models = require('../models');
const createAcademic_note_type = async (req, res) => {
    try {
      await models.Academic_note_types.create(req.body);
      return res.status(201).send('Created');
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  const getAllAcademic_note_types = async (req, res) => {
    try {
      const Academic_note_types = await models.Academic_note_types.findAll();
      return res.status(200).json({
        info: data.paginate,
      });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const getAcademic_note_typeById = async (req, res) => {
    try {
      const { id } = req.params;
      const Academic_note_type = await models.Academic_note_types.findOne({
        where: { ant_id: id },
      });
      if (Academic_note_type) {
        return res.status(200).json({ data: id });
      }
      return res.status(404).send('The specified ID does not exists');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const updateAcademic_note_type = async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await models.Academic_note_types.update(req.body, {
        where: { Academic_note_type_id: id },
      });
      if (updated) {
        return res.status(200).send('Updated');
      }
      throw new Error('Not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const deleteAcademic_note_type = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await models.Academic_notes.destroy({
          where: {Academic_note_type_id: id},
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
    createAcademic_note_type,
    getAllAcademic_note_types,
    getAcademic_note_typeById,
    updateAcademic_note_type,
    deleteAcademic_note_type,
  };