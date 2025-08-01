import type { CardProps } from "../types";

const Card = ({ title, value, icon, isList = false }: CardProps) => {
  return (
    <div className="card bg-teal-950 shadow-lg border border-base-200">
      <div className="card-body items-center text-center">
        {icon && <div className="text-primary">{icon}</div>}
        <h2 className="card-title text-lg font-semibold">{title}</h2>
        {isList && Array.isArray(value) ? (
          <ul className="list-disc text-gray-500 text-sm text-left mt-2 space-y-1">
            {value.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-xl font-mono text-gray-500">{value}</p>
        )}
      </div>
    </div>
  );
};

export default Card;
