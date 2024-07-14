import Image from "next/image";

export function CardsHome({
  titulo = "",
  subTitulo = "",
  sobre = "",
  img = { src: "", alt: "" },
  isReverse = false,
}) {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        isReverse && "md:flex-row-reverse"
      }`}
    >
      <div
        className="
        p-4 bg-slate-400
        flex flex-1 text-center
          flex-col justify-center items-center
      "
      >
        <h2 className="text-3xl font-bold uppercase mb-5">{titulo}</h2>
        <h3 className="font-semibold italic mb-4 text-gray-900">{subTitulo}</h3>
        <p
          className="text-sm text-gray-800"
          style={{ maxWidth: "500px", lineHeight: "1.6rem" }}
        >
          {sobre}
        </p>
      </div>
      <div className="flex-1">
        <Image
          src={img.src}
          alt={img.alt}
          width="500"
          height="500"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
