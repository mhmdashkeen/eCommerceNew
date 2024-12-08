import axios from "axios";

export default axios.create({
  baseURL: "http://3.110.191.183:44687",
  headers: {
    "Content-type": "application/json",
    "language": "en",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRkNjYzYmU0ZTc2N2FmYTYxOTI2YzAiLCJlbWFpbCI6Im9ZSTRmZHUremRlOE5sNmJOWmhqN3I3b2RCOUlIZG42d2l4dGJFc0Q0bFU9IiwiaWF0IjoxNzMzMTcwMTM4LCJleHAiOjE3MzMxNzM3Mzh9.mWwwKxETWck7XXq6fC0hGGTwJm6ecNGWyYYR45rosfA",
  },
});
