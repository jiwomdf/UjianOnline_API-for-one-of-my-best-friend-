'use strict';
module.exports = (sequelize, DataTypes) => {
  const MsUjian = sequelize.define('MsUjian', {
    ujianName: DataTypes.STRING,
    ujianGroup: DataTypes.STRING
  }, {});
  MsUjian.associate = function(models) {
    // associations can be defined here
  };
  return MsUjian;
};