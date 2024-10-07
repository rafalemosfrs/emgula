function Header(props) {

  let classes;
  
  if (props.dark) {
    classes = "header dark";
  } else {
    classes = "header";
  }

  return <header className={classes}>EmGula</header>;
}

export default Header;
