import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../components/NotFound';

describe('the NotFound component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<NotFound />);

    expect(wrapper).toMatchInlineSnapshot('ShallowWrapper {}');
  });
});
