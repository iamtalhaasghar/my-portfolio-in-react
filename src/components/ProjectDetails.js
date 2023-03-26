function ProjectDetails(props) {
  return (
    <div class="card m-5">
      <img src={props.thumbnailUrl} class="card-img-top" alt="..." />
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.description}</p>
        <a href={props.url} class="btn btn-primary mt-auto">
          Github Link
        </a>
      </div>
    </div>
  );
}

export default ProjectDetails;
