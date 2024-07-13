import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";

export default function Header() {
  return (
    <header
      className="
      container 
      flex 
        items-center justify-between"
    >
      <div>
        <Image src="/logo.png" alt="Logo Sorveteria" width="90" height="100" />
      </div>
      <nav className="space-x-6 font-bold">
        <Link href="/">Home</Link>
        <Link href="/">Sabores</Link>
        <Link href="/">Sobre</Link>
      </nav>
    </header>
  );
}
