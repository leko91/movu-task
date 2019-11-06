import { Book } from '../models/book';
import { AUTHORS } from './authors';

function getRandomAuthor() {
  return AUTHORS[Math.floor(Math.random() * AUTHORS.length)].name;
}

export const BOOKS: Book[] = [
  {
    id: '5dbce2fb67bb91d040d2dcc7',
    name: 'Prowaste',
    author: getRandomAuthor(),
    numberOfPages: 327,
    publishedYear: 1862,
    quantity: 42,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb1dc4bbdbd021d133',
    name: 'Zenolux',
    author: getRandomAuthor(),
    numberOfPages: 56,
    publishedYear: 2011,
    quantity: 36,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb559e36d111b72a8c',
    name: 'Qnekt',
    author: getRandomAuthor(),
    numberOfPages: 67,
    publishedYear: 1887,
    quantity: 26,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb6b296b3b4bf8ada4',
    name: 'Duoflex',
    author: getRandomAuthor(),
    numberOfPages: 246,
    publishedYear: 1871,
    quantity: 14,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbc8511994a8c13343',
    name: 'Providco',
    author: getRandomAuthor(),
    numberOfPages: 162,
    publishedYear: 2006,
    quantity: 34,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbd8532533546642ba',
    name: 'Bedder',
    author: getRandomAuthor(),
    numberOfPages: 331,
    publishedYear: 2015,
    quantity: 12,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbd710fb289597545c',
    name: 'Bluplanet',
    author: getRandomAuthor(),
    numberOfPages: 378,
    publishedYear: 1924,
    quantity: 49,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbc67e57c73dd00d1b',
    name: 'Spacewax',
    author: getRandomAuthor(),
    numberOfPages: 123,
    publishedYear: 1920,
    quantity: 3,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb00b2ca2423128c0f',
    name: 'Retrack',
    author: getRandomAuthor(),
    numberOfPages: 387,
    publishedYear: 1958,
    quantity: 1,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbf57e30407ebdd947',
    name: 'Netur',
    author: getRandomAuthor(),
    numberOfPages: 96,
    publishedYear: 1850,
    quantity: 26,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbfc253e4d40cda68d',
    name: 'Incubus',
    author: getRandomAuthor(),
    numberOfPages: 106,
    publishedYear: 1897,
    quantity: 26,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb59519bf2d1ad9aee',
    name: 'Ginkle',
    author: getRandomAuthor(),
    numberOfPages: 209,
    publishedYear: 1952,
    quantity: 20,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbbf64b8c202bc1c39',
    name: 'Zilladyne',
    author: getRandomAuthor(),
    numberOfPages: 400,
    publishedYear: 1928,
    quantity: 40,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb1b43ce3e66b9030e',
    name: 'Minga',
    author: getRandomAuthor(),
    numberOfPages: 113,
    publishedYear: 1882,
    quantity: 8,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb546f7044d8bd9878',
    name: 'Deepends',
    author: getRandomAuthor(),
    numberOfPages: 132,
    publishedYear: 1967,
    quantity: 3,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb31241767545926d6',
    name: 'Eventage',
    author: getRandomAuthor(),
    numberOfPages: 371,
    publishedYear: 1913,
    quantity: 14,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb770f8d9c3ad83b68',
    name: 'Nurali',
    author: getRandomAuthor(),
    numberOfPages: 102,
    publishedYear: 1903,
    quantity: 26,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fba8aba31edadb3b5a',
    name: 'Conferia',
    author: getRandomAuthor(),
    numberOfPages: 335,
    publishedYear: 1981,
    quantity: 9,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbc6344fed5afed245',
    name: 'Grainspot',
    author: getRandomAuthor(),
    numberOfPages: 117,
    publishedYear: 1853,
    quantity: 18,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb37e4e1822976ec3c',
    name: 'Zytrac',
    author: getRandomAuthor(),
    numberOfPages: 324,
    publishedYear: 1887,
    quantity: 47,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb59e4a12e5da1443a',
    name: 'Zidox',
    author: getRandomAuthor(),
    numberOfPages: 307,
    publishedYear: 1977,
    quantity: 26,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb952f43da1e7a9345',
    name: 'Illumity',
    author: getRandomAuthor(),
    numberOfPages: 194,
    publishedYear: 1911,
    quantity: 37,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbccf5bd5afa4259c8',
    name: 'Hometown',
    author: getRandomAuthor(),
    numberOfPages: 181,
    publishedYear: 1990,
    quantity: 46,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb89104644946ce31e',
    name: 'Cablam',
    author: getRandomAuthor(),
    numberOfPages: 51,
    publishedYear: 1932,
    quantity: 31,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb677179ef6486c98d',
    name: 'Velos',
    author: getRandomAuthor(),
    numberOfPages: 205,
    publishedYear: 1930,
    quantity: 44,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb2c42cff2e84e9aed',
    name: 'Duflex',
    author: getRandomAuthor(),
    numberOfPages: 220,
    publishedYear: 1988,
    quantity: 35,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb0e5efad5d68deb3d',
    name: 'Furnitech',
    author: getRandomAuthor(),
    numberOfPages: 297,
    publishedYear: 1874,
    quantity: 29,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb1244e5d64b3634a3',
    name: 'Koffee',
    author: getRandomAuthor(),
    numberOfPages: 299,
    publishedYear: 2003,
    quantity: 31,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbc85548045ef56aab',
    name: 'Crustatia',
    author: getRandomAuthor(),
    numberOfPages: 88,
    publishedYear: 1883,
    quantity: 31,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb9cbb429849aa435c',
    name: 'Glukgluk',
    author: getRandomAuthor(),
    numberOfPages: 209,
    publishedYear: 1855,
    quantity: 26,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb6077a844be444ab0',
    name: 'Securia',
    author: getRandomAuthor(),
    numberOfPages: 106,
    publishedYear: 1969,
    quantity: 7,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbcd58c0997d91d82e',
    name: 'Isosphere',
    author: getRandomAuthor(),
    numberOfPages: 125,
    publishedYear: 1902,
    quantity: 14,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbda0e4f1bce2262d4',
    name: 'Zyple',
    author: getRandomAuthor(),
    numberOfPages: 214,
    publishedYear: 1909,
    quantity: 11,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb7db59d4d48018adb',
    name: 'Exoswitch',
    author: getRandomAuthor(),
    numberOfPages: 112,
    publishedYear: 1907,
    quantity: 22,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbc706748aa7769001',
    name: 'Marvane',
    author: getRandomAuthor(),
    numberOfPages: 183,
    publishedYear: 1887,
    quantity: 10,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb4e19c61b2afe48ea',
    name: 'Coriander',
    author: getRandomAuthor(),
    numberOfPages: 144,
    publishedYear: 2009,
    quantity: 32,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb630b9896b53e1246',
    name: 'Stockpost',
    author: getRandomAuthor(),
    numberOfPages: 285,
    publishedYear: 2014,
    quantity: 9,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb62cd9e2ffc7537b4',
    name: 'Colaire',
    author: getRandomAuthor(),
    numberOfPages: 154,
    publishedYear: 1884,
    quantity: 12,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb2cb9208fc3a53c9b',
    name: 'Zillactic',
    author: getRandomAuthor(),
    numberOfPages: 52,
    publishedYear: 2003,
    quantity: 23,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb0d0915af081e2ee3',
    name: 'Bitrex',
    author: getRandomAuthor(),
    numberOfPages: 202,
    publishedYear: 1859,
    quantity: 22,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb8e91ca6e08953cbe',
    name: 'Bristo',
    author: getRandomAuthor(),
    numberOfPages: 157,
    publishedYear: 1962,
    quantity: 13,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb6508e446ae8340fb',
    name: 'Telequiet',
    author: getRandomAuthor(),
    numberOfPages: 66,
    publishedYear: 1987,
    quantity: 3,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb57b8af63ed30639c',
    name: 'Luxuria',
    author: getRandomAuthor(),
    numberOfPages: 259,
    publishedYear: 1990,
    quantity: 23,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbf9463cbaee07b9a5',
    name: 'Genmom',
    author: getRandomAuthor(),
    numberOfPages: 147,
    publishedYear: 1985,
    quantity: 0,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbac22806f9f9de78f',
    name: 'Exoblue',
    author: getRandomAuthor(),
    numberOfPages: 121,
    publishedYear: 1869,
    quantity: 2,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb06d01e56bfcba34d',
    name: 'Magnina',
    author: getRandomAuthor(),
    numberOfPages: 370,
    publishedYear: 1907,
    quantity: 50,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb6edd52c6ee926c31',
    name: 'Digiprint',
    author: getRandomAuthor(),
    numberOfPages: 306,
    publishedYear: 1893,
    quantity: 34,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb3890133c50789ee2',
    name: 'Olympix',
    author: getRandomAuthor(),
    numberOfPages: 206,
    publishedYear: 1952,
    quantity: 15,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb53b8a33f97908d13',
    name: 'Beadzza',
    author: getRandomAuthor(),
    numberOfPages: 160,
    publishedYear: 1909,
    quantity: 19,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb03d6b70ecf27ab46',
    name: 'Flum',
    author: getRandomAuthor(),
    numberOfPages: 147,
    publishedYear: 1872,
    quantity: 36,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb049c92df80871dc3',
    name: 'Orbean',
    author: getRandomAuthor(),
    numberOfPages: 300,
    publishedYear: 1880,
    quantity: 39,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbdcce8fd8e7147e93',
    name: 'Extragen',
    author: getRandomAuthor(),
    numberOfPages: 285,
    publishedYear: 1917,
    quantity: 5,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbfff4ab07e8f1894c',
    name: 'Progenex',
    author: getRandomAuthor(),
    numberOfPages: 358,
    publishedYear: 1962,
    quantity: 24,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb16226e62faa015b7',
    name: 'Daycore',
    author: getRandomAuthor(),
    numberOfPages: 249,
    publishedYear: 1852,
    quantity: 18,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbebd8362bfaa7dde9',
    name: 'Zilencio',
    author: getRandomAuthor(),
    numberOfPages: 107,
    publishedYear: 1918,
    quantity: 30,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbe09a2b23fbae0c39',
    name: 'Zenco',
    author: getRandomAuthor(),
    numberOfPages: 268,
    publishedYear: 1875,
    quantity: 12,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb362b9592489832f7',
    name: 'Proflex',
    author: getRandomAuthor(),
    numberOfPages: 285,
    publishedYear: 1971,
    quantity: 7,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb6a767504bb12484f',
    name: 'Digigen',
    author: getRandomAuthor(),
    numberOfPages: 277,
    publishedYear: 1939,
    quantity: 0,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbfa8afb8eb73b4a8e',
    name: 'Combogen',
    author: getRandomAuthor(),
    numberOfPages: 270,
    publishedYear: 2001,
    quantity: 40,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbdfe7ea15ee66b960',
    name: 'Eyeris',
    author: getRandomAuthor(),
    numberOfPages: 77,
    publishedYear: 1987,
    quantity: 0,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb1afc3492e09db7b4',
    name: 'Biospan',
    author: getRandomAuthor(),
    numberOfPages: 329,
    publishedYear: 1885,
    quantity: 8,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbae05de7c802e2913',
    name: 'Ebidco',
    author: getRandomAuthor(),
    numberOfPages: 311,
    publishedYear: 1943,
    quantity: 7,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb5eb7e279ee328bf7',
    name: 'Polaria',
    author: getRandomAuthor(),
    numberOfPages: 396,
    publishedYear: 1856,
    quantity: 47,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb77579a1850d733b5',
    name: 'Comstruct',
    author: getRandomAuthor(),
    numberOfPages: 59,
    publishedYear: 1883,
    quantity: 24,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbe00f3d9b06a7aeb0',
    name: 'Cogentry',
    author: getRandomAuthor(),
    numberOfPages: 302,
    publishedYear: 1980,
    quantity: 36,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb2ba5f4625c9c3680',
    name: 'Zaggles',
    author: getRandomAuthor(),
    numberOfPages: 337,
    publishedYear: 2006,
    quantity: 5,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb963a447540cef152',
    name: 'Geekola',
    author: getRandomAuthor(),
    numberOfPages: 345,
    publishedYear: 1931,
    quantity: 18,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb4ed449b050df28e4',
    name: 'Opticall',
    author: getRandomAuthor(),
    numberOfPages: 273,
    publishedYear: 1935,
    quantity: 18,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb527f1fc3d69de95f',
    name: 'Quintity',
    author: getRandomAuthor(),
    numberOfPages: 177,
    publishedYear: 1862,
    quantity: 44,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbb7e9db971b5ee8df',
    name: 'Neurocell',
    author: getRandomAuthor(),
    numberOfPages: 127,
    publishedYear: 1947,
    quantity: 18,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb3a488fa73146d1c6',
    name: 'Comtours',
    author: getRandomAuthor(),
    numberOfPages: 349,
    publishedYear: 1909,
    quantity: 9,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb70e52043ce183d53',
    name: 'Waretel',
    author: getRandomAuthor(),
    numberOfPages: 90,
    publishedYear: 1971,
    quantity: 4,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb2188957f4a79e2c4',
    name: 'Pasturia',
    author: getRandomAuthor(),
    numberOfPages: 210,
    publishedYear: 1881,
    quantity: 45,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb3150d574ca425ad1',
    name: 'Dancerity',
    author: getRandomAuthor(),
    numberOfPages: 218,
    publishedYear: 1880,
    quantity: 27,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb79a817a1f718ef7f',
    name: 'Pheast',
    author: getRandomAuthor(),
    numberOfPages: 117,
    publishedYear: 1923,
    quantity: 21,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb2cdd48fc17e376c6',
    name: 'Orbalix',
    author: getRandomAuthor(),
    numberOfPages: 152,
    publishedYear: 1881,
    quantity: 33,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb1e419365d044e1db',
    name: 'Zaggle',
    author: getRandomAuthor(),
    numberOfPages: 264,
    publishedYear: 1865,
    quantity: 32,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb99a8c9821c236839',
    name: 'Infotrips',
    author: getRandomAuthor(),
    numberOfPages: 188,
    publishedYear: 1976,
    quantity: 38,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb0a015ca2b8e023eb',
    name: 'Andershun',
    author: getRandomAuthor(),
    numberOfPages: 237,
    publishedYear: 1915,
    quantity: 25,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb6812208d4fbfab6f',
    name: 'Geoforma',
    author: getRandomAuthor(),
    numberOfPages: 215,
    publishedYear: 1892,
    quantity: 13,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbc9f71d262fa35d58',
    name: 'Gorganic',
    author: getRandomAuthor(),
    numberOfPages: 158,
    publishedYear: 1988,
    quantity: 29,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb337b86ca78a8d2b8',
    name: 'Izzby',
    author: getRandomAuthor(),
    numberOfPages: 301,
    publishedYear: 1923,
    quantity: 43,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbd3462ef15e413dad',
    name: 'Fortean',
    author: getRandomAuthor(),
    numberOfPages: 245,
    publishedYear: 1949,
    quantity: 1,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb4c33020acbae94ab',
    name: 'Dognosis',
    author: getRandomAuthor(),
    numberOfPages: 231,
    publishedYear: 1958,
    quantity: 13,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb6c1bd5e33b641ecc',
    name: 'Limozen',
    author: getRandomAuthor(),
    numberOfPages: 263,
    publishedYear: 1998,
    quantity: 41,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb86a2dfcb4c09eba7',
    name: 'Singavera',
    author: getRandomAuthor(),
    numberOfPages: 315,
    publishedYear: 1903,
    quantity: 46,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb65d62faa909f5d15',
    name: 'Harmoney',
    author: getRandomAuthor(),
    numberOfPages: 149,
    publishedYear: 1892,
    quantity: 4,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbb2d48288436eebdb',
    name: 'Earthpure',
    author: getRandomAuthor(),
    numberOfPages: 382,
    publishedYear: 1884,
    quantity: 29,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb783c103f83bc8516',
    name: 'Endicil',
    author: getRandomAuthor(),
    numberOfPages: 97,
    publishedYear: 1963,
    quantity: 17,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbf02402868f15d328',
    name: 'Hawkster',
    author: getRandomAuthor(),
    numberOfPages: 68,
    publishedYear: 1878,
    quantity: 13,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb42957e640402b1c3',
    name: 'Earbang',
    author: getRandomAuthor(),
    numberOfPages: 392,
    publishedYear: 2009,
    quantity: 18,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb504dca2473ed0d05',
    name: 'Vertide',
    author: getRandomAuthor(),
    numberOfPages: 67,
    publishedYear: 2002,
    quantity: 3,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbafa5dd7e78fcb36e',
    name: 'Biolive',
    author: getRandomAuthor(),
    numberOfPages: 384,
    publishedYear: 2002,
    quantity: 33,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbc442d505a1ad35e8',
    name: 'Elentrix',
    author: getRandomAuthor(),
    numberOfPages: 359,
    publishedYear: 1967,
    quantity: 23,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbba92ce585639d0a8',
    name: 'Techtrix',
    author: getRandomAuthor(),
    numberOfPages: 139,
    publishedYear: 1940,
    quantity: 17,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb438c7ed84d525b78',
    name: 'Miracula',
    author: getRandomAuthor(),
    numberOfPages: 182,
    publishedYear: 1944,
    quantity: 0,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb398840a501effaf6',
    name: 'Stralum',
    author: getRandomAuthor(),
    numberOfPages: 379,
    publishedYear: 1851,
    quantity: 24,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fb71f64622bc026106',
    name: 'Futuris',
    author: getRandomAuthor(),
    numberOfPages: 102,
    publishedYear: 1901,
    quantity: 42,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  },
  {
    id: '5dbce2fbd08b5fe463b4e2bc',
    name: 'Marqet',
    author: getRandomAuthor(),
    numberOfPages: 142,
    publishedYear: 1953,
    quantity: 38,
    coverImage: `https://picsum.photos/${Math.floor(Math.random() * (200 + 1)) + 200}`
  }
];
