import { render } from '@testing-library/react';

import ReactRouterLink from './react-router-link';

describe('ReactRouterLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactRouterLink />);
    expect(baseElement).toBeTruthy();
  });
});
