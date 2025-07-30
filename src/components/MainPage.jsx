import { Comp1 } from "./Comp1";

import avatar1 from "../assets/images/image-daniel.jpg";
import avatar2 from "../assets/images/image-jeanette.jpg";
import avatar3 from "../assets/images/image-jonathan.jpg";
import avatar4 from "../assets/images/image-kira.jpg";
import avatar5 from "../assets/images/image-patrick.jpg";

import persons from "../assets/data/data.json";
import { Card } from "./Card";

const names = {
  "Daniel Clifford": avatar1,
  "Jonathan Walters": avatar3,
  "Jeanette Harmon": avatar2,
  "Patrick Abrams": avatar5,
  "Kira Whittle": avatar4,
};

export function MainPage() {
  return (
    <main>
      {persons.map((person) => {
        return (
          <Card
            name={person.name}
            title={person.title}
            overview={person.overview}
            description={person.desctiption}
            imgAvtar={names[person.name]}
          />
        );
      })}
    </main>
  );
}
