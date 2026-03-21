import type { SocialLinks } from '../config';

export interface SocialLink {
  platform: string;
  url: string;
}

export function getSocialLinks(
  social: SocialLinks,
  additionalLinks: SocialLink[] = []
): SocialLink[] {
  const configuredLinks = Object.entries(social)
    .filter(([_, url]) => url)
    .map(([platform, url]) => ({
      platform: platform.charAt(0).toUpperCase() + platform.slice(1),
      url,
    }));

  return [...additionalLinks, ...configuredLinks];
}
