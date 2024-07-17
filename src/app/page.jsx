import CardsHome from "@/components/CardsHome";

export default function Home() {
  return (
    <>
      <section
        className="
          w-full h-screen
          bg-no-repeat bg-center bg-auto bg-emphasis
          bg-[url('/banner-home.png')]
          flex items-center justify-center
        "
      >
        <h1 className="text-white text-center font-extrabold text-5xl md:text-7xl drop-shadow-lg">
          Sorvete Artesanal
        </h1>
      </section>
      <main className="mx-auto max-w-[1440px]">
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

        <CardsHome
          titulo="Sobre Nós"
          subTitulo="Alegria em cada casquinha!"
          sobre="
            Venha tomar o melhor sorvete da região aqui com a gente! Nós 
            estamos há anos no mercado produzindo o que tem de melhor para o 	
            nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma 
            visita e aproveite o melhor atendimento e o melhor sorvete da cidade.
          "
          img={{
            src: "/sobre-image.jpg",
            alt: "Image Sabores Sorvetes",
          }}
        />
      </main>
    </>
  );
}
