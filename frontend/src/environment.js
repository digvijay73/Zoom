let IS_PROD = true;

const server = IS_PROD ? 

   "https://zoombackend-iqui.onrender.com":
  
  "http://localhost:8000"

export default server;