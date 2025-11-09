import SubjectDetails from '@/components/subject_details';
import { Sigma, Route, Shapes, Brain} from 'lucide-react';

export default function MathPage() {
    const subject = {
        type: "Math",
        method: "Structural Reasoning",
        description: `At Vivota, H2 Math is taught for understanding, not memory — we derive results, link ideas, and move between algebraic, graphical, geometric, and verbal views so concepts transfer. 
You plan before you compute, state conditions precisely, and write clean, markscheme-ready working. 
We train H3-level habits — proof thinking, structure spotting, bounding and estimation — so critical and out-of-the-box thinking becomes routine. 
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
        "Calculus (Differentiation & Integration)",
        "Vectors & Geometry",
        "Complex Numbers",
        "Probability & Statistics",
        "Sequences & Series",
        "Maclaurin Series & Differential Equations",
    ];

    const methods = [
        "Algebraic reasoning",
        "Geometric visualisation",
        "Proof construction",
        "Mathematical techniques",
        "Strategic problem decomposition",
        "Problem solving using real world context"
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