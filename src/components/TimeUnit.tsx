interface TimeUnitProps {
  value: number;
  label: string;
  highlight?: boolean;
}

export const TimeUnit: React.FC<TimeUnitProps> = ({ value, label, highlight }) => (
  <div className={`flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-xl transition-colors ${
    highlight ? 'animate-pulse' : ''
  }`}>
    <span className="text-4xl font-bold text-white mb-2">
      {value.toString().padStart(2, '0')}
    </span>
    <span className="text-gray-400 text-sm uppercase tracking-wider">{label}</span>
  </div>
);