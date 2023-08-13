import { Container, Typography } from "@mui/material";

const Disclosures = () => {
  return (
    <Container sx={{ margin: 5 }}>
      <Typography variant="body2">
        This disclosure outlines the nature of the content and services provided
        by our travel, points, and miles aggregation website. Please read this
        disclosure carefully to understand how our platform operates and the
        information we provide to our users.
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          1. Aggregated Content:
        </Typography>
        Our website collects and aggregates travel, points, and miles news,
        updates, articles, and information from various sources across the
        internet. The content displayed on our platform is for informational
        purposes only and may include news articles, blog posts, reviews, and
        other related information.
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          2. Third-Party Sources:
        </Typography>
        We source content from a variety of third-party websites, news outlets,
        blogs, and other online platforms. The information presented on our
        website is attributed to its original source. We do not create or
        publish original content, but rather curate and organize existing
        content to provide a comprehensive overview of travel, points, and miles
        related news.
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          3. Accuracy and Reliability:
        </Typography>
        While we strive to provide accurate and up-to-date information, we
        cannot guarantee the accuracy, completeness, or reliability of the
        content aggregated from third-party sources. Travel, points, and miles
        information, news, and updates are subject to change, and users are
        encouraged to verify details independently before making any decisions.
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          4. External Links:
        </Typography>
        Our platform may include external links to third-party websites. These
        links are provided for additional information and convenience. We are
        not responsible for the content, accuracy, or availability of these
        external websites and do not endorse or guarantee any products,
        services, or information provided by them.
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          5. User Responsibility:
        </Typography>
        Users of our website should exercise their own judgment when using the
        information provided. Decisions should be made based on multiple sources
        and independent research. We are not liable for any actions taken based
        on the information displayed on our platform.
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          6. Content Removal:
        </Typography>
        If you are a content creator or website owner and believe that your
        content has been aggregated on our platform without proper attribution
        or credit, please contact us for content removal or appropriate credit.
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          7. Data Privacy:
        </Typography>
        We are committed to protecting user data and privacy. We do not collect
        any user information other than required for webiste analyctics to
        measure performance of platform.
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          8. Advertising and Monetization:
        </Typography>
        To support the operation of our platform, we may display advertisements
        from third-party advertisers. These advertisements are clearly marked as
        such and do not constitute endorsements by us. We do not have control
        over the content of these advertisements or the products/services they
        promote.
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          9. Changes to Disclosure:
        </Typography>
        This disclosure is subject to change without notice. We recommend
        checking this disclosure periodically for any updates. By using our
        website, you acknowledge that you have read and understood this
        disclosure. Your continued use of our platform constitutes your
        agreement to the terms outlined in this disclosure. If you do not agree
        with these terms, please refrain from using our website.
      </Typography>
    </Container>
  );
};

export default Disclosures;
