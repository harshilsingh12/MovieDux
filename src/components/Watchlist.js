import React from "react";
import MovieCard from "./MovieCard";
import "../styles.css";

export default function Watchlist({ movies, watchlist, toggleWatchlist }) {
  return (
    <div className="title">
      <h1>Your Watchlist</h1>
      <div className="watchlist">
        {watchlist.map((id) => {
          const movie = movies.find((movie) => movie.id === id);
          return (
            <MovieCard
              key={id}
              movie={movie}
              isWatchlisted={true}
              toggleWatchlist={toggleWatchlist}
            />
          );
        })}
      </div>
    </div>
  );
}
