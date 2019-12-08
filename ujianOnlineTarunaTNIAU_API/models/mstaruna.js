'use strict';
module.exports = (sequelize, DataTypes) => {
  const MsTaruna = sequelize.define('MsTaruna', {
    nama: DataTypes.STRING,
    tarunaID: DataTypes.STRING,
    password: DataTypes.STRING,
    kelas: DataTypes.STRING,
    tarunaUrlImage: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.INTEGER
  }, {});
  MsTaruna.associate = function(models) {
    // associations can be defined here
  };
  return MsTaruna;
};