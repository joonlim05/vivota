import SubjectDetails from '@/components/subject_details';
import { FlaskConical, Lightbulb, Scale, Zap } from 'lucide-react';

export default function ChemistryPage() {
    const subject = {
        type: "Chemistry",
        method: "Analytical Thinking",

        description: `At Vivota, H2 Chemistry is taught as logic applied to matter — the study of how particles interact, transform, and reach balance. 
        We focus on building models that explain, not memorise: using bonding, energetics, and kinetics to predict what happens and why. 
        Students learn to reason from first principles, applying quantitative tools to support qualitative understanding. 
        Each topic is tied together by recurring ideas — equilibrium, energy change, structure, and charge — so that chemical behaviour feels coherent, not compartmentalised. 
        Practical and data-based questions train interpretation and justification: reading graphs, evaluating experiments, and explaining anomalies. 
        Through this process, students learn to see chemistry as a language of reasoning, to think, quantify, and communicate like scientists.`,

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
        "Atomic Structure & Periodicity",
        "Chemical Bonding",
        "Energetics & Thermodynamics",
        "Kinetics",
        "Redox & Electrochemistry",
        "Organic Chemistry",
    ];

    const methods = [
        "Energy level diagrams",
        "Reaction pathway modeling",
        "Hess's Law analysis",
        "Rate graph interpretation",
        "Stoichiometric reasoning",
        "Data evaluation"
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