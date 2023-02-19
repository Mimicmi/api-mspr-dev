
function Unauthorized() {
  return (
    <div class="d-flex align-items-center justify-content-center mt-5">
      <div class="text-center mt-5">
        <h1 class="display-1 fw-bold mt-5">403</h1>
        <p class="fs-3"> <span class="text-danger">Opps!</span> Vous ne pouvez pas accéder a cette page.</p>
        <p class="lead">
          Sorry !
        </p>
        <a href="/" class="btn btn-primary">Go Home</a>
      </div>
    </div>
  );
}
export default Unauthorized;
