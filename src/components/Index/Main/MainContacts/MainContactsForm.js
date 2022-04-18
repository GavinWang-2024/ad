import { Grid, TextField, Box, Button } from '@mui/material';
import { TypographyParagraphNoMargin } from '../../../common/TypographyVariants';
import { motion } from 'framer-motion';

const TextFields = [
  {
    id: 'name',
    label: 'ФИО',
  },
  {
    id: 'company',
    label: 'Компания',
  },
  {
    id: 'email',
    label: 'Ваш e-mail',
  },
  {
    id: 'country',
    label: 'Страна',
  },
  {
    id: 'city',
    label: 'Город',
  },
  {
    id: 'phone',
    label: 'Номер телефона',
  },
];

const paperVariants = {
  initial: { y: 150 },
  animate: { y: 0, transition: { type: 'spring', bounce: 0.4, duration: 2 } },
};

const MotionProps = {
  initial: 'initial',
  whileInView: 'animate',
  viewport: { once: true },
  variants: paperVariants,
};

export default function MainContactsForm() {
  return (
    <Box px={2} {...MotionProps} component={motion.div}>
      <Grid container item mx="auto" mt={5} justifyContent={'space-between'}>
        {TextFields.map((item) => {
          return (
            <Grid item xs={12} sm={5} my={1} key={item.id}>
              <TextField fullWidth id={item.id} label={item.label} />
            </Grid>
          );
        })}
      </Grid>
      <Grid container item item my={5}>
        <TextField
          fullWidth
          id="text"
          label="Текст"
          multiline
          minRows={10}
          maxRows={20}
        />
      </Grid>
      <Button variant="contained" color="primary">
        Отправить
      </Button>
      <TypographyParagraphNoMargin
        mt={2}
        mx={2}
        sx={{ textAlign: 'left' }}
        color="red"
      >
        Уважаемые партнеры! На данный момент отправка формы недоступна.
        Пожалуйста, воспользуйтесь данными электронной почты и контактного
        телефона.
      </TypographyParagraphNoMargin>
    </Box>
  );
}
