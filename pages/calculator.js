import Navigation from '../src/components/Navigation/Navigation';
import { TypographyHeader } from '../src/components/common/TypographyVariants';

export default function Calculator() {
  return (
    <>
      <Navigation show={true} />
      <TypographyHeader sx={{ color: '#000', mt: 10 }}>
        Уважаемые партнеры! Страницы с калькулятором цен на данный момент
        находится в разработке!
      </TypographyHeader>
    </>
  );
}
