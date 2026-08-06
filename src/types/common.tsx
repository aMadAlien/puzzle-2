export type Quest = {
  slug: string;
  title: string;
  steps: {
    slug: string;
    name: string;
    component: React.ComponentType<any>;
    data?: any;
  }[];
};