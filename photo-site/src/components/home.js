// styled components
import styled from 'styled-components';

// images
import LandingImage from '../images/landingImg.jpg';

const Home = () => {

    return (
        <StyledHome>
             <div className="homeTextContainer" >
                <h2>Capturing your <br /> beatiful <span id="memories">memories</span></h2>
                <p>Paragraph about the photo service I havent came up with yet. It  just needs to be this size.</p>
                <a href="#about" id="homeButton">Learn more</a> 
              </div>
              <img src={LandingImage} alt="sal" />
        </StyledHome>
    )
}
const StyledHome = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 1%;
  min-height: 90vh;
  background: #141414;
  border-radius: 20px;
  .homeTextContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 6px;
    align-items: left;
    width: 40%;
    margin: auto;
    h2 {
        font-size: 3em;
        margin: .5em 0;
        color: white;
    }
    #memories {
      color: #84577C;
      font-style: italic;
    }
    P {
      font-size: 2em;
      margin: 6px 0;
      color: #777777f9;
    }
    #homeButton{
        width: 30%;
        margin: 1em 0;
        background: none;
        border: #84577C 3px solid;
        border-radius: 8px;
        font-size: 1.5em;
        padding: 8px;
        color: white;
        cursor: pointer;
        text-align: center;
        font-weight: 700;
        &:hover {
            background: white;
            color: black;
        }
    }
  }
  img {
    width: 40%;
    object-fit: cover;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
  }
`;
export default Home;
