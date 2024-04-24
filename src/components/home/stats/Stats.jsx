const Stats = () => {
    return (

        <div class="bg-white m-14 pt-24">
            <h1 class="text-center mb-4 text-xl font-extrabold leading-none tracking-tight text-primary-900 md:text-2xl lg:text-3xl">Lorem ipsum <span class="underline underline-offset-4 decoration-8 decoration-primary-400">dolor asit met</span> consectetur adipisicing elit
            </h1>
            <p class="text-center text-md font-normal mx-auto max-w-xl text-primary-500 lg:text-lg mb-14">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    <div class="mx-auto flex max-w-xs flex-col gap-y-2 bg-primary-100/50 py-16 px-12 justify-center rounded-xl">
                        <img className='h-10 w-10 self-center mb-4' src="./home.png" alt="home icon" />
                        <dd class="text-3xl font-bold tracking-tight text-primary-400 sm:text-5xl">150</dd>
                        <dt class="text-base leading-7 text-primary-600">gli appartamenti affidati a noi dalla costituzione della nostra società</dt>
                    </div>
                    <div class="mx-auto flex max-w-xs flex-col gap-y-2 bg-primary-100/50 py-16 px-12 justify-center rounded-xl">
                        <img className='h-10 w-10 self-center mb-4' src="./deal.png" alt="deal icon" />
                        <dd class="text-3xl font-bold tracking-tight text-primary-400 sm:text-5xl">138</dd>
                        <dt class="text-base leading-7 text-primary-600">gli appartamenti venduti e rogitati</dt>
                    </div>
                    <div class="mx-auto flex max-w-xs flex-col gap-y-2 bg-primary-100/50 py-16 px-12 justify-center rounded-xl">
                        <img className='h-10 w-10 self-center mb-4' src="./feedback.png" alt="feedback icon" />
                        <dd class="text-3xl font-bold tracking-tight text-primary-400 sm:text-5xl">140</dd>
                        <dt class="text-base leading-7 text-primary-600">clienti soddisfatti che ci hanno lasciato una recensione positiva</dt>
                    </div>
                </dl>
            </div>
        </div>
    )
}

export default Stats