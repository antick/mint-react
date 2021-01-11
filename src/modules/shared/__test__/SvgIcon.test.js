import React from 'react';
import { shallow, mount } from 'enzyme';
import SvgIcon from '../components/SvgIcon';

describe('the SvgIcon component', () => {
  it('should render without crashing', () => {
    const svgIcon = shallow(<SvgIcon />);

    expect(svgIcon).toMatchInlineSnapshot('ShallowWrapper {}');
  });

  it('should render user icon', () => {
    const svgIcon = shallow(<SvgIcon name="user" />);

    expect(svgIcon).toMatchInlineSnapshot('ShallowWrapper {}');
  });

  it('should render cog icon', () => {
    const svgIcon = mount(<SvgIcon name="cog" />);

    expect(svgIcon).toMatchInlineSnapshot('ReactWrapper {}');
  });

  it('should render archive icon', () => {
    const svgIcon = mount(<SvgIcon name="archive" />);

    expect(svgIcon).toMatchInlineSnapshot('ReactWrapper {}');
  });

  it('should render bookmarks icon', () => {
    const svgIcon = mount(<SvgIcon name="bookmarks" />);

    expect(svgIcon).toMatchInlineSnapshot('ReactWrapper {}');
  });

  it('should render briefcase icon', () => {
    const svgIcon = mount(<SvgIcon name="briefcase" />);

    expect(svgIcon).toMatchInlineSnapshot('ReactWrapper {}');
  });

  it('should render calculator icon', () => {
    const svgIcon = mount(<SvgIcon name="calculator" />);

    expect(svgIcon).toMatchInlineSnapshot('ReactWrapper {}');
  });

  it('should render calendar icon', () => {
    const svgIcon = mount(<SvgIcon name="calendar" />);

    expect(svgIcon).toMatchInlineSnapshot('ReactWrapper {}');
  });

  it('should render mail icon', () => {
    const svgIcon = mount(<SvgIcon name="mail" />);

    expect(svgIcon).toMatchInlineSnapshot('ReactWrapper {}');
  });

  it('should render wallet icon', () => {
    const svgIcon = mount(<SvgIcon name="wallet" />);

    expect(svgIcon).toMatchInlineSnapshot('ReactWrapper {}');
  });

  it('should render air icon', () => {
    const svgIcon = mount(<SvgIcon name="air" />);

    expect(svgIcon).toMatchInlineSnapshot('ReactWrapper {}');
  });

  it('should render search icon', () => {
    const svgIcon = mount(<SvgIcon name="search" />);

    expect(svgIcon).toMatchInlineSnapshot('ReactWrapper {}');
  });

  it('should render home icon', () => {
    const svgIcon = mount(<SvgIcon name="home" />);

    expect(svgIcon).toMatchInlineSnapshot('ReactWrapper {}');
  });

  it('should render book icon', () => {
    const svgIcon = mount(<SvgIcon name="book" />);

    expect(svgIcon).toMatchInlineSnapshot('ReactWrapper {}');
  });

  it('should render arrow icon', () => {
    const svgIcon = mount(<SvgIcon name="arrow" />);

    expect(svgIcon).toMatchInlineSnapshot('ReactWrapper {}');
  });
});
