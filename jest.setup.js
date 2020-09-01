import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const MockResponsiveContainer = props => <div {...props} />;

// Mocking and fixing the recharts warning in test suits
jest.mock('recharts', () => ({
  ...jest.requireActual('recharts'),
  ResponsiveContainer: MockResponsiveContainer
}));
