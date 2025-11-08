export default function HeroSection() {
    return (
        <>
            <section className="h-screen flex flex-col md:flex-row items-center justify-center w-full text-white">
                <p className="md:w-1/2 ml-64 flex flex-col items-start justify-center text-4xl md:text-6xl font-extrabold tracking-tight 
                leading-tight bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-200
                 text-transparent bg-clip-text drop-shadow-md">
                    VIVOTA EDUCATION
                    <span className="mt-4 text-2xl md:text-3xl text-gray-300 font-medium tracking-wide">
                        Venture Today, <span className="text-yellow-600">Victory Tomorrow</span>
                    </span>
                </p>
                <img
                    src="hero_trial.jpg"
                    className="md:w-1/2 transform scale-75 rounded-xl mr-12 border-4
                     border-amber-200 shadow-[0_0_15px_rgba(251,191,36,0.4)]"
                />
            </section>
        </>
    );
}
