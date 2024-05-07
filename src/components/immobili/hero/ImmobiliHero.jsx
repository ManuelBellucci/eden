import Filters from "./filters/Filters";

const ImmobiliHero = () => {
    return (
        <div className="h-screen flex flex-col gap-8 justify-center items-center">
            <h1 className="text-6xl text-center">I nostri immobili</h1>
            <Filters />
        </div>
    );
};

export default ImmobiliHero;
