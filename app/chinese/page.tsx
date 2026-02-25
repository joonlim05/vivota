import SubjectDetailsChinese from '@/components/subject_details_chinese';
import { FlaskConical, Lightbulb, Scale, Zap } from 'lucide-react';

export default function ChinesePage() {
    const subject = {
        type: "通过深度思辨 掌控华文高分 ",
        method: `Master Chinese through Critical Thinking`,

        description: `在 Vivota，华文不仅是一门语言，更是一种思维方式。我们不主张盲目死记硬背，而是教学生建立“审题-联想-论证”的思维。通过模型化学习，
        让学生在面对任何陌生考题时都能言之有理，逻辑严密。`,
        blurb: `拒绝死记硬背。学习如何构建逻辑框架，在阅读理解与议论文中精准表达，实现知识从输入到高质输出的飞跃。`,
        cta: `立即加入，开启你的高级华文提分之旅！
(Join us now and elevate your Higher Chinese proficiency!)`,
        img: "/chinese.svg"
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
        "科技与伦理 (Technology and Ethics)",
        "传统文化与价值观 (Heritage and Cultural Values)",
        "社会民生与环境保护 (Society and Environmental Preservation)",
        "青少年成长与心理健康 (Youth Development and Mental Wellness)",
        "全球化与多元文化 (Globalization and Multiculturalism)",
    ];

    const methods = [
        { zh: "论点拆解模型", en: "Argumentation structures" },
        { zh: "素材联想网络", en: "Topical knowledge webs" },
        { zh: "段落逻辑衔接", en: "Cohesive framing" },
        { zh: "审题透视技巧", en: "Question deconstruction" },
        { zh: "批判性思维模型", en: "Critical thinking frameworks" },
        { zh: "精准修辞运用", en: "Precision linguistic manipulation" },
    ];
    
    return (
        <SubjectDetailsChinese
            subject={subject}
            keyFeatures={keyFeatures}
            topics={topics}
            methods={methods}
        />
    )
}