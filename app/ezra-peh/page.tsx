import TutorDetails from "@/components/tutor_details"

export default function TutorProfile() {

    const tutor = {
        name: "Ezra Peh",
        subjects: "Economics (Lead Tutor)",
        highlights: [
            "Medical Student with Full Ride Scholarship",
            "Received offer of admissions from multiple medical schools",
            "Yao Kwok Wah Award",
            "90RP AAAA/AA, BCME",
            "Academic Tutor since 2022",
            "Integrated Programme (IP) Catholic High School",
            "Eunoia Junior College"
        ],
        bio: `Hello! My name is Ezra and I am currently a medical student in Singapore. 
        My tutoring journey started through volunteering, where I provided free tuition to underprivileged students. 
        What began as service quickly grew into a genuine passion. Seeing the smile on student’s faces when they have their “eureka” 
        moment always made me feel fulfilled and happy.`,
        
        at_vivota: `Over the years, I have studied the common exam trends, question types, and answering techniques tested across the mid-years of 12 JCs, 
        and A-Levels. I believe Economics becomes so much more enjoyable when we understand the logical flow of reasoning behind every concept.
         When students learn to structure their thinking clearly and coherently, their analysis becomes sharper, 
         and the subject becomes much more intuitive.`,

        img: "ezra.png"
    }

    return (
        <TutorDetails
            tutor={tutor}
        />
    )
}