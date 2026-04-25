import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight, Quote } from "lucide-react";
import Link from "next/link";

export default function SuccessStories() {
  const stories = [
    {
      title: "Support Engineer to AWS Architect",
      name: "Rohit S.",
      role: "Cloud Architect | Bengaluru",
      tags: ["AWS", "Architecture", "Migration"],
      before: "L1 Support, 4.8 LPA",
      after: "Cloud Architect, 11.2 LPA",
      course: "AWS Solutions Architect Associate",
      link: "/programs/aws-solutions-architect-associate"
    },
    {
      title: "SysAdmin to DevOps Engineer",
      name: "Ankit R.",
      role: "DevOps Engineer | Pune",
      tags: ["CI/CD", "Kubernetes", "Automation"],
      before: "Infra Ops, 5.4 LPA",
      after: "DevOps Engineer, 12.5 LPA",
      course: "AWS DevOps Engineer Professional",
      link: "/programs/aws-devops-engineer-professional"
    },
    {
      title: "IT Executive to Azure Admin",
      name: "Sneha M.",
      role: "Azure Administrator | Noida",
      tags: ["Azure", "IAM", "Governance"],
      before: "IT Executive, 4.2 LPA",
      after: "Azure Administrator, 9.6 LPA",
      course: "Azure AZ-104",
      link: "/programs/azure-az104"
    }
  ];

  return (
    <div className="pt-24 pb-20 relative min-h-screen">
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-accent/20 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6">Success <span className="text-gradient">Stories</span></h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Read how professionals transformed their careers and achieved significant salary growth through our programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <GlassCard key={idx} delay={idx * 0.15} className="flex flex-col h-full relative">
              <Quote className="absolute top-6 right-6 text-white/10 w-16 h-16" />
              
              <div className="mb-6 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">{story.title}</h3>
                <h4 className="text-lg font-semibold text-primary">{story.name}</h4>
                <p className="text-foreground/70 text-sm">{story.role}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                {story.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="space-y-3 mb-8 flex-grow relative z-10 border-l-2 border-primary/30 pl-4">
                <div>
                  <p className="text-xs text-foreground/50 uppercase tracking-wider mb-1">Before</p>
                  <p className="text-white font-medium">{story.before}</p>
                </div>
                <div>
                  <p className="text-xs text-foreground/50 uppercase tracking-wider mb-1">After</p>
                  <p className="text-primary font-bold">{story.after}</p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-white/10 mt-auto relative z-10">
                <p className="text-sm text-foreground/60 mb-3">Course Taken:</p>
                <Link href={story.link} className="group flex items-center justify-between hover:bg-white/5 p-3 rounded-lg transition-colors border border-transparent hover:border-white/10">
                  <span className="text-white font-medium text-sm">{story.course}</span>
                  <ArrowRight className="text-primary w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
