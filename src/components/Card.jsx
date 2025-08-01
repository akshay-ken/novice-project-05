import clsx from "clsx";

export function Card({ name, title, overview, description, imgAvtar }) {
  const cardChanges = clsx({
    "bg-Purple-500 text-white md:col-span-2 md:max-w-full bg-[url('./assets/images/bg-pattern-quotation.svg')] bg-no-repeat bg-[position:95%_3%] ":
      name == "Daniel Clifford",
    "bg-gray-600 text-gray-200 ": name == "Jonathan Walters",
    "text-gray-700": name == "Jeanette Harmon",
    "bg-Dark-blue text-gray-300 md:col-span-2 md:min-w-fit":
      name == "Patrick Abrams",
    "bg-white text-gray-700 md:col-start-4 md:row-span-2 md:row-start-1 md:min-h-fit":
      name == "Kira Whittle",
  });
  const ringColor = clsx({
    " ring-Purple-300": name == "Daniel Clifford",
    "ring-gray-200": name == "Jonathan Walters",
    "ring-gray-400": name == "Jeanette Harmon",
    "ring-Purple-300": name == "Patrick Abrams",
    "ring-gray-400": name == "Kira Whittle",
  });

  return (
    <div
      className={`flex basis-auto flex-col max-w-sm  shadow-2xl  md:max-h-fit shadow-Dark-blue  p-6 md:p-4 mx-auto my-16 md:my-0 rounded-xl ${cardChanges}`}
    >
      <div className="flex flex-row items-center justify-around p-3 rounded-lg gap-x-4 w-fit">
        <img
          src={imgAvtar}
          className={`size-10 ring-2 rounded-full ${ringColor}`}
          alt="profile pic"
        />

        <div>
          <p className="text-lg font-normal ">{name}</p>
          <p className="text-sm font-light ">{title}</p>
        </div>
      </div>

      <p className="w-full text-2xl font-medium my-6 ">{overview}</p>
      <p className="w-full text-lg font-light ">{description}</p>
    </div>
  );
}
