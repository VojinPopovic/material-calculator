import "./TwoButton.css";

function TwoButton(props) {
  let classes = "button two-button rounded-3 col" + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default TwoButton;
