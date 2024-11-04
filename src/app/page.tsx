'use client';

import { motion } from 'framer-motion';
import Hero from "./components/HeroSection/Hero.tsx";
import HowItWorks from "./components/HowItWorks/HowItWorks.tsx";
import Features from "./components/Features.tsx";
import BetterThanChatbot from "./components/BetterThanChatbot.tsx";
export default function Home() {
    const pageVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <motion.div 
            className="flex-col"
            initial="hidden"
            animate="visible"
            variants={pageVariants}
        >
            <motion.div variants={sectionVariants}>
                <Hero />
            </motion.div>
            <motion.div variants={sectionVariants}>
                <HowItWorks />
            </motion.div>
            <motion.div variants={sectionVariants}>
                <Features />
            </motion.div>
            <motion.div variants={sectionVariants}>
                <BetterThanChatbot />
            </motion.div>
        </motion.div>
    );
}
