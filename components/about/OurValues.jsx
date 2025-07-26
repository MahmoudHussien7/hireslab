import { Shield, Handshake, TrendingUp, Users } from "lucide-react"

export default function FeaturesSection() {
    const features = [
        {
            icon: Shield,
            title: "Passion for Invention",
            description:
                "A Journey From Passion To Inventions, From Inventions To Ideas, From Ideas To Results.",
        },
        {
            icon: Handshake,
            title: "Integrity & Agility",
            description:
                "We Are Trustworthy With A Keen Target In Mind To Deliver Results In Our Clients Best Interest.",
        },
        {
            icon: TrendingUp,
            title: "Clients Obsession",
            description:
                "Our Clients Always Comes First, Everything We Do Revolves Around Them.",
        },
        {
            icon: Users,
            title: "Employee Development",
            description:
                "We Believe That Our Success Comes From Our Internal Staff , We Hire , We Train , We Develop, We Appreciate.",
        },
    ]

    return (
        <section className="bg-purple-700 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon
                        return (
                            <div key={index} className="text-center text-white">
                                <div className="flex justify-center mb-6">
                                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-4 leading-tight">{feature.title}</h3>
                                <p className="text-purple-100 leading-relaxed text-sm">{feature.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
