import Link from "next/link";


export default function IntroSection() {

    const tutors = [
        { name: "Elijah Lim", subjects: "Chemistry, Biology", img: "elijah.png", link: "/elijah-lim" },
        { name: "Tenor Ong", subjects: "Physics, General Paper", img: "tenor.png", link: "/tenor-ong" },
        { name: "Jaryl Lee", subjects: "Math, Physics", img: "jaryl.png", link: "/jaryl-lee" },
        { name: "Kaiser Tan", subjects: "Biology, Chemistry", img: "kaiser.png", link: "/kaiser-tan" },
        { name: "Ezra Peh", subjects: "Economics", img: "ezra.png", link: "/ezra-peh" },
        { name: "Nithik", subjects: "Chemistry, Biology", img: "nithik.png", link: "/nithik" },
        { name: "Sze Yann", subjects: "General Paper", img: "sze-yann.png", link: "/sze-yann" },
    ];

    return (
        <div className="sm:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto px-4 sm:px-8 md:px-12
        py-8 sm:py-16 md:py-24 lg:py-32">
            <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-14 xl:mb-20 2xl:mb-24">
                    <span className="block sm:inline">Meet our Vivota </span>
                    <span className="block sm:inline">Content Experts</span>
                </h1>
                <p className="block lg:hidden max-w-xl">
                    Our Vivota Content Experts are excited to meet you all!
                    <span className="block">Explore each tutor's profile to learn more about them.</span>
                    <Link href="/our-content-experts" className="block mt-6">
                        <button className=" px-6 md:px-8 py-3 xl:px-10 xl:py-4 text-sm sm:text-base xl:text-lg font-semibold bg-gradient-to-r from-amber-300 to-yellow-500 
                                text-black rounded-full shadow-lg transition-all 
                                hover:scale-105 hover:shadow-[0_0_20px_rgba(251,191,36,0.6)] 
                                active:scale-95 focus:outline-none focus:ring-4 focus:ring-amber-300">
                            View our Content Experts
                        </button>
                    </Link>

                </p>
            </div>
            <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 lg:gap-12 2xl:gap-16 justify-items-center">
                {tutors.map((tutor) => (
                    <Link key={tutor.name} href={tutor.link}>
                        <div className="relative w-full max-w-xs sm:max-w-none 2xl:scale-110 aspect-[3/4] rounded-lg overflow-hidden
                         shadow-md cursor-pointer transform transition-transform duration-300 
                         hover:scale-105 hover:shadow-xl hover:brightness-110 hover:-translate-y-1">

                            <img
                                src={tutor.img}
                                alt={tutor.name}
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-yellow-200/90 to-transparent flex items-end p-4">
                                <div className="text-black md:p-2 lg:p-4 xl:p-0 2xl:p-2">
                                    <h3 className="lg:text-2xl 2xl:text-xl font-black">{tutor.name}</h3>
                                    <p className="lg:text-base font-medium">{tutor.subjects}</p>
                                </div>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}