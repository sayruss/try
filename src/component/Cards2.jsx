export default function Cards2() {
    return (
      <div className="w-full h-auto p-4 flex flex-col md:flex-row gap-10">
        <div className="flex-1 bg-emerald-300 p-4 rounded-3xl">
          <div className="text-2xl font-bold">Reminders</div>
          <ul className="list-disc list-inside text-left p-4 pl-9 text-xl space-y-6">
            <li><b>Check inventory levels of key items</b></li>
            <li><b>Follow up on pending orders or deliveries</b></li>
            <li><b>Conduct maintenance checks on equipment</b></li>
            <li><b>Prepare for upcoming holidays or special occasions</b></li>
            <li><b>Review customer feedback and respond accordingly</b></li>
            <li><b>Evaluate and adjust pricing strategies if necessary</b></li>
            <li><b>Review sales performance for the week</b></li>
          </ul>
        </div>
  
        <div className="flex-1 bg-emerald-300 p-4 rounded-3xl">
          <div className="text-2xl font-bold">Recent Orders</div>
          
        </div>
      </div>
    )
  }
  