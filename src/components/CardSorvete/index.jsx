import Image from "next/image";

export default function CardSorvete({
  titulo = "",
  descricao = "",
  img = { src: "", alt: "" },
}) {
  return (
    <div
      className="
          bg-gray-100/5 rounded-md shadow-md
          w-full md:max-w-[350px]
          p-4 text-center
          flex-auto flex 
            flex-col items-center"
    >
      <div className="h-[300px] flex justify-center">
        <Image
          src={img.src}
          alt={img.alt}
          width="500"
          height="500"
          className="object-cover flex-auto"
        />
      </div>
      <div className="image bg-slate-00 py-4">
        <h3
          className="
            font-bold mb-2 md:text-xl pt-4
            border-t-2 border-solid border-gray-400/40
            "
        >
          {titulo}
        </h3>
        <small className="md:text-sm text-gray-900">{descricao}</small>
      </div>
    </div>
  );
}
