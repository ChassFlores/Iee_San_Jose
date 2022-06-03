const models = require('../models');
const user = require('../models/user');
const createUser = async (req, res) => {
    try {
      await models.user.create(req.body);
      return res.status(201).send('Created');
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  const getAllUsers = async (req, res) => {
    try {
      const Users = await models.user.findAll();
        return res.status(200).json({
          Users
        });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const User = await models.user.findOne({
        where: { usr_id: id },
      });
      if (User) {
        return res.status(200).json({ User });
      }
      return res.status(404).send('The specified ID does not exists');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await models.user.update(req.body, {
        where: { usr_id: id },
      });
      if (updated) {
        return res.status(200).send('Updated');
      }
      throw new Error('Not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await models.user.destroy({
          where: {usr_id: id},
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
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
  };