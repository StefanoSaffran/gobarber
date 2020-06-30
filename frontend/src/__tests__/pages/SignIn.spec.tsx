import React from 'react';
import { render } from '@testing-library/react';

import SignIn from '../../pages/SignIn';

describe('SignIn Page', () => {
  it('should be able to SignIn', () => {
    const { debug } = render(<SignIn />);

    debug();
  });
});
