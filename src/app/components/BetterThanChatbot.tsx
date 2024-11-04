'use client';

import { motion } from 'framer-motion';

export default function BetterThanChatbot() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <div className="flex-col min-h-screen bg-[#0A0A0A] py-8 sm:py-14">
            <div className="w-11/12 sm:w-4/5 mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <h2 className="darker-grotesque-header text-4xl sm:text-5xl lg:text-6xl text-white mb-3 sm:mb-4">
                        Better<span className="text-pink-500"> than a chatbot.</span>
                    </h2>
                    <p className="text-white/60 text-lg sm:text-xl max-w-3xl mx-auto">
                        LLM prototypes are easy to demo, but hard to deploy to production. Kapa.ai abstracts away the hard parts of RAG.
                    </p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col xl:grid xl:grid-cols-3 gap-8 items-center"
                >
                    {[
                        {
                            title: "Automatically Stays Up to Date",
                            icon: "🔄",
                            gradient: "from-purple-500 to-blue-500",
                            description: "When your docs update, your AI updates. Keep it synchronized with your latest content."
                        },
                        {
                            title: "Always Grounded in Truth",
                            icon: "📝",
                            gradient: "from-pink-500 to-purple-500",
                            description: "When your docs update, your AI updates. Keep it synchronized with your latest content."
                        },
                        {
                            title: "Feedback Loop for Improved Answers",
                            icon: "🎯",
                            gradient: "from-blue-500 to-purple-500",
                            description: "When your docs update, your AI updates. Keep it synchronized with your latest content."
                        }
                    ].map((card, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="relative w-[min(100%,350px)]"
                        >
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${card.gradient} rounded-3xl blur opacity-60`}></div>
                            <div className="relative bg-[#141414] rounded-3xl p-6 sm:p-8 h-[250px] sm:h-[300px] flex flex-col items-center justify-center text-center">
                                <div className="text-3xl sm:text-4xl mb-4 sm:mb-6">{card.icon}</div>
                                <h3 className="text-white text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{card.title}</h3>
                                <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-3 sm:mb-4"></div>
                                <p className="text-white/60 text-sm sm:text-base">
                                    {card.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
