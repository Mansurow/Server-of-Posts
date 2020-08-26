'use strict'

const http = require('http');

const statusNotFound = 404;
const statusBadRequest = 400;
const statusOk = 200;

let nextId = 1;
const posts = [];

const methods = new Map();
methods.set('/posts.get',function({response}){
    response.writeHead(statusOk, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(posts));
});
methods.set('/posts.getById',function(){});
methods.set('/posts.post',function({response, searchParams}){
    if(!searchParams.has('content')){
        response.writeHead(statusBadRequest);
        response.end();
        return;
    }
    const content = searchParams.get('content');

    const post = {
        id: nextId++,
        content: content,
        created: Date.now(),
    };
    posts.unshift(post);
    response.writeHead(statusOk,{'Content-Type': 'application/json'});
    response.end(JSON.stringify(post));
});
methods.set('/posts.edit',function(){});
methods.set('/posts.delete',function(){});

const server = http.createServer(function(request, response){
    const {pathname, searchParams} = new URL(request.url, `http://${request.headers.host}`);

    const method = methods.get(pathname);
    if (method === undefined){
        response.writeHead(statusNotFound);
        response.end();
        return;
    }

    const params = {
        request,
        response,
        pathname,
        searchParams,
    }

    method(params);
});

const port = 9999;
server.listen(port);
