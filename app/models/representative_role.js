const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('representative_role', {
    rr_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rr_type: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'representative_role',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "representative_role_pkey",
        unique: true,
        fields: [
          { name: "rr_id" },
        ]
      },
    ]
  });
};
