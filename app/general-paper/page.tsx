import SubjectDetails from '@/components/subject_details';
import { BookOpenText, Scale, PenTool, MessageSquare } from 'lucide-react';

export default function GeneralPaperPage() {
    const subject = {
        type: "General Paper",
        method: "Critical Thinking",
        description: `At Vivota, GP isn’t about memorising essays or big words, it's about learning to think logically and critically.
         We teach students how to generate ideas, analyse questions, and use simple thinking frameworks that give their writing direction
          and purpose. Instead of going in circles or “smoking” arguments, they learn to evaluate properly, take a position, and support 
          it with clarity. Over time, these skills become second nature, and students will be able to link ideas naturally, choose examples 
          appropriately and evaluate with depth and nuance.`,
        blurb: `Learn to think critically, write persuasively, and express complex ideas with clarity and precision.`,
        cta: `master the art of reasoning and expression for every argument`,
        img: "/gp.svg"
    };

    const keyFeatures = [
        {
            icon: <BookOpenText className="w-6 h-6" />,
            title: "Critical Thinking",
            description: "Unpack questions methodically and identify underlying assumptions before forming arguments"
        },
        {
            icon: <Scale className="w-6 h-6" />,
            title: "Balanced Argumentation",
            description: "Construct fair, structured, and well-supported arguments grounded in evidence and logic"
        },
        {
            icon: <PenTool className="w-6 h-6" />,
            title: "Precision in Expression",
            description: "Refine phrasing, transitions, and tone for clarity and sophistication in writing"
        },
        {
            icon: <MessageSquare className="w-6 h-6" />,
            title: "Analytical Reading",
            description: "Analyse tone, perspective, and intent to interpret and evaluate arguments effectively"
        }
    ];

    const topics = [
        "Science & Technology",
        "Philosophical & Ethical",
        "Media",
        "Social",
        "Governance & Geopolitical",
        "The Arts & Culture",
        "Environmental"
    ];

    const methods = [
        "Question selection & analysis",
        "Essay planning",
        "Idea generation",
        "Balanced writing",
        "Evaluative skills",
        "Understanding nuance"
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