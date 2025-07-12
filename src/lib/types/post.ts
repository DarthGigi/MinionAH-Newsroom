export interface Post {
  metadata: {
    description: string;
    heroImage: string;
    isPublic: boolean;
    pubDate: string;
    title: string;
    type: string;
    classes: string;
    lastUpdated?: string;
  };
}
