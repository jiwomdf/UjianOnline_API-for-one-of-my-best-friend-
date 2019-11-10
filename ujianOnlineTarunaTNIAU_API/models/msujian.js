'use strict';
module.exports = (sequelize, DataTypes) => {
  const MsUjian = sequelize.define('MsUjian', {
    ujianName: DataTypes.STRING(255),
    ujianUrlImage: DataTypes.STRING(255)
  }, {});
  MsUjian.associate = function(models) {
    // associations can be defined here
  };
  return MsUjian;
};