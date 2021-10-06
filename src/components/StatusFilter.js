import { Dropdown, Button } from "react-bootstrap"

export default function StatusFilter({statusName, toggleStatus, i, check}){
    return(
        <Dropdown.Item>
            <Button 
                onClick={()=>{toggleStatus(i)}} 
                size="sm"
                variant={check ? "primary" : "secondary"}>
                {check ? statusName + " ✅" : statusName + " ❌"} 
            </Button>
        </Dropdown.Item>
    )
}