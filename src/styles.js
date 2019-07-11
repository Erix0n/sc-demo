import styled, { css } from "styled-components";
// Import from styled components library

// When creating a new component you first declare it with first letter being captial(since its a component).
// With keyword "styled" you then choose which html element you want to create.
// Important that you use template literal after styled.xxx to declare the css.
// An example is "const exampleSpan = styled.span`font-size:1.2rem; color: white;`;"

const HeaderWrapper = styled.div`
    width: 100%;
    height:100%;
    display:flex;
    justify-content:center;
    background-color: white;
    box-shadow: 3px 3px 10px grey;
`;

const ContentWrapper = styled.div`
    width:100%px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    border: 2px solid black;
    margin: 40px;
`;

const FooterWrapper = styled.div`
    width:100%;
    display:flex;
    justify-content: space-around;
`;

const FooterItem = styled.div`
    width:30%;
    margin-right: 1%;
    border-radius: 10px;
    transform: translateX(350%);
    transition: all 0.7s ease-in-out;
    z-index: 999;

    
    ${props => props.red && css`
        background-color: #39CCCC;
        &:hover {
      transform: scale(1.3);
    } 
    `}

    ${props => props.green && css`
        background-color:#FF851B;
        &:hover {
      transform: scale(1.7);
    } 
    `}

    ${props => props.blue && css`
        background-color: #001f3f;
        &:hover {
      transform: scale(2);
    } 
    `}

    ${p =>
    p.open &&
    css`
      transform: translateX(0);
    
    `};
`;

const NavBar = styled.div`
    display:flex;
    justify-content: space-around;
    width: 800px;
`;

const Title = styled.p`
    font-size: 1.5rem;
    color: palevioletred;
    text-align: center;
    ${'' /*Below is how to alter the component based on props passed to it */}
    ${props => props.big && css`
        font-size: 3rem;
    `}
`;

const Text = styled.p`          
    font-size: 1.2rem;
    color: olive;
    text-align:center;

    ${'' /*Below is how to alter the component based on props passed to it */}
    ${props => props.otherColor && css` 
        color: rebeccapurple;
  `}

  ${props => props.footer && css` 
        color: white;
        font-size: 1.4rem;
  `}
`;

const SlideFooterButton = styled.button`
  outline: none;
  border: 2px solid palevioletred;
  border-radius: 5px;
  background-color: #fff;
  color: palevioletred;
  margin: 20px 400px;
  width: auto;
  height: 75px;
  transition: all 0.3s ease-in-out;

  &:hover {
      background-color: #7FDBFF; 
      font-size: 1.1rem;
      color: #FFF;
    } 
  
`;
export {
  HeaderWrapper,
  ContentWrapper,
  FooterWrapper,
  FooterItem,
  NavBar,
  Title,
  Text,
  SlideFooterButton
}