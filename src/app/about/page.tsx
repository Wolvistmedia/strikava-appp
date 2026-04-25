import { GlassCard } from "@/components/ui/GlassCard";
import { CheckCircle2, ChevronRight, Target, Users, BookOpen, Presentation } from "lucide-react";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

export default function About() {
  return (
    <div className="pt-24 pb-20 relative">
      {/* Background glow */}
      <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-primary/10 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6">About <span className="text-gradient">Strikava</span></h1>
            <p className="text-xl text-foreground/80">
              Enterprise IT training company helping professionals build cloud and DevOps careers.
            </p>
          </div>

          <GlassCard delay={0.1} className="mb-16 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Built for Professionals Who Need Real Technical Depth</h2>
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                Strikava was built around a simple idea: technical training should create real implementation confidence, not just course completion. 
              </p>
              <p>
                Our programs combine mentor-led delivery, hands-on practice, and role-aligned learning plans so professionals and teams can grow with clarity.
              </p>
            </div>
            
            <h3 className="text-2xl font-bold text-white mt-10 mb-6">What Defines Our Approach</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-foreground/80 bg-white/5 p-4 rounded-xl border border-white/5">
                <CheckCircle2 className="text-primary mr-4 w-6 h-6 flex-shrink-0" />
                <span>Role-based learning paths instead of generic course flow</span>
              </li>
              <li className="flex items-center text-foreground/80 bg-white/5 p-4 rounded-xl border border-white/5">
                <CheckCircle2 className="text-primary mr-4 w-6 h-6 flex-shrink-0" />
                <span>Hands-on labs and applied implementation practice</span>
              </li>
              <li className="flex items-center text-foreground/80 bg-white/5 p-4 rounded-xl border border-white/5">
                <CheckCircle2 className="text-primary mr-4 w-6 h-6 flex-shrink-0" />
                <span>Mentor guidance focused on real execution challenges</span>
              </li>
              <li className="flex items-center text-foreground/80 bg-white/5 p-4 rounded-xl border border-white/5">
                <CheckCircle2 className="text-primary mr-4 w-6 h-6 flex-shrink-0" />
                <span>Support for certification, interviews, and business outcomes</span>
              </li>
            </ul>
          </GlassCard>

          {/* Practical, Role-Aligned, Flexible */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <GlassCard delay={0.2} className="p-6 text-center">
              <h3 className="text-xl font-bold text-primary mb-3">Practical</h3>
              <p className="text-foreground/70">Implementation-first learning model</p>
            </GlassCard>
            <GlassCard delay={0.3} className="p-6 text-center">
              <h3 className="text-xl font-bold text-primary mb-3">Role-Aligned</h3>
              <p className="text-foreground/70">Tracks mapped to real job outcomes</p>
            </GlassCard>
            <GlassCard delay={0.4} className="p-6 text-center">
              <h3 className="text-xl font-bold text-primary mb-3">Flexible</h3>
              <p className="text-foreground/70">Built for individuals and teams</p>
            </GlassCard>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4">Training Designed Around Capability, Not Just Content</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              We focus on helping learners and delivery teams build confidence in the work they are expected to perform. That means the learning model must connect skills, tools, projects, and outcomes in a practical way. Whether the requirement is an individual role transition or a corporate upskilling initiative, our approach is built around measurable progress, strong mentor support, and implementation-focused learning.
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-6">Why We Chose a Practical Learning Model</h3>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Many professionals struggle not because they lack ambition, but because training often stays too theoretical. Strikava was built to close that gap between learning and real execution.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
              <GlassCard delay={0.1} className="p-6">
                <h4 className="font-bold text-white mb-2">Recognizing the Gap</h4>
                <p className="text-sm text-foreground/70">We saw that many learners could complete courses and collect certificates, but still lacked the clarity and confidence required in technical interviews or live projects.</p>
              </GlassCard>
              <GlassCard delay={0.2} className="p-6">
                <h4 className="font-bold text-white mb-2">Building a Better Format</h4>
                <p className="text-sm text-foreground/70">That led us to shape a delivery model around role expectations, practical exercises, mentor feedback, and training journeys that feel closer to real work.</p>
              </GlassCard>
              <GlassCard delay={0.3} className="p-6">
                <h4 className="font-bold text-white mb-2">Expanding With Purpose</h4>
                <p className="text-sm text-foreground/70">As learner needs evolved, we expanded across cloud, DevOps, cybersecurity, and corporate capability programs while keeping the same practical-first mindset.</p>
              </GlassCard>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4">Our Operating Principles</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Our operating principles influence how we design curriculum, select mentors, support learners, and structure outcomes.
            </p>
            <div className="space-y-6">
              <GlassCard className="p-6 border-l-4 border-l-primary">
                <h4 className="text-xl font-bold text-white mb-2">Clarity</h4>
                <p className="text-foreground/70">We simplify complex role paths so learners know what to focus on, what to build, and what matters most for progress.</p>
              </GlassCard>
              <GlassCard className="p-6 border-l-4 border-l-accent">
                <h4 className="text-xl font-bold text-white mb-2">Depth</h4>
                <p className="text-foreground/70">Training should go beyond surface-level explanation. We emphasize understanding that holds up in projects, reviews, and interviews.</p>
              </GlassCard>
              <GlassCard className="p-6 border-l-4 border-l-blue-400">
                <h4 className="text-xl font-bold text-white mb-2">Relevance</h4>
                <p className="text-foreground/70">Our learning tracks stay aligned with actual work environments, tools, and decision-making contexts across modern IT roles.</p>
              </GlassCard>
              <GlassCard className="p-6 border-l-4 border-l-green-400">
                <h4 className="text-xl font-bold text-white mb-2">Support</h4>
                <p className="text-foreground/70">People learn faster when they are guided well. Mentor access, review loops, and structured checkpoints are part of the model by design.</p>
              </GlassCard>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4">Our 4-Step Delivery Logic</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Every engagement follows the same high-discipline learning logic: understand the goal, map the gap, deliver with depth, and measure practical readiness.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="mr-4 text-primary"><Target className="w-8 h-8" /></div>
                <div>
                  <h4 className="font-bold text-white mb-1">Assess</h4>
                  <p className="text-sm text-foreground/70">Baseline evaluation of current skills, role maturity, and capability gaps.</p>
                </div>
              </div>
              <div className="flex bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="mr-4 text-accent"><BookOpen className="w-8 h-8" /></div>
                <div>
                  <h4 className="font-bold text-white mb-1">Design</h4>
                  <p className="text-sm text-foreground/70">Custom learning path, project path, and delivery sequence aligned to the outcome.</p>
                </div>
              </div>
              <div className="flex bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="mr-4 text-blue-400"><Presentation className="w-8 h-8" /></div>
                <div>
                  <h4 className="font-bold text-white mb-1">Deliver</h4>
                  <p className="text-sm text-foreground/70">Mentor-led learning with labs, guided practice, and implementation-oriented discussion.</p>
                </div>
              </div>
              <div className="flex bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="mr-4 text-green-400"><CheckCircle2 className="w-8 h-8" /></div>
                <div>
                  <h4 className="font-bold text-white mb-1">Validate</h4>
                  <p className="text-sm text-foreground/70">Progress review through assessments, checkpoints, and interview or project-readiness indicators.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4">Target Audiences</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Our programs support different types of growth journeys, from individual transitions to structured team capability development.
            </p>
            <div className="space-y-4">
              <div className="p-5 bg-white/5 rounded-xl border border-white/10">
                <h4 className="text-primary font-bold mb-1">Individual Learners</h4>
                <p className="text-sm text-foreground/70">Professionals building stronger foundations in cloud, DevOps, security, and modern infrastructure roles.</p>
              </div>
              <div className="p-5 bg-white/5 rounded-xl border border-white/10">
                <h4 className="text-primary font-bold mb-1">Career Transition Candidates</h4>
                <p className="text-sm text-foreground/70">Learners preparing for a role change who need a roadmap, projects, and interview-focused guidance.</p>
              </div>
              <div className="p-5 bg-white/5 rounded-xl border border-white/10">
                <h4 className="text-primary font-bold mb-1">Corporate Teams</h4>
                <p className="text-sm text-foreground/70">Organizations looking for structured upskilling, practical delivery models, and measurable team progress.</p>
              </div>
              <div className="p-5 bg-white/5 rounded-xl border border-white/10">
                <h4 className="text-primary font-bold mb-1">Technology Functions</h4>
                <p className="text-sm text-foreground/70">Cloud, platform, DevOps, SRE, SOC, support, and engineering teams preparing for higher delivery maturity.</p>
              </div>
            </div>
          </div>

          <GlassCard delay={0.5} className="bg-primary/5 border-primary/20 p-10 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Need a Trusted Upskilling Partner?</h3>
            <p className="text-lg text-foreground/80 mb-8">
              Connect with us for individual learning guidance, certification planning, or enterprise team enablement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <AnimatedButton href="/contact" variant="primary">
                Talk to Advisor
              </AnimatedButton>
              <AnimatedButton href="/contact" variant="outline">
                Corporate Solutions
              </AnimatedButton>
            </div>
          </GlassCard>

        </div>
      </div>
    </div>
  );
}
