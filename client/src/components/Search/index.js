import React from 'react';

class Search extends React.Component {
  render() {
    return (
    <div>
      <div className="row">
        <div className="col-sm-12">

          {/* <!-- First panel is for handling the search parameters --> */}
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
            </div>
          </div>
          <div className="panel-body">

            {/* <!-- Here we create an HTML Form for handling the inputs--> */}
            <form role="form">

              {/* <!-- Here we create the text box for capturing the search term--> */}
              <div className="form-group">
              {/* Search */}
                <label for="search">Search Term:</label>
                <input type="text" className="form-control" id="search-term" />
                {/* Start Year */}
                <label for="exampleInputPassword1">Start Year (optional)</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="" />
                {/* End Year */}
                <label for="exampleInputPassword1">End Year (optional)</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="" />
                {/* Button */}
                
                <button type="submit" className="btn btn-default search" onClick={Search}>Search </button>
                <button type="clear" className="btn btn-default clear">CLEAR!!!!</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    
    </div>
  
    );
}
}
export default Search;