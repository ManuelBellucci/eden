// src/pages/immobili/Immobili.jsx

import Filters from "../../components/immobili/filters/Filters"
import ListingGrid from "../../components/immobili/listingsGrid/ListingGrid"


const Immobili = () => {
    return (
        <div className='mx-14 mb-14'>
            <Filters />
            <ListingGrid />
        </div>

    )
}

export default Immobili 
