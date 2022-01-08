import React, { useState } from "react";
import { TextArea, UploadFile, CreatePostDiv } from "./style";
import { Form, Button } from "react-bootstrap";
import { PhotoVideo } from "@styled-icons/fa-solid/PhotoVideo";
import ModalPopup from "../modalPopup";

const CreatePost = () => {
  const [postMessage, setPostMessage] = useState("");
  const [show, setShow] = useState(false);

  const createPostAction = (e) => {
    e.preventDefault();
    setPostMessage("");
  };

  return (
    <>
      <CreatePostDiv className="p-3 rounded mb-4" onClick={() => setShow(true)}>
        Create post
      </CreatePostDiv>

      <ModalPopup
        className="post-message"
        show={show}
        hideModal={() => setShow(false)}
        size="lg"
        headerTitle="Create post"
        // cancelButtonText="cancel"
        // actionButton="post"
      >
        <Form onSubmit={createPostAction}>
          <TextArea
            as="textarea"
            className="p-3 rounded mb-2"
            rows="2"
            value={postMessage}
            onChange={(e) => setPostMessage(e.target.value)}
            placeholder="Write something about your post"
          />

          <div className="d-flex justify-content-between">
            <UploadFile className="upload-file mb-0">
              <input type="file" id="postImage" />
              <label htmlFor="postImage">
                <PhotoVideo size="25" />
              </label>
            </UploadFile>

            <Button
              type="submit"
              variant="outline-info"
              className="d-block border-0"
            >
              publish
            </Button>
          </div>
        </Form>
      </ModalPopup>
    </>
  );
};

export default CreatePost;
