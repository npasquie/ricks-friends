import { Button, Container, FormControl, InputGroup, Navbar, Stack, Col } from "react-bootstrap";
import ricksHead from "../../imgs/ricks-head.png"
import searchLogo from "../../imgs/search.png"
import "./App.css"

export default function App(){
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
    </>
}