import { CardsHome } from "@/components/CardsHome";

export default function Home() {
  return (
    <>
      <section
        className="
          w-full h-screen relative
          bg-no-repeat bg-center bg-auto bg-emphasis
          flex items-center justify-center
        "
        style={{ backgroundImage: "url('/banner-home.png')" }}
      >
        <h1 className="text-white font-extrabold text-7xl drop-shadow-lg">
          Sorvete Artesanal
        </h1>
      </section>
      <main className="container ">
        <CardsHome
          titulo="Nossos Sabores"
          subTitulo="Novos e deliciosos!"
          sobre="
            Sorvete bom é aquele feito com os melhores ingredientes! Aqui na 
            gelateria todos os nossos produtos são naturais, à base de frutas e 
            sem nenhum conservante! Também temos opções sem lactose e sem açúcar. 
            Venha conhecer e perceber que tem como o sorvete ser delicioso e 
            saudável ao mesmo tempo!
          "
          img={{
            src: "/banner-sabores.jpg",
            alt: "Image Sabores Sorvetes",
          }}
        />

        <CardsHome
          titulo="Nossos Eventos"
          subTitulo="Delicias com sorvete!"
          sobre="
            Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui 
            prontinhos para te atender e oferecer os melhores eventos com os 
            melhores sorvete da sua vida! Venha nos conhecer e passar um 
            tempo aqui com a gente.
          "
          img={{
            src: "/eventos-image.jpg",
            alt: "Image Sabores Sorvetes",
          }}
          isReverse={true}
        />
      </main>
    </>
  );
}
