'use strict';
module.exports = (sequelize, DataTypes) => {
  const MsPilihanGanda = sequelize.define('MsPilihanGanda', {
    pilihanGandaName: DataTypes.STRING,
    pilihanGandaIsTrue: DataTypes.INTEGER,
    ujianGroup: DataTypes.STRING
  }, {});
  MsPilihanGanda.associate = function(models) {
    // associations can be defined here
  };
  return MsPilihanGanda;
};