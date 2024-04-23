const HeroBackground = ({children}) => {
    return (
        <div className="h-screen flex justify-center items-center relative" style={{
            backgroundImage: `url(https://static.bolognawelcome.com/immagini/8d/b5/64/bc/20200311171337.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center 25%",
        }}>
            {children}
        </div>
    )
}

export default HeroBackground