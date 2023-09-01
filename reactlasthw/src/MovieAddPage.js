import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function MovieAddPage() {
  const [movie, setMovie] = useState({
    title: '',
    imageUrl: '',
    about: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMovie({
      ...movie,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada film bilgilerini kullanabilirsiniz (örneğin bir API'ye gönderebilirsiniz)
    console.log('Movie Is Added:', movie);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Movie Add</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Movie Name</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={movie.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Movie Photo (Image Link)</label>
          <input
            type="text"
            className="form-control"
            name="imageUrl"
            value={movie.imageUrl}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Movie About</label>
          <textarea
            className="form-control"
            name="about"
            value={movie.about}
            onChange={handleInputChange}
            rows="5"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
}

export default MovieAddPage;