import { render, screen } from '@testing-library/react';

import Block from './Block';

describe('Test Block', () => {
  it('Mount the component', () => {
    const blockLabel = 'Text Block';

    render(<Block>{blockLabel}</Block>);

    expect(screen.getByText(blockLabel)).toBeDefined();
  });
});
