import Link from "next/link"

const missions = [
    {
        title: "Calm over cram",
        description: "we will pace your work so you avoid panicking and mugging at the last minute.",
        icon: "/lotus.svg",
    },
    {
        title: "Small wins that compound",
        description: "short check-ins and clear targets biweekly, not just “do more papers”.",
        icon: "/trophy.svg",
    },
    {
        title: "Student first, not just syllabus",
        description: "we track your progress, habits, and workload together to improve without burning out.",
        icon: "/student.svg",
    },
];

export default function MissionStatement() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
        py-8 sm:py-16 md:py-24 lg:py-32 flex flex-col items-center w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-center my-4 sm:my-6">
                Vivota's Core Mission
            </h1>

            <p className="text-base md:text-lg 2xl:text-xl mt-4 px-4 sm:px-8 leading-relaxed tracking-wide text-center">
                You do not need more notes. You need a simple plan, quick help when you are stuck, and a trusted senior who actually
                knows how you are doing. At Vivota, that is built in: your own Vivota Mentor, a monthly Mastery Action Plan we update together,
                and a two-session learning cycle that keeps you moving steadily toward your exams.
            </p>

            <ul className="my-12 lg:my-24 px-4 sm:px-8 space-y-6 text-center sm:text-left">
                {missions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                        <img
                            src={item.icon}
                            alt={`${item.title} icon`}
                            className="w-7 h-7 flex-shrink-0 mt-1"
                        />
                        <span className="text-base md:text-lg 2xl:text-xl leading-relaxed tracking-wide">
                            <strong>{item.title}</strong> — {item.description}
                        </span>
                    </li>
                ))}
            </ul>

            <div>
                <h2 className="sm:text-lg md:text-xl 2xl:text-2xl font-semibold leading-relaxed tracking-wide text-center">
                    Vivota: <span className="italic">vivo ("to live") + ta ("a place")</span>
                </h2>

                <p className="text-base md:text-lg 2xl:text-xl my-3 sm:my-5 px-4 sm:px-8 leading-relaxed tracking-wide text-center">
                    A place where learning feels alive, not just like more homework.
                </p>
            </div>

            <div className="text-center my-4 sm:my-6">
                <Link href="/vivota-oath">
                    <button className=" px-6 md:px-8 py-3 xl:px-10 xl:py-4 text-sm sm:text-base xl:text-lg font-semibold bg-gradient-to-r from-amber-400 to-yellow-500 
                                text-black rounded-full shadow-lg transition-all 
                                hover:scale-105 hover:shadow-[0_0_20px_rgba(251,191,36,0.6)] 
                                active:scale-95 focus:outline-none focus:ring-4 focus:ring-amber-300">
                        Find out More
                    </button>
                </Link>
            </div>
        </div>

    )
}