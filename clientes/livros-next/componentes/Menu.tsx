import Link from "next/link";

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg justify-content-start">
      <ul className="navbar-nav mr-auto ">
        <li className="nav-item">
          <Link className="nav-link" href={"/"}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href={"/LivroLista"}>
            Cátalogo
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href={"/LivroDados"}>
            Novo
          </Link>
        </li>
      </ul>
    </nav>
  );
};
