const FooterLinks = () => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-14">
            <div className='lg:mr-8 lg:pl-28 '>
                <h2 className="mb-6 text-md font-semibold text-primary-300 uppercase">Eden House</h2>
                <ul className="text-gray-300 font-medium">
                    <li className="mb-4">
                        <a href="#" className=" hover:underline">Chi siamo</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Lavora con noi</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Le Agenzie</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Contatti</a>
                    </li>
                </ul>
            </div>
            <div className='lg:mr-8 lg:pl-28 '>
                <h2 className="mb-6 text-md font-semibold text-primary-300 uppercase">Magazine</h2>
                <ul className="text-gray-300 font-medium">
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Blog</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Notizie</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Agevolazioni e bonus</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Contenuti educativi scaricabili</a>
                    </li>
                </ul>
            </div>
            <div className='lg:mr-8 lg:pl-28 '>
                <h2 className="mb-6 text-nowrap text-md font-semibold text-primary-300 uppercase">Guide TOP</h2>
                <ul className="text-gray-300 font-medium">
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Come fare una permuta immobiliare?</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Mutui 2024: tutto ciò che devi sapere</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Come individuare un immobile con un buon rapporto qualità-prezzo?</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Come vendere casa velocemente</a>
                    </li>
                </ul>
            </div>
            <div className='lg:mr-8 lg:pl-28 '>
                <h2 className="mb-6 text-md font-semibold text-primary-300 uppercase">Privacy</h2>
                <ul className="text-gray-300 font-medium">
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Cookie Policy</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Termini e condizioni</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Informativa sulla privacy</a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default FooterLinks