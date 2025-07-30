export function Comp1() {
  return (
    <div className="flex basis-auto flex-col max-w-sm bg-Purple-500 p-6 mx-auto my-24 rounded-xl ">
      <div className="flex flex-row items-center justify-around p-3 rounded-lg gap-x-4 w-fit">
        <img
          src={names[person.name]}
          className="size-10 ring-2 ring-Purple-300 bg-sky-300 rounded-full"
          alt="profile pic"
        />

        <div className="text-white">
          <p className="text-lg font-normal">Daniel Clifford</p>
          <p className="text-sm font-light">Verified Graduate</p>
        </div>
      </div>

      <p className="w-full  text-2xl text-white font-medium my-6">
        I received a job offer mid-course, and the subjects I learned were
        current, if not more so, in the company I joined. I honestly feel I got
        every penny’s worth.
      </p>
      <p className="w-full  text-white text-lg font-light">
        “ I was an EMT for many years before I joined the bootcamp. I’ve been
        looking to make a transition and have heard some people who had an
        amazing experience here. I signed up for the free intro course and found
        it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was
        the best - and most grueling - time of my life. Since completing the
        course, I’ve successfully switched careers, working as a Software
        Engineer at a VR startup. ”
      </p>
    </div>
  );
}
