/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hXWxA7fR8lP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

export default function Overview() {
  return (
    <div className="bg-gray-700 p-4 flex items-center justify-between rounded-2xl ml-3 mr-3 mb-4" >
      <h2 className="text-[#d65d00] font-bold text-3xl flex-shrink-0">
        {"Bookings >"}
      </h2>
      <div className="flex-1 flex justify-center">
        <div className="flex items-center space-x-16">
          <div className="flex items-center space-x-2">
            <ClockIcon className="text-[#d65d00] h-14 w-14" />
            <span className="text-[#d65d00] text-6xl font-semibold">26</span>
            <div className="flex text-center flex-col">
              <span className="text-[#d65d00] font-bold text-lg">Freight</span>
              <Link className="text-white underline text-sm" to="#">
                {"Arriving >"}
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <LayersIcon className="text-[#d65d00] h-14 w-14" />
            <span className="text-[#d65d00] text-6xl font-semibold">12</span>
            <div className="flex text-center flex-col">
              <span className="text-[#d65d00] font-bold text-lg">Loads</span>
              <Link className="text-white underline text-sm" to="#">
                Pending
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <ClockIcon className="text-[#d65d00] h-14 w-14" />
            <span className="text-[#d65d00] text-6xl font-semibold">36</span>
            <div className="flex text-center flex-col">
              <span className="text-[#d65d00] font-bold text-lg">Freight</span>
              <Link className="text-white underline text-sm" to="#">
                {"Delayed >"}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Button
        className="border border-[#d65d00] text-[#d65d00] px-4 py-2 rounded flex-shrink-0"
        variant="outline"
      >
        Import Loads
      </Button>
    </div>
  );
}

function ClockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function LayersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  );
}
