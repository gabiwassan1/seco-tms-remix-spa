import { json } from "@remix-run/react";
import { useEffect, useState } from "react";

export async function clientLoader() {
  console.log("clientLoader");

  const character = await fetch("https://rickandmortyapi.com/api/character/2", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!character.ok) {
    throw new Error("Failed to fetch character");
  }

  return json({ character });
}

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  image: string;
};

export default function Avatar() {
  //   const character = useLoaderData<typeof clientLoader>();

  //   console.log(character);

  const [character, setCharacter] = useState<Character>();

  const randomId = Math.floor(Math.random() * 671);

  useEffect(() => {
    async function fetchData() {
      const character = await fetch(
        `https://rickandmortyapi.com/api/character/${randomId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!character.ok) {
        throw new Error("Failed to fetch character");
      }

      setCharacter(await character.json());
    }

    console.log(character);

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex items-center space-x-4">
      <img
        src={character?.image}
        alt="avatar"
        className="h-10 w-10 rounded-full object-cover"
      />
      <span>{character?.name}</span>
    </div>
  );
}

