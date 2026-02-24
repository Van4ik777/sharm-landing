import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 4.375rem 0 1rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 2.375rem 0 1rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 1000px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ImagesWrapper = styled("div")`
  margin: 3rem 0;
  width: 100%;
`;

export const ImageCard = styled("div")`
  cursor: pointer;
  transition: transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border-radius: 16px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  }
`;

export const ImageContainer = styled("div")`
  width: 100%;
  height: 250px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  ${ImageCard}:hover & img {
    transform: scale(1.05);
  }

  @media only screen and (max-width: 768px) {
    height: 200px;
  }
`;

export const ImageDescription = styled("div")`
  padding: 1.5rem;
  text-align: center;

  h4 {
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
  }

  p {
    margin: 0 0 0.75rem 0;
    font-size: 1.1rem;
    font-weight: 500;
    color: #555;
  }

  span {
    font-size: 0.9rem;
    color: #777;
    line-height: 1.4;
    display: block;
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem;
    
    h4 {
      font-size: 1.1rem;
    }
    
    p {
      font-size: 1rem;
    }
    
    span {
      font-size: 0.85rem;
    }
  }
`;
