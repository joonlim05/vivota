import TutorDetails from "@/components/tutor_details"

export default function TutorProfile() {

    const tutor = {
        name: "Fellah",
        subjects: "General Paper (Deputy Lead Tutor)",
        highlights: [
            "Offer holder for UK Law school",
            "MOE Humanities Scholarship Programme (VJC)",
            "Top 5 in VJC cohort for General Paper",
            "A for A Level GP",
            "Academic Tutor since 2024",
        ],
        bio: `Hi! My name is Fellah and I am currently a UK law offer holder. I am an empathetic and enthusiastic tutor who strongly believes that General Paper is a
         subject that anyone can ace as long as it is tackled with an appropriate strategy. In my class, we get rid of unreliable intuition and focus on honing tangible skills 
         so as to guarantee results. My classes will also focus on time-saving exam strategies so as to ensure not just the mastery in skill- but the ability to maximise marks 
         during assessments.`,

        at_vivota: `I strive to make lessons interactive rather than intimidating. I think that once students eradicate the notion that studying for General Paper solely consists
         of memorising complex words and detailed examples, they will realise that GP is actually a manageable subject. A subject that is in fact more focused on our ability to 
         communicate and comprehend in an easy and efficient manner.` ,

        img: "fellah.jpeg"
    }

    return (
        <TutorDetails
            tutor={tutor}
        />
    )
}