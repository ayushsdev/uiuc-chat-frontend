'use client';

import { motion } from 'framer-motion';

export default function HowItWorks() {
    const cardVariants = {
        offscreen: {
            y: 50,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return (
        <div className="flex-col min-h-screen bg-[#0A0A0A] py-14">
            <div className="w-4/5 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="darker-grotesque-header text-6xl text-center text-white pb-5"
                >
                    How 
                    <span className="text-transparent bg-gradient-to-r from-[#fcb316] to-[#ff5f05] bg-clip-text"> uiuc.chat </span>
                    works
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center text-white/80 text-2xl pb-32"
                >
                    We help organizations use large language models to instantly answer technical and user questions.
                </motion.div>
                <div className="flex flex-col xl:flex-row justify-between items-center gap-8">
                    {/* First Card */}
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={cardVariants}
                        className="relative group max-w-[350px]"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#fcb316] to-[#ff5f05] rounded-[30px] blur opacity-75 group-hover:opacity-100 transition duration-300 group-hover:duration-200 animate-tilt"></div>
                        <div className="relative w-[350px] h-[400px] rounded-[30px] bg-[#141414] p-8 transition-transform group-hover:scale-105 duration-300">
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="text-[#ff5f05] text-5xl mb-6">📚</div>
                                <h2 className="text-white text-3xl font-semibold mb-4">Connect Knowledge</h2>
                                <p className="text-white/70">
                                    Connect your <span className="text-transparent bg-gradient-to-r from-[#fcb316] to-[#ff5f05] bg-clip-text font-semibold">knowledge sources</span> (e.g., Docs, Confluence, Notion, Google Drive).
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Second Card */}
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={cardVariants}
                        className="relative group max-w-[350px]"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#fcb316] to-[#ff5f05] rounded-[30px] blur opacity-75 group-hover:opacity-100 transition duration-300 group-hover:duration-200 animate-tilt"></div>
                        <div className="relative w-[350px] h-[400px] rounded-[30px] bg-[#141414] p-8 transition-transform group-hover:scale-105 duration-300">
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="text-[#ff5f05] text-5xl mb-6">🤖</div>
                                <h2 className="text-white text-3xl font-semibold mb-4">Deploy AI Assistant</h2>
                                <p className="text-white/70">
                                    Deploy your custom AI assistant <span className="text-transparent bg-gradient-to-r from-[#fcb316] to-[#ff5f05] bg-clip-text font-semibold">where users have questions</span> (e.g., Docs, Slack, Discord, API, Zendesk).
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Third Card */}
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={cardVariants}
                        className="relative group max-w-[350px]"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#fcb316] to-[#ff5f05] rounded-[30px] blur opacity-75 group-hover:opacity-100 transition duration-300 group-hover:duration-200 animate-tilt"></div>
                        <div className="relative w-[350px] h-[400px] rounded-[30px] bg-[#141414] p-8 transition-transform group-hover:scale-105 duration-300">
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="text-[#ff5f05] text-5xl mb-6">📊</div>
                                <h2 className="text-white text-3xl font-semibold mb-4">Turn Chats Into Insights</h2>
                                <p className="text-white/70">
                                    Optimize your documentation, enhance user experience, and drive product decisions with analytics
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

// bg-gradient-to-r from-[#fcb316] to-[#ff5f05]