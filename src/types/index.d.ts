export type labelType = {
  label: "new" | "museum" | null;
};
export type eventDataTypes = {
  id: string;
  title: stirng;
  url: string;
  label: string | null;
  date: Date;
};

export type pickupsDataTypes = {
  id: string;
  title: string;
  detail: string;
  relatedUrls: relatedUrlsDataType[];
  pictureUrl: string;
};

export type relatedUrlsDataType = {
  title: string;
  url: string;
};
