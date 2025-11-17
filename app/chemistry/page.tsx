import SubjectDetails from '@/components/subject_details';
import { FlaskConical, Lightbulb, Scale, Zap } from 'lucide-react';

export default function ChemistryPage() {
    const subject = {
        type: "Chemistry",
        method: "Intellectual Stimulation",

        description: `At Vivota, we believe that all students should look forward to every Chemistry lesson. Students are not taught just to memorise
         facts and details, but also to appreciate the subject matter and how it applies in daily life. We believe in purposeful learning that is
          thought–provoking, intellectually stimulating, and exciting. We believe that each and every student at Vivota can do well for Chemistry, 
          if they are daring enough to try. After all, chem–is–try.`,
        blurb: `Learn to reason from chemical principles, link ideas across topics, and explain the intricacies of chemistry with logic and evidence.`,
        cta: `master the logic behind how matter interacts and transforms`,
        img: "/chemistry.svg"
    };

    const keyFeatures = [
        {
            icon: <FlaskConical className="w-6 h-6" />,
            title: "Applied Logic",
            description: "Understand how particles interact, transform, and reach balance through reasoning, not memorisation"
        },
        {
            icon: <Lightbulb className="w-6 h-6" />,
            title: "Hypothesis Testing",
            description: "Interpret experimental data, justify conclusions, and explain anomalies scientifically"
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Transfer Skills",
            description: "Connect recurring ideas like equilibrium, energy change, and reactions across all topics"
        },
        {
            icon: <Scale className="w-6 h-6" />,
            title: "Coherent Thinking",
            description: "Use bonding, energetics, and kinetics to build models that explain and predict chemical behaviour"
        }
    ];

    const topics = [
        "Structure and Properties",
        "Transformations",
        "Chemistry of Aqueous Solutions",
        "Organic Chemistry",
        "Electrochemistry",
        "Transition Elements",
    ];

    const methods = [
        "Content mastery",
        "Conceptual understanding",
        "Higher–order thinking",
        "Pattern recognition",
        "Data evaluation",
        "Clinician–style reasoning"
    ];

    return (
        <SubjectDetails
            subject={subject}
            keyFeatures={keyFeatures}
            topics={topics}
            methods={methods}
        />
    )
}