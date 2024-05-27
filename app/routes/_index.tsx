import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "SECO" },
    { name: "description", content: "Welcome to SECO" },
  ];
};

export default function Index() {
  return (
    <div className="flex justify-center">
      <h2 className="text-3xl font-semibold text-gray-200">Home</h2>
    </div>
  );
}
