const HowItWorks = () => {
    return (
        <div className="m-14 mb-48 pt-24">
            <h1 className="text-center mb-4 text-xl font-extrabold leading-none tracking-tight text-primary-900 md:text-2xl lg:text-3xl">Come funziona? <span className="underline underline-offset-4 decoration-8 decoration-primary-400">
                acquisto e vendita
            </span> di immobili
            </h1>
            <p className="text-center text-md font-normal mx-auto max-w-xl text-primary-500 lg:text-lg mb-14">
                Scopri come funziona il nostro servizio di acquisto e vendita di immobili. Siamo specializzati in vendite e affitti di immobili a Bologna e provincia.
            </p>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
                <div className="grid grid-rows-3">
                    <div className="flex flex-col justify-center border-l-4 p-8 hover:border-l-black transition-all ease-in hover:bg-primary-200/30 rounded-e-lg">
                        <div className="text-center">
                            <svg className="h-8 w-8 bg-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            </svg>
                        </div>
                        <h2 className="text-lg font-semibold mt-2">Facci sapere le tue esigenze</h2>
                        <p className="text-sm text-gray-500 mt-1">Contattaci per farci sapere cosa stai cercando e spiegarci le tue esigenze.</p>
                    </div>
                    <div className="flex flex-col justify-center border-l-4 p-8 hover:border-l-black transition-all ease-in hover:bg-primary-200/30 rounded-e-lg">
                        <div className="text-center">
                            <svg className="h-8 w-8  bg-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            </svg>
                        </div>
                        <h2 className="text-lg font-semibold mt-2">Capisci il tuo budget</h2>
                        <p className="text-sm text-gray-500 mt-1">
                            Omaggiamo per i nostri acquirenti una consulenza di mutuo o di vendita in base alle necessità in modo di darvi a conoscere il budget preciso ed effettivo che avete per l'acquisto.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center border-l-4 p-8 hover:border-l-black transition-all ease-in hover:bg-primary-200/30 rounded-e-lg">
                        <div className="text-center">
                            <svg className="h-8 w-8  bg-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            </svg>
                        </div>
                        <h2 className="text-lg font-semibold mt-2">Visioniamo l'immobile</h2>
                        <p className="text-sm text-gray-500 mt-1">
                            Dopo aver capito le tue esigenze e il tuo budget, ti mostriamo gli immobili che fanno al caso tuo. Se non trovi quello che cerchi, non preoccuparti, continueremo a cercare per te fino a quando non troveremo la casa dei tuoi sogni.
                        </p>
                    </div>


                </div>

                <div className="md:flex md:items-center">
                    <img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80" alt="Image" className="w-full h-full rounded-lg object-cover min-h-80" />
                </div>
            </div>

        </div>
    )
}

export default HowItWorks