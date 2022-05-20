const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('representative', {
    rps_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'usr_id'
      }
    },
    rps_usr_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rps_rr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'representative_role',
        key: 'rr_id'
      }
    },
    rps_profession: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rps_employer: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'representative',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "representative_pkey",
        unique: true,
        fields: [
          { name: "rps_id" },
        ]
      },
    ]
  });
};
