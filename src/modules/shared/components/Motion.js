import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Motion = ({ children, className, type }) => {
  let motionConfig;

  switch (+type) {
    case 1:
      motionConfig = {
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 0, opacity: 0 },
        transition: { ease: 'easeOut', duration: 0.5 }
      };
      break;

    case 2:
      motionConfig = {
        initial: { x: 50, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: 0, opacity: 0 },
        transition: { ease: 'easeOut', duration: 0.5 }
      };
      break;

    case 3:
      motionConfig = {
        initial: { x: 100, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: 0, opacity: 0 },
        transition: { ease: 'easeOut', duration: 0.5 }
      };
      break;

    case 4:
      motionConfig = {
        initial: { y: 100 },
        animate: { y: 0 },
        exit: { y: 0 },
        transition: { ease: 'easeOut', duration: 0.5 }
      };
      break;

    case 5:
      motionConfig = {
        initial: { x: 50 },
        animate: { x: 0 },
        exit: { x: 0 },
        transition: {}
      };
      break;

    default:
      motionConfig = {
        initial: { x: 100, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: 0, opacity: 0 },
        transition: { ease: 'easeOut', duration: 0.5 }
      };
      break;
  }

  return (
    <motion.div
      initial={motionConfig.initial}
      animate={motionConfig.animate}
      exit={motionConfig.exit}
      transition={motionConfig.transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

Motion.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  type: PropTypes.string.isRequired
};

export default Motion;
