const SongArtist = ({ artist }) => {
  return (
    <section>
      <h3>{artist.strArtist}</h3>
      <img src={artist.strArtistThumb} alt={artist.strArtist}></img>
      <p>
        {artist.intBornYear}-{artist.intDiedYear || "Presente"}
      </p>
      <p>{artist.strCountry}</p>
      <p>
        {artist.strGenre}-{artist.strStyle}
      </p>
      <a href={`http://${artist.strWebsite}`} target="_blank" rel="noreferrer">
        Sitio Web
      </a>
      <p>{artist.strBiographyEN}</p>
    </section>
  );
};

export default SongArtist;
