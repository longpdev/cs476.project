import cloudinary from 'cloudinary';

export async function uploadImages(imageFile: Express.Multer.File) {
  const dataURI = `data:${
    imageFile.mimetype
  };base64,${imageFile.buffer.toString('base64')}`;
  const res = await cloudinary.v2.uploader.upload(dataURI);
  return res.url;
}
