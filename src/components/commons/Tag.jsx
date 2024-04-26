const Tag = ({ text, color }) => {
    return (
        <div className={`absolute text-white text-sm font-bold rounded-full z-10 p-2 mx-4 mt-4 ${color}`}>
            {text}
        </div>
    )
}

export default Tag

