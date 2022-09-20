const Button = (props) => {
  const { text, className } = props;
  return <button className={`${className}`}>{text}</button>;
};

const element = (
  //  Write your code here.
  <div className="container">
    <h1>Social Buttons</h1>
    <div className="button-container">
      <Button text="Like" className="like_btn" />
      <Button text="Comment" className="comment_btn" />
      <Button text="Share" className="share_btn" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
