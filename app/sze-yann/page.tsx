import TutorDetails from "@/components/tutor_details"

export default function TutorProfile() {

    const tutor = {
        name: "Sze Yann",
        subjects: "General Paper (Deputy Lead Tutor)",
        highlights: [
            "Top 90th percentile in VJC Cohort for H2 History, H2 Economics and General Paper",
            "Edusave Academic Achievement 2022-2025",
            "Tutored 5+ students privately since 2025",
            "A1 for History and Elect English Lit/ SS in GCE O Levels",
        ],
        bio: `I am a warm and approachable educator who believes that strong academic results begin with clarity and confidence. 
        My lessons are engaging, structured, and easy to follow, helping students feel supported while being intellectually stretched to continuously improve.`,

        at_vivota: `I adapt to each student’s learning needs — guiding History students to sharpen their explanation and source analysis skills, and breaking down General Paper into clear essay structures with focused practice for comprehension. 
        My role at Vivota is to help students love writing, instead of dreading it. When students truly understand the “why,” something shifts. 
        They stop second-guessing themselves and start trusting their thinking. Writing feels less intimidating, analysis feels less overwhelming, 
        and improvement comes quietly but surely — built on real understanding, not pressure.` ,

        img: "sze-yann.png"
    }

    return (
        <TutorDetails
            tutor={tutor}
        />
    )
}