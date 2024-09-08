export default function HeartRateLimitsCalculator(age) {
    const lowerLimit = Math.round((220 - age) * 0.65);
    const upperLimit = Math.round((220 - age) * 0.85);
  
    return { lowerLimit, upperLimit };
  }