import cloudinary from 'cloudinary';

export async function uploadImage(imageFile: Express.Multer.File) {
  const dataURI = `data:${
    imageFile.mimetype
  };base64,${imageFile.buffer.toString('base64')}`;
  const res = await cloudinary.v2.uploader.upload(dataURI);
  return res.url;
}
