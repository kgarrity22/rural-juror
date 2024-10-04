export const getTimeOfDay = () => {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 5 && hour < 12) {
    return 'Morning';
  } else if (hour >= 12 && hour < 18) {
    return 'Afternoon';
  } else if (hour >= 18 && hour < 22) {
    return 'Evening';
  } else {
    return 'Night';
  }
};
