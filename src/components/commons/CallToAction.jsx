const CallToAction = ({text}) => {
    return (
        <button type='button' className='text-primary-950 bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition-all font-medium rounded-lg text-sm px-3 py-2 text-center'>{text}</button>
    )
}

export default CallToAction