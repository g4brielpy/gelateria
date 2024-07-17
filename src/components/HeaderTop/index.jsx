import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white sm:h-20 w-full flex items-center">
      <div
        className="
        container
        flex 
          items-center flex-col sm:flex-row justify-center sm:justify-between flex-wrap gap-4"
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
        <nav
          className="
            pt-6 pb-4 w-full sm:w-fit font-bold
            sm:border-none border-t-2 border-solid border-neutral-950/20
            flex justify-around sm:justify-center gap-6
            "
        >
          <Link href="/">Home</Link>
          <Link href="sabores/">Sabores</Link>
          <Link href="sobre/">Sobre</Link>
        </nav>
      </div>
    </header>
  );
}
