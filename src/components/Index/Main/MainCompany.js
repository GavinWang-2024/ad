import { Grid } from '@mui/material';
import MainTypowriter from './MainCompany/MainTypowriter';
import { motion } from 'framer-motion';
import { TypographyParagraph } from '../../common/TypographyVariants';

const paragraphVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 4 } },
};

export default function MainCompany() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      sx={{ backgroundColor: '#F3F3F3', height: 'auto' }}
      pt={4}
      id="company"
    >
      <Grid container item justifyContent="center" alignItems="center">
        <MainTypowriter />
      </Grid>
      <Grid
        container
        item
        mb={5}
        justifyContent="center"
        alignItems="flex-start"
      >
        <TypographyParagraph
          component={motion.p}
          variants={paragraphVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          mt={2}
        >
          Нефтегазмаш специализируется на разработке и производстве систем
          очистки и регенерации буровых растворов, систем комплексной утилизации
          отходов бурения, технологической оснастки, а так же производстве
          строительных металлоконструкций и емкостей различной сложности. За
          более чем 20 лет, нами реализовано множество различных проектов. Если
          Вам нужен индивидуальный подход при выполнении заказа, значит вы
          пришли в нужное место!
        </TypographyParagraph>
      </Grid>
    </Grid>
  );
}
