const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teacher', {
    tcr_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tcr_carrer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tcr_fl_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'formation_level',
        key: 'fl_id'
      }
    },
    tcr_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    tcr_lastname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    tcr_birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tcr_address: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    tcr_phone: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    tcr_email: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'teacher',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "teacher_pkey",
        unique: true,
        fields: [
          { name: "tcr_id" },
        ]
      },
    ]
  });
};
