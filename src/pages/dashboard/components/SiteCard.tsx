import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { isAfter, startOfDay } from "date-fns";

export interface SiteArticle {
  id: string;
  title: string;
  link: string;
  published: number;
}

interface SiteCardProps {
  name: string;
  title: string;
  link: string;
  displayName: string;
  items: SiteArticle[];
}

const SiteCard = (props: SiteCardProps) => {
  const { name, title, link, items } = props;
  const today = startOfDay(new Date());

  const filteredItems = items
    .sort((left, right) => {
      return right.published - left.published;
    })
    .filter(
      (item, index) => isAfter(item.published * 1000, today) || index < 10
    );

  const getLastUpdatedDate = (items: SiteArticle[]) => {
    let time_suffix = "Not available";
    if (items && items.length > 0) {
      time_suffix = new Date(items[0].published * 1000).toLocaleString();
    }
    return "Last published at " + time_suffix;
  };

  const formatArticleTitleForDisplay = (item: SiteArticle) => {
    if (isAfter(item.published * 1000, today)) {
      return (
        <>
          <FontAwesomeIcon icon={faCalendarDay} />
          &nbsp;
        </>
      );
    }
    return <></>;
  };

  return (
    <Card key={name} raised className="card">
      <Link
        href={link}
        target="_blank"
        underline="none"
        color="inherit"
        rel="noreferrer"
        aria-label={"Link to " + title}
        onClick={() => {
          gtag('event', 'click_header', {
            'site': link
          })
          return true;
        }}
      >
        <CardHeader
          title={title}
          subheader={getLastUpdatedDate(filteredItems)}
          avatar={<Avatar alt={title} src={link + "/favicon.ico"} />}
        />
      </Link>
      <CardContent>
        <List>
          {filteredItems.map((item) => {
            return (
              <ListItem key={item.id} disablePadding>
                <ListItemText disableTypography>
                  <Typography fontSize={12} variant="body1">
                    {formatArticleTitleForDisplay(item)}
                    <Link
                      href={item.link}
                      target="_blank"
                      underline="hover"
                      color="inherit"
                      rel="noreferrer"
                      aria-label={name + "-" + item.title}
                      onClick={() => {
                        gtag('event', 'click_article', {
                          'site': link,
                          'article': item.link
                        })
                        return true;
                      }}
                    >
                      {item.title}
                    </Link>
                  </Typography>
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};

export default SiteCard;
