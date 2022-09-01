import Image from "next/image"
export default function Hero() {
    return (
        <div className="flex  flex-col bg-gray-800 items-center mb-4">
            <div className=" pt-4 ">
                <Image className="rounded-full " alt="hii" src="/Images/site/IMG_5255.jpg" width={200} height={200} />

            </div>
            <h1 className="oswald font-bold text-slate-300 text-5xl items-center mt-4 pb-4">Hi, I am Meet</h1>
            <p className="text-slate-300 pb-4 text-xl">I blog about Web-development and Trading</p>
        </div>
    )
}