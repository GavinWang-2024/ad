import { Grid, Button, Paper } from '@mui/material';
import Link from '../../../../Link';
import { useContext } from 'react';
import { BreakpointsContext } from '../../../../context/breakpoints-context';
import NavSplit from './NavSplit';

export const buttons = [
  {
    href: '/production',
    title: 'Продукция',
    color: 'primary',
  },
  {
    href: '/calculator',
    title: 'Расчет ЦС',
    color: 'secondary',
  },
];

export default function NavButtons() {
  const ctx = useContext(BreakpointsContext);

  return (
    <>
      {ctx.isLarge &&
        buttons.map((button) => {
          return (
            <Grid item key={button.title}>
              <Button
                variant="contained"
                color={button.color}
                component={Link}
                noLinkStyle
                href={button.href}
                key={button.title}
              >
                {button.title}
              </Button>
            </Grid>
          );
        })}
      {ctx.isMedium && <NavSplit />}
    </>
  );
}
