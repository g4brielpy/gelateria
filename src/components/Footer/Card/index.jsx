export default function Card({ titulo = "", contatos = [] }) {
  return (
    <div className="p-4 min-w-[15rem] min-h-[10rem] flex-1 rounded-sm bg-neutral-950/90">
      <h3 className="font-bold uppercase mb-3">{titulo}</h3>
      <ul className="space-y-1">
        {contatos.map((contato, index) => (
          <li key={index}>{contato}</li>
        ))}
      </ul>
    </div>
  );
}
