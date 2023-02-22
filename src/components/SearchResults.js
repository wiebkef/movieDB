import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
const contentful = require("contentful");

export default function Recipes(props) {
  const { query } = useParams();
  const [recipes, setRecipes] = useState([]);
  // const { query } = props;

  useEffect(() => {
    const client = contentful.createClient({
      space: process.env.REACT_APP_SPACE_ID,
      accessToken: process.env.REACT_APP_ACCESS_TOKEN,
      environment: process.env.REACT_APP_ENVIRONMENT_ID,
    });
    client
      .getEntries({
        query: query,
      })
      .then((res) => setRecipes(res.items))
      .catch((err) => console.log(err));
  }, [query]);
  return (
    <div className="App container-lg text-center my-5">
      <div className="row text-center gx-3 gy-3">
        {recipes.map((recipe) => (
          <div key={recipe.sys.id} className="col">
            <Link to={`/recipe/${recipe.sys.id}`} className="title">
              <div
                className="card text-light text-center m-auto"
                style={{
                  minWidth: "18rem",
                  maxWidth: "24rem",
                  backgroundColor: "#555",
                }}
              >
                <img
                  src={recipe.fields.titleImage.fields.file.url}
                  className="card-img-top"
                  alt={recipe.fields.title}
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      minHeight: "50px",
                      maxHeight: "50px",
                      overflow: "hidden",
                    }}
                  >
                    {recipe.fields.title}
                  </h5>
                  <div className="row text-center my-3">
                    <div className="col text-start">
                      {recipe.fields.rating} stars
                    </div>
                    <div className="col text-end">
                      by {recipe.fields.author}
                    </div>
                  </div>
                  <p
                    className="card-text"
                    style={{
                      minHeight: "120px",
                      maxHeight: "120px",
                      overflow: "hidden",
                    }}
                  >
                    {recipe.fields.shortDescription}
                  </p>
                  <button className="btn btn-warning border-0">
                    See recipe
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
