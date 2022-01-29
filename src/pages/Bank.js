import { deposit,withdraw,reset }  from "../redux/actions/bank";
import { connect } from "react-redux";

const mapStateToProps = (state)=>{
  return{
    amount: state.bankReducer.amount
  }
}

function Bank({amount,deposit,withdraw,reset}) {
  return (
    <div className="container text-center">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{amount}</h2>
          <br/>
          <div className="row">
            <div className="col-sm-4">
              <button type="button" onClick={()=> deposit()} className="btn btn-primary">
                Deposit $10
              </button>
            </div>
            <div className="col-sm-4">
              <button type="button" onClick={()=> withdraw()} className="btn btn-secondary">
                Withdraw $10
              </button>
            </div>
            <div className="col-sm-4">
              <button type="button" onClick={()=> reset()} className="btn btn-secondary">
                Reset Acount
              </button>
            </div>
            <br/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, {deposit,withdraw,reset})(Bank);
