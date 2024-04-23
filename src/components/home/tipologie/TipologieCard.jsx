const TipologieCard = ({title, subtitle}) => {
    return (
        <div class="relative flex flex-col justify-center overflow-hidden bg-gray-50">
            <div class="absolute inset-0 bg-center dark:bg-black"></div>
            <div class="group relative m-0 flex h-72 w-86 md:w-60 lg:w-52 xl:w-64 xl:h-80 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                    <img src="https://images.unsplash.com/photo-1506187334569-7596f62cf93f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3149&q=80" class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
                </div>
                <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                    <h1 class="font-serif text-2xl font-bold text-white shadow-xl">{title}</h1>
                    <h1 class="text-sm font-light text-gray-200 shadow-xl">{subtitle}</h1>
                </div>
            </div>
        </div>
    )
}

export default TipologieCard