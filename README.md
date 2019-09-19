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

