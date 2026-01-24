import { describe, it, expect } from 'vitest';
import { calculateReadingTime, formatReadingTime, getReadingTime } from '../readingTime';

describe('readingTime', () => {
  describe('calculateReadingTime', () => {
    it('should return 1 minute for empty string', () => {
      expect(calculateReadingTime('')).toBe(1);
    });

    it('should return 1 minute for whitespace only', () => {
      expect(calculateReadingTime('   \n  \t  ')).toBe(1);
    });

    it('should return 1 minute for very short content (< 200 words)', () => {
      const shortText = 'This is a very short article with just a few words.';
      expect(calculateReadingTime(shortText)).toBe(1);
    });

    it('should calculate reading time for exactly 200 words', () => {
      // Generate exactly 200 words
      const words = Array(200).fill('word').join(' ');
      expect(calculateReadingTime(words)).toBe(1);
    });

    it('should calculate reading time for 201 words (rounds up to 2 minutes)', () => {
      // Generate 201 words - should round up to 2 minutes
      const words = Array(201).fill('word').join(' ');
      expect(calculateReadingTime(words)).toBe(2);
    });

    it('should calculate reading time for 400 words', () => {
      // 400 words should be 2 minutes (400 / 200 = 2)
      const words = Array(400).fill('word').join(' ');
      expect(calculateReadingTime(words)).toBe(2);
    });

    it('should calculate reading time for 1000 words', () => {
      // 1000 words should be 5 minutes (1000 / 200 = 5)
      const words = Array(1000).fill('word').join(' ');
      expect(calculateReadingTime(words)).toBe(5);
    });

    it('should round up partial minutes', () => {
      // 250 words = 1.25 minutes, should round up to 2
      const words = Array(250).fill('word').join(' ');
      expect(calculateReadingTime(words)).toBe(2);
    });

    it('should remove code blocks before counting', () => {
      const contentWithCode = `
        Here is some text with code blocks.

        \`\`\`javascript
        const x = 1;
        const y = 2;
        const z = 3;
        // This code block should not be counted
        function example() {
          return "lots of words in code blocks";
        }
        \`\`\`

        More text after the code block.
      `;

      // Should count only the text outside code blocks
      const result = calculateReadingTime(contentWithCode);
      expect(result).toBe(1); // Very few words outside code block
    });

    it('should remove multiple code blocks', () => {
      const contentWithMultipleBlocks = `
        Text before first block.

        \`\`\`javascript
        code block one
        with multiple lines
        and many words that should not count
        \`\`\`

        Text between blocks.

        \`\`\`python
        another code block
        with different language
        also should not count
        \`\`\`

        Text after second block.
      `;

      const result = calculateReadingTime(contentWithMultipleBlocks);
      expect(result).toBe(1); // Only the text outside blocks
    });

    it('should handle content with no code blocks', () => {
      const plainText = Array(500).fill('word').join(' ');
      expect(calculateReadingTime(plainText)).toBe(3); // 500 / 200 = 2.5, rounds to 3
    });

    it('should filter out empty strings when splitting', () => {
      const textWithMultipleSpaces = 'word    word     word   word';
      // 4 words, minimum 1 minute
      expect(calculateReadingTime(textWithMultipleSpaces)).toBe(1);
    });

    it('should handle mixed newlines and spaces', () => {
      const text = 'word\n\nword\n\n\n\nword\n   word';
      // 4 words, minimum 1 minute
      expect(calculateReadingTime(text)).toBe(1);
    });

    it('should handle real-world markdown content', () => {
      const markdownContent = `
# Introduction to TypeScript

TypeScript is a strongly typed programming language that builds on JavaScript.

\`\`\`typescript
interface User {
  name: string;
  age: number;
}
\`\`\`

It gives you better tooling at any scale. TypeScript adds additional syntax to JavaScript
to support a tighter integration with your editor. Catch errors early in your editor.

## Key Features

- Static type checking
- Enhanced IDE support
- Better refactoring capabilities
- Improved code documentation

TypeScript code converts to JavaScript which runs anywhere JavaScript runs.
      `;

      const result = calculateReadingTime(markdownContent);
      // Should count ~50 words (excluding code block)
      expect(result).toBe(1);
    });

    it('should handle content with inline code (not code blocks)', () => {
      const contentWithInlineCode = 'Use the `const` keyword to declare variables in JavaScript. The `let` keyword is also available.';
      // Inline code (single backticks) should still be counted
      const result = calculateReadingTime(contentWithInlineCode);
      expect(result).toBe(1);
    });
  });

  describe('formatReadingTime', () => {
    it('should format 1 minute correctly', () => {
      expect(formatReadingTime(1)).toBe('1 min read');
    });

    it('should format 5 minutes correctly', () => {
      expect(formatReadingTime(5)).toBe('5 min read');
    });

    it('should format 10 minutes correctly', () => {
      expect(formatReadingTime(10)).toBe('10 min read');
    });

    it('should format 0 minutes (edge case)', () => {
      expect(formatReadingTime(0)).toBe('0 min read');
    });

    it('should format large numbers correctly', () => {
      expect(formatReadingTime(100)).toBe('100 min read');
    });
  });

  describe('getReadingTime', () => {
    it('should return formatted reading time for short content', () => {
      const shortText = 'A few words';
      expect(getReadingTime(shortText)).toBe('1 min read');
    });

    it('should return formatted reading time for medium content', () => {
      const mediumText = Array(500).fill('word').join(' ');
      // 500 words / 200 = 2.5, rounds to 3 minutes
      expect(getReadingTime(mediumText)).toBe('3 min read');
    });

    it('should return formatted reading time for long content', () => {
      const longText = Array(1000).fill('word').join(' ');
      // 1000 words / 200 = 5 minutes
      expect(getReadingTime(longText)).toBe('5 min read');
    });

    it('should handle content with code blocks', () => {
      const contentWithCode = `
        Some text here.

        \`\`\`javascript
        // Large code block that should be excluded
        ${Array(500).fill('code').join(' ')}
        \`\`\`

        More text here.
      `;

      expect(getReadingTime(contentWithCode)).toBe('1 min read');
    });

    it('should integrate calculateReadingTime and formatReadingTime correctly', () => {
      const content = Array(600).fill('word').join(' ');
      const calculatedMinutes = calculateReadingTime(content);
      const formatted = formatReadingTime(calculatedMinutes);

      expect(getReadingTime(content)).toBe(formatted);
      expect(getReadingTime(content)).toBe('3 min read'); // 600 / 200 = 3
    });

    it('should handle empty string', () => {
      expect(getReadingTime('')).toBe('1 min read');
    });
  });

  describe('edge cases and integration', () => {
    it('should maintain consistency across all functions', () => {
      const testContent = Array(400).fill('word').join(' ');

      const minutes = calculateReadingTime(testContent);
      const formatted = formatReadingTime(minutes);
      const combined = getReadingTime(testContent);

      expect(minutes).toBe(2);
      expect(formatted).toBe('2 min read');
      expect(combined).toBe('2 min read');
    });

    it('should handle unicode and special characters', () => {
      const unicodeText = 'Hello 世界 こんにちは مرحبا 👋 ' + Array(200).fill('word').join(' ');
      const result = calculateReadingTime(unicodeText);
      // Should count unicode chars as separate words
      expect(result).toBeGreaterThanOrEqual(1);
    });

    it('should handle very long content', () => {
      const veryLongText = Array(10000).fill('word').join(' ');
      const result = calculateReadingTime(veryLongText);
      expect(result).toBe(50); // 10000 / 200 = 50 minutes
    });

    it('should handle nested code blocks in markdown', () => {
      const nestedContent = `
        Introduction text.

        \`\`\`markdown
        # This is a code block

        \\\`\\\`\\\`javascript
        const nested = true;
        \\\`\\\`\\\`
        \`\`\`

        Conclusion text.
      `;

      // Should remove the outer code block entirely
      const result = calculateReadingTime(nestedContent);
      expect(result).toBe(1);
    });
  });
});
