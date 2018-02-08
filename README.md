# Wheel-Way

![Image of wheelway2](https://github.com/nabiya15/Wheel-Way/blob/master/public/images/wheelway2.png)

#### Project #2 for The Coding Bootcamp at UT Austin 

The goal for this project was to build an intuitive app aimed at solving the difficulties the physically disabled face in a daily commute.

#### Major features include: 
  * Node and Express Web Server 
  * MySQL Database with a Sequelize ORM 
  * MVC folder structure 
  * A polished, intuitive, and responsive front-end/UI
    * HTML, CSS
    * Handlebars.js
    * Bootstrap
    * Materialize
  * An easy-to-use, interactive map made for the handicapped to use to get around in public
    * Leaflet.js (Mapbox.js)
  * Authentication of users
    * Passport.js
 
Upon login, users are re-directed to a homepage with a map that geo-locates to their current position.
Here users can identify specific barriers or assists by selecting a pin from the toolbar and dragging it onto the map.

There are 7 different types of pins: curb, stairs, barrier, construction, rough road, curb cut, and ramp. 

Once a user drops the pin, a form module pops-up and prompts for a description of the pin.
Once the pin form is submitted, it is saved to a MySQL database. 

#### Future developments include: 
  * Navigation that takes barriers and accessibility into consideration
   * Users will be able to enter a start and end location.
   * Users are provided with directions from point A to B, with a route clear of obstacles (curbs, stairs, barrier, construction, and/or rough road)
  * Hourly weather forecast 
  * A more interactive, community user experience
    * Users will have their own customizable homepages and profiles 
    * Adding "likes" to pins for believability and rewards to users
  
[Check out our site](https://wheelway.herokuapp.com)

#### *This app is in the process of being further developed.*
