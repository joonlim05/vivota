import TutorDetails from "@/components/tutor_details"

export default function TutorProfile() {

    const tutor = {
        name: "Nithik",
        subjects: "Chemistry (Deputy Lead Tutor) & Biology",
        highlights: [
            "Singapore Medical Student",
            "SINDA Academic Excellence Award Recipient",
            "Academic tutor since 2022 ",
            "Straight As for BCME in A Levels",
            "H3 Chemistry in VJC",
            "Integrated Programme (IP), Victoria Junior College"
        ],
        bio: `Hey! I’m Nithik and I am a medical student in Singapore. My passion for service first took root during my time in
         Student Council in VJC. After graduating, I wanted to channel both that spirit of service and my academic strengths
          into guiding new JC students to perform with greater clarity and confidence.` ,

        at_vivota: `My teaching philosophy is built on two pillars: understanding and application. 
        I believe Chemistry and Biology must first be deeply understood. When students truly grasp the concepts, 
        interest naturally follows, and answers begin to flow logically rather than mechanically. This foundation, 
        paired with consistent practice and targeted feedback, sharpens exam technique and strengthens performance. 
        It is a method I personally relied on throughout my own academic journey, and one I have seen consistently empower
         students to achieve meaningful improvement.`,

        img: "nithik.png"
    }

    return (
        <TutorDetails
            tutor={tutor}
        />
    )
}