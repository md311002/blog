import Image from "next/image"
import Link from "next/link"

export default function Layout(props) {
    return (
        <div>
            <div className="flex bg-gray-700">
                <header className="flex-1 items-center ml-16 pt-2">
                    <Link href='/'>
                        <Image alt="hii" className="rounded-lg" src='/Images/site/572.png' width={50} height={50}></Image>
                    </Link>
                </header>

                <nav className="flex items-center pr-6">
                    <ul className="flex">
                        <li className="ml-2 px-2 mr-2 text-slate-300 "><Link href='/posts'>posts</Link></li>
                        <li className="mr-2 px-2 text-slate-300"> <Link href='/contact'>contact</Link></li>

                    </ul>

                </nav>
            </div>
            {props.children}
        </div>
    )
}