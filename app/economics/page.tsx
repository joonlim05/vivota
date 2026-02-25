import SubjectDetails from '@/components/subject_details';
import { FlaskConical, Lightbulb, Scale, Zap } from 'lucide-react';

export default function EconomicsPage() {
    const subject = {
        type: "Economics",
        method: "Flow of Reasoning",

        description: `At Vivota, we believe true mastery of Economics begins with understanding before application. 
        Students learn to break down complex concepts into clear, logical flows of thought, seeing how ideas connect through cause and effect. 
        As this clarity develops, essays that once felt overwhelming become more structured and far easier to write, because students understand the 
        key marking criteria behind every essay and CSQ question. By teaching students how to identify the central issue in essay questions, as well as 
        clues in the CSQ extracts, we transform Economics from a subject that students memorise into one they confidently and systematically understand.`,
        blurb: `Learn to analyze markets, connect economic concepts, and explain the forces shaping decisions and policies with precision and clarity.`,
        cta: `master the art of simplifying complex economics concepts into a clear, logical flow of thought`,
        img: "/economics.svg"
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
        "Supply and Demand",
        "Market Failure",
        "Firms and Decisions",
        "Macroeconomic Goals",
        "Macroeconomic Policies",
        "International Trade",
    ];

    const methods = [
        "Content Mastery",
        "Evaluation Techniques",
        "Flow of Reasoning",
        "Connecting Related Ideas",
        "Extract Analysis",
        "Structured Thinking"
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