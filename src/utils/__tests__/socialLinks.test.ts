import { describe, it, expect } from 'vitest';
import { getSocialLinks } from '../socialLinks';
import type { SocialLinks } from '../../config';

describe('socialLinks', () => {
  describe('getSocialLinks', () => {
    it('should return empty array for empty social links', () => {
      const social: SocialLinks = {
        github: '',
        linkedin: '',
        twitter: '',
        mastodon: '',
        bluesky: '',
      };

      expect(getSocialLinks(social)).toEqual([]);
    });

    it('should filter out empty string URLs', () => {
      const social: SocialLinks = {
        github: 'https://github.com/user',
        linkedin: '',
        twitter: '',
        mastodon: '',
        bluesky: '',
      };

      const result = getSocialLinks(social);
      expect(result).toHaveLength(1);
      expect(result[0]).toEqual({
        platform: 'Github',
        url: 'https://github.com/user',
      });
    });

    it('should capitalize platform names', () => {
      const social: SocialLinks = {
        github: 'https://github.com/user',
        linkedin: 'https://linkedin.com/in/user',
        twitter: 'https://twitter.com/user',
        mastodon: 'https://mastodon.social/@user',
        bluesky: 'https://bsky.app/profile/user',
      };

      const result = getSocialLinks(social);
      expect(result.map((l) => l.platform)).toEqual([
        'Github',
        'Linkedin',
        'Twitter',
        'Mastodon',
        'Bluesky',
      ]);
    });

    it('should return all configured links in order', () => {
      const social: SocialLinks = {
        github: 'https://github.com/user',
        linkedin: 'https://linkedin.com/in/user',
        twitter: '',
        mastodon: '',
        bluesky: 'https://bsky.app/profile/user',
      };

      const result = getSocialLinks(social);
      expect(result).toHaveLength(3);
      expect(result[0].platform).toBe('Github');
      expect(result[1].platform).toBe('Linkedin');
      expect(result[2].platform).toBe('Bluesky');
    });

    it('should preserve URL exactly as provided', () => {
      const social: SocialLinks = {
        github: 'https://github.com/user?tab=repositories',
        linkedin: '',
        twitter: '',
        mastodon: '',
        bluesky: '',
      };

      const result = getSocialLinks(social);
      expect(result[0].url).toBe('https://github.com/user?tab=repositories');
    });

    it('should prepend additional links', () => {
      const social: SocialLinks = {
        github: 'https://github.com/user',
        linkedin: '',
        twitter: '',
        mastodon: '',
        bluesky: '',
      };

      const additionalLinks = [{ platform: 'Resume', url: 'https://example.com/resume' }];
      const result = getSocialLinks(social, additionalLinks);

      expect(result).toHaveLength(2);
      expect(result[0].platform).toBe('Resume');
      expect(result[1].platform).toBe('Github');
    });

    it('should return only additional links when no social configured', () => {
      const social: SocialLinks = {
        github: '',
        linkedin: '',
        twitter: '',
        mastodon: '',
        bluesky: '',
      };

      const additionalLinks = [{ platform: 'Resume', url: 'https://example.com/resume' }];
      const result = getSocialLinks(social, additionalLinks);

      expect(result).toHaveLength(1);
      expect(result[0].platform).toBe('Resume');
    });
  });
});
