import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { createVehicle, deleteVehicle, updateVehicle, getVehicle, errorHandler } from '../api/vehicles.api'

export function VehicleFormPage() {

    const OPTIONS = [
        { value: 'Buick', label: 'Buick' },
        { value: 'Chevrolet', label: 'Chevrolet' },
        { value: 'Cadillac', label: 'Cadillac' },
        { value: 'GMC', label: 'GMC' },
    ]

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
            if (params.id) {
                const response = await getVehicle(params.id)
                setFormData({ ...response })
            }
        }

        loadVehicle()
    }, [])

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
            updateVehicle(params.id, formData).then(() => {
                toast.success('vehicle updated', {
                    position: 'top-right',
                    style: {
                        background: '#101010',
                        color: '#fff'
                    }
                })
                navigate('/vehicles')
                setFormData({
                    brand: '',
                    name: '',
                    year: '',
                    vehicle_model: '',
                    price: '',
                    status: false,
                })
            }).catch(
                error => toast.error(`Error updating vehicle:\n${errorHandler(error)}`, {
                    position: 'top-right',
                    style: {
                        background: '#101010',
                        color: '#fff'
                    }
                })
            )
        } else {
            createVehicle(formData).then(() => {
                toast.success('vehicle created', {
                    position: 'top-right',
                    style: {
                        background: '#101010',
                        color: '#fff'
                    }
                })
                navigate('/vehicles')
                setFormData({
                    brand: '',
                    name: '',
                    year: '',
                    vehicle_model: '',
                    price: '',
                    status: false,
                })
            }).catch(
                error => toast.error(`Error creating vehicle:\n${errorHandler(error)}`, {
                    position: 'top-right',
                    style: {
                        background: '#101010',
                        color: '#fff'
                    }
                })
            )
        }
    }

    return (
        <div className='container'>
            <h2>Create Vehicle</h2>
            {error ? <p>Todos los campos son obligatorios</p> : null}
            <form
                onSubmit={submitVehicle}>
                <div className='field'>
                    <label className='label' htmlFor="Brand">Brand</label>
                    <div className='control'>
                        <div className='select'>
                            <select
                                name="brand"
                                value={brand}
                                onChange={handleInputChange}>
                                <option value="">-- Select brand --</option>
                                {OPTIONS.map(option => (
                                    <option key={option.value} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className='field'>
                    <label className='label' htmlFor="Name">Name</label>
                    <div className='control'>
                        <input className='input' type="text" name="name" placeholder="Name" value={name} onChange={handleInputChange} />
                    </div>
                </div>
                <div className='field'>
                    <label className='label' htmlFor="Year">Year</label>
                    <div className='control'>
                        <input className='input' type="number" name="year" placeholder="Year" value={year} onChange={handleInputChange}/>
                    </div>
                </div>
                <div className='field'>
                    <label className='label' htmlFor="Model">Model</label>
                    <div className='control'>
                        <input className='input' type="text" name="vehicle_model" placeholder="Model" value={vehicle_model} onChange={handleInputChange} />
                    </div>
                </div>
                <div className='field'>
                    <label className='label' htmlFor="Price">Price</label>
                    <div className='control'>
                        <input className='input' type="text" name="price" placeholder="Price" value={price} onChange={handleInputChange} />
                    </div>
                </div>
                <div className='field'>
                    <div className='control'>
                        <label className="checkbox">
                            <input type="checkbox" name="status" checked={formData.status} onChange={handleInputChange} />
                            Active
                        </label>
                    </div>
                </div>
                <div className='field'>
                    <p className='control'>
                        <button className='button is-link'>
                            Save
                        </button>
                    </p>
                </div>
            </form>

            {params.id && <button className='button is-danger is-pulled-right' onClick={() => {
                const accepted = window.confirm("are you sure?")
                if (accepted) {
                    deleteVehicle(params.id).then(() => {
                        toast.success('vehicle deleted', {
                            position: 'top-right',
                            style: {
                                background: '#101010',
                                color: '#fff'
                            }
                        })
                        navigate('/vehicles')
                    }).catch(
                        error => toast.error(`Error deleting vehicle:\n${errorHandler(error)}`, {
                            position: 'top-right',
                            style: {
                                background: '#101010',
                                color: '#fff'
                            }
                        })
                    )

                }

            }}>Delete</button>}
        </div>
    )
}