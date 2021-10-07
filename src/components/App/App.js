import { Container, Spinner } from "react-bootstrap";
import { useQuery } from "@apollo/client"
import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getNumberbOfPages } from "../../queries";
import "./App.css"
import CharactersPage from "../CharacterPage/CharactersPage";
import CharactersPagination from "../CharactersPagination/CharactersPagination";
import TopBar from "../TopBar/TopBar";

export default function App(){
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState(0)
    const [filterEnabled, setFilterEnabled] = useState(false)

    return (<>
        <Switch>
            <Route path="/characters" exact>
            <TopBar variant="search" search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} filterEnabled={filterEnabled} />
                <AppBody search={search} filters={filterEnabled ? filter : undefined}/>
            </Route>
            <Route path="/characters/:id" exact>
                <TopBar variant="return" search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} filterEnabled={filterEnabled} />
            </Route>
            <Route path="/">
                <Redirect to="/characters"/>
            </Route>
        </Switch>
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