import Filters from "./filters/Filters";

const ImmobiliHero = () => {
    return (
        <div className="h-full flex flex-col mb-20 gap-8 justify-center items-center">
            <h1 className="text-6xl mt-40 text-center">I nostri immobili</h1>
            <Filters />
        </div>
    );
};

export default ImmobiliHero;
