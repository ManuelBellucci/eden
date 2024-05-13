import { Link } from "react-router-dom"

const FooterLinks = () => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-14">
            <div className='lg:mr-8 lg:pl-28 '>
                <h2 className="mb-6 text-md font-semibold text-primary-300 uppercase">Eden House</h2>
                <ul className="text-gray-300 font-medium">
                    <li className="mb-4">
                        <Link to="/immobili" className=" hover:underline">Chi siamo</Link>
                    </li>
                    <li className="mb-4">
                        <Link to="#" className="hover:underline">Lavora con noi</Link>
                    </li>
                    <li className="mb-4">
                        <Link to="#" className="hover:underline">Le Agenzie</Link>
                    </li>
                    <li className="mb-4">
                        <Link to="#" className="hover:underline">Contatti</Link>
                    </li>
                </ul>
            </div>
            <div className='lg:mr-8 lg:pl-28 '>
                <h2 className="mb-6 text-md font-semibold text-primary-300 uppercase">Magazine</h2>
                <ul className="text-gray-300 font-medium">
                    <li className="mb-4">
                        <Link to="#" className="hover:underline">Blog</Link>
                    </li>
                    <li className="mb-4">
                        <Link to="#" className="hover:underline">Notizie</Link>
                    </li>
                    <li className="mb-4">
                        <Link to="#" className="hover:underline">Agevolazioni e bonus</Link>
                    </li>
                    <li className="mb-4">
                        <Link to="#" className="hover:underline">Contenuti educativi scaricabili</Link>
                    </li>
                </ul>
            </div>
            <div className='lg:mr-8 lg:pl-28 '>
                <h2 className="mb-6 text-nowrap text-md font-semibold text-primary-300 uppercase">Guide TOP</h2>
                <ul className="text-gray-300 font-medium">
                    <li className="mb-4">
                        <Link to="#" className="hover:underline">Come fare una permuta immobiliare?</Link>
                    </li>
                    <li className="mb-4">
                        <Link to="#" className="hover:underline">Mutui 2024: tutto ciò che devi sapere</Link>
                    </li>
                    <li className="mb-4">
                        <Link to="#" className="hover:underline">Come individuare un immobile con un buon rapporto qualità-prezzo?</Link>
                    </li>
                    <li className="mb-4">
                        <Link to="#" className="hover:underline">Come vendere casa velocemente</Link>
                    </li>
                </ul>
            </div>
            <div className='lg:mr-8 lg:pl-28 '>
                <h2 className="mb-6 text-md font-semibold text-primary-300 uppercase">Privacy</h2>
                <ul className="text-gray-300 font-medium">
                    <li className="mb-4">
                        <Link to="#" className="hover:underline">Privacy Policy</Link>
                    </li>
                    <li className="mb-4">
                        <Link to="#" className="hover:underline">Cookie Policy</Link>
                    </li>
                    <li className="mb-4">
                        <Link to="#" className="hover:underline">Termini e condizioni</Link>
                    </li>
                    <li className="mb-4">
                        <Link to="#" className="hover:underline">Informativa sulla privacy</Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default FooterLinks