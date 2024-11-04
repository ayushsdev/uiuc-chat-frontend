'use client';
import Header from "./Header";
import HeroWord from "./HeroWord";
import ChatDemo from "./ChatDemo";
export default function Hero() {
    return (
    <div className="w-full min-[1350px]:h-[70vh] h-screen bg-gradient-to-t from-[#0A0A0A] via-[#13294b] to-[#1d58a7] flex-col items-center relative">
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