import React, { useState, useEffect } from "react";
import { TextArea, FormActions, UploadFile } from "./style";
import { Form, Button } from "react-bootstrap";
import { PhotoVideo } from "@styled-icons/fa-solid/PhotoVideo";
import { Videocam } from "@styled-icons/ionicons-outline/Videocam";
import { SendPlane } from "@styled-icons/remix-fill/SendPlane";
import { Images } from "@styled-icons/ionicons-outline/Images";
import { ModalPopup } from "../../../../Components";

const PostMessageForm = () => {
  const [postMessage, setPostMessage] = useState("");
  const [show, setShow] = useState(false);

  const postNewMessage = (e) => setPostMessage(e.target.value);

  console.log("new message", postMessage);

  const postMessageHandler = (e) => {
    e.preventDefault();
    setPostMessage("");
  };

  return (
    <>
      <Form
        onSubmit={postMessageHandler}
        className="d-flex align-items-center mb-5"
      >
        <TextArea
          as="textarea"
          className="p-3 p-lg-4 rounded mb-0"
          placeholder="Write your message"
          value={postMessage}
          rows="3"
          onChange={postNewMessage}
        />
        <FormActions className="ml-2">
          <span
            className="photos d-block mb-3 text-center"
            onClick={() => setShow(true)}
          >
            <Images size="20" /> images
          </span>

          <span
            className="photos d-block mb-3 text-center"
            onClick={() => setShow(true)}
          >
            <Videocam size="20" /> videos
          </span>
          {/* Popup modal for upload media post (Video/images) */}
          <ModalPopup
            className="post-message"
            show={show}
            hideModal={() => setShow(false)}
            headerTitle="Create post"
            // cancelButtonText="cancel"
            // actionButton="post"
          >
            <TextArea
              as="textarea"
              className="p-3 p-lg-4 rounded mb-2"
              rows="2"
              placeholder="Write something about your post"
            />
            <UploadFile className="justify-content-end mb-0">
              <input type="file" id="postImage" />
              <label htmlFor="postImage">
                <PhotoVideo size="25" />
              </label>
            </UploadFile>
          </ModalPopup>

          <Button
            type="submit"
            variant="outline-info"
            className="d-block border-0"
          >
            publish
          </Button>
        </FormActions>
      </Form>
    </>
  );
};

export default PostMessageForm;
