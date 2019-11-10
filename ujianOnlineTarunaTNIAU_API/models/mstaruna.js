'use strict';
module.exports = (sequelize, DataTypes) => {
  const MsTaruna = sequelize.define('MsTaruna', {
    nama: DataTypes.STRING(255),
    tarunaID: DataTypes.STRING(255),
    password: DataTypes.STRING(255),
    kelas: DataTypes.STRING(255),
    tarunaUrlImage: DataTypes.STRING(255),
    email: DataTypes.STRING(255),
    gender: DataTypes.INTEGER
  }, {});
  MsTaruna.associate = function(models) {
    // associations can be defined here
  };
  return MsTaruna;
};