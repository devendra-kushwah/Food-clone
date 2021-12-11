/****************** The Eagles *************************
 *  Customize bootstrap components with additional props
 */

import styled from "styled-components";

import { Container } from "react-bootstrap";

export const MdfContainer = styled(Container)`
  max-width: ${(props) => props.maxwidth || {}}px;
`;
