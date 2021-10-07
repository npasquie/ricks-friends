import { 
    Button,
    Container,
    FormControl,
    InputGroup,
    Navbar,
    Stack,
    Col,
    Dropdown,
    Form
} from "react-bootstrap";
import { Link } from "react-router-dom";
import ricksHead from "../../imgs/ricks-head.png"
import searchLogo from "../../imgs/search.png"
import StatusFilter from "../StatusFilter";
import "./TopBar.css"

export default function TopBar({variant, search, setSearch, filter, setFilter, filterEnabled, setFilterEnabled}){
    return(
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
                {variant === "search" && <>
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
                </>}
                {variant === "return" && <>
                    <Col md="auto">
                        <Link to="/characters">
                            <Button size="sm" variant="secondary">Return to list</Button>
                        </Link>
                    </Col>
                </>}
            </Container>
        </Navbar>)
}