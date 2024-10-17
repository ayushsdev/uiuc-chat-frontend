export default function ChatDemo() {
    return (
        <div className="md:w-auto md:h-[290px] flex-col bg-[#13294b]/100 rounded-2xl">
           <div className="w-96 h-14 bg-[#ff5f05]/100 rounded-tl-2xl rounded-tr-2xl" />
            <div className = "flex justify-center items-center gap-4 pt-3">
                <div className="w-72 h-10 bg-[#0e0d0d] rounded-tl-lg rounded-tr-sm rounded-bl-lg rounded-br-lg " />
                <div className="w-11 h-10 bg-[#d9d9d9] rounded-lg" />
            </div>
            <div className = "flex justify-center items-start gap-4 pt-5">
                <div className="w-11 h-10 bg-[#d9d9d9] rounded-lg" />
                <div className="w-72 h-36 bg-[#0d0c0c] rounded-tl-sm rounded-tr-2xl rounded-bl-2xl rounded-br-2xl border-2 border-[#ff5f05]" />
            </div>
        </div>
    );
}