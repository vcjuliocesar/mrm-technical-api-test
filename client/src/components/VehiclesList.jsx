import { useEffect, useState, useContext } from 'react'
import { getAllVehicles } from '../api/vehicles.api'
import { VehicleCard } from './VehicleCard'
import { SearchContext } from '../context/SearchContext'

export function VehiclesList() {

    const { searchResults } = useContext(SearchContext)
    const [vehicles, setVehicles] = useState([])
    const [allVehicles, setAllVehicles] = useState([])
    const filtrated = (param) => param.filter(v => v.status == true)

    useEffect(() => {
        async function loadVehicles() {
            const response = await getAllVehicles()
            const response_filtared = filtrated(response)
            setVehicles(response_filtared)
            setAllVehicles(response_filtared)
        }

        if (!searchResults || searchResults.length === 0) {
            loadVehicles()
        } else {
            setVehicles(filtrated(searchResults))
        }

    }, [searchResults])

    const handleShowAll = () => {
        setVehicles(allVehicles)
    };

    return (
        <div className='content'>
            <div className='block'>
                <button className='button is-primary is-inverted' onClick={handleShowAll}>Show all vehicles</button>
            </div>
            <div className='block'>
                <div className='columns'>
                    {vehicles.map(vehicle => (
                        <VehicleCard key={vehicle.id} vehicle={vehicle} />
                    ))}
                </div>
            </div>

        </div>
    )
}