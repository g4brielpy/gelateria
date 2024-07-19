import Image from "next/image";

export default function CardSorvete() {
  return (
    <div
      className="
          bg-gray-100/5 rounded-md shadow-md
          w-[300px] p-4 text-center
          flex-auto flex 
            flex-col items-center"
    >
      <div className="h-[300px] flex justify-center">
        <Image
          src="/sabor-oreo.png"
          alt="Image sabor Oreo"
          width="500"
          height="200"
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
          Sorvete de Oreo
        </h3>
        <small className="md:text-sm text-gray-900">
          Delicioso sorvete sabor Oreo. Uma explosão de sabor.
        </small>
      </div>
    </div>
  );
}
