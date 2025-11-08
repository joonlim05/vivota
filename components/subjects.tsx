export default function SubjectsSection() {

    const content = [
        { title: "Physics", pic: "/physics.svg" },
        { title: "Chemistry", pic: "/chemistry.svg" },
        { title: "Biology", pic: "/biology.svg" },
        { title: "Math", pic: "/math.svg" },
        { title: "General Paper", pic: "/gp.svg" }
    ]

    return (
        <div className="max-w-7xl h-screen mx-auto my-16 md:my-24 lg:my-48">
            <h1 className="text-4xl font-bold text-white text-center mb-8">Our JC Courses</h1>
            <h2 className="text-xl text-white text-center">Vivota specialises in delivering quality education tailored for Junior College students.</h2>
            <h2 className="text-xl text-white text-center mb-12">Explore the 5 subjects taught in-depth by our Content Experts!</h2>

            <div className="flex flex-col items-center max-w-5xl mx-auto">
                {/* --- Row 1: First 3 cards --- */}
                <div className="grid w-full gap-8 sm:grid-cols-1 md:grid-cols-3">

                    {content.slice(0, 3).map((item) => (
                        <div
                            key={item.title}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
                        >
                            <div className="p-6 flex flex-col items-center">
                                <h3 className="text-2xl text-black font-semibold mb-8">{item.title}</h3>
                                <img src={item.pic} className="w-24 h-auto mb-8" alt={item.title} />
                                <button className="bg-blue-500 font-bold text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* --- Row 2: Last 2 cards centered --- */}
                    <div className="col-span-3 flex justify-center gap-8 mt-8">
                        {content.slice(3).map((item) => (
                            <div
                                key={item.title}
                                className="bg-white rounded-lg shadow-lg w-1/3 overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
                            >
                                <div className="p-6 flex flex-col items-center">
                                    <h3 className="text-2xl text-black font-semibold mb-8">{item.title}</h3>
                                    <img src={item.pic} className="w-24 h-auto mb-8" alt={item.title} />
                                    <button className="bg-blue-500 font-bold text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div >
    )
}