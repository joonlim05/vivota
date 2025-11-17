import SubjectDetails from '@/components/subject_details';
import { Dna, Layers, Workflow, Brain } from 'lucide-react';

export default function BiologyPage() {
    const subject = {
        type: "Biology",
        method: "Systemic Storytelling",
        description: `At Vivota, Biology is not about spending hours staring at thick stacks of notes but rather about understanding
         the intricacies behind each and every system within the syllabus. Vivota trains each student to think like a clinician-scientist, 
         to trace the mechanism, identify the key variable, and reason based on cause and effect. In line with Vivota’s approach, content simply
          becomes conceptual tools you can apply across not only MCQs, but also data-based questions, and essays. With time, biology stops being 
          a torturous subject of rote memorisation.It becomes a fun, solvable and predictable puzzle that waits to be discovered.`,
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
        "The Cell and Biomolecules of Life",
        "Genetics and Inheritance",
        "Energy and Equilibrium",
        "Biological Evolution",
        "Infectious Diseases",
        "Impact of Climate Change on Animals and Plants",
    ];

    const methods = [
        "First-principles biological models",
        "Cause-and-effect chains",
        "Mechanism mapping",
        "Graph & data interpretation",
        "Experimental reasoning",
        "Error-spotting and hypothesis testing"
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