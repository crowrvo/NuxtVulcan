/**
 * Essentials.
 */
type bookAdresses = {
  url: string;
  backgroundUrl: string;
};
type bookStatistics = {
  views: number;
  chapters: number;
  comments: number;
};



type bookChapters = {
  name: string;
  number: number;
};

type bookVolumes = {
  name: string;
  number: number;
  chapters: Array<bookChapters>;
};

type bookStatisticsWithAuthor = bookStatistics & {
  author?: string;
};

/**
 * @description Include infos in ver-mais page.
 */
type bookProps = bookAdresses & {
  name: string;
  data: bookStatisticsWithAuthor;
  volumes: Array<bookVolumes>;
};
export type { bookChapters, bookVolumes, bookProps }



type bookWorkerIs = {
  workAs: "tradutor" | "revisor" | "editor" | "quality checker" | "redraw";
};

type bookWorker = bookWorkerIs & {
  name: string;
};

type bookFinances = {};

/**
 * @description Include author.
 */
type bookPresentationInfo = bookAdresses & {
  name: string;
  author: string;
  data: bookStatistics;
};

/**
 * @description Include author and team of translation.
 */
type bookPresentationDetailedInfo = bookPresentationInfo & {
  worker: bookWorker;
};
export type { bookStatistics, bookPresentationDetailedInfo, bookPresentationInfo }