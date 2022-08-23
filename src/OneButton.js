import "./OneButton.css";

function OneButton(props) {
  let classes = "button rounded-3 " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default OneButton;
