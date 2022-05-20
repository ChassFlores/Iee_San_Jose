const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grade', {
    grd_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    grd_value: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    grd_ant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'academic_note_type',
        key: 'ant_id'
      },
      unique: "uniqueant_id"
    },
    grd_acp_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'academic_period',
        key: 'acp_id'
      },
      unique: "uniqueacp_id"
    },
    grd_description: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    grd_std_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'student',
        key: 'std_id'
      },
      unique: "uniquestd_id"
    },
    grd_crs_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'course',
        key: 'crs_id'
      },
      unique: "uniquecrs_id"
    }
  }, {
    sequelize,
    tableName: 'grade',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "grade_pkey",
        unique: true,
        fields: [
          { name: "grd_id" },
        ]
      },
      {
        name: "uniqueacp_id",
        unique: true,
        fields: [
          { name: "grd_acp_id" },
        ]
      },
      {
        name: "uniqueant_id",
        unique: true,
        fields: [
          { name: "grd_ant_id" },
        ]
      },
      {
        name: "uniquecrs_id",
        unique: true,
        fields: [
          { name: "grd_crs_id" },
        ]
      },
      {
        name: "uniquestd_id",
        unique: true,
        fields: [
          { name: "grd_std_id" },
        ]
      },
    ]
  });
};
