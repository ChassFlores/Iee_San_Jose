const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assistance', {
    asc_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    asc_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    asc_attended: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    asc_crs_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'course',
        key: 'crs_id'
      }
    }
  }, {
    sequelize,
    tableName: 'assistance',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assistance_pkey",
        unique: true,
        fields: [
          { name: "asc_id" },
        ]
      },
    ]
  });
};
