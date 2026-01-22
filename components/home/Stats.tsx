import { MapPin, ShoppingBag, Users, UserCheck } from "lucide-react"

export function Stats() {
    const stats = [
        {
            label: "Outlets Across India",
            value: "250+",
            icon: MapPin,
        },
        {
            label: "Products Available",
            value: "1,500+",
            icon: ShoppingBag,
        },
        {
            label: "Daily Footfall",
            value: "20,000+",
            icon: Users,
        },
        {
            label: "Happy Customers",
            value: "5,00,000+",
            icon: UserCheck,
        },
    ]

    return (
        <div className="relative z-20 -mt-20 container">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8 md:divide-x divide-gray-100">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center text-center space-y-2 group">
                        <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                            <stat.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                        <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
