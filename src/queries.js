import { gql } from "@apollo/client"

const getNumberbOfPages = gql`{
    info {
        pages
    }
}`

export { getNumberbOfPages } 