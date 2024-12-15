import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { TimeUnit } from './components/TimeUnit';
import { calculateTimeRemaining } from './utils/dateCalculations';

function App() {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000); // Update every second

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Clock className="w-8 h-8 text-purple-400 mr-2" />
            <h1 className="text-3xl font-bold text-white">Lebenszeituhr</h1>
          </div>
          <p className="text-gray-400">Verbleibende Zeit basierend auf einer Lebenserwartung von 85 Jahren</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
          <TimeUnit value={timeRemaining.years} label="Jahre" />
          <TimeUnit value={timeRemaining.months} label="Monate" />
          <TimeUnit value={timeRemaining.weeks} label="Wochen" />
          <TimeUnit value={timeRemaining.days} label="Tage" />
          <TimeUnit value={timeRemaining.hours} label="Stunden" />
          <TimeUnit value={timeRemaining.minutes} label="Minuten" />
          <TimeUnit value={timeRemaining.seconds} label="Sekunden" highlight={true} />
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Geboren am 23. Dezember 1963</p>
        </div>
      </div>
    </div>
  );
}

export default App;