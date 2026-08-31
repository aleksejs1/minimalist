/**
 * Calculate estimated reading time in minutes for markdown content.
 * Average reading speed: ~180-200 words per minute.
 */
export function calculateReadingTime(content: string, wordsPerMinute = 180): number {
  if (!content) return 1;

  // Remove code blocks
  const clean = content
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]*`/g, '')
    // Remove markdown links syntax [text](url) -> text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // Remove HTML tags
    .replace(/<[^>]+>/g, '')
    // Replace markdown symbols and extra whitespace with spaces
    .replace(/[#*`_~\[\]()>\-+=!]/g, ' ')
    .trim();

  // Match words across Unicode (English, Russian, Latvian, etc.)
  const words = clean.split(/\s+/).filter((w) => w.length > 0);
  const wordCount = words.length;

  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}
