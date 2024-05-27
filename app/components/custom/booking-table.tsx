/**
 * v0 by Vercel.
 * @see https://v0.dev/t/gyioFQ3Wvpb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "~/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
} from "~/components/ui/dropdown-menu";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "~/components/ui/table";
import { Badge } from "~/components/ui/badge";
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

type Props = {
  booking: {
    id: number;
    dispatch: number;
    routing: number;
    shipper: string;
    distance: number;
    size: number;
    pickupDate: string;
    carrier: string;
    appointment: string;
    arrival: string;
    status: string;
  }[];
};

export default function BookingTable(props: Props) {
  const { booking } = props;

  return (
    <div className="bg-gray-800 text-white border rounded-lg w-full">
      <div className="p-4 border-b flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="font-medium">Filter by:</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="gap-2" size="sm" variant="outline">
                <span>Status</span>
                <ChevronDownIcon className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48 text-white bg-gray-800">
              <DropdownMenuCheckboxItem>Delivered</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>In Transit</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Delayed</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="gap-2" size="sm" variant="outline">
                <span>Date</span>
                <ChevronDownIcon className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48 text-white bg-gray-800">
              <DropdownMenuCheckboxItem>Last 7 days</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Last 30 days</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Last 90 days</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="gap-2" size="sm" variant="outline">
                <span>City</span>
                <ChevronDownIcon className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48 text-white bg-gray-800">
              <DropdownMenuCheckboxItem>Memphis</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>New york</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="gap-2" size="sm" variant="outline">
                <span>Sort by</span>
                <ChevronDownIcon className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 text-white bg-gray-800">
              <DropdownMenuRadioGroup value="id">
                <DropdownMenuRadioItem value="id">
                  ID
                  <ChevronDownIcon className="w-4 h-4" />
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="dispatch">
                  Dispatch
                  <ChevronDownIcon className="w-4 h-4" />
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="routing">
                  Routing
                  <ChevronDownIcon className="w-4 h-4" />
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="shipper">
                  Shipper
                  <ChevronDownIcon className="w-4 h-4" />
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="distance">
                  Distance
                  <ChevronDownIcon className="w-4 h-4" />
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="size">
                  Size
                  <ChevronDownIcon className="w-4 h-4" />
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="pickup_date">
                  Pickup Date
                  <ChevronDownIcon className="w-4 h-4" />
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="carrier">
                  Carrier
                  <ChevronDownIcon className="w-4 h-4" />
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="appointment">
                  Appointment
                  <ChevronDownIcon className="w-4 h-4" />
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="arrival">
                  Arrival
                  <ChevronDownIcon className="w-4 h-4" />
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="status">
                  Status
                  <ChevronDownIcon className="w-4 h-4" />
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="relative w-full overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">
                ID
                <ChevronDownIcon className="w-4 h-4" />
              </TableHead>
              <TableHead>
                Dispatch
                <ChevronDownIcon className="w-4 h-4" />
              </TableHead>
              <TableHead>
                Routing
                <ChevronDownIcon className="w-4 h-4" />
              </TableHead>
              <TableHead>
                Shipper
                <ChevronDownIcon className="w-4 h-4" />
              </TableHead>
              <TableHead>
                Distance
                <ChevronDownIcon className="w-4 h-4" />
              </TableHead>
              <TableHead>
                Size
                <ChevronDownIcon className="w-4 h-4" />
              </TableHead>
              <TableHead>
                Pickup Date
                <ChevronDownIcon className="w-4 h-4" />
              </TableHead>
              <TableHead>
                Carrier
                <ChevronDownIcon className="w-4 h-4" />
              </TableHead>
              <TableHead>
                Appointment
                <ChevronDownIcon className="w-4 h-4" />
              </TableHead>
              <TableHead>
                Arrival
                <ChevronDownIcon className="w-4 h-4" />
              </TableHead>
              <TableHead>
                Status
                <ChevronDownIcon className="w-4 h-4" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {booking.map((book) => (
              <TableRow key={book.id}>
                <TableCell className="font-medium">{book.id}</TableCell>
                <TableCell>{book.dispatch}</TableCell>
                <TableCell>{book.routing}</TableCell>
                <TableCell>{book.shipper}</TableCell>
                <TableCell>{book.distance}</TableCell>
                <TableCell>{book.size}</TableCell>
                <TableCell>{book.pickupDate}</TableCell>
                <TableCell>{book.carrier}</TableCell>
                <TableCell>{book.appointment}</TableCell>
                <TableCell>{book.arrival}</TableCell>
                <TableCell>
                  <Badge
                    className={`${
                      book.status === "arrived"
                        ? "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                        : book.status === "in-transit"
                        ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400"
                        : book.status === "delayed"
                        ? "bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400"
                        : ""
                    }`}
                    variant="outline"
                  >
                    {book.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function ChevronDownIcon(
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
