import Welcome from '../src/components/Index/Welcome/Welcome';
import Navigation from '../src/components/Navigation/Navigation';
import Main from '../src/components/Index/Main/Main';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { BreakpointsContext } from '../src/context/breakpoints-context';

const appbarVariants = {
  initial: {
    y: -100,
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function Index() {
  const ctx = useContext(BreakpointsContext);
  let show;
  let initial;
  let animate;
  let variants;
  let position;

  if (ctx.isMedium || ctx.isSmall) {
    show = true;
    initial = null;
    animate = null;
    variants = null;
  } else if (ctx.isLarge) {
    show = false;
    initial = 'initial';
    animate = 'animate';
    variants = { ...appbarVariants };
  }

  return (
    <>
      {ctx.isSmall && (
        <Navigation
          initial={initial}
          animate={animate}
          variants={variants}
          component={motion.div}
          show={show}
          position={position}
        />
      )}
      <Welcome />
      {!ctx.isSmall && (
        <Navigation
          initial={initial}
          animate={animate}
          variants={variants}
          component={motion.div}
          show={show}
          position={position}
        />
      )}

      <Main />
    </>
  );
}
