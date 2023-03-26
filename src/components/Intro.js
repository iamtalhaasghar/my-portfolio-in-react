function Intro(props) {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="col">
        <img
          src="https://avatars.githubusercontent.com/u/46928648?v=4"
          alt="..."
          class="rounded-circle mx-auto d-block h-50"
        ></img>
        <p className="text-center mt-2">Hello, I am {props.name}</p>
        <h2 className="text-center">{props.description}</h2>
      </div>
    </div>
  );
}

export default Intro;
