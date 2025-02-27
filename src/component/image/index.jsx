import { Image as ImageAnt } from "antd";

const Image = ({ imageUrl, width, height }) => {
  return (
    <>
      <ImageAnt width={width} height={height} src={imageUrl} />
    </>
  );
};
export default Image;