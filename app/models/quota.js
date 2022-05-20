const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('quota', {
    qta_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    qta_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    qta_paid: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    qta_std_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'student',
        key: 'std_id'
      }
    }
  }, {
    sequelize,
    tableName: 'quota',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "quota_pkey",
        unique: true,
        fields: [
          { name: "qta_id" },
        ]
      },
    ]
  });
};
