import Image from "next/image";

export default function CardSorvete() {
  return (
    <div className="bg-slate-200 w-[300px] p-4 text-center flex flex-col items-center">
      <div className="image bg-slate-400 min-h-[200px] flex">
        <Image
          src="/sabor-oreo.png"
          alt="Image sabor Oreo"
          width="500"
          height="200"
          className="object-cover w-fit"
        />
      </div>
      <div className="image bg-slate-00 p">
        <h3 className="font-bold">Sorvete de Oreo</h3>
        <small>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</small>
      </div>
    </div>
  );
}
