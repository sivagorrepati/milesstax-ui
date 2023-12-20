import { Box, Container, Link, Typography } from "@mui/material";
import { useState } from "react";

const Footer = () => {
  const [data, setData] = useState<boolean>(false);

  setTimeout(() => {
    setData(true);
  }, 1000);

  if (!data) {
    return <></>;
  }

  return (
    <Box component="footer">
      <Container maxWidth="lg" sx={{ padding: 2 }}>
        <Typography variant="body2" color="text.secondary" align="center">
          <Link
            href="mailto:mail@milesstax.com"
            target="_blank"
            underline="hover"
            color="inherit"
            aria-label="Link to contact us via Twitter"
          >
            Contact Us
          </Link>
          {" | "}
          <Link
            href="/disclosures"
            underline="hover"
            color="inherit"
            aria-label="Link to disclosures"
          >
            Disclosures
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
