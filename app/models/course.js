const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('course', {
    crs_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    crs_level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    crs_fl_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'formation_level',
        key: 'fl_id'
      }
    },
    crs_tch_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'teacher',
        key: 'tcr_id'
      }
    },
    crs_std_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'student',
        key: 'std_id'
      }
    },
    crs_sub_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'subject',
        key: 'sub_id'
      }
    }
  }, {
    sequelize,
    tableName: 'course',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "course_pkey",
        unique: true,
        fields: [
          { name: "crs_id" },
        ]
      },
    ]
  });
};
