const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    usr_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    usr_lastname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    urs_birthplace: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    usr_birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    usr_idoc_code: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    usr_address: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    usr_phone_1: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    usr_phone_2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    usr_phone_3: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    usr_email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    usr_nat_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'nationality',
        key: 'nat_id'
      }
    },
    usr_idoc_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'identity_document',
        key: 'idoc_id'
      }
    },
    usr_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'user',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "user_pkey",
        unique: true,
        fields: [
          { name: "usr_id" },
        ]
      },
    ]
  });
};
