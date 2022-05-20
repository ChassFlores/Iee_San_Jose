const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('student', {
    std_usr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'usr_id'
      }
    },
    std_bs_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'basic_service',
        key: 'bs_id'
      }
    },
    std_previous_inst: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    std_bs_code: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    std_photo_dir: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    std_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    std_inst_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'institution_type',
        key: 'inst_id'
      }
    }
  }, {
    sequelize,
    tableName: 'student',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "student_pkey",
        unique: true,
        fields: [
          { name: "std_id" },
        ]
      },
    ]
  });
};
