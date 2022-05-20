const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('academic_note_type', {
    ant_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ant_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'academic_note_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "academic_note_type_pkey",
        unique: true,
        fields: [
          { name: "ant_id" },
        ]
      },
    ]
  });
};
