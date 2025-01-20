const url = 'http://localhost:8000/api/v1/vehicles/'

export const getAllVehicles = async () => {
    const api = await fetch(url)
    const response = await api.json()

    return response
}

export const getVehicle = async (id) => {

    if (!id) {
        throw new Error('Invalid id')
    }

    try {
        const api = await fetch(`${url + id}/`)

        if (!api.ok) {
            throw new Error(`HTTP error! Status:${api.status}`)
        }

        const response = await api.json()

        return response
    } catch (error) {
        console.log('Error creating vehicle:', error)
        throw error
    }

}

export const search = async (context) => {

    if (!context) {
        throw new Error('Invalid search parameter')
    }

    try {
        const api = await fetch(`${url}?search=${context}`)

        if (!api.ok) {
            throw new Error(`HTTP error! Status:${api.status}`)
        }

        const response = await api.json()

        return response
    } catch (error) {
        console.log('Error creating vehicle:', error)
        throw error
    }

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

        if (!api.ok) {
            throw new Error(`HTTP error! Status:${api.status}`)
        }

        const response = await api.json()
        return response
    } catch (error) {
        console.log('Error creating vehicle:', error)
        throw error
    }
}

export const deleteVehicle = async (id) => {
    if (!id) {
        throw new Error('Invalid id')
    }

    try {
        const api = await fetch(`${url + id}/`, {
            method: 'DELETE'
        })

        if (!api.ok) {
            throw Error(`HTTP error! Status:${api.status}`)
        }

    } catch (error) {
        console.log(error)
        throw error
    }
}

export const updateVehicle = async (id, vehicle) => {
    if (!id || !vehicle || typeof vehicle !== 'object') {
        throw new Error('Invalid vehicle data')
    }

    try {
        const api = await fetch(`${url + id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(vehicle)
        })

        if (!api.ok) {
            throw Error(`HTTP error! Status:${api.status}`)
        }

        const response = await api.json()

        return response
    } catch (error) {
        console.log(error)
        throw error;
    }
}