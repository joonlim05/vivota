import SubjectDetails from '@/components/subject_details';
import { BookOpenText, Scale, PenTool, MessageSquare } from 'lucide-react';

export default function GeneralPaperPage() {
    const subject = {
        type: "General Paper",
        method: "Critical Thinking",
        description: `At Vivota, H1 General Paper is taught as the art of clear thinking and precise expression. 
We train students to unpack questions methodically, frame balanced arguments, evaluate deeply, and write with structure and purpose. 
Every essay begins with understanding — identifying assumptions, defining key terms, and mapping the logic before drafting. 
We build linguistic control through targeted practice: sharpening phrasing, tightening transitions, and expanding the range of examples that anchor ideas in reality. 
Comprehension lessons focus on analysing tone, perspective, and intent, not just finding answers. 
Through this process, students learn to think critically, write persuasively, and engage the world with clarity, confidence, and calm.`,
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
        "Essay Writing & Argumentation",
        "Critical Reading & Comprehension",
        "Issue Analysis & Evaluation",
        "Global & Societal Themes",
        "Language & Expression",
        "Evidence & Example Crafting",
        "Tone & Perspective Analysis"
    ];

    const methods = [
        "Question deconstruction and reverse-engineering",
        "Argument framing and counter-argument building",
        "Precision phrasing with stylistic control",
        "Example development and contextualisation",
        "Tone and perspective analysis",
        "Logic flow structuring"
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