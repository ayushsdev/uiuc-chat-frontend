'use client';

import { motion, useMotionValue, animate } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

export default function Features() {
    const chartRef = useRef(null);
    const isChartInView = useInView(chartRef);

    return (
        <div className="flex-col min-h-screen bg-[#0A0A0A] py-14">
            <div className="w-4/5 mx-auto">
                <div className="darker-grotesque-header text-6xl text-center text-white pb-5">
                    Build and manage
                    <span className="text-transparent bg-gradient-to-r from-[#1d58a7] to-[#13294b] bg-clip-text"> your assistants </span>
                    on the kapa platform
                </div>
                <div className="text-center text-white/80 text-2xl pb-16">
                    Use the self-service platform to keep your AI assistants up to date.
                </div>

                <div className="grid grid-cols-2 gap-8">
                    {/* Top Left Panel */}
                    <div className="relative group animate-fade-in-up bg-[#141414] rounded-3xl p-6 border border-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-orange-500/10">
                        <h3 className="text-white text-xl mb-4">Manage knowledge sources</h3>
                        <p className="text-white/60 text-sm mb-4">Keep your trained assistants synced and up to date</p>
                        <div className="space-y-3">
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="flex items-center justify-between bg-[#1A1A1A] rounded-lg p-3 transition-all duration-300 hover:bg-[#242424]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-[#242424] rounded-lg"></div>
                                        <div className="text-white/80">Website Crawl</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-white/60 text-sm">Synced</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Top Right Panel - Animated Chart */}
                    <div className="relative group animate-fade-in-up bg-[#141414] rounded-3xl p-6 border border-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-orange-500/10">
                        <h3 className="text-white text-xl mb-4">Track usage with analytics</h3>
                        <p className="text-white/60 text-sm mb-4">See exactly what your users are asking you for</p>
                        <div ref={chartRef} className="flex justify-between items-end h-48 px-4">
                            {[1, 2, 3, 4, 5, 6, 7].map((item) => {
                                const height = Math.min(Math.random() * 80 + 20, 100);
                                return (
                                    <motion.div 
                                        key={item} 
                                        className="w-8 bg-gradient-to-t from-[#1d58a7] to-[#13294b] rounded-t-lg transition-all duration-300 hover:from-[#13294b] hover:to-[#1d58a7]"
                                        initial={{ height: 0 }}
                                        animate={{ height: isChartInView ? `${height}%` : 0 }}
                                        transition={{ duration: 0.5, delay: item * 0.1 }}
                                    ></motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Bottom Left Panel - Animated Numbers */}
                    <div className="relative group animate-fade-in-up bg-[#141414] rounded-3xl p-6 border border-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-orange-500/10">
                        <h3 className="text-white text-xl mb-4">Identify documentation gaps</h3>
                        <p className="text-white/60 text-sm mb-4">Spot common missing documentation gaps</p>
                        <div className="space-y-4">
                            <motion.div 
                                className="flex items-center justify-between"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    <span className="text-white/60">Missing docs</span>
                                </div>
                                <motion.span 
                                    className="text-white/40 text-sm"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <Counter from={0} to={24} /> questions
                                </motion.span>
                            </motion.div>
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                        <span className="text-white/60">Needs improvement</span>
                                    </div>
                                    <span className="text-white/40 text-sm">{12 - item * 2} questions</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Right Panel */}
                    <div className="relative group animate-fade-in-up bg-[#141414] rounded-3xl p-6 border border-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-orange-500/10">
                        <h3 className="text-white text-xl mb-4">Customize assistant behavior</h3>
                        <p className="text-white/60 text-sm mb-4">Fine-tune how your assistant responds</p>
                        <div className="space-y-4">
                            {[
                                { label: "Temperature", value: "0.7" },
                                { label: "Max tokens", value: "1024" },
                                { label: "Top P", value: "0.9" },
                                { label: "Frequency penalty", value: "0.0" }
                            ].map((setting, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <span className="text-white/60">{setting.label}</span>
                                    <div className="bg-[#1A1A1A] px-3 py-1 rounded text-white/80">{setting.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Add this Counter component at the bottom of the file
function Counter({ from, to }: { from: number; to: number }) {
    const nodeRef = useRef(null);
    const inView = useInView(nodeRef);
    const count = useMotionValue(from);
    
    useEffect(() => {
        if (inView) {
            const controls = animate(count, to, { duration: 1 });
            return controls.stop;
        } else {
            count.set(from);
        }
    }, [inView, to, count, from]);

    return (
        <motion.span ref={nodeRef}>
            {Math.round(count.get())}
        </motion.span>
    );
}

