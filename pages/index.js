import Welcome from '../src/components/Index/Welcome/Welcome';
import Navigation from '../src/components/Navigation/Navigation';
import Main from '../src/components/Index/Main/Main';
import Head from 'next/head';
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
      <Head>
        <title>Нефтегазмаш</title>
        <meta
          name="description"
          content="Нефтегазмаш специализируется на разработке и производстве систем очистки и регенерации буровых растворов, систем комплексной утилизации отходов бурения, технологической оснастки, а так же производстве строительных металлоконструкций и емкостей различной сложности. За более чем 20 лет, нами реализовано множество различных проектов. Если Вам нужен индивидуальный подход при выполнении заказа, значит вы пришли в нужное место!"
        />
      </Head>
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
