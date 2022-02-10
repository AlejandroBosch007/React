import "./Card.css";

function Card({ message, name }) {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export { Card };
