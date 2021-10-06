import { gql } from "@apollo/client"

export function getNumberbOfPages(search) {
    let filterPart = ''

    if(search !== '' || search === undefined)
        filterPart = `(filter: {name: "${search}"})`

    return (gql`{
        characters${filterPart} {
            info {
                pages
            }
        }
    }`)
}

export function getCharactersIdsOfPage(page,search) {
    let filterPart = ''

    if(search !== '' || search === undefined)
        filterPart = `,filter: {name: "${search}"}`

    return(gql`{
        characters(page: ${page}${filterPart}) {
            results{
                id
            }
        }
    }`)
}

export function getCharacter(id) {
    return(gql`{
        character(id: ${id}){
            name,
            status,
            species,
            type,
            gender,
            created,
            image
          }
    }`)
}