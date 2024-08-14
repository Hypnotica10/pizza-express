import { AdvancedImage } from "@cloudinary/react";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from "@cloudinary/url-gen/index";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

const Image = ({ imageName }: { imageName: string }) => {
  const cld = new Cloudinary({ cloud: { cloudName: "dwjypnbvd" } });

  // Use this sample image or upload your own via the Media Explorer
  const img = cld
    .image(imageName)
    .format("auto") // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality("auto")
    .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

  return <AdvancedImage cldImg={img} />;
};

export default Image;
