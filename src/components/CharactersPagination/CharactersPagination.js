import { Pagination } from "react-bootstrap"
import "./CharactersPagination.css"

export default function CharactersPagination({page, setPage, numberOfPages}) {
    return(
        <Pagination className="pagination">
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
    )
}