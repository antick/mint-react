import React from 'react';
import { shallow } from 'enzyme';
import CheckBox from '../Form/CheckBox';

describe('test CheckBox component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<CheckBox />);

    expect(wrapper).toMatchInlineSnapshot('ShallowWrapper {}');
  });
});