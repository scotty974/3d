import Link from "next/link";


export default function CardWorks({link, name}:{link:string,name:string}){
    return <Link href={link}target="_blank" className="border-b-2 border-gray-800 py-2 hover:bg-white hover:text-black">
        <p className="text-8xl">{name}</p>
    </Link>
}