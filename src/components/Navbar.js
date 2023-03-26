function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a
              class="nav-link"
              href="mailto:talhaasghar220+portfolio@gmail.com"
            >
              <i class="fa-solid fa-envelope fa-2xl"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/iamtalhaasghar/">
              <i class="fa-brands fa-github fa-2xl"></i>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www.linkedin.com/in/iamtalhaasghar/"
            >
              <i class="fa-brands fa-linkedin fa-2xl"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fa-brands fa-twitter fa-2xl"></i>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://stackoverflow.com/users/11033329/talha-asghar"
            >
              <i class="fa-brands fa-stack-overflow fa-2xl"></i>
            </a>
          </li>
        </ul>
        <a href="#projects">
          <button class="btn btn-outline-light my-2 my-sm-0 mx-2" type="submit">
            My Projects
          </button>
        </a>
        <a href="#contact-me">
          <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
            Contact Me
          </button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
