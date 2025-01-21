import { useState, useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

export function SearchForm() {

    const [formData, setFormData] = useState({
        search: ''
    })

    const [error, setError] = useState(false)

    const { setQuery, setConsult } = useContext(SearchContext)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const submitSeach = (e) => {
        e.preventDefault();

        if (formData.search.trim() === '') {
            setError(true)
            return
        }

        setError(false)

        setQuery(formData)

        setConsult(true)

        setFormData({
            search: '',
        })
    }

    return (
        <div className='content'>
            <form onSubmit={submitSeach}>
                <div className='field has-addons'>
                    <div className='control is-expanded'>
                        <input className='input' type="text" name="search" placeholder="search..." value={formData.search} onChange={handleInputChange} />
                    </div>
                    <div className='control'>
                        <button className='button is-primary'> search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}