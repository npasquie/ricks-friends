import { useQuery } from "@apollo/client"
import { Spinner, Card, Row } from "react-bootstrap"
import { getCharacter, getCharactersIdsOfPage } from "../../queries"
import "./CharacterPage.css"

export default function CharactersPage({page}){
    const {loading, error, data} = useQuery(getCharactersIdsOfPage(page))

    if(error)
        console.log(error)

    return(<>
        <Row>
            {loading && <Spinner animation="border"/>}
            {data && <>
                {data.characters.results.map(result => 
                    <Character id={result.id} />)}
            </>}
        </Row>
    </>)
}

function Character({id}){
    const {loading, error, data} = useQuery(getCharacter(id))
    let character

    if(data)
        character = data.character

    if(error)
        console.log(error)

    return(<>
        {loading && <Spinner animation="border"/>}
        {data && <Card bg="light" className="character">
            <Card.Img src={character.image}/>
            <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>
                    {character.species} {character.gender}
                </Card.Text>
            </Card.Body>
        </Card>}
    </>)
}