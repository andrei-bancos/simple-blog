export function calculateReadingTime(htmlContent) {
  const wordsPerMinute = 200;

  const text = htmlContent.replace(/<\/?[^>]+(>|$)/g, '');
  const wordCount = text
    .split(/\s+/)
    .filter((word) => word.length > 0).length;

  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return readingTime;
}