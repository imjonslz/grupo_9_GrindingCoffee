
module.exports = (sequelize, DataTypes) =>{
    const name = "Sizes";
    const constructor = {
        id : {
            primaryKey: true,
            autoIncrement:true,
            type: DataTypes.INTEGER,
        },
        size:{
            type: DataTypes.STRING,
        }
    };
    const config = {
        tableName: "sizes",
        timestamps: false
    };
    const Size= sequelize.define(name, constructor, config)
    Size.associate = function (models) {
        Size.hasMany(models.Products,{
            as: "products",
            foreignKey : "size_id"
        })
    }
    return Size
}