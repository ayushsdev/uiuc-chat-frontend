import Link from 'next/link'

export default function Header() {
    return (
    <div className="w-full md:h-16 flex-auto flex items-center justify-between">
        <div className="text-white text-4xl darker-grotesque-header">
            UIUC.chat
        </div>
        <div className="h-[46px] hidden gap-10 min-[1310px]:flex px-5 bg-black/50 rounded-[20px] items-center justify-between">
            <Link href= "/" className="text-white/60 hover:text-white  text-base darker-grotesque-body">
                Use cases
            </Link>
            <Link href= "/" className="text-white/60 hover:text-white text-base darker-grotesque-body">
                Customer Stories
            </Link>
            <Link href= "/" className="text-white/60 hover:text-white text-base darker-grotesque-body">
                Security 
            </Link>
            <Link href= "/" className="text-white/60 hover:text-[#ff5f05] text-base darker-grotesque-body">
                Podcast
            </Link>
            <Link href= "/" className="text-white/60 hover:text-white text-base darker-grotesque-body">
                Docs
            </Link>
        </div>
        <div className = "flex justify-center items-center gap-4">
            <Link href = '/' className=" text-center text-white text-xl darker-grotesque-header">Sign In</Link>
            <button className="text-center bg-black hover:bg-[#13294b] rounded-2xl text-white text-base darker-grotesque-header py-2 px-4">Request Demo</button>
        </div>
    </div>
);
}