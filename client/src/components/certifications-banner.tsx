import { Badge } from "@/components/ui/badge";

export default function CertificationsBanner() {
  const certifications = [
    {
      name: "Azure Administrator",
      code: "AZ-104",
      icon: "🏆",
      color: "bg-blue-50 text-blue-700",
    },
    {
      name: "Azure Fundamentals",
      code: "AZ-900",
      icon: "🎯",
      color: "bg-blue-50 text-blue-700",
    },
    {
      name: "Cloud Skills Boost",
      code: "Google",
      icon: "🌟",
      color: "bg-green-50 text-green-700",
    },
    {
      name: "AWS Fundamentals",
      code: "Coursera",
      icon: "⚡",
      color: "bg-orange-50 text-orange-700",
    },
    {
      name: "Networking Basics",
      code: "Cisco",
      icon: "🔗",
      color: "bg-blue-50 text-blue-700",
    },
  ];

  return (
    <section className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Certified Professional</h3>
          <p className="text-gray-600">Industry-recognized certifications demonstrating technical expertise</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow border"
            >
              <div className="text-3xl mb-2">{cert.icon}</div>
              <div className="text-sm font-semibold text-gray-800 mb-1">{cert.name}</div>
              <Badge variant="secondary" className="text-xs">
                {cert.code}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
