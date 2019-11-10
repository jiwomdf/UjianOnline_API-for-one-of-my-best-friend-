'use strict';
module.exports = (sequelize, DataTypes) => {
  const MsPilihanGanda = sequelize.define('MsPilihanGanda', {
    pilihanGandaName: DataTypes.STRING(255),
    pilihanGandaIsTrue: DataTypes.INTEGER
  }, {});
  MsPilihanGanda.associate = function(models) {
    // associations can be defined here
  };
  return MsPilihanGanda;
};