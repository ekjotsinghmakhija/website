import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TechBadge from '@/components/ui/TechBadge';

describe('UI Components', () => {
  it('renders core UI components without crashing', () => {
    render(<TechBadge>Rust</TechBadge>);
    expect(screen.getByText('Rust')).toBeDefined();
  });
});
