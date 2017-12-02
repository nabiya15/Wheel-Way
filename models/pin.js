module.exports = function(sequelize, Sequelize) {
 
    var Pin = sequelize.define('Pin', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        date: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        markerType: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        description: {
            type: Sequelize.TEXT
        },
        
        lat: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
 
        lng: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        
 
    });

    Pin.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Pin.belongsTo(models.User, {
      foreignKey: "uid"
    });
  };
 
    return Pin;
 
}