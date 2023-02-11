

function ErrorServer() {
  return (
    <div class="d-flex align-items-center justify-content-center mt-5">
        <div class="text-center mt-5">
            <h1 class="display-1 fw-bold mt-5">403</h1>
            <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
            <p class="lead">
                The page you’re looking for doesn’t exist.
              </p>
            <a href="/" class="btn btn-primary">Go Home</a>
        </div>
    </div>
  );
}

export default ErrorServer;
