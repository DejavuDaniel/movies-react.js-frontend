import React from 'react';
import { useEffect, useRef } from 'react';
import api from '../../api/axiosConfig';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';

const Reviews = ({ getMovieData, movie, reviews = [], setReviews }) => {
  const revText = useRef();
  const revUser = useRef();
  let params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId);
  }, []);

  const addReview = async (e) => {
    e.preventDefault();

    const revTxt = revText.current;
    const rev = revUser.current;

    try {
      const response = await api.post('/api/v1/reviews', {
        userName: rev.value,
        comment: revTxt.value,
        imdbId: movieId,
      });

      const updatedReviews = [...reviews, { userName: rev.value, comment: revTxt.value }];

      rev.value = '';
      revTxt.value = '';

      setReviews(updatedReviews);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Row>
            <Col><h3>Reviews</h3></Col>
        </Row>
        <Row className="mt-2">
            <Col>
                <img src={movie?.poster} alt="" />
            </Col>
      <Col>
        {
          <>
            <Row>
              <Col>
                <ReviewForm handleSubmit={addReview} revUser={revUser} revText={revText} labelText="Write a Review?" />
              </Col>
            </Row>
            <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
          </>
        }
{
  reviews?.map((r, index) => {
    return (
      <React.Fragment key={index}>
        <Row>
        <Col>{"Username: " + r.userName}</Col>
        </Row>
        <Row>
        <Col>{"Comment: " +r.comment}</Col>
        </Row>
        <Row>
          <Col>
            <hr />
          </Col>
        </Row>
      </React.Fragment>
    );
  })
}
      </Col>
      </Row>
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>  
    </Container>
  );
};

export default Reviews;