import { useNavigate } from 'react-router-dom'

export function VehicleCard({ vehicle }) {

    const navigate = useNavigate()
    return (
        <div className='column'>
            <div
                className='card'
                onClick={() => {
                    navigate(`/vehicles/${vehicle.id}`)
                }}
            >
                <header className='card-header'>
                    <p className='card-header-title'>{vehicle.brand}</p>
                </header>
                <div className='card-content'>
                    <div className='content'>
                        <p>Name: {vehicle.name}</p>
                        <p>Year: {vehicle.year}</p>
                        <p>Model: {vehicle.vehicle_model}</p>
                        <p>Price: ${vehicle.price}</p>
                        <p>Status: {vehicle.status}</p>
                    </div>
                    {/* <h1 className='title is-4'>{vehicle.brand}</h1> */}
                </div>

            </div>
        </div>

    )
}