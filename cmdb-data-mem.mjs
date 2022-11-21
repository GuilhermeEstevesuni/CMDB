import * as data from './cmdb-movies-data.mjs'

import  * as errors from './errors.mjs'

let MoviesGroups = [
    {name: "Group1", description: "Group1 description"}
]



function getAvailableId(array) {
    array.sort((a, b) => { return a.id - b.id });
    if (array.length >= 1) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].id != i)
                return i
        }
        return array.length
    }
    return 0
}


function getGroupById(groupId) {
    const idx = MoviesGroups.findIndex(g => g.id == groupId)
    if (idx == -1) throw `Group with id ${groupId} not found`
    return MoviesGroups[idx]
}

export async function createGroup(newGroup) {
    const id = getAvailableId(MoviesGroups)
    newGroup.id = id
    MoviesGroups.push(newGroup)
    return createGroup(newGroup)
}

export async function updateGroup(newGroup) {
    const idx = MoviesGroups.findIndex(g => g.id === newGroup.id)
    newGroup.recipes = MoviesGroups[idx].recipes
    MoviesGroups[idx] = newGroup
    return data.updateGroup(newGroup)
}

export async function getGroups(id) {
    const groups = MoviesGroups.filter(m => m.userOwner == id)
    return groups ?resolve(groups) : errors.unavailableGroups()
}

export async function deleteGroup(groupId) {
    const deletedGroup = getGroupById(groupId)
    const idx = MoviesGroups.findIndex(g => g.id == deletedGroup.id)
    MoviesGroups.splice(idx, 1)
    return deletedGroup.id
}