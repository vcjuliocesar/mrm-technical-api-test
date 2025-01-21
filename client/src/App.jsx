import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { VehiclesPage } from './pages/VehiclesPage'
import { VehicleFormPage } from './pages/VehicleFormPage'
import { Navigation } from './components/Navigation'
import { SearchProvider } from './context/SearchContext'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <SearchProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/vehicles" />} />
          <Route path='/vehicles' element={<VehiclesPage />} />
          <Route path='/vehicles-create' element={<VehicleFormPage />} />
          <Route path='/vehicles/:id' element={<VehicleFormPage />} />
        </Routes>
        <Toaster/>
      </BrowserRouter>
    </SearchProvider>

  )
}

export default App