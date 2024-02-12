import { Moon } from "lucide-react";
export default function Header() {
  return (
    <header className="mt-4">
      <div className="text-white flex justify-between">
        <div className="flex items-center ">
          <div className="flex items-center gap-5">
            <span className="text-2xl">CREATIVE</span>
            <div className="bg-white rounded-full p-2 hover:cursor-pointer">
              <Moon size={16} color="black"/>
            </div>
          </div>
        </div>
        <img src="/logo.png" alt="logo fabien" />
        <span className="text-2xl">CONTACTS</span>
      </div>
    </header>
  );
}
