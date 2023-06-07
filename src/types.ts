type Movie = {
    id: Number
    title: String
    original_title: String
    name: String
    overview: String
    release_date: String
    poster_path: string
    backdrop_path: String
    runtime: Number
    homepage: String
    genres: [Genre]
    recommendations: [Movie]
  }

type Person = {
    id: Number
    name: String
    biography: String
    birthday: String
    deathday: String
    place_of_birth: String
    profile_path: String
    cast: [Movie]
}

type Genre = {
    id: Number
        name: String
    }

export type {
    Movie,
    Person,
    Genre
}