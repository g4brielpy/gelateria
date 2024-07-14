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
      <main>
        <h2>main</h2>
      </main>
    </>
  );
}
