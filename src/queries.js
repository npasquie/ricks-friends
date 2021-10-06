import { gql } from "@apollo/client"

export function getNumberbOfPages() {
    return (gql`{
        characters {
            info {
                pages
            }
        }
    }`)
}

export function getCharactersIdsOfPage(page) {
    return(gql`{
        characters(page: ${page}) {
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