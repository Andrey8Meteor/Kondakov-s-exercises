export const restrictLength = (str, maxLength) => {
  if (typeof str !== 'string') throw new Error('Input must be a string');
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
};
