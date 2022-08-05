export interface IPagination {
    pagination: {
      currentPage: number;
      itemsPerPage: number;
    };
  };

  export interface IPost {
    publishedAt: string;
    id: number;
    title: string;
    imageUrl: string;
  };