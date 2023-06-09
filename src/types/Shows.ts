// Generated by https://quicktype.io

export interface Popular {
    total:    string;
    page:     number;
    pages:    number;
    tv_shows: TvShow[];
}

export interface TvShow {
    id:                   number;
    name:                 string;
    permalink:            string;
    start_date:           string;
    end_date:             null;
    country:              string;
    network:              string;
    status:               string;
    image_thumbnail_path: string;
}



// Generated by https://quicktype.io

export interface DetallesShow {
    tvShow: TvShow2;
}

export interface TvShow2 {
    id:                   number;
    name:                 string;
    permalink:            string;
    url:                  string;
    description:          string;
    description_source:   string;
    start_date:           string;
    end_date:             null;
    country:              string;
    status:               string;
    runtime:              number;
    network:              string;
    youtube_link:         null;
    image_path:           string;
    image_thumbnail_path: string;
    rating:               string;
    rating_count:         string;
    countdown:            null;
    genres:               string[];
    pictures:             string[];
    episodes:             Episode[];
}

export interface Episode {
    season:   number;
    episode:  number;
    name:     string;
    air_date: string;
}
