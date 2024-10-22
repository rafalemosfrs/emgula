function Footer(props) {
  const classes = `footer ${props.dark ? "bg-gray-800 text-white" : "bg-red-600 text-white"} py-4 text-center`;

  return (
    <footer className={classes}>
      <p className="text-sm">
        Criado por <span className="font-semibold">Rafael Lemos</span> | &copy; {new Date().getFullYear()} Restaurante Delícias
      </p>
    </footer>
  );
}

export default Footer;
