import banner from "../../assets/images/imgBackgroundProfile.png";
import { ImgBack, Subtitle, Title } from "./styles";

const Banner = () => (
  <>
    <ImgBack style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <Subtitle>Italiana</Subtitle>
        <Title>La Dolce Vita Trattoria</Title>
      </div>
    </ImgBack>
  </>
);

export default Banner;
