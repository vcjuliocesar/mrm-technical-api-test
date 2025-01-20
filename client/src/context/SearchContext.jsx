import { createContext, useState, useEffect } from 'react'
import { search } from '../api/vehicles.api'

export const SearchContext = createContext()

export function SearchProvider(props) {
    const [searchResults, setsearchResults] = useState([])
    const [consult, setConsult] = useState(false)
    const [query, setQuery] = useState({
        search: ''
    })

    useEffect(() => {

        if (consult) {
            async function searchVehicles() {
                const response = await search(query.search)
                setsearchResults(response)
            }
            searchVehicles()
        }
    }, [query, consult])

    return (
        <SearchContext.Provider
            value={{
                searchResults,
                setQuery,
                setConsult
            }}>
            {props.children}
        </SearchContext.Provider>
    )
}