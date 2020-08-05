db.movies.find(
  {$and: [
      { "category": { $all:  ["action"] } }, {"imdbRating" : {$gt:7}}
    ]
  }
).pretty();
