import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Shield, Cloud, Server, Lock, Network, Database, Target, Map, Code, Users } from "lucide-react";
import { programs } from "@/lib/data";

const IconMap: Record<string, React.ElementType> = {
  Database, Cloud, Lock, Shield, Server, Network
};

const ColorMap: Record<string, string> = {
  Database: "text-primary",
  Cloud: "text-blue-500",
  Lock: "text-red-500",
  Shield: "text-accent",
  Server: "text-green-500",
  Network: "text-orange-500"
};

export default function Programs() {
  return (
    <div className="pt-24 pb-20 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6">Explore <span className="text-gradient">Training Programs</span></h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-4">
            Deep technical depth courses built for working professionals. Choose your roadmap to your next promotion.
          </p>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
            We deliver industry-focused corporate training programs in Cybersecurity, Cloud, DevOps, and Data Engineering to help teams upskill and perform better.
          </p>
        </div>

        {/* Missing Content: The 4-Step Methodology */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">From Discovery to Interview Readiness</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Every stage is designed to move learners toward measurable delivery capability and role conversion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlassCard delay={0.1} className="p-6 border-t-4 border-t-primary">
              <Target className="text-primary w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">1. Assessment</h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span> Role-gap mapping</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span> Experience benchmarking</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span> Transition feasibility</li>
              </ul>
            </GlassCard>

            <GlassCard delay={0.2} className="p-6 border-t-4 border-t-accent">
              <Map className="text-accent w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">2. Custom Plan</h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></span> Milestone roadmap</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></span> Cert sequencing</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></span> Weekly learning cadence</li>
              </ul>
            </GlassCard>

            <GlassCard delay={0.3} className="p-6 border-t-4 border-t-green-400">
              <Code className="text-green-400 w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">3. Hands-on Labs</h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></span> Scenario-driven labs</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></span> Mentor feedback</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></span> Portfolio-ready projects</li>
              </ul>
            </GlassCard>

            <GlassCard delay={0.4} className="p-6 border-t-4 border-t-blue-400">
              <Users className="text-blue-400 w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">4. Interview Ready</h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span> Mock interview practice</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span> Resume polishing</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span> Conversion strategy</li>
              </ul>
            </GlassCard>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog, idx) => {
            const Icon = IconMap[prog.iconName] || Cloud;
            const iconColor = ColorMap[prog.iconName] || "text-primary";
            
            return (
              <GlassCard key={prog.slug} delay={(idx % 3) * 0.1} className="flex flex-col h-full">
                <Icon className={`${iconColor} w-8 h-8 mb-4`} />
                <h3 className="text-2xl font-bold text-white mb-3">{prog.title}</h3>
                <p className="text-foreground/70 flex-grow mb-6">{prog.desc}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-white/10">
                  <div>
                    <p className="text-xs text-foreground/50 uppercase tracking-wider mb-1">Duration</p>
                    <p className="font-semibold text-white text-sm">{prog.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/50 uppercase tracking-wider mb-1">Mode</p>
                    <p className="font-semibold text-white text-sm">{prog.mode}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs text-foreground/50 uppercase tracking-wider mb-1">Level</p>
                    <p className="font-semibold text-white text-sm">{prog.level}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <AnimatedButton href={`/programs/${prog.slug}`} variant="outline" className="flex-1 text-sm py-3 px-0">
                    View Program
                  </AnimatedButton>
                  <AnimatedButton href="/contact" className="flex-1 text-sm py-3 px-0">
                    WhatsApp Details
                  </AnimatedButton>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
