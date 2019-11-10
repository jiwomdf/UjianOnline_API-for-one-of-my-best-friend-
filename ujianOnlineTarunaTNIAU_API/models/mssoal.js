'use strict';
module.exports = (sequelize, DataTypes) => {
  const MsSoal = sequelize.define('MsSoal', {
    soalName: DataTypes.STRING(255),
    pilihanGandaAnswere: DataTypes.STRING(255)
  }, {});
  MsSoal.associate = function(models) {
    // associations can be defined here
  };
  return MsSoal;
};