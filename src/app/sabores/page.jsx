import Image from "next/image";

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
        <h1 className="text-white text-center font-extrabold text-5xl md:text-7xl drop-shadow-lg px-4">
          Sorvete Artesanal
        </h1>
      </section>
    </>
  );
}
