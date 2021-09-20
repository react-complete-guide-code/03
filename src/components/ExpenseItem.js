import "./ExpenseItem.css";
import "./ExpenseDate.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div className="expense-date">
        <span className="expense-date__month">
          {props.date.toLocaleString("en", { month: "long" })}
        </span>
        <span className="expense-date__year">{props.date.getFullYear()}</span>
        <span className="expense-date__day">{props.date.getDate()}</span>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
