# learning_node
A repository that documents my learning journey with node.js.
This repository is based on a Udemy Course that will help me diving in node.js and build server side applications.

Content of the course - (As I go along the course I will add the main takeaways from the current module I am in)
- Event Loop

  The event loop is what allows node.js to do non-blocking operations.
  When node.js has multiple operations operating in the background and one of them finishes, this operation will be added to a poll queue that will be executed later in time, so we prevent blocking operations.
  
  "The loop gives priority to the call stack, and it first processes everything it finds in the call stack, and once there’s nothing in there, it goes to pick up things in the message queue." - the message queue in this case is our poll queue.
  
  If we have an async function that takes a callback as a parameter, the example of setTimeout. Whatever we pass in as a parameter, it will be added to the poll queue to be called later on when the callstack is empty.
  
  The event loop in node js keeps on running as long there is event listeners registered. When we create server with node.js we create an on going event listener as the servers keeps waiting for requests.

- Installing 3rd party packages to accelerate the development workflow.

  nodemon - allows a developer to sync any changes with the server running when the file is changed and saved.
  
- Express.js (framework for node.js)

  It also accelerate the development workflow.
  Express.js is all about middleware. Middleware means that an incoming request is funnelled through a set o functions by express.js. Instead of having a single request handler, we will actually have middleware functions that will be useful to write  the logic in our code.
  
  For example. app.use() is a middleware function that takes 3 parameters (request, response, next).
  
  next() means that is a callback function that will be called so that we can jump into another middleware function.
  
 - Parsing incoming requests (Express.js)
 
In order to parse incoming requests we need to add a parser by adding a middleware function. This middleware function needs to sit on top of the program as the parsing should happen no matter where the request is made.
By having app.use() as a middleware function we are allowing any sort of requests to trigger this function. If we want to be more selective and for example add an input field that sends a POST request to a specific URL, perhaps we don’t want to trigger that URL with a GET request.
That’s where express comes handy. Instead of doing a conditional expression to trigger a specific URL (pure node.js),we use Express built-in functions that allow us to specify what kind of HTTP requests will trigger a specific url.
Express allows us:

.use() - allows all HTTP requests

.get() - allows get requests.

.post() - allows post requests.

.patch() - allows patch requests.

.delete() - allows delete requests.

- Express Router

express.Router() allows to split our code logic, or middleware functions in different files, by creating a router as a module which can be imported into the main application. express.Router() it is often referred as a mini-app.

The order in which we structure our middleware functions matter if we have middleware functions that use the .use() method.
If we have other middleware functions that take any other method than .use() then doesn’t matter the way we structure our program as those functions use regex to match the specified URL path.

- Introducing the MVC model

-- View

We’ve been able to construct some logic in filtering the paths and display html elements created in the middleware functions, however that becomes cumbersome as we would have to hardcode html in every middleware function, and it would be even more messy to style it, also our code would look very disorganised. It is a good idea to split the work in our application, so that we can distinguish where it lies the logic of our application, where it is displayed, and so on… This way we can easily find bugs.
In order to get a whole html page displayed to the user, then we will have to use a concept called view, which is one of the three concepts of the MVC model.
node.js provides us a method called sendFile which can be used to send an html file to the client once a request is made to a specific path url.
However sendFile cannot be called solely on its own, it has a dependency on a in built module called path. If we were to give the path of a html using purely .sendFile method, then the system would look for a html in the root folder of the operating system.
To prevent that and get the file that is in our project folder we use the path module (path.join(__dirname, 'main_directory', 'viewsFolder', 'file_to_render')

-- Model 

Models are responsible for representing and managing data. It contains all the data related logic.
With ES6 new features we can use a class to represent a model,instead of the traditional way of using constructor functions.

-- Controller

It connects the View and Model, and it should only be responsible for the two to communicate in both ways.

- Databases

In SQL databases we have tables, and each table represents an entity. Each entity will have attributes, those attributes represent the data that we want to store about an instance of an entity.
In NoSQL databases we have collections, which can be much similar to tables in SQL databases, but the way they are structured is different from a SQL database. For example, we can store multiple documents with different pieces of information in a noSQL database, which is not possible in a SQL database.

SQL databases have a fixed schema or follow a predefined schema, whereas noSQL have a dynamic schema.

NoSQL databases are horizontally scalable, which means that it is possible to handle more traffic by adding more servers to a noSQL database. Without the need to do join tables the efficiency and performance of noSQL databases is taken in consideration for large datasets. 

-- Which type of database to choose?

So far noSQL databases in comparison to SQL databases can be more advantageous to use, however the decision to use one over the other is dependant on what kind of data we want to store. If we want to persist relations between data, make complex queries, have high transactions and we know that the data will not change so often, then SQL is the way to go. There is no right answer for which one is best, but there is a right answer for which one is best taken in consideration the data model we require.

- Sequelize

Sequelize is an Object Relation Mapper for nodeJS. It maps data relations (tables, columns and lines) into Javascript objects. It allows a programmer to create,find,change,delete data using Javascript methods. It makes the life a programmer much easier for the simple reason that we don't need to run SQL queries.

-- Associations between models

Sequelize allows us to establish relationships between models without using SQL relations. Sequelize in-built methods helps us define the type of relationships a model might have. For example,imagine the scenario of a User having many products associated to him. Before syncing our application with the database, we should establish that the User model can have many products, and it is done by doing User.hasMany(Product),( .hasMany() is a method provided by sequelize) . As we say that a user can have many products, we should also say that a product .belongsTo(User)

 
