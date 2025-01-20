const url = 'http://localhost:8000/api/v1/vehicles/'

export const getAllVehicles = async () => {
    const api = await fetch(url)
    const response = await api.json()

    return response
}

export const createVehicle = async (vehicle) => {

    if (!vehicle || typeof vehicle !== 'object') {
        throw new Error('Invalid vehicle data')
    }

    try {
        const api = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(vehicle)
        })

        if(!api.ok){
            throw new Error(`HTTP error! Status:${api.status}`)
        }

        const response = await api.json()
        return response
    } catch (error) {
        console.log('Error creating vehicle:', error)
        throw error
    }
}