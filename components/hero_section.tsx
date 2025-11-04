export default function HeroSection() {
    return (
        <>
            <section className="h-screen flex flex-col md:flex-row items-center justify-center w-full text-white">
                <p className="md:w-1/2 ml-12 flex justify-center text-3xl">
                    Leading Tuition Centre in Singapore<br />
                    Boost your grades,<br />
                    Stay in a fun student community<br />
                    Empowering students to reach their peak potential<br />
                    with top-quality, holistic education.</p>
                    <img src="hero_trial.jpg" className="md: w-1/2 transform scale-75 rounded-xl mr-12"></img>
            </section>
        </>
    );
}
