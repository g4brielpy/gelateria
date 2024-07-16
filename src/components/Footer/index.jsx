import Image from "next/image";
import Link from "next/link";
import Card from "./Card";

export default function index() {
  return (
    <footer className="bg-black text-white">
      <div className="container py-16 flex justify-center items-center flex-wrap gap-4">
        <div>
          <Image
            src="/logo.png"
            alt="Logo Gelateria"
            width="100"
            height="100"
          />
        </div>
        <div
          className="
            min-w-[600px] 
            flex flex-auto
             flex-wrap gap-4
            "
        >
          <Card
            titulo="Endereço"
            contatos={[
              "Av. Bernadinho de Campos, 98 - São Paulo, SP 12345-000",
            ]}
          />
          <Card
            titulo="Contato"
            contatos={["sorveteria@info.com", "(31) 9 9999-9999"]}
          />
          <Card
            titulo="Horários"
            contatos={["ABERTO TODOS OS DIAS", "10:30 às 22:00"]}
          />
        </div>
      </div>

      <div className="text-center py-4 px-4 bg-neutral-950/90">
        <p>
          &copy; Gelateria 2024 - Desenvolvido por{" "}
          <Link
            href="https://www.linkedin.com/in/g4briel-yur1/"
            target="_blank"
            className="font-semibold hover:underline"
          >
            Gabriel Iuri
          </Link>
        </p>
      </div>
    </footer>
  );
}
