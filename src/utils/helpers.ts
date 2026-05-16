export function formatDate(date: Date): string {
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}

export function formatDateISO(date: Date): string {
  return date.toISOString();
}

export function getReadingTime(text: string): string {
  const wordsPerMinute = 600;
  const chars = text.replace(/\s/g, '').length;
  const minutes = Math.ceil(chars / wordsPerMinute);
  return `${minutes}分`;
}
