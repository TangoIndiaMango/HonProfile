import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

const FollowButtonAction = ({
  showSocialMenu,
  socialLinks,
}: {
  showSocialMenu: boolean;
  socialLinks: {
    name: string;
    icon: React.ElementType;
    url: string;
    color: string;
    hoverColor: string;
  }[];
}) => {
  return (
    <AnimatePresence>
      {showSocialMenu && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <div className="relative w-full h-20">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              // Calculate semi-circle positions - from left to right through top
              const totalItems = socialLinks.length;
              const angleStep = Math.PI / (totalItems - 1); // 180 degrees spread
              const radius = 80; // Increased distance from center for more spacing
              const angle = index * angleStep - Math.PI; // Start from left (-180 degrees)
              const x = Math.cos(angle) * radius - 24;
              const y = Math.sin(angle) * radius; // Move up more to form semi-circle above

              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group absolute p-4 rounded-full bg-gradient-to-r ${social.color} ${social.hoverColor} transition-all duration-300 hover:scale-110 hover:shadow-lg transform hover:-translate-y-1 rainbow-social-icon`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  initial={{ opacity: 0, scale: 0.3, x: 0, y: 20 }}
                  animate={{ opacity: 1, scale: 1, x: x - 8, y: y }}
                  exit={{ opacity: 0, scale: 0.3, x: 0, y: 20 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.6,
                    ease: 'easeOut',
                  }}
                  aria-label={social.name}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {social.name}
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FollowButtonAction;
