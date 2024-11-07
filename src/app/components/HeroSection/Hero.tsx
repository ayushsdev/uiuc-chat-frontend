'use client';
import Header from "./Header";
import HeroWord from "./HeroWord";
import ChatDemo from "./ChatDemo";
export default function Hero() {
    return (
    <div className="w-full min-[1350px]:h-[70vh] h-screen relative">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#13294b] to-[#1d58a7]" />
        
        {/* Diagonal lines overlay */}
        <div className="absolute inset-0" 
            style={{
                backgroundImage: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 10px,
                    rgba(19, 41, 75, 0.5) 10px,
                    rgba(19, 41, 75, 0.5) 20px
                )`
            }}
        />

        {/* Content container */}
        <div className="w-4/5 mx-auto relative z-10">
            <Header />
            <div className="flex flex-col min-[1350px]:flex-row justify-between items-center py-32 w-full">
                <HeroWord />
                <div className="animate-float">
                    <ChatDemo />
                </div>
            </div>
        </div>
    </div>
    );
}
// 