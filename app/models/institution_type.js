const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('institution_type', {
    inst_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    inst_type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'institution_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "institution_type_pkey",
        unique: true,
        fields: [
          { name: "inst_id" },
        ]
      },
    ]
  });
};
