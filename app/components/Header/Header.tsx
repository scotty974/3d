import { Moon, Sun } from "lucide-react";
import Link from "next/link";

export default function Header() {
 
  return (
    <header className="mt-4">
      <div className="text-white flex justify-between">
        <div className="flex items-center ">
          <div className="flex items-center gap-5">
            
            <span className="text-white text-center text-2xl">Don't move the mouse</span>
          </div>
        </div>
        <Link href="/">
          <img src="/logo.png" alt="logo fabien" />
        </Link>
        <a className="text-2xl hover:underline" href="https://www.linkedin.com/in/fabien-etheve-7125a0226/" target="_blank">CONTACTS</a>
      </div>
    </header>
  );
}
