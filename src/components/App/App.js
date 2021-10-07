import { 
    Button,
    Container,
    FormControl,
    InputGroup,
    Navbar,
    Stack,
    Col,
    Spinner,
    Dropdown,
    Form
} from "react-bootstrap";
import { useQuery } from "@apollo/client"
import { useState } from "react";
import { getNumberbOfPages } from "../../queries";
import ricksHead from "../../imgs/ricks-head.png"
import searchLogo from "../../imgs/search.png"
import "./App.css"
import CharactersPage from "../CharacterPage/CharactersPage";
import CharactersPagination from "../CharactersPagination/CharactersPagination";
import StatusFilter from "../StatusFilter";

export default function App(){
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState(0)
    const [filterEnabled, setFilterEnabled] = useState(false)

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
                    
                    <Form.Check 
                        label="enable filter"
                        onChange={()=>{setFilterEnabled(!filterEnabled)}}/>
                        </Col>
                        <Col>
                        <Stack direction="horizontal" gap={3}>
                        <Dropdown>
                            <Dropdown.Toggle 
                                variant="secondary" 
                                size="sm"
                                disabled={!filterEnabled}>
                                Life Status
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <StatusFilter
                                    statusName="Alive"
                                    setFilter={setFilter}
                                    check={filter === 0}
                                    i={0}/>
                                <StatusFilter
                                    statusName="Dead"
                                    setFilter={setFilter}
                                    check={filter === 1}
                                    i={1}/>
                                <StatusFilter
                                    statusName="Shrödinger"
                                    setFilter={setFilter}
                                    check={filter === 2}
                                    i={2}/>
                            </Dropdown.Menu>
                        </Dropdown>     
                        <InputGroup size="sm">
                            <FormControl placeholder="search" value={search}
                                onChange={e => setSearch(e.target.value)}/>
                            <Button variant="secondary" disabled>
                                <img src={searchLogo} width="20" height="20"/>
                            </Button>
                        </InputGroup>
                    </Stack>
                </Col>
            </Container>
        </Navbar>
        <AppBody search={search} filters={filterEnabled ? filter : undefined}/>
    </>)
}

function AppBody({search, filters}){
    const {loading, error, data} = useQuery(getNumberbOfPages(search, filters))
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
                <CharactersPage page={page} search={search} filters={filters}/>
                <CharactersPagination 
                    page={page} 
                    setPage={setPage} 
                    numberOfPages={numberOfPages}/>
            </>}
        </Container>
    </>)
}