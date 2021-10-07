import { useQuery } from "@apollo/client";
import { Container, Spinner, Figure, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getCharacterWithDetails } from "../../queries";
import "./CharacterDetails.css"

export default function CharacterDetails() {
    const { id } = useParams()
    
    return(
        <Container>
            {!id && <Spinner animation="border"/>}
            {id && <Display id={id}/>}
        </Container>
    )
}

function Display({id}) {
    const {loading, error, data} = useQuery(getCharacterWithDetails(id))

    let character

    if(data)
        character = data.character
    
    return(<>
        {loading && <Spinner animation="border"/>}
        {data && <>
            <Row>
                <Col></Col>
                <Col xs={6}>
                    <Row>
                        <Figure.Image
                            width={400}
                            height={400}
                            src={character.image}
                            className="figure"/>
                    </Row>
                    <h1>{character.name}</h1>
                    <p>{character.species} {character.gender !== "unknown" ? character.gender : "of unknown gender"}</p>
                    <p>Life Status : {character.status}</p>
                    <p>From {character.origin.name}</p>
                    {character.origin.location && 
                        <p>Last seen at {character.origin.location}</p>
                    }
                    <p>Featured in :</p>
                    {character.episode.map((episode,i) => <ListElement key={i} name={episode.name}/>)}
                </Col>
                <Col></Col>
            </Row>
        </>}
    </>)
}

function ListElement({name}) {
    return(<p>
            &nbsp;&nbsp;&nbsp;
            -&gt; {name}
        </p>)
}