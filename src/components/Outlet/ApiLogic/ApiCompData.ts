export enum BackgroundPaths {
  Desktop = '/images/backgrounds/desk.jpg',
  Mobile = '/images/backgrounds/mob.jpg',
}

export enum MainImagePath {
  ImageDesk = '/images/content/aviator.gif',
  ImageMob = '/images/content/aviator_mob.gif',
}

export interface FirstBlock {
  content: {
    title: string;
    buttonText: string;
  };
}

export const firstBlock: FirstBlock = {
  content: {
    title: 'HAVE A BLAST WITH A FUN AND FREE SOCIAL GAME!',
    buttonText: 'Play Game',
  },
};
export const GAMELINK: string =
  'https://app-e.insvr.com/go.ashx?keyname=SGSkysTheLimit&brandid=c9f2722d-277a-ee11-8925-000d3aa91a43&lobbyurl=&locale=en&mode=fun';
