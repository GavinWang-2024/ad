import { Grid } from '@mui/material';
import { motion } from 'framer-motion';

import {
  TypographyHeader,
  TypographyParagraph,
} from '../../common/TypographyVariants';
import MainProductionGallery from './MainProduction/MainProductionGallery';
import MainProductionArray from './MainProduction/MainProductionArray';

const ProductionVariants = {
  initial: { y: 150 },
  animate: { y: 0, transition: { type: 'spring', bounce: 0.4, duration: 2 } },
};

const MotionProps = {
  initial: 'initial',
  whileInView: 'animate',
  viewport: { once: true },
  variants: ProductionVariants,
};

export default function MainProduction() {
  return (
    <Grid
      sx={{ backgroundColor: '#F3F3F3' }}
      {...MotionProps}
      component={motion.div}
      id="production"
      className="titlefix"
    >
      <TypographyHeader sx={{ pt: 5 }} {...MotionProps} component={motion.p}>
        Наше Производство
      </TypographyHeader>
      <TypographyParagraph mt={5} {...MotionProps} component={motion.p}>
        Особобленное подразделение нашего предприятия, одновременно и
        производственная база со складскими помещениями находится в г.Тихорецк,
        Краснодарского края. Завод оснащён всем необходимым для современного
        производства оборудованием. Сборочный цех позволяет осуществлять
        производство и контрольную сборку циркуляционной системы любой
        сложности.
      </TypographyParagraph>
      <Grid container>
        <MainProductionGallery
          images={MainProductionArray}
          MotionProps={MotionProps}
          ProductionVariants={ProductionVariants}
        />
      </Grid>
    </Grid>
  );
}
