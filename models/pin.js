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
 
    return Pin;
 
}