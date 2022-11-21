// Module that contains the functions that handle all HTTP APi requests.
// Handle HTTP request means:
//  - Obtain data from requests. Request data can be obtained from: URI(path, query, fragment), headers, body
//  - Invoque the corresponding operation on services
//  - Generate the response


import * as moviesServices from './cmdb-services.mjs'


export async function getMoviessByPopularity(req, resp) {
    const popularMovies = await moviesServices.getMoviesByPopularity(req.query.count)
    resp.json(popularMovies)
}

export async function getMoviesByName(req, resp) {
    const moviesByName = await moviesServices.getMoviesByName(req.query.title, req.query.count)
    resp.json(moviesByName)

}

export async function createGroup(req, resp) {
    const newGroup = await moviesServices.createGroup(req.body.name, req.body.description)
    resp.status(201).json(newGroup)
}

export async function updateGroup(req, resp) {
    const updatedGroup = await moviesServices.updateGroup( req.params.id, req.body.name, req.body.description)
    resp.json(updatedGroup)

}

export async function getGroups(req, resp) {
    const groups = await moviesServices.getGroups(req.user)
    resp.json(groups)
}

export async function deleteGroup(req, resp) {
    await moviesServices.deleteGroup(req.user, req.params.id)
    resp.json(`Group with id ${req.params.id} was deleted.`)
}


//Get the details of a group, with its name, description, the names and total duration of the included movies


export async function addMovie(req, resp) {
    const newMovie = await moviesServices.addMovie(req.user, req.body.groupId, req.body.title, req.body.description)
    resp.status(201).json(newMovie)
}

export async function deleteMovie(req, resp) {
    await moviesServices.deleteMovie(req.user, req.params.gId, req.params.rId)
    resp.json(`In Group ${req.params.gId} the Movie ${req.params.mId} was deleted.`)
}
/*
async function createUser(req,resp){
    await moviesServices.createUser(req.params.userName)
    resp.json(`The User ${req.params.userName} was created successfuly!`)

}*/