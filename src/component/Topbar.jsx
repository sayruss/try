import { RxDashboard } from "react-icons/rx";

export default function Topbar({label}) {
  return (
    <div>
    <p className="bg-white h-auto text-green-800 text-4xl p-4 shadow-md flex items-center">
      <span className="text-green-800 p-1"><RxDashboard /></span>
      <b>{label}</b>
    </p>
  </div>
  )
}
