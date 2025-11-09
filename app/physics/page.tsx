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
        <div className="max-w-7xl mx-auto my-16 md:my-24 lg:my-32">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 animate-fade-in">
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                            Master {subject.type} Through {" "}
                            <span className="text-yellow-400">{subject.method}</span>
                        </h1>
                        <p className="text-lg leading-relaxed">
                            {subject.blurb}
                        </p>
                        <button className="btn btn-warning px-8 py-4 text-black rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Learn More
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <div className="relative w-80 h-80 bg-gradient-to-br from-blue-300 to-indigo-500 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <img
                                src={subject.img}
                                alt="Physics"
                                className="w-full h-full object-contain p-12 filter brightness-0 invert"
                            />
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-full opacity-20 animate-pulse delay-150"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Approach Section */}
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Our Approach</h2>
                    <p className="max-w-2xl mx-auto">
                        A systematic methodology that transforms you into a confident problem-solver
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {keyFeatures.map((feature, idx) => (
                        <div
                            key={idx}
                            className="p-6 bg-gradient-to-br from-slate-50 to-indigo-50 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-indigo-100"
                        >
                            <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center text-white mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                            <p className="text-slate-600 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Core Topics */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Core Topics in H2 Physics</h2>
                        <div className="space-y-3">
                            {topics.map((topic, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all hover:translate-x-2"
                                >
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span className="text-slate-700 font-medium">{topic}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-6">Problem-Solving Tools</h2>
                        <div className="grid grid-cols-2 gap-3">
                            {methods.map((method, idx) => (
                                <div
                                    key={idx}
                                    className="p-4 bg-gradient-to-br from-blue-400 to-indigo-400 text-gray-900 rounded-lg 
                                    text-center font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                                >
                                    {method}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Detailed Description */}
            <div className="bg-gradient-to-r from-yellow-100 via-amber-200 to-orange-300 text-white py-16 rounded-lg">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-black text-center">The Vivota Difference</h2>
                        <div className="prose prose-lg prose-invert">
                            <p className="leading-relaxed text-black tracking-wide leading-loose font-medium">
                                {subject.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="container mx-auto px-4 py-16 text-center">
                <div className="max-w-2xl mx-auto space-y-6">
                    <h2 className="text-4xl font-bold">Ready to Transform Your Learning?</h2>
                    <p className="text-lg">
                        Join Vivota and {subject.cta}
                    </p>
                    <div className="flex gap-4 justify-center gap-8">
                        <button className="btn btn-warning px-8 py-6 text-black text-lg rounded-lg font-semibold hover:scale-105 transition-all shadow-lg">
                            Enroll Now
                        </button>
                        <button className="px-8 py-2 text-lg border-2 border-white rounded-lg font-semibold hover:scale-105 transition-all">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}