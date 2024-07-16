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
        flex flex-row flex-wrap 
        ${isReverse && "flex-row-reverse"}
      `}
    >
      <div
        className="
          min-w-[500px] w-1/2 h-[400px]
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
          min-w-[500px] w-1/2 h-[400px] 
          text-center flex-auto flex
            flex-col justify-center items-center
          "
      >
        <h2 className="text-3xl font-bold uppercase mb-6 text-gray-900 drop-shadow-sm">
          {titulo}
        </h2>
        <h3 className="text-lg font-semibold italic text-gray-900 mb-4">
          {subTitulo}
        </h3>
        <p className="text-sm font-light text-gray-900 leading-6 max-w-[500px]">
          {sobre}
        </p>
      </div>
    </div>
  );
}
