import { Grid } from '@mui/material';
import Link from '../../../Link';

export default function NavLogo() {
  return (
    <Grid
      container
      item
      md={4}
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Link href="/">
        <img src={'/images/ngm.png'} height="80px" alt="НГМ логотип" />
      </Link>
    </Grid>
  );
}
