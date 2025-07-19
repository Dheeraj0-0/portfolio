import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Code, Database, Globe, Network, Users } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-8 w-8 text-blue-600" />,
      skills: ["Microsoft Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Terraform & Ansible"],
    },
    {
      title: "Programming",
      icon: <Code className="h-8 w-8 text-green-600" />,
      skills: ["Python", "Bash Scripting", "Data Structures", "OOP Principles"],
    },
    {
      title: "Data & Security",
      icon: <Database className="h-8 w-8 text-purple-600" />,
      skills: ["SQL & NoSQL", "Cloud Security", "Network Monitoring", "Azure Monitor"],
    },
    {
      title: "Web Development",
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
      skills: ["Full-Stack Concepts", "Git & GitHub", "Web Technologies", "API Integration"],
    },
    {
      title: "Networking",
      icon: <Network className="h-8 w-8 text-orange-600" />,
      skills: ["TCP/IP Protocols", "Load Balancing", "Network Security", "Troubleshooting"],
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-8 w-8 text-red-600" />,
      skills: ["Problem Solving", "Team Collaboration", "Agile Methodologies", "Quick Learning"],
    },
  ];

  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Expertise</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive skill set spanning cloud technologies, programming, and modern development practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">{category.title}</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
