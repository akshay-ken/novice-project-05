export function Card({ name, title, overview, description, imgAvtar }) {
  return (
    <div className="flex basis-auto flex-col max-w-sm bg-Purple-500 p-6 mx-auto my-16 rounded-xl ">
      <div className="flex flex-row items-center justify-around p-3 rounded-lg gap-x-4 w-fit">
        <img
          src={imgAvtar}
          className="size-10 ring-2 ring-Purple-300 bg-sky-300 rounded-full"
          alt="profile pic"
        />

        <div className="text-white">
          <p className="text-lg font-normal">{name}</p>
          <p className="text-sm font-light">{title}</p>
        </div>
      </div>

      <p className="w-full  text-2xl text-white font-medium my-6">{overview}</p>
      <p className="w-full  text-white text-lg font-light">{description}</p>
    </div>
  );
}
