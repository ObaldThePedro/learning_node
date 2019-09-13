const fs = require('fs');
const users = ["John", "Daisy", "Pedro", "Elena"];

const requestHandler = (request, response) => {
    const url = request.url;
    const method = request.method;

    if (url === '/') {
        response.write("<html>");
        response.write("<head><title>Hello</title></head>");
        response.write("<body>");
        response.write("<h1>Hi dear User,this is a page served by node server.</h1>");
        response.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></input></form>')
        response.write("</body>");
        response.write("</html>");
        return response.end();
    }

    if (url === '/create-user' && method === "POST") {
        const body = []
        request.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        })

        request.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split("=")[1];
            users.push(username);
            response.write("<html>");
            response.write("<head><title>Hello</title></head>");
            response.write("<body>");
            response.write(`<h1>${username} was added to the users list</h1>`);
            response.write("</body>");
            response.write("</html>");
            return response.end();
        })
    }
    if (url === '/users') {
        console.log(users)
        response.write("<html>");
        response.write("<head><title>Users</title></head>");
        response.write("<body><h1>List of users</h1></body>")
        users.map(user => response.write(`<ul><li>${user}</li></ul>`));
        response.write("</html>");
        return response.end();
    }
}

exports.handler = requestHandler;