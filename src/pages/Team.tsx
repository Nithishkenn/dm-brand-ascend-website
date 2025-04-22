
import React from "react";
import { User, Users, UserRound } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const teamMembers = [
  {
    name: "Nithish",
    title: "Founder & Brand Strategist",
    description:
      "Legacy marketer blending 20+ years of family expertise with bold digital vision. Leads with creativity, results, and heart.",
    icon: <UserRound size={48} className="text-brand-orange" />,
  },
  {
    name: "Ajith",
    title: "Content & Growth Specialist",
    description:
      "Crafts scroll-stopping stories and campaigns. Loves finding growth hacks for brands that want their next big win.",
    icon: <Users size={48} className="text-brand-orange" />,
  },
  {
    name: "Varatha",
    title: "Digital Ads & Operations",
    description:
      "Keeps campaigns smooth and delivers results with precision. Passionate about analytics, ads, and high-ROI launches.",
    icon: <User size={48} className="text-brand-orange" />,
  },
];

const Team = () => (
  <div className="bg-white min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 flex flex-col items-center justify-center px-4 pt-32 pb-10">
      <h1 className="section-title mb-10">Meet the Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300 reveal"
          >
            <div className="mb-4">{member.icon}</div>
            <h2 className="text-xl font-bold font-display text-black mb-2 text-center">
              {member.name}
            </h2>
            <h3 className="text-[1rem] font-semibold text-brand-orange mb-2 text-center">
              {member.title}
            </h3>
            <p className="text-gray-600 text-center">{member.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-extrabold mb-2">Confident. Clever. Creative.</h2>
        <p className="text-lg text-gray-700">We fuel your brand’s story with strategy, creativity, and relentless execution.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Team;
