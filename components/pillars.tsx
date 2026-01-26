import { Target, Users, RefreshCw, Play } from 'lucide-react';

export default function Pillars() {
  const pillars = [
    {
      icon: Target,
      title: "Personalised Mastery Action Plan"
    },
    {
      icon: Users,
      title: "Dedicated Mentorship"
    },

    {
      icon: Play,
      title: "On-demand Playback"
    },
    {
      icon: RefreshCw,
      title: "Two-Cycle Teaching System"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8">      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 items-start justify-items-center">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <div key={index} className="flex flex-col items-center">
              {/* Pillar capital (top) */}
              <div className="w-20 sm:w-24 h-6 sm:h-8 bg-[#f5c60c] rounded-t-lg shadow-md"></div>
              
              {/* Icon circle on pillar */}
              <div className="relative -mt-3 sm:-mt-4 mb-2 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 sm:border-4 border-yellow-500 z-10">
                <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
              </div>
              
              {/* Pillar shaft */}
              <div className="w-16 sm:w-20 h-32 sm:h-48 bg-gradient-to-b from-gray-50 to-yellow-300 shadow-lg"></div>
              
              {/* Pillar base */}
              <div className="w-24 sm:w-28 h-5 sm:h-6 bg-[#f5c60c] rounded-b-lg shadow-md"></div>
              
              {/* Title below pillar */}
              <h3 className="text-sm lg:text-base font-semibold text-white mt-3 sm:mt-4 text-center w-28 sm:w-32 h-12 sm:h-16 leading-tight">
                {pillar.title}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}