const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('formation_level', {
    fl_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fl_type: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'formation_level',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "formation_level_pkey",
        unique: true,
        fields: [
          { name: "fl_id" },
        ]
      },
    ]
  });
};
