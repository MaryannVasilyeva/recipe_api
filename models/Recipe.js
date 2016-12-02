module.exports = function( sequelize, DataTypes ){
    var Recipe = sequelize.define( 'Recipe',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV1,
                primaryKey: true,
                allowNull: false
            }
            // title: {
            //     type: DataTypes.STRING,
            //     allowNull: false
            // },
            // description: {
            //     type: DataTypes.TEXT,
            //     allowNull: true
            // },
            // created_at: {
            //     type: DataTypes.DATE,
            //     allowNull: false
            // },
            // updated_at: {
            //     type: DataTypes.DATE,
            //     allowNull: false
            // },
            // status: {
            //     type: DataTypes.INTEGER( 2 ).UNSIGNED,
            //     allowNull: false,
            //     defaultValue: 0,
            //     validate: {
            //         isIn: [
            //             [ 0, 1 ]
            //         ]
            //     },
            //     comment: "0: Open, 1: Deleted"
            // }
        },
        {
            tableName: 'recipes'
        }
    );
    return Recipe;
};