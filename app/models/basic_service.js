const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('basic_service', {
    bs_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    bs_type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'basic_service',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "basic_service_pkey",
        unique: true,
        fields: [
          { name: "bs_id" },
        ]
      },
    ]
  });
};
