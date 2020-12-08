import React from 'react';
import SvgIcon from '../components/SvgIcon';

/**
 * Change button text and add spinner when submitting state is set
 *
 * @param submitting
 * @param text
 * @returns {string|*}
 */
const useButtonText = (submitting, text) => (
  <>
    <SvgIcon name="spinner" classes={submitting ? 'visible' : 'hidden' } />
    {submitting ? 'Please wait...' : text}
  </>
);

export default useButtonText;
