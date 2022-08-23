import "./OneButton.css";

function OneButton(props) {
  let classes = "button rounded-3 col" + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default OneButton;
