import { Container, Navbar, Stack } from "react-bootstrap";
import ricksHead from "../../imgs/ricks-head.png"
import "./App.css"

export default function App(){
    return <>
        <Navbar bg="primary">
            <Stack direction="horizontal">
                <Navbar.Brand>
                    <img src={ricksHead} width="30" height="30" className="ricksHead"/>
                </Navbar.Brand>
                <div className="title">Rick's Friends</div>
                
            </Stack>
        </Navbar>
    </>
}