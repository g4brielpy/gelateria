import Image from "next/image";

export default function page() {
  return (
    <>
      <section
        className="
          w-full h-screen
          bg-no-repeat bg-center bg-cover
          bg-[url('/banner-sobre.png')]
          flex items-center justify-center
        "
      >
        <h1
          className="
            text-white text-center font-extrabold drop-shadow-lg px-4
            text-5xl md:text-7xl
            "
        >
          A Gelateria
        </h1>
      </section>
      <main>
        <section className="container py-16">
          <h2 className="text-xl md:text-3xl lg:text-4xl text-center font-bold uppercase mb-6 text-gray-900 drop-shadow-sm">
            Sobre Nós
          </h2>
          <h3 className="font-semibold md:text-lg lg:text-xl text-center italic text-gray-900 mb-4">
            Nós simplesmente amamos sorvete!
          </h3>
          <div className="text-[0.75rem] md:text-sm lg:text-lg text-justify leading-6 font-light text-gray-900 space-y-4">
            <p>
              Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada
              sorvete produzido. Fazemos o melhor sorvete para os nossos
              clientes e gostamos de receber elogios. Estamos operando desde
              2009 com as melhores matérias-primas para a produção final do
              sorvete. Vendemos tanto para varejo como para atacado.
            </p>
            <p>
              Nossos clientes podem comprar os nossos sorvetes e degustar na
              nossa loja ou levar para sua residência e aproveitar junto com a
              família. Também vendemos para estabelecimentos e criamos eventos
              como festa de aniversário, formaturas e eventos empresariais. Para
              contratar os nossos serviços, basta entrar em contato conosco.
              Iremos proporcionar o melhor atendimento e os melhores produtos
              para você fazer a sua festa mais saborosa, com o melhor sorvete da
              cidade.
            </p>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row">
          <div className="flex-auto w-full h-[300px] sm:h-[350px] md:h-400px lg:h-[500px]">
            <Image
              src="/eventos-image.jpg"
              alt="Image de pessoas tomando sorvete"
              width="500"
              height="500"
              className="w-full h-full object-cover"
            ></Image>
          </div>
          <div className="flex-auto w-full h-[300px] sm:h-[350px] md:h-400px lg:h-[500px]">
            <Image
              src="/sorveteria.jpg"
              alt="Image da sorveteria"
              width="500"
              height="500"
              className="w-full h-full object-cover"
            ></Image>
          </div>
        </section>
      </main>
    </>
  );
}
