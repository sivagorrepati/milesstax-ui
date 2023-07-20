import {
  Card,
  CardContent,
  CardHeader,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

interface SiteArticle {
  id: string;
  title: string;
  link: string;
  published: string;
}

interface SiteCardProps {
  name: string;
  displayName: string;
  items: SiteArticle[];
}

const SiteCard = (props: SiteCardProps) => {
  const { name, displayName, items } = props;

  const filteredItems = items
    .sort((left, right) => {
      return Date.parse(right.published) - Date.parse(left.published);
    })
    .filter((_, index) => index < 10);

  return (
    <Card key={name} raised className="card">
      <CardHeader title={displayName} />
      <CardContent>
        <List>
          {filteredItems.map((item) => {
            return (
              <ListItem key={item.id} disablePadding>
                <ListItemText>
                  <Link
                    className="link-no-color"
                    href={item.link}
                    target="_blank"
                    underline="hover"
                    rel="noreferrer"
                    aria-label={name + "-" + item.title}
                  >
                    <Typography fontSize={16} variant="body1">
                      {item.title}
                    </Typography>
                  </Link>
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
