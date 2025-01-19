export const getAllVehicles = async () => {
    const api = await fetch('http://localhost:8000/api/v1/vehicles/')
    const response = await api.json()

    return response
}