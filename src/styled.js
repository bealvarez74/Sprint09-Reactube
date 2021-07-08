import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body{
    max-width:1920px;
    background-color:#fff;
    font-family: sans-serif;
    margin:0;
    padding: 1% 4%;   
}`
export const Body = styled.body`
    width:100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`
export const Header = styled.div`
    width:100%;
    overflow:hidden;
    font-size: 1.2rem;
`
export const Searchinput = styled.input`
    padding: 1%;
    border: 1px solid grey;
    border-radius:5px;
    `;

export const Content = styled.div`
    width:100%;
    margin-top:2%;
    display: flex;
    flex-flow: row nowrap;
    justify-content:center;

`
export const Maincontent = styled.div`
    width:66%;
    padding:1%;
    background-color:grey;
    `;

export const Sidebar = styled.div`
    width:30%;
    padding: 1%;
    background-color:pink;
    `;

export const VideoElement = styled.div`
  display:flex;
  flex-wrap: nowrap;
  justify-content:center;
  align-items:center;
  padding:2%;
  cursor:pointer;

  && img{
      max-width: 200px;
      max-height: 250px;
      padding-right: 2%;
  }
    p{font-size: 0.9rem;
    text-align: left;
  }
`
