import { DataTypes } from "sequelize";
import { sequelize } from "../db.mjs";

const Product = sequelize.define('products', {
    product_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    users_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true
    }
}, {
    timestamps: false
})

export default Product;