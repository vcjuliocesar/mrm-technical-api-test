import { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createVehicle, deleteVehicle, updateVehicle,getVehicle } from '../api/vehicles.api'

export function VehicleFormPage() {

    const [formData, setFormData] = useState({
        brand: '',
        name: '',
        year: '',
        vehicle_model: '',
        price: '',
        status: false,
    })

    const navigate = useNavigate()

    const params = useParams()

    const [error, setError] = useState(false)

    useEffect(() => {
        async function loadVehicle() {
            if(params.id){
             const response = await getVehicle(params.id)
             setFormData({...response})
            }
        }

        loadVehicle()
    },[])

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        })
    }

    const { brand, name, year, vehicle_model, price } = formData

    const submitVehicle = (e) => {
        e.preventDefault();

        if (brand.trim() === '' ||
            name.trim() === '' ||
            year === '' ||
            vehicle_model.trim() === '' ||
            price.trim() === '') {
            setError(true)
            return
        }

        setError(false)
        if (params.id) {
            updateVehicle(params.id,formData)
        } else {
            createVehicle(formData)
        }

        navigate('/vehicles')
        setFormData({
            brand: '',
            name: '',
            year: '',
            vehicle_model: '',
            price: '',
            status: false,
        })
    }

    return (
        <div>
            <h2>Crear Vehiculo</h2>
            {error ? <p>Todos los campos son obligatorios</p> : null}
            <form
                onSubmit={submitVehicle}>
                <input type="text" name="brand" placeholder="Brand" value={brand} onChange={handleInputChange} />
                <input type="text" name="name" placeholder="Name" value={name} onChange={handleInputChange} />
                <input type="number" name="year" placeholder="Year" value={year} onChange={handleInputChange} />
                <input type="text" name="vehicle_model" placeholder="Model" value={vehicle_model} onChange={handleInputChange} />
                <input type="text" name="price" placeholder="Price" value={price} onChange={handleInputChange} />
                <input type="checkbox" name="status" checked={formData.status} onChange={handleInputChange} />
                <button>Save</button>
            </form>
            {params.id && <button onClick={() => {
                const accepted = window.confirm("are you sure?")
                if (accepted) {
                    deleteVehicle(params.id)
                    navigate('/vehicles')
                }

            }}>Delete</button>}
        </div>
    )
}