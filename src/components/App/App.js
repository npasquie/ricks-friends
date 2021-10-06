import { 
    Button,
    Container,
    FormControl,
    InputGroup,
    Navbar,
    Stack,
    Col,
    Spinner
    } from "react-bootstrap";
import { useQuery } from "@apollo/client"
import { useState } from "react";
import { getNumberbOfPages } from "../../queries";
import ricksHead from "../../imgs/ricks-head.png"
import searchLogo from "../../imgs/search.png"
import "./App.css"
import CharactersPage from "../CharacterPage/CharactersPage";
import CharactersPagination from "../CharactersPagination/CharactersPagination";

export default function App(){
    const [search, setSearch] = useState('')

    return (<>
        <Navbar bg="primary">
            <Container>
                <Col>
                    <Stack direction="horizontal">
                        <Navbar.Brand>
                            <img src={ricksHead} width="30" height="30" className="ricksHead"/>
                        </Navbar.Brand>
                        <div className="title">Rick's Friends</div>
                    </Stack>
                </Col>
                <Col md="auto">        
                    <InputGroup size="sm">
                        <FormControl placeholder="search" value={search}
                            onChange={e => setSearch(e.target.value)}/>
                        <Button variant="secondary" disabled>
                            <img src={searchLogo} width="20" height="20"/>
                        </Button>
                    </InputGroup>
                </Col>
            </Container>
        </Navbar>
        <AppBody search={search}/>
    </>)
}

function AppBody({search}){
    const {loading, error, data} = useQuery(getNumberbOfPages(search))
    const [page, setPage] = useState(1)
    let numberOfPages

    if (data)
        numberOfPages = data.characters.info.pages

    return (<>
        <Container>
            {error && <div className="noResult">No result for this search</div>}
            {loading && <Spinner animation="border"/>}
            {data && <>
                <CharactersPagination 
                    page={page} 
                    setPage={setPage} 
                    numberOfPages={numberOfPages}/>
                <CharactersPage page={page} search={search}/>
                <CharactersPagination 
                    page={page} 
                    setPage={setPage} 
                    numberOfPages={numberOfPages}/>
            </>}
        </Container>
    </>)
}