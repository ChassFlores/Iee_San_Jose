const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('academic_period', {
    acp_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    acp_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'academic_period',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "academic_period_pkey",
        unique: true,
        fields: [
          { name: "acp_id" },
        ]
      },
    ]
  });
};
