// import Link from '../../Link';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';
// import classes from '../common/BlueHoverEffect.module.css';
// import { motion } from 'framer-motion';
// import { useContext } from 'react';
// import { BreakpointsContext } from '../../context/breakpoints-context';
// import { TypographyHeader } from '../common/TypographyVariants';

// const itemData = [
//   {
//     category: 'Циркуляционные системы',

//     data: [
//       {
//         img: 'images/sc/SC144.jpg',
//         title: 'СЦ-144',
//         href: '/sc144',
//       },
//       {
//         img: 'images/sc/SC200.jpg',
//         title: 'СЦ-200',
//         href: '/sc200',
//       },
//       {
//         img: 'images/sc/SCMBU.jpg',
//         title: 'СЦ-МБУ',
//         href: '/scmbu',
//       },
//       {
//         img: 'images/sc/SCK250.jpg',
//         title: 'СЦК-250',
//         href: '/sck250',
//       },
//     ],
//   },
//   {
//     category: 'Оборудование',

//     data: [
//       {
//         img: 'images/svs/svs-full.jpg',
//         title: 'Вибросито СВС',
//         href: '/svs',
//       },
//       {
//         img: 'images/bkf/bkf-full.jpg',
//         title: 'Блок коагуляции флокуляции БКФ',
//         href: '/bkf',
//       },
//     ],
//   },
//   {
//     category: 'Утилизация нефтешламов',

//     data: [
//       {
//         img: '/images/ku/ku-02m-full.jpg',
//         title: 'КУ-02М',
//         href: '/ku02m',
//       },
//       {
//         img: 'images/kupnsh/kupnsh-full.jpg',
//         title: 'КУПШМ',
//         href: '/kupnsh',
//       },
//       {
//         img: 'images/umosh/umosh-full.jpg',
//         title: 'Установка Мобильная Осушения Шлама',
//         href: '/umosh',
//       },
//     ],
//   },
// ];

// const ProductionVariants = {
//   initial: { y: 150 },
//   animate: { y: 0, transition: { type: 'spring', bounce: 0.4, duration: 2 } },
// };

// const MotionProps = {
//   initial: 'initial',
//   whileInView: 'animate',
//   viewport: { once: true },
//   variants: ProductionVariants,
// };

// export default function Production() {
//   const ctx = useContext(BreakpointsContext);

//   return (
//     <>
//       {itemData.map((item) => {
//         return (
//           <ImageList
//             key={item.category}
//             sx={{
//               marginY: 5,
//               width: '98%',
//               height: '100%',
//               marginX: 'auto',
//             }}
//             {...MotionProps}
//             component={motion.div}
//             cols={4}
//             gap={25}
//           >
//             <ImageListItem key="Subheader" cols={4}>
//               <TypographyHeader
//                 sx={{
//                   marginBottom: 10,
//                 }}
//               >
//                 {item.category}
//               </TypographyHeader>
//             </ImageListItem>

//             {item.data.map((item) => (
//               <ImageListItem
//                 key={item.title}
//                 sx={{
//                   width: '100%',
//                   border: '1px solid black',
//                 }}
//                 component={Link}
//                 href={item.href}
//                 className={classes.blueOnHover}
//                 cols={ctx.isSmall ? 4 : ctx.isMedium ? 2 : ctx.isLarge ? 1 : 1}
//               >
//                 <img
//                   src={`${item.img}`}
//                   srcSet={`${item.img}`}
//                   alt={item.title}
//                   loading="lazy"
//                 />

//                 <ImageListItemBar
//                   title={item.title}
//                   subtitle={item.author}
//                   actionIcon={
//                     <IconButton
//                       sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
//                       aria-label={`info about ${item.title}`}
//                     >
//                       <InfoIcon />
//                     </IconButton>
//                   }
//                 />
//               </ImageListItem>
//             ))}
//           </ImageList>
//         );
//       })}
//     </>
//   );
// }

import Link from '../../Link';
import Image from 'next/image';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import classes from '../common/BlueHoverEffect.module.css';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { BreakpointsContext } from '../../context/breakpoints-context';
import { TypographyHeader } from '../common/TypographyVariants';
import { Grid } from '@mui/material';

const itemData = [
  {
    category: 'Циркуляционные системы',

    data: [
      {
        img: '/images/sc/SC144.jpg',
        title: 'СЦ-144',
        href: '/sc144',
      },
      {
        img: '/images/sc/SC200.jpg',
        title: 'СЦ-200',
        href: '/sc200',
      },
      {
        img: '/images/sc/SCMBU.jpg',
        title: 'СЦ-МБУ',
        href: '/scmbu',
      },
      {
        img: '/images/sc/SCK250.jpg',
        title: 'СЦК-250',
        href: '/sck250',
      },
    ],
  },
  {
    category: 'Оборудование',

    data: [
      {
        img: '/images/svs/svs-full.jpg',
        title: 'Вибросито СВС',
        href: '/svs',
      },
      {
        img: '/images/bkf/bkf-full.jpg',
        title: 'Блок коагуляции флокуляции БКФ',
        href: '/bkf',
      },
    ],
  },
  {
    category: 'Утилизация нефтешламов',

    data: [
      {
        img: '/images/ku/ku-02m-full.jpg',
        title: 'КУ-02М',
        href: '/ku02m',
      },
      {
        img: '/images/kupnsh/kupnsh-full.jpg',
        title: 'КУПШМ',
        href: '/kupnsh',
      },
      {
        img: '/images/umosh/umosh-full.jpg',
        title: 'Установка Мобильная Осушения Шлама',
        href: '/umosh',
      },
    ],
  },
];

const ProductionVariants = {
  initial: { y: 150 },
  animate: { y: 0, transition: { type: 'spring', bounce: 0.4, duration: 2 } },
};

const MotionProps = {
  initial: 'initial',
  whileInView: 'animate',
  viewport: { once: true },
  variants: ProductionVariants,
};

export default function Production() {
  const ctx = useContext(BreakpointsContext);

  return (
    <>
      {itemData.map((item) => {
        return (
          <Grid
            container
            key={item.category}
            {...MotionProps}
            component={motion.div}
            justifyContent="center"
          >
            <Grid item xs={12}>
              <TypographyHeader
                sx={{
                  my: 10,
                }}
              >
                {item.category}
              </TypographyHeader>
            </Grid>

            {item.data.map((item) => (
              <Grid
                item
                key={item.title}
                sx={{
                  width: '25rem',
                  mx: 0.5,
                  my: 1,
                  border: '1px solid black',
                }}
                component={Link}
                href={item.href}
                className={classes.blueOnHover}
              >
                <Image src={item.img} width={400} height={300} />

                <ImageListItemBar
                  title={item.title}
                  subtitle={item.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${item.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </Grid>
            ))}
          </Grid>
        );
      })}
    </>
  );
}
