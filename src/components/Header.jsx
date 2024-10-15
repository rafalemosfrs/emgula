function Header(props) {
  const classes = `header ${props.dark ? "bg-gray-800 text-white" : "bg-red-600 text-white"} p-4 shadow-md`;

  return (
    <header className={classes}>
      <h1 className="text-4xl font-bold text-center">EmGula</h1>
    </header>
  );
}

export default Header;
