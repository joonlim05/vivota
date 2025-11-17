import SubjectDetails from '@/components/subject_details';
import { Target, Lightbulb, TrendingUp, Zap } from 'lucide-react';

export default function PhysicsPage() {
    const subject = {
        type: "Physics",
        method: "Model Building",

        description: `At Vivota, Physics is not about memorising every formula, it is about knowing where every formula comes from. 
        We train you to derive key results from first principles, starting with clean definitions and simple models, then building up
        to exam-level applications. When you see a new question, you will not panic and resort to guessing: you will break it into basic ideas, recombine
        a few familiar relationships, and rebuild the solution from the ground up. That is how formulas that used to be just random things you memorised
        without thinking, become tools you can flex and bend to your will across any exam.`,

        blurb: `Learn to predict, hypothesize, and solve complex problems by building robust mental models that transfer across contexts.`,
        cta: `master the art of model-building for real-world problem solving`,
        img: "/physics.svg"
    };

    const keyFeatures = [
        {
            icon: <Target className="w-6 h-6" />,
            title: "Model Building",
            description: "Transform words into diagrams and equations through systematic assumption-stating and variable definition"
        },
        {
            icon: <Lightbulb className="w-6 h-6" />,
            title: "Hypothesis Testing",
            description: "Derive relationships, test limiting cases, and validate against real-world data"
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Transfer Skills",
            description: "Apply governing principles across novel contexts with strategic planning"
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Unified Approach",
            description: "Connect mechanics, waves, electricity, magnetism, and thermal physics seamlessly"
        }
    ];

    const topics = [
        "Newtonian Mechanics",
        "Oscillations and Waves",
        "Electromagnetism",
        "Thermal Physics",
        "Modern Physics",
    ];

    const methods = [
        "Fundamental principles",
        "Formula derivations",
        "Explanation frameworks",
        "Graphical drawing",
        "Free body diagrams",
        "Mathematical manipulation"
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