interface TimeRemaining {
  years: number;
  months: number;
  weeks: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const calculateTimeRemaining = (): TimeRemaining => {
  const birthDate = new Date('1963-12-23');
  const expectedAge = 85;
  const endDate = new Date(birthDate);
  endDate.setFullYear(birthDate.getFullYear() + expectedAge);
  
  const now = new Date();
  const timeDiff = endDate.getTime() - now.getTime();
  
  // Convert to total seconds first
  const totalSeconds = Math.max(0, Math.floor(timeDiff / 1000));
  const totalDays = Math.floor(totalSeconds / (24 * 60 * 60));
  
  const years = Math.floor(totalDays / 365);
  const remainingDays = totalDays % 365;
  const months = Math.floor(remainingDays / 30);
  const remainingAfterMonths = remainingDays % 30;
  const weeks = Math.floor(remainingAfterMonths / 7);
  const days = remainingAfterMonths % 7;
  
  // Calculate hours, minutes and seconds
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return { years, months, weeks, days, hours, minutes, seconds };
};