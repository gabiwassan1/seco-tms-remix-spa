import { SVGProps } from "react";
import { Card } from "~/components/ui/card";

export default function ContentDemo() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="flex flex-col items-center text-center space-y-4 border-transparent">
            <TruckIcon className="h-12 w-12 text-orange-500" />
            <h3 className="text-xl font-bold">Freight Forwarding</h3>
            <p className="text-gray-200">
              Our experienced team handles all your freight forwarding needs,
              ensuring timely and efficient delivery.
            </p>
          </Card>
          <Card className="flex flex-col items-center text-center space-y-4 border-transparent">
            <WarehouseIcon className="h-12 w-12 text-orange-500" />
            <h3 className="text-xl font-bold">Warehousing</h3>
            <p className="text-gray-200">
              Utilize our state-of-the-art warehousing facilities to store and
              manage your goods with care.
            </p>
          </Card>
          <Card className="flex flex-col items-center text-center space-y-4 border-transparent">
            <ForkliftIcon className="h-12 w-12 text-orange-500" />
            <h3 className="text-xl font-bold">Transportation</h3>
            <p className="text-gray-200">
              Our reliable transportation services ensure your goods reach their
              destination safely and on time.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

function ForkliftIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
      <path d="M12 12H5a2 2 0 0 0-2 2v5" />
      <circle cx="13" cy="19" r="2" />
      <circle cx="5" cy="19" r="2" />
      <path d="M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5" />
    </svg>
  );
}

function WarehouseIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
      <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" />
      <path d="M6 18h12" />
      <path d="M6 14h12" />
      <rect width="12" height="12" x="6" y="10" />
    </svg>
  );
}

function TruckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  );
}
