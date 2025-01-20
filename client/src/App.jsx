import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { VehiclesPage } from './pages/VehiclesPage'
import { VehicleFormPage } from './pages/VehicleFormPage'
import { Navigation } from './components/Navigation'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/vehicles" />} />
        <Route path='/vehicles' element={<VehiclesPage />} />
        <Route path='/vehicles-create' element={<VehicleFormPage />} />
        <Route path='/vehicles/:id' element={<VehicleFormPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App