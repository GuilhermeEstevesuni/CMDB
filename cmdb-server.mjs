// Application Entry Point. 
// Register all HTTP API routes and starts the server


import express from 'express'
import * as api from './cmdb-web-api.mjs'


const PORT = 8080

console.log("Starting setting up server")

let app = express()


app.use(express.json())


app.get('/movies', api.getMoviessByPopularity) // list of the top 250 movies
app.get('/movies/:title', api.getMoviesByName) // search movies by the name

app.post('/movies/groups', api.createGroup) //Create group providing its name and description
app.put('/movies/groups/:groupId', api.updateGroup)  //Edit group by changing its name and description
app.get('/movies/groups', api.getGroups)  // List all groups
app.delete('/movies/groups/:id', api.deleteGroup) // Delete a group


//app.get ->  Get the details of a group, with its name, description, the names and total duration of the included movies

app.post('/movies/groups/movies', api.addMovie)  //Add a movie to a group
app.delete('/movies/groups/movies' ,api.deleteMovie) //Remove a movie from a group

//app.post('/users/:username, api.') // Create new user



app.listen(PORT, () => console.log(`Cmdb app listening in http://localhost:${PORT}`))

console.log("End setting up server")