import SubjectDetails from '@/components/subject_details';
import { Dna, Layers, Workflow, Brain } from 'lucide-react';

export default function BiologyPage() {
    const subject = {
        type: "Biology",
        method: "Systemic Storytelling",
        description: `At Vivota, H2 Biology is taught as storytelling through systems — understanding how molecular details give rise to life’s patterns. 
We begin with mechanisms: genes expressing proteins, enzymes catalysing reactions, membranes controlling movement. 
From there, we scale up — from cells to organs, organisms to ecosystems — always tracing how structure supports function. 
Lessons emphasise conceptual flow over memorisation: constructing cause-and-effect chains, visualising pathways, and linking processes across topics. 
Through this process, students learn to connect ideas across scales, reason like biologists, and explain life’s complexity with precision and insight.`,
        blurb: `Learn to connect molecular mechanisms to living systems and explain biological complexity with clarity and logic.`,
        cta: `master the art of explaining life through interconnected systems`,
        img: "/biology.svg"
    };

    const keyFeatures = [
        {
            icon: <Dna className="w-6 h-6" />,
            title: "Mechanistic Understanding",
            description: "Trace how genes, enzymes, and membranes work together to sustain life"
        },
        {
            icon: <Layers className="w-6 h-6" />,
            title: "Systems Thinking",
            description: "Link processes across scales from molecules to ecosystems through cause-and-effect reasoning"
        },
        {
            icon: <Workflow className="w-6 h-6" />,
            title: "Conceptual Flow",
            description: "Visualise pathways, map feedback loops, and follow structure–function logic across topics"
        },
        {
            icon: <Brain className="w-6 h-6" />,
            title: "Reason Like a Biologist",
            description: "Integrate mechanisms and systems thinking to explain biological phenomena coherently"
        }
    ];

    const topics = [
        "Molecular Genetics",
        "Cell Structure & Function",
        "Enzymes & Metabolism",
        "Membranes & Transport",
        "Homeostasis & Coordination",
        "Genetics & Inheritance",
        "Ecology & Ecosystems",
        "Evolution & Biodiversity"
    ];

    const methods = [
        "Pathway mapping and flow diagrams",
        "Cause-and-effect chain construction",
        "Structure–function analysis",
        "System interaction modeling",
        "Data interpretation",
        "Experimental design reasoning"
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