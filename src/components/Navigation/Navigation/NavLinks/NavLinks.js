import { Button, Grid, Typography } from '@mui/material';
import Link from '../../../../Link';
import { motion } from 'framer-motion';

export const links = [
  {
    href: '/#company',
    text: 'Компания',
  },
  {
    href: '/#production',
    text: 'Производство',
  },
  {
    href: '/#contacts',
    text: 'Контакты',
  },
];

export default function NavLinks() {
  return links.map((link) => {
    return (
      <Grid item key={link.text}>
        <Button
          variant="text"
          component={Link}
          noLinkStyle
          sx={{ color: 'black' }}
          href={link.href}
        >
          <Typography
            variant="overline"
            component={motion.p}
            whileHover={{ color: '#ffc45a' }}
            sx={{ fontSize: '1rem' }}
          >
            {link.text}
          </Typography>
        </Button>
      </Grid>
    );
  });
}
