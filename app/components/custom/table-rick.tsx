import { useEffect, useState } from "react";

type Character = {
  id: number;
  name: string;
  gender: string;
  species: string;
  actor: string;
  image: string;
};

export default function CharacterTable() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://hp-api.onrender.com/api/characters"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch characters");
      }

      const characters = await response.json();

      setCharacters(characters);
    }

    fetchData();
  }, []);

  return (
    <table className=" bg-gray-800 text-white table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Image</th>
          <th className="px-4 py-2">Gender</th>
          <th className="px-4 py-2">Specie</th>
          <th className="px-4 py-2">Actor</th>
        </tr>
      </thead>
      <tbody>
        {characters?.map((character) => (
          <tr key={character.id}>
            <td className="border px-4 py-2">{character.id}</td>
            <td className="border px-4 py-2">{character.name}</td>
            <td className="border p-3 h-10 w-10">
              <img
                className="rounded-full"
                src={character.image}
                alt={character.name}
              />
            </td>
            <td className="border px-4 py-2">{character.gender}</td>
            <td className="border px-4 py-2">{character.species}</td>
            <td className="border px-4 py-2">{character.actor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
