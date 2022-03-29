import im0 from '../img/impossible/0.jpg';
import im1 from '../img/impossible/1.jpg';
import im2 from '../img/impossible/2.jpg';
import im3 from '../img/impossible/3.jpg';
import im4 from '../img/impossible/4.jpg';
import im5 from '../img/impossible/5.jpg';
import im6 from '../img/impossible/6.jpg';
import im7 from '../img/impossible/7.jpg';
import im8 from '../img/impossible/8.jpg';
import im9 from '../img/impossible/9.jpg';
import easyLevelImages from './easy';
import mediumLevelImages from './medium';
import hardLevelImages from './hard';
import uniqid from 'uniqid';

const impossibleLevelImages = [
  ...easyLevelImages,
  ...mediumLevelImages,
  ...hardLevelImages,
  {
    img: im0,
    alt: 'Hawkeye',
    id: uniqid(),
  },
  {
    img: im1,
    alt: 'Fantastic Four: Rise of the Silver Surfer',
    id: uniqid(),
  },
  {
    img: im2,
    alt: 'Fantastic Four',
    id: uniqid(),
  },
  {
    img: im3,
    alt: 'Venom',
    id: uniqid(),
  },
  {
    img: im4,
    alt: 'Venom: Let There Be Carnage',
    id: uniqid(),
  },
  {
    img: im5,
    alt: 'WandaVision',
    id: uniqid(),
  },
  {
    img: im6,
    alt: 'Loki',
    id: uniqid(),
  },
  {
    img: im7,
    alt: 'The Falcon and the Winter Soldier',
    id: uniqid(),
  },
  {
    img: im8,
    alt: 'What If...?',
    id: uniqid(),
  },
  {
    img: im9,
    alt: 'Daredevil',
    id: uniqid(),
  },
];

export default impossibleLevelImages;
