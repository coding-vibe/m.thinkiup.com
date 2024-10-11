export enum ImagePath {
  ImageDesk1 = '/images/content/main_img_desk_1.jpg',
  ImageMob1 = '/images/content/main_img_mob_1.jpg',
  ImageDesk2 = '/images/content/main_img_desk_2.jpg',
  ImageMob2 = '/images/content/main_img_mob_2.jpg',
  ImageDesk3 = '/images/content/main_img_desk_3.jpg',
  ImageMob3 = '/images/content/main_img_mob_3.jpg',
  svgPath = '/icons/18svg.svg',
}

export interface FirstPage {
  title1: string;
  title2: string;
  title3: string;
  description1: string;
  description2: string;
  description3: string;
}

export const firstPage: FirstPage = {
  title1: 'What makes Aviator special?',
  description1:
    'Aviator is an exciting online game that combines elements of gambling and quick decision-making. Imagine that you are an experienced pilot flying an airplane. At the beginning of each round, the airplane starts its flight. With every second of its flight, the multiplication factor increases. Your task is to press the “Collect” button in time to fix your winnings. The higher the airplane rises before you press the button, the higher your multiplier and, accordingly, your winnings will be. However, if you wait too long, the plane may disappear from the screen, and your bet will be lost. However, if you press the button in time, you will receive the winnings multiplied by the corresponding coefficient.',
  title2: 'Description of the Aviator game',
  description2:
    'The game`s interface is simple and straightforward, which allows even beginners to quickly get the hang of it. Each round lasts only a few seconds, which ensures a dynamic and exciting game. The constant feeling of uncertainty and the need to make quick decisions make the game even more exciting. Aviator is not just a game, it is a real adventure where you can try your luck and get unforgettable emotions. ',
  title3: 'PREDICTION, STRATEGY, TIPS & TRICKS',
  description3: 'We offer a strategy that involves increasing bets after each loss. It is important to understand that this strategy is associated with a high level of risk. If you lose for a long time, the size of your bets can quickly increase, which can lead to significant losses. Therefore, we recommend that you use this strategy carefully and always have a backup plan.',
};
