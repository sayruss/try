

export default function Cards({label, number}) {
  return (
          <div className="w-full h-full bg-emerald-300 p-4 rounded-3xl shadow-md">
            <div className="pl-3 text-2xl font-bold">{label}</div>
            <div className="p-10 text-4xl font-bold">{number}</div>
          </div>
    
  )
}
