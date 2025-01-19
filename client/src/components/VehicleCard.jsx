export function VehicleCard({vehicle}) {
    return (
        <div>
            <h1>{vehicle.brand}</h1>
            <p>{vehicle.name}</p>
            <p>{vehicle.year}</p>
            <p>{vehicle.vehicle_model}</p>
            <p>{vehicle.price}</p>
            <p>{vehicle.status}</p>
            <hr/>
        </div>
    )
}