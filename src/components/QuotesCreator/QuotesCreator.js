import "./QuotesCreator.css";
import { save } from "../../redux/actions/quotes";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

const mapStateToProps = (state) => {
  return {
    quotes: state.quotesReducer.quotes,
    loading: state.quotesReducer.loading,
  };
};

function QuotesCreator({ quotes, save, loading }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (payload) => {
    let newQuote = {
      id: quotes.length + 1,
      author: payload.author,
      quote: payload.quote
    };
    save(newQuote);
  };

  //console.log(watch("author"))

  return (
    <div className="container-fluid">
      <div className="container">
        <br />
        <div className="row">
          {quotes.map((q) => (
            <div key={q.id} className="col-lg-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{q.author}</h5>
                  <p className="card-text quote-text">
                    <i>"{q.quote}"</i>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-3 offset-md-9">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label className="form-label">Author:</label>
                    <input
                      {...register("author", {
                        required: true,
                        maxLength: 10,
                        pattern: /^[A-Za-z]/,
                      })}
                      type="text"
                      className="form-control"
                      placeholder="author name"
                    />
                    {errors?.author?.type === "required" && <p className ="error">This field is required</p> }
                    {errors?.author?.type === "maxLength" && <p  className ="error"> This field cannot exeed 10 characters</p> }
                    {errors?.author?.type === "pattern" && <p  className ="error"> Alphabetical characters only</p> }

                  </div>

                  <div className="mb-3">
                    <label className="form-label">Quote:</label>
                    <textarea
                      {...register("quote")}
                      className="form-control"
                      rows="4"
                      placeholder="write your quote:"
                      required
                    ></textarea>
                  </div>
                  {!loading && (
                    <div className="d-grid gap-2">
                      <button className="btn btn-primary btn-block">Add</button>
                    </div>
                  )}
                  {loading && (
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, { save })(QuotesCreator);
