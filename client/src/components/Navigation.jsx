import { Link } from "react-router-dom"

export function Navigation() {
    return (
        <div>
            <Link to="/vehicles">
                <h1>Vehicles Form</h1>
            </Link>
            <Link to="/vehicles-create">create vehicle</Link>
        </div>
    )
}