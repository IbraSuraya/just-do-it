import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../subComponent/MovieDetail.jsx';
import { getMovie } from '../utils/data.js';

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={Number(id)} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: getMovie(props.id)
    };
  }

  render() {
    if (this.state.movie === null) {
      return <p>Movie is not found!</p>;
    }

    return (
      <section>
        <MovieDetail {...this.state.movie} />
      </section>
    );
  }
}

// export default DetailPage;
export default DetailPageWrapper;
