
module.exports = (sequelize, DataTypes) =>{
    const name = "Users";
    const constructor = {
        id : {
            primaryKey: true,
            autoIncrement:true,
            type: DataTypes.INTEGER,
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        userRoll_id:{
            type: DataTypes.INTEGER,
        },
        avatar:{
            type: DataTypes.STRING,
        },
    };
    const config = {
        tableName: "users",
        timestamps: false
    };
    const User= sequelize.define(name, constructor, config)
    User.associate = function (models) {
        User.belongsTo(models.UserRolls,{
            as: "roll",
            foreignKey : "userRoll_id"
        })
    }
    return User
}