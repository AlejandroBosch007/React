import './Quotes.css';
import { useState } from 'react';


function Quotes({quotesDB}) {

const [quotes,setQuotes] = useState(quotesDB)


  return (
    <div className="container-fluid">
        <div className="container">
          <br/>
        <div className="row">
        {
            quotes.map(q =>(
            <div key={q.id} className="col-lg-3">
               <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{q.author}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Dice</h6>
                    <p className="card-text">{q.quote}</p>
                </div>
                </div>
            </div>

              ))
        }
        </div>  
      </div>
        <br/><br/>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 offset-md-9">
                    <div className="card">
                        <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Author:</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Quote:</label>
                                <textarea className="form-control"  rows="4" placeholder="write your quote:"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Add</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export {Quotes};