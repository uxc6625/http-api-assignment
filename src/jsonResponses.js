// function to send a json object
const respondJSON = (request, response, status, object) => {
    response.writeHead(status, { 'Content-Type': 'application/json' });

    response.write(JSON.stringify(object));

    response.end();
};

// function to show a success status code
const success = (request, response) => {
    const responseJSON = {
        message: 'This is a successful response',
    };

    respondJSON(request, response, 200, responseJSON);
};

// function to show badRequests
const badRequest = (request, response, params) => {
    const responseJSON = {
        message: 'This request has the required parameters',
    };

    if (!params.valid || params.valid !== 'true') {
        responseJSON.message = 'Missing valid query parameter set to true';
        responseJSON.id = 'badRequest';
        return respondJSON(request, response, 400, responseJSON);
    }

    return responseJSON(request, response, 200, responseJSON);
};

// function to show not found error
const notFound = (request, response) => {
   
    const responseJSON = {
        message: 'The page you are looking for was not found.',
        id: 'notFound',
    };

    respondJSON(request, response, 404, responseJSON);
};

module.exports = {
    success,
    badRequest,
    notFound,
};
