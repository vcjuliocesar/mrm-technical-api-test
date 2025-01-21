import { SearchForm } from '../components/SearchForm'
import { VehiclesList } from '../components/VehiclesList'


export function VehiclesPage() {
    return (
        <>
            <div className='box'>
                <SearchForm />
            </div>
            <div className='box'>
                <VehiclesList />
            </div>
        </>
    )
}