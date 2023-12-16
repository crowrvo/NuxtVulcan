type donatorsCommonInfo = {
  name: string;
  profileUrl?: string;
  id: number;
};

type donatorsContribuitions = {
  value: number;
  date: Date;
  to: string;
  type: "diretos" | "comunitarios";
  bookUrl: string;
};

type donatorsLastContribuition = donatorsCommonInfo & {
  contribuition: donatorsContribuitions;
};

type donatorsAllContribuitions = donatorsCommonInfo & {
  contribuition: Array<donatorsContribuitions>;
};

export type { donatorsLastContribuition, donatorsAllContribuitions };