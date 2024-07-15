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
      className={`flex flex-row flex-wrap ${isReverse && "flex-row-reverse"}`}
    >
      <div className="image bg-red-600 flex-auto min-w-[500px] w-1/2 h-[400px]">
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
          min-w-[500px] w-1/2 h-[400px] text-center flex-auto flex
          flex-col justify-center items-center
          "
      >
        <h2 className="text-3xl font-bold mb-6">{titulo}</h2>
        <h3 className="text-lg font-semibold italic mb-4">{subTitulo}</h3>
        <p className="text-sm font-light text-gray-900 leading-6 max-w-[500px]">
          {sobre}
        </p>
      </div>
    </div>

    // <div
    //   className={`flex flex-col md:flex-row ${
    //     isReverse && "md:flex-row-reverse"
    //   }`}
    // >
    //   <div
    //     className="
    //     p-4 bg-slate-400
    //     flex flex-1 text-center
    //       flex-col justify-center items-center
    //   "
    //   >
    //     <h2 className="text-3xl font-bold uppercase mb-5">{titulo}</h2>
    //     <h3 className="font-semibold italic mb-4 text-gray-900">{subTitulo}</h3>
    //     <p
    //       className="text-sm text-gray-800"
    //       style={{ maxWidth: "500px", lineHeight: "1.6rem" }}
    //     >
    //       {sobre}
    //     </p>
    //   </div>
    //   <div className="flex-1">
    //     <Image
    //       src={img.src}
    //       alt={img.alt}
    //       width="500"
    //       height="500"
    //       className="w-full h-full object-cover"
    //     />
    //   </div>
    // </div>
  );
}
