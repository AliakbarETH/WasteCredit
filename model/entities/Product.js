const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Product extends Model {}

Product.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER, //for auto increment primary key field type is
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    discrption: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "User",
  }
);
