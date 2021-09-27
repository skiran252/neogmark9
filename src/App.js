import "./App.css";
import React,{useState} from "react";
import data from "./data.json";
function App() {

  const [genreName, setGenre] = useState("Thriller");
  const genres = data.genres;
  console.log(genres,genres.Thriller);
  return (
    <div className="App pt-5">
      <div className="container">
        <h1 className="text-center">WEB SERIES SUGGESTIONS</h1>
        <p> Here are a few Web Series suggestions based on genre</p>
        <nav
          id="sidebarMenu"
          class="collapse d-lg-block sidebar collapse bg-white"
        ></nav>
        <div className="dashboard mt-5">
          <div className="row" style={{ width: "100%" }}>
            <div className="col-md-2 column">
              <div className="text-center fw-bolder fs-3">GENRES</div>
              {Object.keys(genres).map((genre) => {
                return (
                  <button className="bg-dark btn btn-default title" onClick={()=>setGenre(genre)}>
                    {genre}
                  </button>
                );
              })}
            </div>
            <div className="col-md-8 column">
              {console.log(genres[genreName])}
              <div className="fw-bolder fs-3">SUGGESTIONS</div>
              <p className="text-white">{genreName}</p>
              {
                
                genres[genreName].map((series) => {
                  return (
                    <div className="card bg-dark text-white">
                      <div className="card-body">
                        <h5 className="card-title">{series.title}</h5>
                        <p className="card-text">{series.description}</p>
                        <a href="/#" className="btn btn-primary">
                          View
                        </a>
                      </div>
                    </div>
                  );
                })
              }
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
