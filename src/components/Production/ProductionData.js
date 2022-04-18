import { useRouter } from 'next/router';
import {
  TypographyHeader,
  TypographyParagraph,
  TypographyParagraphNoMargin,
  TypographyParagraphNoMarginAlign,
} from '../common/TypographyVariants';
import { Button, Grid, Box, Backdrop } from '@mui/material';
import { ImageFullWidth, ImageSmall } from '../common/StyledImages';
import { motion } from 'framer-motion';
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';
import classes from './ProductionPageData.module.css';
import { useState } from 'react';
import Image from 'next/image';

const ProductionVariants = {
  initial: { y: 150 },
  animate: { y: 0, transition: { type: 'spring', duration: 1.5 } },
};

const MotionProps = {
  initial: 'initial',
  whileInView: 'animate',
  viewport: { once: true },
  variants: ProductionVariants,
};

export default function (props) {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);
  const [activeIndex, setActiveIndex] = useState(false);
  return (
    <Box {...MotionProps} component={motion.div}>
      <Backdrop
        open={isClicked}
        onClick={() => {
          setIsClicked(!isClicked);
        }}
        sx={{ zIndex: 49999 }}
      />
      <TypographyHeader sx={{ mt: 5 }}>{props.data.title}</TypographyHeader>
      <Grid container justifyContent="center">
        <Image src={props.data.image} width={1000} height={542} />

        <Grid item xs={12}>
          <TypographyParagraphNoMargin
            sx={{
              mt: { xs: 5, lg: 5 },

              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            Назначение:
          </TypographyParagraphNoMargin>
        </Grid>

        <Grid container justifyContent="center" sx={{ textAlign: 'justify' }}>
          <TypographyParagraph
            sx={{ textAlign: { xs: 'justify', lg: 'left' }, mt: 3 }}
          >
            {props.data.purpose}
          </TypographyParagraph>
          {props.data.text &&
            props.data.text.map((item) => {
              return (
                <Grid container>
                  <TypographyParagraph
                    sx={{ textAlign: { xs: 'justify', lg: 'justify' }, mt: 3 }}
                  >
                    {item}
                  </TypographyParagraph>
                </Grid>
              );
            })}
          {props.data.tables && (
            <Grid item xs={12}>
              <TypographyParagraphNoMarginAlign
                sx={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  my: 3,
                }}
              >
                Состав:
              </TypographyParagraphNoMarginAlign>
            </Grid>
          )}
          {props.data.tables &&
            props.data.tables.map((item) => {
              return (
                <Grid container justifyContent="center" key={item.tableHeader}>
                  <table key={item.tableHeader} className={classes.table}>
                    <thead>
                      <tr>
                        <th colSpan="2" className={classes.header}>
                          <TypographyParagraphNoMarginAlign>
                            {item.tableHeader}
                          </TypographyParagraphNoMarginAlign>
                        </th>
                      </tr>
                    </thead>
                    {item.details &&
                      item.details.map((detail) => {
                        return (
                          <tbody key={detail.name}>
                            <tr className={classes.tr}>
                              <td className={classes.tdmain}>
                                <TypographyParagraphNoMarginAlign>
                                  {detail.name}
                                </TypographyParagraphNoMarginAlign>
                              </td>
                              <td className={classes.td}>
                                <TypographyParagraphNoMarginAlign>
                                  {detail.amount}
                                </TypographyParagraphNoMarginAlign>
                              </td>
                            </tr>
                          </tbody>
                        );
                      })}
                  </table>
                </Grid>
              );
            })}
        </Grid>

        <Grid item xs={12}>
          <TypographyParagraphNoMargin
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              my: 3,
            }}
          >
            Фотогалерея:
          </TypographyParagraphNoMargin>
        </Grid>

        <Grid container spacing={2}>
          {props.data.gallery.map((item, index) => {
            return (
              <Grid item xs={12} sm={4} key={item.title}>
                <ImageSmall
                  key={item.title}
                  onClick={() => {
                    setIsClicked(!isClicked);
                    setActiveIndex(item.title);
                  }}
                  className={` ${
                    (isClicked && activeIndex) === index
                      ? classes.active
                      : 'null'
                  }`}
                  src={item.image}
                  sx={{
                    width: '100%',
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                  }}
                />
                <InsertLinkRoundedIcon
                  className={classes.SVGIcon}
                  htmlColor="white"
                />
              </Grid>
            );
          })}
        </Grid>
        <Grid container justifyContent="center">
          <Button
            sx={{ mt: 10, mb: 5, zIndex: 0 }}
            variant="contained"
            color="primary"
            onClick={router.back}
          >
            Назад
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
