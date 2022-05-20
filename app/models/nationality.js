const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nationality', {
    nat_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nat_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'nationality',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "nationality_pkey",
        unique: true,
        fields: [
          { name: "nat_id" },
        ]
      },
    ]
  });
};
