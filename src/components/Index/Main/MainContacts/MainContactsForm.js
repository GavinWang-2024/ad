import { Grid, TextField, Box, Button } from '@mui/material';
import { TypographyParagraphNoMargin } from '../../../common/TypographyVariants';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SimpleSnackbar from './MainContactsForm/MainContactsSnackbar';

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
  const [snackBar, setSnackBar] = useState({
    open: false,
    message: '',
    severiy: '',
    duration: 6000,
  });

  const [nameField, setNameField] = useState('');
  const [companyField, setCompanyField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [phoneField, setPhoneField] = useState('');
  const [textField, setTextField] = useState('');
  const [testField, setTestField] = useState('');

  const [nameError, setNameError] = useState(false);
  const [companyError, setCompanyError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [textError, setTextError] = useState(false);
  const [testError, setTestError] = useState(false);

  const [nameErrorMessage, setNameErrorMessage] = useState(false);
  const [companyErrorMessage, setCompanyErrorMessage] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState(false);
  const [phoneErrorMessage, setPhoneErrorMessage] = useState(false);
  const [textErrorMessage, setTextErrorMessage] = useState(false);
  const [testErrorMessage, setTestErrorMessage] = useState(false);

  function nameFieldHandler(event) {
    setNameField(event.target.value);
  }
  function companyFieldHandler(event) {
    setCompanyField(event.target.value);
  }
  function emailFieldHandler(event) {
    setEmailField(event.target.value);
  }
  function phoneFieldHandler(event) {
    setPhoneField(event.target.value);
  }
  function textFieldHandler(event) {
    setTextField(event.target.value);
  }
  function testFieldHandler(event) {
    setTestField(event.target.value);
  }

  let data = {
    name: nameField,
    company: companyField,
    email: emailField,
    phone: phoneField,
    text: textField,
    test: testField,
  };

  async function formSubmitHandler(event) {
    event.preventDefault();

    setSnackBar((prevState) => {
      return {
        ...prevState,
        open: true,
        message: 'Отправляем данные...',
        severity: 'info',
        duration: 6000,
      };
    });

    const response = await fetch('/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log(response);
    if (!response.ok) {
      if (nameField.trim() === '') {
        setNameError(true);
        setNameErrorMessage('Поле не заполнено.');
      }
      if (companyField.trim() === '') {
        setCompanyError(true);
        setCompanyErrorMessage('Поле не заполнено.');
      }
      if (!emailField.includes('@')) {
        setEmailError(true);
        setEmailErrorMessage('Неверный e-mail.');
      }
      if (phoneField.trim() === '') {
        setPhoneError(true);
        setPhoneErrorMessage('Поле не заполнено.');
      }
      if (textField.trim() === '') {
        setTextError(true);
        setTextErrorMessage('Поле не заполнено.');
      }
      if (testField !== '6') {
        setTestError(true);
        setTestErrorMessage('Неверный ответ.');
      }

      setSnackBar((prevState) => {
        return {
          ...prevState,
          open: true,
          message: 'Ошибка!',
          severity: 'error',
          duration: 6000,
        };
      });
      return;
    }

    setSnackBar((prevState) => {
      return {
        ...prevState,
        open: true,
        message: 'Готово!',
        severity: 'success',
        duration: 6000,
      };
    });

    setNameField('');
    setCompanyField('');
    setEmailField('');
    setPhoneField('');
    setTextField('');
    setTestField('');
  }

  return (
    <Box px={2} {...MotionProps} component={motion.div}>
      <Grid container item mx="auto" mt={5} justifyContent={'space-between'}>
        <Grid item xs={12} sm={5} my={1}>
          <TextField
            fullWidth
            id="name"
            label="ФИО"
            onBlur={() => {
              setNameError(false);
              setNameErrorMessage(null);
            }}
            onChange={nameFieldHandler}
            value={nameField}
            error={nameError}
            helperText={nameErrorMessage}
          />
        </Grid>

        <Grid item xs={12} sm={5} my={1}>
          <TextField
            fullWidth
            id="company"
            label="Компания"
            onBlur={() => {
              setCompanyError(false);
              setCompanyErrorMessage(null);
            }}
            onChange={companyFieldHandler}
            value={companyField}
            error={companyError}
            helperText={companyErrorMessage}
          />
        </Grid>
        <Grid item xs={12} sm={5} my={1}>
          <TextField
            fullWidth
            id="email"
            label="Ваш email"
            onBlur={() => {
              setEmailError(false);
              setEmailErrorMessage(null);
            }}
            onChange={emailFieldHandler}
            value={emailField}
            error={emailError}
            helperText={emailErrorMessage}
          />
        </Grid>

        <Grid item xs={12} sm={5} my={1}>
          <TextField
            fullWidth
            id="phone"
            label="Номер телефона"
            onBlur={() => {
              setPhoneError(false);
              setPhoneErrorMessage(null);
            }}
            onChange={phoneFieldHandler}
            value={phoneField}
            error={phoneError}
            helperText={phoneErrorMessage}
          />
        </Grid>
      </Grid>
      <Grid container item item my={5}>
        <TextField
          fullWidth
          id="text"
          label="Текст"
          multiline
          minRows={10}
          maxRows={20}
          onBlur={() => {
            setTextError(false);
            setTextErrorMessage(null);
          }}
          onChange={textFieldHandler}
          value={textField}
          error={textError}
          helperText={textErrorMessage}
        />
      </Grid>
      <SimpleSnackbar snackBar={snackBar} setSnackBar={setSnackBar} />
      <TypographyParagraphNoMargin my={2} sx={{ textAlign: 'left' }}>
        Защита от спама. Сколько будет 2 + ( 2 * 2) ?
      </TypographyParagraphNoMargin>
      <Grid item xs={12} sm={5} my={1}>
        <TextField
          fullWidth
          id="phone"
          label="2+(2*2) = ?"
          onBlur={() => {
            setTestError(false);
            setTestErrorMessage(null);
          }}
          onChange={testFieldHandler}
          value={testField}
          error={testError}
          helperText={testErrorMessage}
        />
      </Grid>

      <Button
        sx={{ mt: 5 }}
        variant="contained"
        color="primary"
        onClick={formSubmitHandler}
      >
        Отправить
      </Button>
    </Box>
  );
}
