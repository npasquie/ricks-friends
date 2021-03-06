import { useQuery } from "@apollo/client"
import { Spinner, Card, Row } from "react-bootstrap"
import { getCharacter, getCharactersIdsOfPage } from "../../queries"
import { Link } from "react-router-dom"
import "./CharacterPage.css"

export default function CharactersPage({page, search, filters}){
    const {loading, error, data} = useQuery(getCharactersIdsOfPage(page, search, filters))

    if(error)
        console.log(error)

    return(<>
        <Row>
            {loading && <Spinner animation="border"/>}
            {data && <>
                {data.characters.results.map(result => 
                    <Character id={result.id} key={result.id}/>)}
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
            <Card bg="light" className="character">
            {loading && <Spinner animation="border"/>}
                {data && <>
                    <Card.Img src={character.image}/>
                    <Card.Body>
                        <Link to={`/characters/${id}`}>
                            <Card.Title>{character.name}</Card.Title>
                        </Link>
                        <Card.Text>
                            {character.species}
                            &nbsp;
                            {character.gender === "unknown" ? <><br/>unknown gender</> : character.gender}
                        </Card.Text>
                    </Card.Body>
                </>}
            </Card>
        </>)
}