const FooterLinks = () => {
    return (
        <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-14">
            <div className='lg:mr-8 lg:pl-28 '>
                <h2 class="mb-6 text-md font-semibold text-primary-300 uppercase">Eden House</h2>
                <ul class="text-gray-300 font-medium">
                    <li class="mb-4">
                        <a href="#" class=" hover:underline">Chi siamo</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Lavora con noi</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Le Agenzie</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Contatti</a>
                    </li>
                </ul>
            </div>
            <div className='lg:mr-8 lg:pl-28 '>
                <h2 class="mb-6 text-md font-semibold text-primary-300 uppercase">Magazine</h2>
                <ul class="text-gray-300 font-medium">
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Blog</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Notizie</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Agevolazioni e bonus</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Contenuti educativi scaricabili</a>
                    </li>
                </ul>
            </div>
            <div className='lg:mr-8 lg:pl-28 '>
                <h2 class="mb-6 text-nowrap text-md font-semibold text-primary-300 uppercase">Guide TOP</h2>
                <ul class="text-gray-300 font-medium">
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Come fare una permuta immobiliare?</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Mutui 2024: tutto ciò che devi sapere</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Come individuare un immobile con un buon rapporto qualità-prezzo?</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Come vendere casa velocemente</a>
                    </li>
                </ul>
            </div>
            <div className='lg:mr-8 lg:pl-28 '>
                <h2 class="mb-6 text-md font-semibold text-primary-300 uppercase">Privacy</h2>
                <ul class="text-gray-300 font-medium">
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Privacy Policy</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Cookie Policy</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Termini e condizioni</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Informativa sulla privacy</a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default FooterLinks