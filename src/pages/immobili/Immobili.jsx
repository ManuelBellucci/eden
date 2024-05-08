import ImmobiliHero from "../../components/immobili/hero/ImmobiliHero";
import ListingGrid from "../../components/immobili/listingsGrid/ListingGrid";
import ImmobiliPagination from "../../components/immobili/pagination/ImmobiliPagination";


const Immobili = () => {
    return (
        <>
            <div className='mx-14 mb-14'>
            <ImmobiliHero />
                <ListingGrid />
                <ImmobiliPagination />
            </div>
        </>
    );
};

export default Immobili;
