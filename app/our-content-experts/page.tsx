import Link from "next/link";

export default function OurContentExperts() {
    const tutors = [
        { name: "Elijah Lim", subjects: "Chemistry, Biology", img: "elijah.png", link: "/elijah-lim" },
        { name: "Tenor Ong", subjects: "Physics, General Paper", img: "tenor.png", link: "/tenor-ong" },
        { name: "Jaryl Lee", subjects: "Math, Physics", img: "jaryl.png", link: "/jaryl-lee" },
        { name: "Kaiser Tan", subjects: "Biology, Chemistry", img: "kaiser.png", link: "/kaiser-tan" },
        { name: "Ezra Peh", subjects: "Economics", img: "ezra.png", link: "/ezra-peh" },
        { name: "Nithik", subjects: "Chemistry, Biology", img: "nithik.png", link: "/nithik" },
        { name: "Sze Yann", subjects: "General Paper", img: "sze-yann.png", link: "/sze-yann" },
        { name: "Huang Xian Wei", subjects: "Chinese/Higher Chinese", img: "xian_wei.png", link: "/huang-xian-wei" },
    ];

    return (
        <div className="max-w-7xl mx-auto py-32 md:py-36 lg:py-40 xl:py-42 px-8 sm:px-10 md:px-12 lg:px-14">
            <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Content Experts</h1>
                <p className="space-y-12 max-w-4xl mx-auto text-base md:text-lg leading-relaxed mb-12">
                    At Vivota, our tutors aren’t just simply there to teach — they are true content specialists.
                    Each expert has deep mastery of their subject, grounded in strong academic credentials and real tutoring experience.
                    More importantly, they understand the JC syllabus inside out, and are passionate about sharing their knowledge
                    in a way that’s engaging and easy to understand for our students.
                </p>
            </div>
            <div className="">
                <h1 className="text-3xl md:text-4xl text-center font-bold mb-8 sm:mb-12 md:mb-14 xl:mb-20 2xl:mb-24">
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 justify-items-center">
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
                                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl 2xl:text-xl font-black">{tutor.name}</h3>
                                        <p className="text-sm sm:text-base md:text-lg lg:text-base font-medium">{tutor.subjects}</p>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
