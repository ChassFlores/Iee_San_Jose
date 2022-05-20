const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subject', {
    sub_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sub_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'subject',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "subject_pkey",
        unique: true,
        fields: [
          { name: "sub_id" },
        ]
      },
    ]
  });
};
