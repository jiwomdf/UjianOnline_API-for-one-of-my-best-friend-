'use strict';
module.exports = (sequelize, DataTypes) => {
  const MsSoal = sequelize.define('MsSoal', {
    soalName: DataTypes.STRING,
    ujianGroup: DataTypes.STRING,
    soalUrlImage: DataTypes.STRING,
    soalGroup: DataTypes.STRING
  }, {});
  MsSoal.associate = function(models) {
    // associations can be defined here
  };
  return MsSoal;
};