import { Dropdown, Button } from "react-bootstrap"

export default function StatusFilter({statusName, setFilter, i, check}){
    return(
        <Dropdown.Item>
            <Button 
                onClick={()=>{setFilter(i)}} 
                size="sm"
                variant={check ? "primary" : "secondary"}>
                {check ? statusName + " ✅" : statusName + " ❌"} 
            </Button>
        </Dropdown.Item>
    )
}