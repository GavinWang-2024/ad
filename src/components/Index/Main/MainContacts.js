import { Grid } from '@mui/material';
import {
  TypographyHeader,
  TypographyParagraph,
} from '../../common/TypographyVariants';
import MainContactsInfo from './MainContacts/MainContactsInfo';
import MainContactsArray from './MainContacts/MainContactsArray';
import MainContactsForm from './MainContacts/MainContactsForm';
import { motion } from 'framer-motion';

const ParagraphVariants = {
  initial: { y: 150 },
  animate: { y: 0, transition: { type: 'spring', bounce: 0.4, duration: 2 } },
};

const MotionProps = {
  initial: 'initial',
  whileInView: 'animate',
  viewport: { once: true },
  variants: ParagraphVariants,
};

export default function MainContacts() {
  return (
    <Grid mt={10} container id="contacts">
      <Grid item container direction="column" xs={12} alignItems="center">
        <TypographyHeader {...MotionProps} component={motion.p}>
          Контакты
        </TypographyHeader>

        <TypographyParagraph my={5} {...MotionProps} component={motion.p}>
          Вы сможете связаться с нами способами, указанными ниже. Мы всегда на
          связи!
        </TypographyParagraph>
      </Grid>

      <Grid item xs={12} md={3}>
        <MainContactsInfo data={MainContactsArray} />
      </Grid>
      <Grid item md={9}>
        <MainContactsForm />
      </Grid>
      <Grid item container justifyContent="center" my={5}>
        <TypographyHeader sx={{ mx: 2 }} {...MotionProps} component={motion.p}>
          Вы так же можете найти нас на карте
        </TypographyHeader>
      </Grid>
      <Grid item {...MotionProps} component={motion.div} xs={12}>
        <section id="map__section">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Af63a65d8cf14dfff27bf4b25cb72d3c662323efc1a25a244916f22065cab195d&amp;source=constructor"
            width="100%"
            height="450"
            frameBorder="0"
          ></iframe>
        </section>
      </Grid>
    </Grid>
  );
}
