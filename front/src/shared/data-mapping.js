export const dateToString = (timestamp) => {
  const MS_PER_MINUTE = 60000;
  const MS_PER_HOUR = 3600000;
  const MS_PER_DAY = 86400000;
  const MS_PER_WEEK = 604800000;
  const MS_PER_MONTH = 2629800000;

  const date = new Date(timestamp * 1000);
  const now = new Date();
  const elapsed = now - date;

  if (elapsed < MS_PER_HOUR) {
    const minutes = Math.floor(elapsed / MS_PER_MINUTE);
    return `${minutes} 'minute' ago`;
  } else if (elapsed < MS_PER_DAY) {
    const hours = Math.floor(elapsed / MS_PER_HOUR);
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  } else if (elapsed < MS_PER_WEEK) {
    const days = Math.floor(elapsed / MS_PER_DAY);
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  } else if (elapsed < MS_PER_MONTH) {
    const weeks = Math.floor(elapsed / MS_PER_WEEK);
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
  } else {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  }
};

export const dateToString1 = (timestamp) => {
  const date = new Date(timestamp * 1000);

  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};
