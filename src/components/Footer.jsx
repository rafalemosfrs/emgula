function Footer(props) {
  let classes;

  if (props.dark) {
    classes = "footer dark";
  } else {
    classes = "footer";
  }

  return <footer className={classes}>Criado por Rafael com ❤</footer>;
}

export default Footer;