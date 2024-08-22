import Sidebar from "./component/Sidebar";
import Titlebar from "./component/Titlebar";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <div className="h-full w-full flex flex-col bg-green-800">
      <div className="flex justify-end item-center gap-5 p-5 bg-white shadow-2xl  ">
        <Titlebar
          label = "Log out"
        />
      </div>

      <div className="h-full w-full flex justify-start items-start gap-5 shadow-2xl">
        <Sidebar/>
        <div className="w-full h-full">
        <Dashboard/>
        </div>
      </div>
    
    </div>
  );
}

export default App;
