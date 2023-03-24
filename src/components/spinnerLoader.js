import Spinner from 'react-bootstrap/Spinner';

function SpinnerLoader() {
  return (
    <Spinner animation="border"
        variant='success'
        role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default SpinnerLoader;