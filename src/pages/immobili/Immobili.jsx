import ImmobiliHero from "../../components/immobili/hero/ImmobiliHero";
import ListingGrid from "../../components/immobili/listingsGrid/ListingGrid";


const Immobili = () => {
    return (
        <>
            <div className='mx-14 mb-14'>
                <ImmobiliHero />
                <ListingGrid />
            </div>
        </>
    );
};

export default Immobili;
