import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../NotFound';

describe('test NotFound component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<NotFound />);

    expect(wrapper).toMatchInlineSnapshot('ShallowWrapper {}');
  });
});
