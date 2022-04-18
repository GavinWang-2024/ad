import Navigation from '../src/components/Navigation/Navigation';
import { TypographyHeader } from '../src/components/common/TypographyVariants';
import Head from 'next/head';

export default function Calculator() {
  return (
    <>
      <Head>
        <title>Калькулятор цен</title>
        <meta
          name="description"
          content="Нефтегазмаш специализируется на разработке и производстве систем очистки и регенерации буровых растворов, систем комплексной утилизации отходов бурения, технологической оснастки, а так же производстве строительных металлоконструкций и емкостей различной сложности. За более чем 20 лет, нами реализовано множество различных проектов. Если Вам нужен индивидуальный подход при выполнении заказа, значит вы пришли в нужное место!"
        />
      </Head>
      <Navigation show={true} />
      <TypographyHeader sx={{ color: '#000', mt: 10 }}>
        Уважаемые партнеры! Страницы с калькулятором цен на данный момент
        находится в разработке!
      </TypographyHeader>
    </>
  );
}
