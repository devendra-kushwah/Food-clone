import React, { useState } from "react";
import { CommentsForm } from "./style";
import { Input, Button } from "../../../styles/inputs";

const CommentForm = ({ initialValue, onChangeValue, submitComment }) => {
  return (
    <CommentsForm
      onSubmit={submitComment}
      method="post"
      className="position-relative"
    >
      <Input
        className="py-3 pl-4 mb-0"
        type="text"
        placeholder="post a comment"
        value={initialValue}
        onChange={onChangeValue}
      />
      <Button className="position-absolute" type="submit">
        post
      </Button>
    </CommentsForm>
  );
};

export default CommentForm;
