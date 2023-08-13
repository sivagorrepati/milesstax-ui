import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Typography>
      Oops! Something went wrong. Please go back to <Link to="/">homepage</Link>{" "}
      to start again.
    </Typography>
  );
};

export default Error;
