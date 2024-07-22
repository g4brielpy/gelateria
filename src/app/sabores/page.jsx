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
        <div className="flex flex-col flex-wrap items-center md:flex-row md:justify-center gap-4">
          <CardSorvete
            titulo="Sorvete de Oreo"
            descricao="Delicioso sorvete sabor Oreo. Uma explosão de sabor."
            img={{
              src: "/sabor-oreo.png",
              alt: "Image sabor Oreo",
            }}
          />
          <CardSorvete
            titulo="Sorvete Pistache"
            descricao="Cremoso sorvete sabor pistache com pedacinhos de semente."
            img={{
              src: "/sabor-pistache.png",
              alt: "Image sabor pistache",
            }}
          />
          <CardSorvete
            titulo="Sorvete Cookies & Avelã"
            descricao="O nosso melhor sorvete. Você vai adorar o sabor."
            img={{
              src: "/sabor-cookies-avela.png",
              alt: "Image sabor cookies avela",
            }}
          />
          <CardSorvete
            titulo="Sorvete de Kiwi"
            descricao="Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C."
            img={{
              src: "/sabor-kiwi.png",
              alt: "Image sabor kiwi",
            }}
          />
          <CardSorvete
            titulo="Sorvete de Morango"
            descricao="Sorvete de morango gourmet. Tradicional e saboroso."
            img={{
              src: "/sabor-morango.png",
              alt: "Image sabor morango",
            }}
          />
          <CardSorvete
            titulo="Sorvete de Limão Siciliano"
            descricao="O incrivel sorvete gourmet de limão siciliano vai te encantar."
            img={{
              src: "/sabor-limao.png",
              alt: "Image sabor limao",
            }}
          />
        </div>
      </main>
    </>
  );
}
