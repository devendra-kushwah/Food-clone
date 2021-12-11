import React, { useState, useEffect } from "react";
import { Card, Media } from "react-bootstrap";
import { Like } from "@styled-icons/evil/Like";
import { TimeLineCard, PostHeader } from "./style";
import timeLineData from "./timeLineData.json";

import {
  UsersCommentCard,
  CommentForm,
  ErrorBoundary,
} from "../../../../Components";

import data from "./reviewMessage";

const Timeline = () => {
  const [timeLine, setTimeLine] = useState(timeLineData);
  const [state, setState] = useState(data);
  const [comment, setComment] = useState("");

  const newData = async () => {
    try {
      const response = await fetch(data);
      const data = await response.json();
      state.push({});
      setState(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const submitCommentHandler = (e) => {
    e.preventDefault();
    newData();
    setComment("");
  };

  const onChangeHandler = (e) => setComment(e.target.value);
  // const onChangeHandler

  useEffect(() => {}, []);

  return (
    <TimeLineCard>
      <Card.Img variant="top" src="/blog/1.jpg" alt="post" />
      <Card.Body>
        <Media>
          <img
            width={50}
            height={50}
            className="mr-3"
            src="/teacher.png"
            alt="Generic placeholder"
          />
          <Media.Body className="mb-4">
            <PostHeader className="d-flex justify-content-between pt-3">
              <div className="d-flex">
                <strong className="mr-3">Lorem ipsum</strong>
                <span>following</span>
              </div>
              <div className="d-flex users-reaction">
                <span className="like">
                  <Like size="30" /> 100K+
                </span>
              </div>
            </PostHeader>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at,
            </p>

            {/* Comment form */}

            <CommentForm
              initialValue={comment}
              onChangeValue={onChangeHandler}
              submitComment={submitCommentHandler}
            />
          </Media.Body>
        </Media>
        <UsersCommentCard data={state} />
      </Card.Body>
    </TimeLineCard>
  );
};

export default ErrorBoundary(Timeline);
