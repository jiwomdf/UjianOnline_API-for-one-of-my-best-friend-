'use strict';
module.exports = (sequelize, DataTypes) => {
  const MsDosen = sequelize.define('MsDosen', {
    dosenID: DataTypes.STRING,
    password: DataTypes.STRING,
    nrp: DataTypes.STRING,
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    telp: DataTypes.STRING,
    alamat: DataTypes.STRING,
    dosenUrlPhoto: DataTypes.STRING
  }, {});
  MsDosen.associate = function(models) {
    // associations can be defined here
  };
  return MsDosen;
};