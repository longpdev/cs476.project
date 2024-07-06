import cloudinary from 'cloudinary';

export async function uploadImages(imageFiles: Express.Multer.File[]) {
  const uploadPromises = imageFiles.map(async (image) => {
    const dataURI = `data:${image.mimetype};base64,${image.buffer.toString(
      'base64'
    )}`;
    const res = await cloudinary.v2.uploader.upload(dataURI);
    return res.url;
  });

  const imageUrls = await Promise.all(uploadPromises);
  return imageUrls;
}
