import TutorDetails from "@/components/tutor_details"

export default function TutorProfile() {

    const tutor = {
        name: "Huang Xian Wei",
        subjects: "Chinese/Higher Chinese",
        highlights: [
            "Native Chinese speaker born in China",
            "First hand experience with the Singapore O-Level system",
            "Distinction in Higher Chinese Language (HCL) and Chinese",
            "Tutored 30+ students privately since 2024",
            "Educated in the UK for 5 years (High School & University)",
            "Alumnus of the world's 2nd-ranked design school, based in London",
        ],
        bio: `Having navigated education systems across China, Singapore, and the UK, I bring a unique global perspective to language learning.
         While I pursued my studies at a world-class design school in London, my true passion lies in teaching my native language. 
         I've always enjoyed that moment when a challenging concept finally makes sense to a student.` ,

        at_vivota: `I love to break down complex Chinese vocabulary, comprehension, and grammar rules, explaining them in a way that feels intuitive
         and easy to grasp. My goal is to help students connect with the language naturally, building their confidence to score well in the papers.`,

        img: "xian_wei.png"
    }

    return (
        <TutorDetails
            tutor={tutor}
        />
    )
}