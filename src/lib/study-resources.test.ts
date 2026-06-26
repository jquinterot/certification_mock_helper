import { describe, it, expect } from 'vitest';
import { getStudyResources } from './study-resources';

describe('getStudyResources', () => {
  it('returns an array of resources for a known exam and domain', () => {
    const resources = getStudyResources('aws-ml', 'Domain 1: Data Preparation for ML');
    expect(Array.isArray(resources)).toBe(true);
    expect(resources.length).toBeGreaterThan(0);
    resources.forEach((r) => {
      expect(r).toHaveProperty('label');
      expect(r).toHaveProperty('url');
      expect(r.url).toMatch(/^https?:\/\//);
    });
  });

  it('returns an empty array for an unknown exam', () => {
    expect(getStudyResources('does-not-exist', 'any-domain')).toEqual([]);
  });

  it('returns an empty array for an unknown domain', () => {
    expect(getStudyResources('aws-ml', 'Unknown Domain')).toEqual([]);
  });

  it('returns resources for ISTQB Foundation when available', () => {
    const resources = getStudyResources('istqb-foundation', 'Chapter 1: Fundamentals of Testing');
    expect(Array.isArray(resources)).toBe(true);
  });
});
