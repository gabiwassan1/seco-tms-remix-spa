import Avatar from "~/components/custom/avatar";
import logo from "~/assets/logo.svg";
import { Link } from "@remix-run/react";
import Routes from "~/routes";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white flex justify-between items-center p-4">
      <div className="flex items-center space-x-5">
        <Link to={Routes.Home}>
          <img src={logo} alt="logo" className="h-10 w-30" />
        </Link>
        <Link to={Routes.Booking}>Booking</Link>
        <Link to={Routes.Carriers}>Carriers</Link>
        <Link to={Routes.Shippers}>Shippers</Link>
        <Link to={Routes.Clients}>Clients</Link>
      </div>
      <div>
        <Avatar />
      </div>
    </nav>
  );
}
