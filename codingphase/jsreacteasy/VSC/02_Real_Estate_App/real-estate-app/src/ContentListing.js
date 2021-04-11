// import logo from './logo.svg';
import './App.css';

function Contentlisting() {
  return (
    <section id="content-listing-id">
      <div className="content-listing">

        {/* List using Searchbar */}
        <div className="content-listing-search">
          <input type="text" name="searchbar" />
        </div>

        {/* List using Sortby */}
        <div className="content-listing-sortby">
          <div className="sortby-results">399 items found</div>
          <div className="sortby-options">
            <select name="sortby-select">
              <option value="price-asc">Highest Price</option>
              <option value="price-dsc">Lowest Price</option>
            </select>
            <div className="sortby-view">
              <i className="fa fa-th-list" aria-hidden="true"></i>
              <i className="fa fa-th" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        {/* List Results */}
        <div className="content-listing-results">
          <div className="content-listing-result">
            <div className="listing-result-img">
              <span className="listing-result-address">32 Lexi Hills Rd</span>
              <div className="listing-result-details">
                <div className="detail-user-img"></div>
                <div className="detail-user-info">
                  <span className="detail-user-name">
                    Nina Smith
                  </span>
                  <span className="detail-user-postdate">
                    Posted on 05/05/2017
                  </span>
                </div>
                <div className="detail-other">
                  <div className="detail-other-first-line">
                  <div className="detail-other-floorspace">
                    <i className="fa fa-square-o" aria-hidden="true"></i>
                    <span>1000ft&sup2;</span>
                  </div>
                  <div className="detail-other-furnishments">
                    <span>Furnished</span>
                  </div>
                  </div>
                  <div className="detail-other-bedrooms">
                    <i className="fa fa-bed" aria-hidden="true"></i>
                    <span>3 bedrooms</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="listing-result-bottom-info">
              <span>$1000 / month</span>
              <span>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                Ridgewood, NY
                </span>
            </div>
          </div>
        </div>

        {/* Paging */}
        <div className="content-listing-paging">
          <ul className="paging-numbers">
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contentlisting;