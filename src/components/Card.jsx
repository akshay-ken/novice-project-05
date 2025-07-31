import clsx from "clsx";

export function Card({ name, title, overview, description, imgAvtar }) {
  const cardChanges = clsx({
    "bg-Purple-500 text-white": name == "Daniel Clifford",
    "bg-gray-600 text-gray-200": name == "Jonathan Walters",
    "text-gray-700": name == "Jeanette Harmon",
    "bg-Dark-blue text-gray-300": name == "Patrick Abrams",
    "bg-white text-gray-700": name == "Kira Whittle",
  });
  const ringColor = clsx({
    " ring-2 ring-Purple-300": name == "Daniel Clifford",
    "ring-2 ring-gray-200": name == "Jonathan Walters",
    " ring-2 ring-gray-400": name == "Jeanette Harmon",
    "ring-2 ring-Purple-300": name == "Patrick Abrams",
    "ring-2 ring-gray-400": name == "Kira Whittle",
  });

  return (
    <div
      className={`flex basis-auto flex-col max-w-sm shadow-2xl shadow-Dark-blue  p-6 mx-auto my-16 rounded-xl ${cardChanges}`}
    >
      <div className="flex flex-row items-center justify-around p-3 rounded-lg gap-x-4 w-fit">
        <img
          src={imgAvtar}
          className={`size-10 rounded-full ${ringColor}`}
          alt="profile pic"
        />

        <div>
          <p className="text-lg font-normal">{name}</p>
          <p className="text-sm font-light">{title}</p>
        </div>
      </div>

      <p className="w-full text-2xl font-medium my-6">{overview}</p>
      <p className="w-full text-lg font-light">{description}</p>
    </div>
  );
}
