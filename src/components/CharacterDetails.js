import { useQuery } from "@apollo/client";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getCharacterWithDetails } from "../queries";

export default function CharacterDetails() {
    const { id } = useParams()
    
    return(<>
        {!id && <Spinner animation="border"/>}
        {id && <Display id={id}/>}
    </>)
}

function Display({id}) {
    console.log(id);
    const {loading, error, data} = useQuery(getCharacterWithDetails(id))
    
    return(<>{id}</>)
}