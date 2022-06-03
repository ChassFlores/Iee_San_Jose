const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('represent', {
    representative_rps_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'representative',
        key: 'rps_id'
      }
    },
    student_std_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'student',
        key: 'std_id'
      }
    },
    rpt_mean: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'represent',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "represent_pkey",
        unique: true,
        fields: [
          { name: "representative_rps_id" },
          { name: "student_std_id" },
          { name: "rpt_mean" },
        ]
      },
    ]
  });
};
