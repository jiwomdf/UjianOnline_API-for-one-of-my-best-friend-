'use strict';
module.exports = (sequelize, DataTypes) => {
  const MsDosen = sequelize.define('MsDosen', {
    dosenID: DataTypes.STRING(255),
    password: DataTypes.STRING(255),
    nrp: DataTypes.STRING(255),
    nama: DataTypes.STRING(255),
    email: DataTypes.STRING(255),
    telp: DataTypes.STRING(255),
    alamat: DataTypes.STRING(255),
    dosenUrlPhoto: DataTypes.STRING(255)
  }, {});
  MsDosen.associate = function(models) {
    // associations can be defined here
  };
  return MsDosen;
};