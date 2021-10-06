import { 
    Button,
    Container,
    FormControl,
    InputGroup,
    Navbar,
    Stack,
    Col,
    Pagination,
    Spinner
    } from "react-bootstrap";
import { useQuery } from "@apollo/client"
import { useState } from "react";
import { getNumberbOfPages } from "../../queries";
import ricksHead from "../../imgs/ricks-head.png"
import searchLogo from "../../imgs/search.png"
import "./App.css"
import CharactersPage from "../CharacterPage/CharactersPage";

export default function App(){
    const {loading, error, data} = useQuery(getNumberbOfPages())
    const [page, setPage] = useState(1)
    let numberOfPages

    if (data)
        numberOfPages = data.characters.info.pages

    return <>
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
                        <FormControl placeholder="search"/>
                        <Button variant="secondary">
                            <img src={searchLogo} width="20" height="20"/>
                        </Button>
                    </InputGroup>
                </Col>
            </Container>
        </Navbar>
        <Container>
            {loading && <Spinner animation="border"/>}
            {data && <>
                <CharactersPage page={page}/>
                <Pagination>
                    {page !== 1 && <>
                        <Pagination.First onClick={()=>{
                            setPage(1)
                        }}/>
                        <Pagination.Prev onClick={()=>{
                            setPage(page - 1)
                        }}/>
                    </>}
                    <Pagination.Item>{page}</Pagination.Item>
                    {page !== numberOfPages && <>
                        <Pagination.Next onClick={()=>{
                            setPage(page + 1)
                        }}/>
                        <Pagination.Last onClick={()=>{
                            setPage(numberOfPages)
                        }}/>
                    </>}
                </Pagination>
            </>}
        </Container>
    </>
}