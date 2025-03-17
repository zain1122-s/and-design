import { Image as ImageAnt } from "antd";

const Image = ({ imageUrl, width, height ,style}) => {
  return (
    <>
      <ImageAnt width={width} height={height} style={{borserRadius:"50%"}} src={imageUrl} />
    </>
  );
};
export default Image;