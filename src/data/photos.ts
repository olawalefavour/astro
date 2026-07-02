import photo1 from '../assets/photos/photo1.jpeg';
import photo2 from '../assets/photos/photo2.jpeg';
import photo3 from '../assets/photos/photo3.jpeg';
import photo4 from '../assets/photos/photo4.jpeg';
import photo5 from '../assets/photos/photo5.jpeg';
import photo6 from '../assets/photos/photo6.jpeg';
import photo7 from '../assets/photos/photo7.jpeg';
import photo8 from '../assets/photos/photo8.jpeg';

export interface Photo {
  id: string;
  src: string;
  category: 'milky-way' | 'deep-sky' | 'star-trails' | 'northern-lights';
  alt: string;
  location?: string;
  exposure?: string;
  iso?: string;
}

export const photos: Photo[] = [
  {
    id: 'photo1',
    src: photo1,
    category: 'milky-way',
    alt: 'Milky Way over a mountain ridge',
    location: 'Remote Highlands',
    exposure: '20s',
    iso: '3200',
  },
  {
    id: 'photo2',
    src: photo2,
    category: 'milky-way',
    alt: 'Milky Way core rising above a lake',
    location: 'Alpine Lake',
    exposure: '25s',
    iso: '4000',
  },
  {
    id: 'photo3',
    src: photo3,
    category: 'deep-sky',
    alt: 'Nebula glow captured in the night sky',
    location: 'Desert Observatory',
    exposure: '60s',
    iso: '1600',
  },
  {
    id: 'photo4',
    src: photo4,
    category: 'deep-sky',
    alt: 'Cluster of stars in a remote field',
    location: 'High Plains',
    exposure: '45s',
    iso: '2000',
  },
  {
    id: 'photo5',
    src: photo5,
    category: 'star-trails',
    alt: 'Circular star trails around the horizon',
    location: 'Coastal Point',
    exposure: '2h',
    iso: '800',
  },
  {
    id: 'photo6',
    src: photo6,
    category: 'star-trails',
    alt: 'Long star trails over a desert plain',
    location: 'Open Desert',
    exposure: '3h',
    iso: '640',
  },
  {
    id: 'photo7',
    src: photo7,
    category: 'northern-lights',
    alt: 'Aurora borealis painting the night sky',
    location: 'Arctic Circle',
    exposure: '8s',
    iso: '1600',
  },
  {
    id: 'photo8',
    src: photo8,
    category: 'northern-lights',
    alt: 'Green aurora curtains over snow',
    location: 'Northern Fjord',
    exposure: '10s',
    iso: '1250',
  },
];
