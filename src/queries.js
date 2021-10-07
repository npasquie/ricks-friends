import { gql } from "@apollo/client"

export function getNumberbOfPages(search,filter) {
    let filtPart = filterPart(search,filter)
    
    if(search !== '' || search === undefined || filter !== undefined)
        filtPart = `(${filtPart})`

    return (gql`{
        characters${filtPart} {
            info {
                pages
            }
        }
    }`)
}

export function getCharactersIdsOfPage(page,search,filter) {
    return(gql`{
        characters(page: ${page},${filterPart(search,filter)}) {
            results{
                id
            }
        }
    }`)
}

function filterPart(search,filter) {
    let filterPart = ''
    const lifeStatuses = ["Alive","Dead","unknown"]

    if(search !== '' || search === undefined || filter !== undefined)
        filterPart = "filter: {"

    if (search !== '' || search === undefined){
        filterPart += `name: "${search}"`
        if (filter !== undefined)
            filterPart += ","
    }
    
    if (filter !== undefined)
        filterPart += `status:"${lifeStatuses[filter]}"`

    if(search !== '' || search === undefined || filter !== undefined)
        filterPart += "}"
    
    return filterPart
}

export function getCharacter(id) {
    return(gql`{
        character(id: ${id}){
            name,
            species,
            gender,
            image
          }
    }`)
}

export function getCharacterWithDetails(id) {
    return(gql`{
        character(id: ${id}){
            name,
            species,
            gender,
            image,
  			status,
            origin{
                name
            },
            location {
                name 
            },
            created,
            episode {
                name
            }
        }
    }`)
}