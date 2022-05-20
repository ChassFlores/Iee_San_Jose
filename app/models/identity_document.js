const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('identity_document', {
    idoc_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idoc_type: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'identity_document',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "identity_document_pkey",
        unique: true,
        fields: [
          { name: "idoc_id" },
        ]
      },
    ]
  });
};
