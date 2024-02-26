
module.exports = (sequelize, DataTypes) =>{
    const name = "Categories";
    const constructor = {
        id : {
            primaryKey: true,
            autoIncrement:true,
            type: DataTypes.INTEGER,
        },
        category:{
            type: DataTypes.STRING,
        }
    };
    const config = {
        tableName: "categories",
        timestamps: false
    };
    const Category= sequelize.define(name, constructor, config)
    Category.associate = function (models) {
        Category.hasMany(models.Products,{
            as: "products",
            foreignKey : "category_id"
        })
    }
    return Category
}