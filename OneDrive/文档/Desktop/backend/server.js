
const http = require('http');
const path = require('path');
const fs = require('fs');


function handleError(res, errorCode, message) {
    res.statusCode = errorCode;
    res.setHeader('Content-Type', 'text/plain');
    res.write(message);
    res.end();
}


const server = http.createServer((req, res) => {
    const loginpage = path.join(__dirname, 'public', 'login.html'); // Ensure this file exists
    const contactpage = path.join(__dirname, 'public', 'contact-us.html'); // Ensure this file exists
    const registrationpage = path.join(__dirname, 'public', 'reg.html'); // Ensure this file exists
    const panachepage = path.join(__dirname, 'public', 'Panache.html'); // Ensure this file exists
    const panachegallerypage = path.join(__dirname, 'public', 'un-day-gallery.html'); // Ensure this file exists
    const homepage = path.join(__dirname, 'public', 'homepage.html'); // Ensure this file exists
    const aboutpage = path.join(__dirname, 'public', 'aboutus.html'); // Ensure this file exists
    const custodypage = path.join(__dirname, 'public', 'custody.html'); // Ensure this file exists
    const dhwanipage = path.join(__dirname, 'public', 'dhwani.html'); // Ensure this file exists
    const reflectionpage = path.join(__dirname, 'public', 'reflection.html'); // Ensure this file exists
    const tasveerpage = path.join(__dirname, 'public', 'tasveer.html'); // Ensure this file exists
    const tasveergallerypage = path.join(__dirname, 'public', 'undaygallry.html'); // Ensure this file exists


    res.setHeader('Content-Type', 'text/html');

    if (req.method === 'GET') {
        if (req.url === '/') {
            fs.readFile(loginpage, (err, data) => {
                if (err) {
                    console.error(err);
                    handleError(res, 500, 'Internal Server Error');
                } else {
                    res.writeHead(200);
                    res.write(data);
                    res.end();
                }
            });
        } else if (req.url === '/login') {
            // Serve the login.html file
            fs.readFile(loginpage, (err, data) => {
                if (err) {
                    console.error(err);
                    handleError(res, 500, 'Internal Server Error');
                } else {
                    res.writeHead(200);
                    res.write(data);
                    res.end();
                }
            });
        } else if (req.url === '/contact-us') {
            // Serve the login.html file
            fs.readFile(contactpage, (err, data) => {
                if (err) {
                    console.error(err);
                    handleError(res, 500, 'Internal Server Error');
                } else {
                    res.writeHead(200);
                    res.write(data);
                    res.end();
                }
            });
        } else if (req.url === '/reg') {
            // Serve the login.html file
            fs.readFile(registrationpage, (err, data) => {
                if (err) {
                    console.error(err);
                    handleError(res, 500, 'Internal Server Error');
                } else {
                    res.writeHead(200);
                    res.write(data);
                    res.end();
                }
            });
        }
        else if (req.url === '/Panache') {
            // Serve the login.html file
            fs.readFile(panachepage, (err, data) => {
                if (err) {
                    console.error(err);
                    handleError(res, 500, 'Internal Server Error');
                } else {
                    res.writeHead(200);
                    res.write(data);
                    res.end();
                }
            });
        }
        else if (req.url === '/homepage') {
            // Serve the login.html file
            fs.readFile(homepage, (err, data) => {
                if (err) {
                    console.error(err);
                    handleError(res, 500, 'Internal Server Error');
                } else {
                    res.writeHead(200);
                    res.write(data);
                    res.end();
                }
            });
        }
        else if (req.url === '/about') {
            // Serve the login.html file
            fs.readFile(aboutpage, (err, data) => {
                if (err) {
                    console.error(err);
                    handleError(res, 500, 'Internal Server Error');
                } else {
                    res.writeHead(200);
                    res.write(data);
                    res.end();
                }
            });
        }  
        else if (req.url === '/Custody') {
            // Serve the login.html file
            fs.readFile(custodypage, (err, data) => {
                if (err) {
                    console.error(err);
                    handleError(res, 500, 'Internal Server Error');
                } else {
                    res.writeHead(200);
                    res.write(data);
                    res.end();
                }
            });
        }
        else if (req.url === '/Dhwani') {
            // Serve the login.html file
            fs.readFile(dhwanipage, (err, data) => {
                if (err) {
                    console.error(err);
                    handleError(res, 500, 'Internal Server Error');
                } else {
                    res.writeHead(200);
                    res.write(data);
                    res.end();
                }
            });
        } 
        else if (req.url === '/Reflection') {
            // Serve the login.html file
            fs.readFile(reflectionpage, (err, data) => {
                if (err) {
                    console.error(err);
                    handleError(res, 500, 'Internal Server Error');
                } else {
                    res.writeHead(200);
                    res.write(data);
                    res.end();
                }
            });
        }
        else if (req.url === '/Tasveer') {
            // Serve the login.html file
            fs.readFile(tasveerpage, (err, data) => {
                if (err) {
                    console.error(err);
                    handleError(res, 500, 'Internal Server Error');
                } else {
                    res.writeHead(200);
                    res.write(data);
                    res.end();
                }
            });
        }
        else if (req.url === '/un-day-gallery') {
            // Serve the login.html file
            fs.readFile(panachegallerypage, (err, data) => {
                if (err) {
                    console.error(err);
                    handleError(res, 500, 'Internal Server Error');
                } else {
                    res.writeHead(200);
                    res.write(data);
                    res.end();
                }
            });
        } 
        else if (req.url === '/undaygallery') {
            // Serve the login.html file
            fs.readFile(tasveergallerypage, (err, data) => {
                if (err) {
                    console.error(err);
                    handleError(res, 500, 'Internal Server Error');
                } else {
                    res.writeHead(200);
                    res.write(data);
                    res.end();
                }
            });
        } 
        else {
            handleError(res, 404, 'Route Not Found');
        }
    }
    // Handle POST requests
    else if (req.method === 'POST') {
        if (req.url === '/') {
            // Handle POST logic (e.g., reading a file or processing data)
            fs.readFile(loginpage, (err, data) => {
                if (err) {
                    console.error(err);
                    handleError(res, 500, 'Internal Server Error');
                } else {
                    res.writeHead(200);
                    res.write('<h1>POST Request to Home Page</h1>');
                    res.end();
                }
            });
        } else if (req.url === '/login') {
            fs.readFile(loginpage, (err, data) => {
                if (err) {
                    console.error(err);
                    handleError(res, 500, 'Internal Server Error');
                } else {
                    res.writeHead(200);
                    res.write('<h1>POST Request to Login Page</h1>');
                    res.end();
                }
            });
    }else if (req.url === '/contact-us') {
            // Serve the login.html file
            fs.readFile(contactpage, (err, data) => {
                if (err) {
                    console.error(err);
                    handleError(res, 500, 'Internal Server Error');
                } else {
                    res.writeHead(200);
                    res.write(data);
                    res.end();
                }
            });
        }
        else if (req.url === '/reg') {
            // Serve the login.html file
            fs.readFile(registrationpage, (err, data) => {
                if (err) {
                    console.error(err);
                    handleError(res, 500, 'Internal Server Error');
                } else {
                    res.writeHead(200);
                    res.write(data);
                    res.end();
                }
            });
        }
        else if (req.url === '/Panache') {
            // Serve the login.html file
            fs.readFile(panachepage, (err, data) => {
                if (err) {
                    console.error(err);
                    handleError(res, 500, 'Internal Server Error');
                } else {
                    res.writeHead(200);
                    res.write(data);
                    res.end();
                }
            });
        } 
        
        else if (req.url === '/homepage') {
            // Serve the login.html file
            fs.readFile(homepage, (err, data) => {
                if (err) {
                    console.error(err);
                    handleError(res, 500, 'Internal Server Error');
                } else {
                    res.writeHead(200);
                    res.write(data);
                    res.end();
                }
            });
        } 
        
    }
    else {
        handleError(res, 405, 'Method Not Allowed');
    }
});

// Start the server on port 8080
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
