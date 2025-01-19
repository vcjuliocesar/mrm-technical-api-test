import { useEffect, useState } from 'react'
import { getAllVehicles } from '../api/vehicles.api'
import {VehicleCard} from './VehicleCard'
export function VehiclesList() {

    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        async function loadVehicles() {
            const response = await getAllVehicles()
            const filtrated = response.filter(v => v.status == true)
            setVehicles(filtrated)
        }
        loadVehicles()
    }, [])

    return (
        <div>
            {vehicles.map(vehicle => (
                <VehicleCard key={vehicle.id} vehicle={vehicle}/>
            ))}
        </div>
    )
}