import React from 'react';
import ReactPlayer from 'react-player';

import SessionShowcase from './SessionShowcase';

export function Summer2013Page() {
  return (<SessionShowcase
    messagesId="summer2013"
    season="summer"
    year={2013}
    imageDetails={[
      {
        media: '/media/page_assets/summer_2013/computers.png',
        imageId: '0',
      },
      {
        media: '/media/page_assets/summer_2013/teamwork.png',
        imageId: '1',
      },
      {
        media: '/media/page_assets/summer_2013/icebreakers.png',
        imageId: '2',
      },
      {
        media: <ReactPlayer width="100%" controls url="https://www.youtube.com/watch?v=N_0_L4ynxr8" />,
        imageId: '3',
      },
      {
        media: <ReactPlayer width="100%" controls url="https://www.youtube.com/watch?v=7aatqhmNw9w" />,
        imageId: '4',
      },
    ]}
    imageGallery={[
      '/media/page_assets/summer_2013/other_photos/001.png',
      '/media/page_assets/summer_2013/other_photos/002.jpg',
      '/media/page_assets/summer_2013/other_photos/003.jpg',
      '/media/page_assets/summer_2013/other_photos/004.jpg',
      '/media/page_assets/summer_2013/other_photos/005.jpg',
      '/media/page_assets/summer_2013/other_photos/006.jpg',
      '/media/page_assets/summer_2013/other_photos/007.jpg',
      '/media/page_assets/summer_2013/other_photos/008.jpg',
      '/media/page_assets/summer_2013/other_photos/009.jpg',
    ].map(i => ({ original: i, thumbnail: i }))}
    backgroundImageUrl="/media/page_assets/summer_2013/teamwork.png"
  />);
}

export function Summer2014Page() {
  return (<SessionShowcase
    messagesId="summer2014"
    season="summer"
    year={2014}
    imageDetails={[
      {
        media: '/media/page_assets/summer_2014/1.jpg',
        imageId: '0',
      },
      {
        media: '/media/page_assets/summer_2014/2.jpg',
        imageId: '1',
      },
      {
        media: '/media/page_assets/summer_2014/3.jpg',
        imageId: '2',
      },
      {
        media: '/media/page_assets/summer_2014/4.jpg',
        imageId: '3',
      },
      {
        media: '/media/page_assets/summer_2014/5.jpg',
        imageId: '4',
      },
    ]}
    imageGallery={[
      '/media/page_assets/summer_2014/other_photos/00.jpg',
      '/media/page_assets/summer_2014/other_photos/01.jpg',
      '/media/page_assets/summer_2014/other_photos/02.jpg',
      '/media/page_assets/summer_2014/other_photos/03.jpg',
      '/media/page_assets/summer_2014/other_photos/04.jpg',
      '/media/page_assets/summer_2014/other_photos/05.jpg',
      '/media/page_assets/summer_2014/other_photos/06.jpg',
      '/media/page_assets/summer_2014/other_photos/07.jpg',
      '/media/page_assets/summer_2014/other_photos/08.jpg',
    ].map(i => ({ original: i, thumbnail: i, height: 600 }))}
    backgroundImageUrl="/media/page_assets/summer_2014/main.jpg"
  />);
}

export function Summer2015Page() {
  return (<SessionShowcase
    messagesId="summer2015"
    season="summer"
    year={2015}
    imageDetails={[
      {
        media: '/media/page_assets/summer_2015/1.jpg',
        imageId: '0',
      },
      {
        media: '/media/page_assets/summer_2015/2.jpg',
        imageId: '1',
      },
      {
        media: '/media/page_assets/summer_2015/3.jpg',
        imageId: '2',
      },
      {
        media: '/media/page_assets/summer_2015/4.jpg',
        imageId: '3',
      },
      {
        media: '/media/page_assets/summer_2015/5.jpg',
        imageId: '4',
      },
      {
        media: '/media/page_assets/summer_2015/6.jpg',
        imageId: '5',
      },
      {
        media: '/media/page_assets/summer_2015/7.jpg',
        imageId: '6',
      },
    ]}
    imageGallery={[
      '/media/page_assets/summer_2015/other_photos/00.png',
      '/media/page_assets/summer_2015/other_photos/01.jpg',
      '/media/page_assets/summer_2015/other_photos/02.jpg',
      '/media/page_assets/summer_2015/other_photos/03.jpg',
      '/media/page_assets/summer_2015/other_photos/04.jpg',
      '/media/page_assets/summer_2015/other_photos/05.jpg',
      '/media/page_assets/summer_2015/other_photos/06.jpg',
      '/media/page_assets/summer_2015/other_photos/07.jpg',
      '/media/page_assets/summer_2015/other_photos/08.jpg',
    ].map(i => ({ original: i, thumbnail: i }))}
    backgroundImageUrl="/media/page_assets/summer_2015/main.jpg"
  />);
}
