const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../bin/dbConnection");
class Store extends Model {}
Store.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: Sequelize.DECIMAL(9, 6), // Adjust precision and scale as needed
      allowNull: false,
    },
    longitude: {
      type: Sequelize.DECIMAL(9, 6), // Adjust precision and scale as needed
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "Store",
  }
);
module.exports = { Store };
