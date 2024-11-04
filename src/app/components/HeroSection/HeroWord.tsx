'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroWord() {
    return (
        <div className="flex flex-col items-center min-[1350px]:items-start py-5 min-[1350px]:py-0 w-full">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100 
                }}
                className="w-auto h-auto md:h-36 text-center min-[1350px]:text-left"
            >
                <motion.span 
                    className="text-4xl md:text-6xl text-white darker-grotesque-header"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    Trusted 
                </motion.span>
                <span className="text-4xl md:text-6xl darker-grotesque-header text-[#ff5f05]"> AI answers</span> <br />
                <span className="text-4xl md:text-6xl text-white darker-grotesque-header"> for your technical users</span>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white text-lg md:text-xl darker-grotesque-body pb-6 md:pb-10 text-center min-[1350px]:text-left min-[1350px]:pr-40 px-4 md:px-0"
            >
                Kapa.ai <span className="text-white">turns your knowledge base into a reliable LLM-powered Al assistant </span>
                that answers technical questions instantly and helps you find gaps in your documentation.
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <Link href="/" className="text-center w-40 bg-white hover:bg-[#ff5f05] rounded-2xl text-black text-base darker-grotesque-header py-2 px-4">
                    Request Demo
                </Link>
            </motion.div>
        </div>
    );
}