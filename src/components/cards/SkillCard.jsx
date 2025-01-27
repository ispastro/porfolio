import { useRef, useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useInView } from '../../hooks/useInView'; // Ensure this path is correct

function SkillCard({ name, icon, color, progress, index }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { threshold: 0.2 });
  const [progressValue, setProgressValue] = useState(0);

  // Color mapping function
  const getColorValue = (colorClass) => {
    const colorMap = {
      'text-orange-500': '#f97316',
      'text-blue-500': '#3b82f6',
      'text-yellow-500': '#eab308',
      'text-gray-500': '#6b7280',
      'text-red-500': '#ef4444',
      'text-blue-400': '#60a5fa',
      'text-teal-400': '#2dd4bf',
      'text-purple-500': '#a855f7',
      'text-red-600': '#dc2626',
    };
    return colorMap[colorClass] || '#000000';
  };

  useEffect(() => {
    let animationFrame;
    if (isInView) {
      let currentValue = 0;
      const animateProgress = () => {
        if (currentValue < progress) {
          currentValue += 1;
          setProgressValue(currentValue);
          animationFrame = requestAnimationFrame(animateProgress);
        }
      };
      animationFrame = requestAnimationFrame(animateProgress);
    } else {
      setProgressValue(0);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, progress]);

  return (
    <div
      ref={cardRef}
      className="skill-card"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="w-24 h-24 relative">
        <CircularProgressbar
          value={progressValue}
          text={`${progressValue}%`}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: 'round',
            textSize: '16px',
            pathTransitionDuration: 0.5,
            pathColor: getColorValue(color),
            textColor: getColorValue(color),
            trailColor: '#1f2937',
          })}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`text-4xl ${color} icon-container`}>
            {icon}
          </div>
        </div>
      </div>
      <p className="mt-4 text-gray-300 text-lg">{name}</p>
    </div>
  );
}

export default SkillCard;