import axios from "axios";

const upload = async (file) => { //upload file to cloudinary, return the recieved url
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "onDemando");

  try {
    const res = await axios.post(import.meta.env.VITE_UPLOAD_LINK, data);

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;
