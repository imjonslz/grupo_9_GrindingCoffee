
module.exports = (sequelize, DataTypes) =>{
    const name = "Products";
    const constructor = {
        id : {
            primaryKey: true,
            autoIncrement:true,
            type: DataTypes.INTEGER,
        },
        productName:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        category_id:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        size_id:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        price:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        productImage:{
            type: DataTypes.STRING
        }
    };
    const config = {
        tableName: "products",
        timestamps: false
    };
    const Product= sequelize.define(name, constructor, config)

    Product.associate = function(models) {
        Product.belongsTo(models.Categories, {
            as: "categories",
            foreignKey: "category_id"
        });

        Product.belongsTo(models.Sizes, {
            as: "sizes",
            foreignKey: "size_id"
        });
    };

    return Product
}