import Cards from "../component/Cards";
import Cards2 from "../component/Cards2";
import Topbar from "../component/Topbar";

const Dashboard = () => {
    const cardslabel = [
        {label: "Total Inventory", number: "800"},
        {label: "Low in stock items", number: "0"},
        {label: "Out of stocks item", number: "0"},
        {label: "Sales", number: "₱0.00"},
    ];

    return (
        <div className="w-full h-full flex flex-col justify-start items-start gap-5 p-5">
            <div className="w-full h-full">
                <Topbar label="Dashboard" />
            </div>
            <div className="w-full h-full flex justify-center items-start gap-5">
                {cardslabel && cardslabel.map((item, index) => 
                    <div key={index} className="w-full sm:w-1/2  p-2">
                        <Cards label={item.label} number={item.number} />
                    </div>
                )}
            </div>
            <div className="w-full flex justify-center items-start gap-5">
                <div className="w-full h-auto  p-2">
                    <Cards2 />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
