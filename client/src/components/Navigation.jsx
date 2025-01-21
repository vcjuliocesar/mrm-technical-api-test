import { Link } from "react-router-dom"

export function Navigation() {
    return (
        <div className="content">
            <div className="block">
                <Link to="/vehicles">
                    <h1 className="">Vehicles Form</h1>
                </Link>
            </div>

            <div className="block">
                <Link to="/vehicles-create" className="button is-primary">create vehicle</Link>
            </div>
        </div>
    )
}