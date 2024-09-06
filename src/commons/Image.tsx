import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const Image = ({ imageName }: { imageName: string }) => {
  const cld = new Cloudinary({ cloud: { cloudName: "dwjypnbvd" } });

  // Use this sample image or upload your own via the Media Explorer
  const img = cld
    .image("pizza-express/" + imageName)
    .format("auto") // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality("auto");
  return <AdvancedImage cldImg={img} />;
};

export default Image;
