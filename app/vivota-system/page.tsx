import Pillars from "@/components/pillars";

export default function VivotaSystem() {

    interface Point {
        sub: string;
        text: string;
    }

    interface Session {
        title: string;
        points: Point[];
    }
    const masteryPlanFeatures = [
        {
            title: "1. Review History",
            text: "We throughly check through your past school exams and assignments."
        },
        {
            title: "2. Diagnose and Refine",
            text: "Find out your strengths and weaknesses, learning style and habits"
        },
        {
            title: "3. SMART 14-day Action Plan",
            text: "Create a tailored improvement plan with small, consistent steps that add up to exam results, not last minute panic ."
        }
    ];

    const mentorshipFeatures = [
        { title: "Fast replies 24/7" },
        { title: "Regular check-ins", text: "Track mastery and overall wellbeing" },
        { title: "Termly updates", text: "Plus extra check-ins during exams" },
    ];

    const sessions: Session[] = [
        {
            title: "Session 1: Concept Class",
            points: [
                { sub: "High-yield Delivery:", text: "Syllabus-aligned teaching, stripped of fluff and explained through first principles." },
                { sub: "Interactive Discussion:", text: "Class discussion led by content experts, ensuring that no student is left out" },
                { sub: "Prep for Session 2:", text: "Light homework (individual quiz) to seed the next lesson." }
            ],
        },

        {
            title: "Session 2: Team Session",
            points: [
                { sub: "Individual Quiz:", text: "Should be attempted before class to identify knowledge gaps" },
                { sub: "Team Discussion:", text: "Team quiz in class with instant feedback and rationale sheets" },
                { sub: "Questions Clinic:", text: "Students shoot questions. Content Experts debunk misconceptions" },
                { sub: " Application Exercise (AE):", text: "The most challenging questions will be tackled and led by Content Experts" }
            ],
        }
    ];

    const whyItWorks = [
        {
            title: "Rapid Active Recall:",
            text: "Individual quizzes build the ability to review current knowledge. Team Discussions enable students to work together in teams to generate ideas and exchange knowledge."
        },
        {
            title: "Realistic Wargaming:",
            text: "AE mirrors the toughest exam-style questions, for all students to unlock their full potential."
        },
        {
            title: "Tight Feedback Loop:",
            text: "Small errors are corrected at their roots before they snowball."
        },
        {
            title: "Spaced Repetition:",
            text: "Content is reviewed at multiple stages to improve long-term retention."
        }
    ];

    const videoFeatures = [
        {
            title: "Any Place, Any Time:",
            text: "Revise at your convenience."
        },
        {
            title: "Unlimited Replays:",
            text: "Learn at your own speed, review your mistakes."
        },
        {
            title: "Back on Track:",
            text: "Missed a lesson? Resync with your peers."
        },
        {
            title: "Easy Troubleshooting:",
            text: "Seek help for any part of the replay. Minimal hassle!"
        }
    ];



    return (
        <div className="max-w-7xl mx-auto my-36 md:my-38 lg:my-40 2xl:my-48 px-8 sm:px-10 md:px-12 lg:px-14 space-y-24 md:space-y-32 lg:space-y-48">

            {/* Nutshell Section */}
            <div className="flex flex-col items-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-6 md:mb-12">
                    The Vivota Learning System
                </h1>
                <h2 className="text-base md:text-lg lg:text-xl text-center mb-6 md:mb-12">
                    Four pillars designed to accelerate your learning success.
                </h2>
                <div className="">
                    <Pillars />
                </div>
            </div>

            <div className="w-full max-w-6xl mx-auto px-4 space-y-28 md:space-y-36 lg:space-y-48 text-white">

                {/* Personalised Mastery Action Plan */}
                <div className="flex flex-col items-center lg:flex-row lg:items-start gap-8 lg:gap-24">
                    <img src="/mastery.svg" className="w-24 md:w-32 lg:w-40 xl:w-48 flex-shrink-0" />
                    <div>
                        <p className="font-bold text-base md:text-lg leading-relaxed mb-12">
                            Every student is different, so we strive to provide a personalised plan to guide
                            our students to reach their targets efficiently.
                        </p>
                        <ul className="space-y-4 text-base md:text-lg">
                            {masteryPlanFeatures.map((item, idx) => (
                                <li key={idx}>
                                    <p className="font-semibold">{item.title}</p>
                                    <p>{item.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Dedicated Mentorship */}
                <div className="flex flex-col items-center lg:flex-row lg:items-start gap-8 lg:gap-24">
                    <img src="/mentor.svg" className="w-24 md:w-32 lg:w-40 xl:w-48 flex-shrink-0" />
                    <div>
                        <p className="font-bold text-base md:text-lg leading-relaxed mb-12">
                            A dedicated Vivota mentor will be attached to each student to closely monitor their well-being
                            and ensure their progress is on track.
                        </p>

                        <ul className="space-y-4 text-base md:text-lg list-disc list-inside">
                            {mentorshipFeatures.map((item, idx) => (
                                <li key={idx}>
                                    {item.title} {item.text && `- ${item.text}`}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* On Demand Playback */}
                <div className="flex flex-col items-center lg:flex-row lg:items-start gap-8 lg:gap-24">
                    <img src="/video.svg" className="w-24 md:w-32 lg:w-40 xl:w-48 flex-shrink-0" />
                    <div>
                        <p className="font-bold text-base md:text-lg leading-relaxed mb-12">
                            Every session in Vivota is recorded, giving students on-demand replays
                            to revisit any lesson they wish for future revision.
                        </p>
                        <ul className="space-y-4 text-base md:text-lg">
                            {videoFeatures.map((item, idx) => (
                                <li key={idx}>
                                    <p className="font-semibold">{item.title}</p>
                                    <p>{item.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>


            {/* Two-Cycle */}
            <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch gap-8 mb-8">

                    {/* Session 1 Card */}
                    <div className="bg-[#E5B80B] flex flex-col text-black rounded-xl shadow-lg px-6 py-8 md:px-8 md:py-12 hover:shadow-2xl transition leading-relaxed md:leading-loose">
                        <h2 className="text-xl font-bold mb-4">{sessions[0].title}</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                            {sessions[0].points.map((point, idx) => (
                                <li key={idx}>
                                    <span className="font-bold">{point.sub}</span> {point.text}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Two-cycle SVG in the centre */}
                    <div className="flex justify-center">
                        <img src="cycle.svg" className="w-32 md:w-40 max-w-full" />
                    </div>

                    {/* Session 2 Card */}
                    <div className="bg-[#E5B80B] flex flex-col text-black rounded-xl shadow-lg px-6 py-8 md:px-8 md:py-12 hover:shadow-2xl transition leading-relaxed md:leading-loose">
                        <h2 className="text-xl font-bold mb-4">{sessions[1].title}</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                            {sessions[1].points.map((point, idx) => (
                                <li key={idx}>
                                    <span className="font-bold">{point.sub}</span> {point.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-2xl p-6 md:p-12 border border-gray-200">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl font-bold mb-6 text-black text-center md:text-left">
                            Why It Works
                        </h2>

                        <ul className="space-y-4 text-black text-base md:text-lg leading-relaxed">
                            {whyItWorks.map((item, idx) => (
                                <li key={idx}>
                                    <span className="block md:inline font-semibold text-black">
                                        {item.title}{" "}
                                    </span>
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>


        </div>
    )
}