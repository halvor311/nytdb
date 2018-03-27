import React from 'react';
import Home from '../Home';

export default class Search extends React.Component{

  _handleChange = e => {
    const {name, value} = e.target;
    this.setState({[name]:value})
  }

  render() {

    const {getState} = this.props

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
              <form role="form" onSubmit={e=> {
                e.preventDefault()
                getState(this.state)
              }}>

                {/* <!-- Here we create the text box for capturing the search term--> */}
                <div className="form-group">
                {/* Search */}
                  <label for="search">Search Term:</label>
                  <input onChange={(e)=> this._handleChange(e)} type="text" name='term'className="form-control" id="search-term" />
                  {/* Start Year */}
                  <label for="exampleInputPassword1">Start Year (optional)</label>
                  <input onChange={(e)=> this._handleChange(e)} type="text" name='startyear' className="form-control" id="exampleInputPassword1" placeholder="" />
                  {/* End Year */}
                  <label for="exampleInputPassword1">End Year (optional)</label>
                  <input onChange={(e)=> this._handleChange(e)} type="text" name='endyear' className="form-control" id="exampleInputPassword1" placeholder="" />
                  {/* Button */}
                  
                  <button type="submit" className="btn btn-default search">Search </button>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      
    </div>
    )
  }
} 
    
  
 
