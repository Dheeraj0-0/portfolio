import { Badge } from "@/components/ui/badge";

export default function CertificationsBanner() {
  const certifications = [
    {
      name: "Azure Administrator",
      code: "AZ-104",
      icon: "🏆",
      color: "bg-blue-50 text-blue-700",
      url: "https://learn.microsoft.com/en-us/users/dheerajparihar-2027/credentials/5642cb1f01cd074f"
    },
    {
      name: "Azure Fundamentals",
      code: "AZ-900",
      icon: "🎯",
      color: "bg-blue-50 text-blue-700",
      url: "https://learn.microsoft.com/en-gb/users/dheerajparihar-2027/credentials/515b573f4911b0e?ref=https%3A%2F%2Fwww.linkedin.com%2F"
    },
    {
      name: "Cloud Skills Boost",
      code: "Google",
      icon: "🌟",
      color: "bg-green-50 text-green-700",
      url: "https://www.cloudskillsboost.google/public_profiles/89643b02-2aaf-4acf-8f41-a1298a02824d"
    },
    {
      name: "AWS Fundamentals",
      code: "Coursera",
      icon: "⚡",
      color: "bg-orange-50 text-orange-700",
      url: "https://www.coursera.org/account/accomplishments/specialization/WB2ED8EAU5DW"
    },
    {
      name: "Networking Basics",
      code: "Cisco",
      icon: "🔗",
      color: "bg-blue-50 text-blue-700",
      url: "https://www.credly.com/badges/289a6bfb-e410-43e8-b4d7-929aef573400/linked_in_profile"
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
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow border hover:bg-gray-100 cursor-pointer"
            >
              <div className="text-3xl mb-2">{cert.icon}</div>
              <div className="text-sm font-semibold text-gray-800 mb-1">{cert.name}</div>
              <Badge variant="secondary" className="text-xs">
                {cert.code}
              </Badge>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
