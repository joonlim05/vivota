import SubjectDetails from '@/components/subject_details';
import { Sigma, Route, Shapes, Brain} from 'lucide-react';

export default function MathPage() {
    const subject = {
        type: "Math",
        method: "Structural Reasoning",
        description: `At Vivota, we don’t teach you to guess the topic and throw a formula at it. We teach you how to think.
         You first pin down exactly what the question wants, then plan the path: choose the right ideas, decide what you need 
         to find along the way, and work backwards from the goal to the information given. Over time this becomes a simple, 
         repeatable problem-solving habit, so you handle hard questions with calm, clear steps instead of panic and random tricks.
         The result is flexible, rigorous problem solving that holds under exam pressure.`,
        blurb: `Learn to solve problems with clarity and precision, on time on target.`,
        cta: `master structured reasoning for powerful mathematical thinking`,
        img: "/math.svg"
    };

    const keyFeatures = [
        {
            icon: <Sigma className="w-6 h-6" />,
            title: "Conceptual Genius",
            description: "Derive results and connect algebraic, graphical, and geometric perspectives across domains"
        },
        {
            icon: <Route className="w-6 h-6" />,
            title: "On Time On Target",
            description: "Plan before computing, state assumptions precisely, and write logical, exam-ready solutions"
        },
        {
            icon: <Shapes className="w-6 h-6" />,
            title: "God Level Thinking",
            description: "Develop proof reasoning, pattern recognition, and estimation skills for higher-level insight"
        },
        {
            icon: <Brain className="w-6 h-6" />,
            title: "Flexible Reasoning",
            description: "Tackle unfamiliar problems with confidence grounded in consistent practice and understanding"
        }
    ];

    const topics = [
        "Functions & Graphs",
        "Sequences and Series",
        "Vectors in 3D Space",
        "Complex Numbers",
        "Calculus",
        "Probability & Statistics",
    ];

    const methods = [
        "Cross-topic integration",
        "Proof construction",
        "Mathematical reasoning",
        "Strategic problem decomposition",
        "Problem solving using real world context",
        "Targeted practice"
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