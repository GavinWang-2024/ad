import { Grid, Box } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';
import classes from '../../../common/BlueHoverEffect.module.css';

export default function MainProductionGallery(props) {
  const ProductionVariants = {
    initial: { y: 150, scale: 1 },
    animate: { y: 0, transition: { type: 'spring', bounce: 0.4, duration: 2 } },
  };

  const MotionProps = {
    initial: 'initial',
    whileInView: 'animate',
    whileHover: 'hover',
    whileTap: 'hover',
    viewport: { once: true },
    variants: ProductionVariants,
  };

  return (
    <Grid mt={{ xs: 5 }} container justifyContent="center" alignItems="center">
      {props.images.map((image) => {
        return (
          <Box
            m={2}
            {...MotionProps}
            component={motion.div}
            key={image.alt}
            sx={{ display: 'inline-block' }}
            className={classes.blueOnHover}
          >
            <InsertLinkRoundedIcon
              className={classes.SVGIcon}
              htmlColor="white"
              key={image.alt}
            />

            <Image
              src={image.src}
              alt={image.alt}
              width={550}
              height={300}
              key={image.src}
            />
          </Box>
        );
      })}
    </Grid>
  );
}
