# lab-09
lab nine

### Author: Student/Group Name
Jeff

### Links and Resources
* [submission PR](https://github.com/JeffLawrence1/lab-09/pull/1)
* [travis](https://www.travis-ci.com/jeff-401-js/lab-09)
* [heroku](https://protected-falls-82183.herokuapp.com/)


#### Documentation
* [UML](https://www.lucidchart.com/documents/view/c55fe5b8-a690-4b11-afd0-3d0bd79b8dd9/0)

### Modules
categories
players
teams

### Setup
#### `.env` requirements
* `PORT` - 3000
* `MONGODB_URI` - mongodb://localhost:27017/class-09

#### Running the app
* `nodemon index.js`
* Endpoint: `/api/v1/:model/`
  * Either get or post to get all or add one.
* Endpoint: `//api/v1/:model/:id/`
  * Either get, put or delete to get one, update one or delete one.
  
#### Tests
* How do you run tests?
npm test `filename.test.js`
