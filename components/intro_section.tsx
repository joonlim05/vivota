export default function IntroSection() {

    const tutors = [
        { name: "Shawn Lim", subjects: "Chemistry, Biology", img: "test.jpg" },
        { name: "Tenor Ong", subjects: "Physics, General Paper", img: "test.jpg" },
        { name: "Jaryl Lee", subjects: "Math, Physics", img: "test.jpg" },
        { name: "Kaiser Tan", subjects: "Biology, Chemistry", img: "test.jpg" },

    ];

    return (
        <div className="max-w-7xl mx-auto my-16 md:my-24 lg:my-32">
            <h1 className="text-xl md:text-4xl text-center font-bold mb-12">Meet our Vivota Content Experts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
                {tutors.map((tutor) => (
                    <div key={tutor.name} className="p-12 bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={tutor.img} />
                        <div className="p-4">
                            <h3 className="text-lg text-black font-bold">{tutor.name}</h3>
                            <p className="text-gray-600">{tutor.subjects}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}