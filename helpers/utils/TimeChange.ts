function TimeChange(createdAt: string): string {
  const currentTime = new Date();
  const createdAtDate = new Date(createdAt);

  if (isNaN(createdAtDate.getTime())) {
    return "Invalid createdAt value";
  }

  const timeDifference = Math.abs(currentTime.getTime() - createdAtDate.getTime());
  const minutes = Math.floor(timeDifference / (1000 * 60));
  const hours = Math.floor(minutes / 60);

  if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else {
    return `${hours} hours ago`;
  }
}

export default TimeChange;
