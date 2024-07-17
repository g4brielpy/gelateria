import Image from "next/image";

export default function CardsHome({
  titulo = "",
  subTitulo = "",
  sobre = "",
  img = { src: "", alt: "" },
  isReverse = false,
}) {
  return (
    <div
      className={`
        flex flex-col flex-wrap lg:flex-row
        ${isReverse && "lg:flex-row-reverse"}
      `}
    >
      <div
        className="
          w-full lg:w-1/2 min-w-[200px] h-[400px]
          flex-auto
          "
      >
        <Image
          src={img.src}
          alt={img.alt}
          width="500"
          height="500"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="
          w-full lg:w-1/2 min-w-[200px] h-[400px] p-8
          text-center flex-auto flex
            flex-col justify-center items-center
          "
      >
        <h2 className="text-xl md:text-3xl font-bold uppercase mb-6 text-gray-900 drop-shadow-sm">
          {titulo}
        </h2>
        <h3 className="font-semibold md:text-lg italic text-gray-900 mb-4">
          {subTitulo}
        </h3>
        <p className="max-w-[500px] text-[0.75rem] md:text-sm leading-6 font-light text-gray-900">
          {sobre}
        </p>
      </div>
    </div>
  );
}
