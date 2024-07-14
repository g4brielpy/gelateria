import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-emphasis">
      <div
        className="
        container
        flex 
          items-center justify-between flex-wrap gap-4"
      >
        <div>
          <Image
            src="/logo.png"
            alt="Logo Sorveteria"
            width="100"
            height="100"
            className="object-cover"
          />
        </div>
        <nav className="space-x-6 font-bold">
          <Link href="/">Home</Link>
          <Link href="/">Sabores</Link>
          <Link href="/">Sobre</Link>
        </nav>
      </div>
    </header>
  );
}
