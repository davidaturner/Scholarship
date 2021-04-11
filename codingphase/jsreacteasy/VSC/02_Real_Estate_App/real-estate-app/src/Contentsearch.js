// import logo from './logo.svg';
import './App.css';

function Contentsearch() {
  return (
    <section id="content-search-id">
      <div className="blightgrey content-search">
        <h4>Search</h4>
        <select name="neighborhood" 
          className="content-search-filter filter-neighborhood">
            <option value="">Select</option>
            <option>Ridgewood</option>
        </select>
        <select name="house-type" 
          className="content-search-filter filter-house-type">
            <option value="">Select</option>
            <option>Ranch</option>
        </select>
        <select name="bedrooms" 
          className="content-search-filter filter-bedrooms">
            <option value="">Select</option>
            <option>2BR</option>
        </select>
        <div className="content-search-filter-range">
          <span className="cdarkgrey prompt">Price</span>
          <input type="text" name="min-price"></input>
          <input type="text" name="max-price"></input>
        </div>
        <div className="content-search-filter-range">
          <span className="cdarkgrey prompt">Floor Space</span>
          <input type="text" name="min-floorspace"></input>
          <input type="text" name="max-floorspace"></input>
        </div>
        <div className="content-search-filter-extras">
          <span className="cdarkgrey prompt">Extras</span>
          <label htmlFor="extras"><span>Elevators</span>
            <input name="extras" value="elevator" type="checkbox" />
          </label>
          <label htmlFor="extras">Swimming Pool
            <input name="extras" value="swimming-pool" type="checkbox" />
          </label>
          <label htmlFor="extras">Finished Basement
            <input name="extras" value="finished-basement" type="checkbox" />
          </label>
          <label htmlFor="extras">Gym
            <input name="extras" value="gym" type="checkbox" />
          </label>
        </div>
        </div>
    </section>
  );
}

export default Contentsearch;