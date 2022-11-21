// Module manages application data.
// In this specific module, data is stored in memory


//import * as mem from './cmdb-data-mem.mjs'

import fetch from 'node-fetch'


const URL = "https://imdb-api.com/API/AdvancedSearch"

const api_key = "k_8x649t7o"



export async function getMoviesByPopularity(count) {
    let popularMovies = []
    const params = `/${api_key}?title_type=feature&count=${count}`
    return fetch(URL + params)
        .then(res => res.json())
        .then(obj => {
            obj.results.forEach((m) => {
                popularMovies.push({ CmdbID: m.id, Title: m.title, RunTime: m.runtimeStr })
            })
            return popularMovies
        });



}


export async function getMoviesByName(title, amount) {
    const params = `/${api_key}?title=${title}&title_type=feature&count=${amount}`
    let moviesOrderByName = []
    return fetch(URL + params)
        .then(res => res.json())
        .then(obj => {
            obj.results.forEach((m) => {
                if (m.title.includes(title)){
                    moviesOrderByName.push({CmdbID: m.id, Title: m.title, RunTime: m.runtimeStr})
                }
            });

            return moviesOrderByName 
        })
}