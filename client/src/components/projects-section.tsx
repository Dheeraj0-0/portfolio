import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Secure E-Commerce Platform",
      description: "Automated deployment pipelines with CI/CD integration and robust security implementation including network policies and credential management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Azure", "CI/CD", "Security"],
      hasSourceCode: true,
    },
    {
      title: "Phishing URL Detection",
      description: "Machine learning-powered web application to identify malicious phishing URLs with high accuracy, featuring an intuitive user interface.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "ML", "Security"],
      hasSourceCode: true,
    },
    {
      title: "Azure AD Monitoring",
      description: "Splunk integration for real-time Azure Active Directory monitoring with automated incident detection and compliance reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Azure AD", "Splunk", "Monitoring"],
      hasSourceCode: false,
    },
  ];

  const tagColors: { [key: string]: string } = {
    Azure: "bg-blue-100 text-blue-800",
    "CI/CD": "bg-green-100 text-green-800",
    Security: "bg-purple-100 text-purple-800",
    Python: "bg-yellow-100 text-yellow-800",
    ML: "bg-red-100 text-red-800",
    "Azure AD": "bg-blue-100 text-blue-800",
    Splunk: "bg-orange-100 text-orange-800",
    Monitoring: "bg-green-100 text-green-800",
  };

  return (
    <section id="projects" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Practical applications of cloud technologies and security solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className={`${tagColors[tag] || "bg-gray-100 text-gray-800"}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="text-primary hover:text-primary/80 p-0 h-auto font-semibold"
                >
                  {project.hasSourceCode ? (
                    <>
                      View Source Code <ExternalLink className="ml-1 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
