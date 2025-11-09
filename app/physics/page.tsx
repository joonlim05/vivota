import SubjectDetails from '@/components/subject_details';
import { Target, Lightbulb, TrendingUp, Zap } from 'lucide-react';

export default function PhysicsPage() {
    const subject = {
        type: "Physics",
        method: "Model Building",
        description: `At Vivota, H2 Physics is taught as model building for prediction. 
    You will learn to state assumptions, define variables, and turn words into diagrams and equations; 
    then you pose a hypothesis, derive the relationship, test limiting cases and dimensions, estimate orders of magnitude,
     and check against data. We train transfer to novel contexts by planning before calculation: 
     choose the governing principles (forces, energy, momentum, fields), pick a clean representation (free-body, energy bar, field lines),
      and track units and signs to a conclusive result. We also braid ideas across mechanics, waves, electricity and magnetism, 
      and thermal physics. We pull in calculus, vectors, graphs, and uncertainty from math so one context can be solved from multiple angles. 
      Through this process, students learn to make predictions and put forward scientific hypotheses, apply principles to new situations,
       and bring concepts together into clear, exam-ready arguments.`,
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
        "Mechanics & Forces",
        "Energy Systems",
        "Momentum",
        "Fields & Electromagnetism",
        "Waves & Oscillations",
        "Thermal Physics"
    ];

    const methods = [
        "Free-body diagrams",
        "Energy bar charts",
        "Field line representations",
        "Vector analysis",
        "Calculus integration",
        "Dimensional analysis"
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