import TipologieCard from "./TipologieCard"

const Tipologie = () => {
    return (
        <div className="h-full bg-white m-14">

            <h1 class="text-center mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl">Dai un'occhiata alle <span class="underline underline-offset-4 decoration-8 decoration-blue-400">nostre proprietà in vendita</span></h1>
            <p class="text-center text-md font-normal mx-auto max-w-xl text-gray-500 lg:text-lg mb-14">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>

            <div className="flex flex-col items-center lg:flex-row justify-center gap-10 mt-8">

                <div className="flex flex-col md:flex-row gap-10">
                    <TipologieCard title='Appartamenti' subtitle='18 proprietà' />
                    <TipologieCard title='Ville e villini' subtitle='5 proprietà' />
                </div>
                <div className="flex flex-col md:flex-row gap-10">
                    <TipologieCard title='Uffici' subtitle='11 proprietà' />
                    <TipologieCard title='Magazzini e box' subtitle='8 proprietà' />
                </div> 

            </div>
        </div>
    )
}

export default Tipologie