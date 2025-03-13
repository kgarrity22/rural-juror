type ProjectType = 'research' | 'app' | 'dataviz' | 'game';
export type SingleProject = {
  shortTitle: string;
  longTitle?: string;
  shortDescription?: string;
  longDescription: string;
  image: string;
  code?: string;
  website: string;
  id: string;
  type: ProjectType[];
  technologies: string[];
};

export type ProjectFilter = { category: ProjectType | 'all'; title: string };
