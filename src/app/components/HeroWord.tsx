
export default function HeroWord() {
    return (
        <div className="flex flex-col items-center min-[1350px]:items-start py-5 min-[1350px]:py-0">
            <div className="w-auto h-36 text-center min-[1350px]:text-left">
                <span className ="text-white text-6xl darker-grotesque-header">Trusted </span>
                <span className="text-[#120704] text-6xl darker-grotesque-header">AI answers</span> <br />
                <span className="text-white text-6xl darker-grotesque-header"> for your technical users</span>
            </div>
            <div className="text-white text-xl darker-grotesque-body pb-10 text-center min-[1350px]:text-left min-[1350px]:pr-40">
                Kapa.ai <span className="text-black">turns your knowledge base into a reliable LLM-powered Al assistant </span>that answers technical questions instantly and helps you
                find gaps in your documentation.</div>
            <div className="text-center w-40 bg-black hover:bg-[#13294b] rounded-2xl text-white text-base darker-grotesque-header py-2 px-4">Request Demo</div>

        </div>
    );
}