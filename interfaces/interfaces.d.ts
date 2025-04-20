interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface Movie {
  id: number;
  title: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieDetail extends Movie {
  budget: number;
  homepage: string;
  imdb_id: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  genres: Genre[];
  production_companies: ProductionCompany[];
}

interface TrendingMovie {
  id: number;
  title: string;
  poster_url: string;
  searchTerm: string;
  count: number;
  movie_id: number;
}
