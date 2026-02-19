import styled from "styled-components";

export const StyledContainer = styled("div")<{
  border?: boolean;
}>`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 100px 60px 0;
  overflow: hidden;
  border-top: ${(p) => (p.border ? "1px solid #CDD1D4" : "")};

  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 68px);
    padding: 100px 30px 0;
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 38px);
    padding: 90px 18px 0;
  }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
    padding: 80px 18px 0;
  }
`;
