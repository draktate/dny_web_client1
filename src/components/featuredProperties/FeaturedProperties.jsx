import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
import { SearchContext } from "../../context/SearchContext";
import { useContext } from "react";


const FeaturedProperties = () => {
  const searchContextValues  = useContext(SearchContext);

  const { data, loading, error } = useFetch(
    `${searchContextValues.api_redirect}/hotels/featured=true&limit=4`);

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.photoes[0]}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
