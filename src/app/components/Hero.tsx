import Header from "./Header";
import HeroWord from "./HeroWord";
import ChatDemo from "./ChatDemo";

export default function Hero() {
    return (
    <div className="w-full min-[1350px]:h-[70vh] h-screen  animated-gradient flex-col items-center">
        <div className = "w-4/5 mx-auto">
            <Header />
            <div className = "flex flex-col min-[1350px]:flex-row justify-between items-center py-32 w-full">
                <HeroWord />
                <ChatDemo />
            </div>
        </div>
    </div>
    );
}