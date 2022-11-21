// Module contains all task management logic

import * as data from './cmdb-movies-data.mjs'
import * as meme from './cmdb-data-mem.mjs'
import * as errors from './errors.mjs'
import * as items from "./cmdb-web-api.mjs";


export async function getMoviesByPopularity(count){
    if(count > 250 && !count)
        throw errors.errors.INVALID_ARGUMENT("count")

    return data.getMoviesByPopularity(count)
}

export async function getMoviesByName(title, amount){
    if(!title) 
        throw errors.errors.INVALID_ARGUMENT("title")
    if(amount > 250 && !amount)
        throw errors.errors.INVALID_ARGUMENT("amount")

    return data.getMoviesByName(title, amount)
}

export async function createGroup(name, description){
    if(!name) throw errors.errors.INVALID_ARGUMENT("name")
    if(!description) throw errors.errors.INVALID_ARGUMENT("description")

    return meme.createGroup({ name : name, description: description, Movies: [] })
}

export async function updateGroup(groupId, name, description){
    if(!groupId) throw errors.errors.INVALID_ARGUMENT("id")
    if(!name) throw errors.errors.INVALID_ARGUMENT("name")

    const newGroup = {id: groupId, name: name, description: description}
    return meme.updateGroup(newGroup)
}


export async function getGroups(id){
    return meme.getGroups(id)
}


export async function deleteGroup(groupId){     

    if(!groupId) throw errors.errors.INVALID_ARGUMENT("id")
    
    return meme.deleteGroup(groupId)
}

//Get the details of a group, with its name, description, the names and total duration of the included movies


export async function addMovie(movieName, groupId){
    if(!groupId) throw errors.errors.INVALID_ARGUMENT("id")
    
    const movie = await items.getMoviesByName(movieName)

    return meme.addMovie(movie)
}

export async function deleteMovie(groupId, movieName){ 
    if(!movieName) throw errors.errors.INVALID_ARGUMENT("movieName")

    return meme.deleteMovie(groupId, movieName)
}
/*
export async function createUser(userName){
    if(!userName) throw errors.INVALID_ARGUMENT("userName")
    return data.createUser(userName)
}*/


