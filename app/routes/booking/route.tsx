import { BookingTable, Overview } from "~/components/custom";
import { data } from "~/mock/data";

export default function Booking() {
  return (
    <div className='bg-gray-800' >
      <Overview />
      <BookingTable booking={data} />
    </div>
  );
}
