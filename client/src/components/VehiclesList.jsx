import { useEffect, useState, useContext } from 'react'
import { getAllVehicles } from '../api/vehicles.api'
import { VehicleCard } from './VehicleCard'
import { SearchContext } from '../context/SearchContext'

export function VehiclesList() {

    const { searchResults } = useContext(SearchContext)
    const [vehicles, setVehicles] = useState([])
    const [allVehicles, setAllVehicles] = useState([])
    const [filterprice, setFilterprice] = useState({
        min:'',
        max:'',
    })
    const [error, setError] = useState(false)
    const filtrated = (param) => param.filter(v => v.status == true)
    const filtrated_by_year = (param, filter) => param.filter(v => v.year == parseInt(filter))
    const filtrated_by_price = (param,min,max) => param.filter(v => v.price >= min && v.price <= max)

    const [years, setYears] = useState([]);

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const yearOptions = [];
        for (let year = 2000; year <= currentYear; year++) {
            yearOptions.push(<option key={year} value={year}>{year}</option>);
        }
        setYears(yearOptions);
    }, []);

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
        setFilterprice({
            min:'',
            max:'',
        })
    }

    const handleFilterByYear = (e) => {

        if (e.target.value == 'all') {
            setVehicles(allVehicles)
        } else {
            const filteredByYear = filtrated_by_year(allVehicles, e.target.value)
            setVehicles(filteredByYear)
        }
    }

    const handleFilterByprice = (e) => {
        let {name,value} = e.target
        const sanitizedValue = value.replace(/[^0-9.]/g, "")
        const parts = sanitizedValue.split(".")
        
        if (parts.length > 2) {
            value = parts[0] + "." + parts[1];
          } else {
            value = sanitizedValue;
        }
        
        setFilterprice({
            ...filterprice,
            [name]: value,
        })
    }

    const submitFilterPrice = (e) => {
        e.preventDefault();

        if(filterprice.min.trim() === '' || filterprice.max.trim() === ''){
            setVehicles(allVehicles)
        }else{
            const filterbyprice = filtrated_by_price(allVehicles,filterprice.min,filterprice.max)
            setVehicles(filterbyprice)
        }
    }

    return (
        <div className='content'>
            <div className='fixed-grid has-6-cols'>
                <div className="grid">
                    <div className="cell">
                        <button className='button is-primary is-inverted' onClick={handleShowAll}>Show all vehicles</button>
                    </div>
                    <div className="cell">
                        <div className='select'>
                            <select onChange={handleFilterByYear}>
                                <option value='all'>--Select year--</option>
                                {years}
                            </select>
                        </div>
                    </div>
                    <div className="cell">
                        <form onSubmit={submitFilterPrice}>
                            <div className='field'>
                                <div className="control">
                                    <input className="input" name='min' type="text" placeholder="min" value={filterprice.min} onChange={handleFilterByprice}/>
                                </div>
                            </div>
                            <div className="field">
                                <div className='control'>
                                    <input className="input" name='max' type="text" placeholder="max" value={filterprice.max} onChange={handleFilterByprice} />
                                </div>
                            </div>
                            <div className="field">
                                <p className="control">
                                    <button className="button is-link">search</button>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <button className='button is-primary is-inverted' onClick={handleShowAll}>Show all vehicles</button>
                <div className='select'>
                    <select onChange={handleFilterByYear}>
                        <option value='all'>--Select year--</option>
                        {years}
                    </select>
                </div>
                <form>
                    <div className='field'>
                        <div className="control">
                            <input class="input" type="text" placeholder="min" />
                        </div>
                    </div>
                    <div className="field">
                        <div className='control'>
                            <input class="input" type="text" placeholder="max" />
                        </div>
                    </div>
                    <div className="field">
                        <p className="control">
                            <button className="button is-link">search</button>
                        </p>
                    </div>
                </form> */}
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