import Image from "next/image";
import CardSorvete from "@/components/CardSorvete";

export default function page() {
  return (
    <>
      <section
        className="
          w-full h-screen
          bg-no-repeat bg-center bg-cover
          bg-[url('/banner-sabores.jpg')]
          flex items-center justify-center
        "
      >
        <h1
          className="
            text-white text-center font-extrabold drop-shadow-lg px-4
            text-5xl md:text-7xl
            "
        >
          Nossos Sorvetes
        </h1>
      </section>
      <main className="container py-16">
        <h2
          className="
            uppercase text-center font-semibold mb-10
            text-2xl sm:text-3xl md:text-4xl
            "
        >
          Sabores de Sorvete
        </h2>
        <div className="flex flex-col flex-wrap md:flex-row gap-4">
          <CardSorvete />
          <CardSorvete />
          <CardSorvete />
          <CardSorvete />
          <CardSorvete />
          <CardSorvete />
        </div>
      </main>
    </>
  );
}
