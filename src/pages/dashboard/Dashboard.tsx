import { Grid } from "@mui/material";
import { compareDesc, max } from "date-fns";
import { useEffect, useState } from "react";
import SiteCard, { SiteArticle } from "./components/SiteCard";

interface Data {
  version: string;
  items: Record<string, ApiSiteData>;
}

interface ApiSiteData {
  name: string;
  title: string;
  link: string;
  items: SiteArticle[];
}

const Dashboard = () => {
  const [data, setData] = useState<Data>({
    version: "v1",
    items: {},
  });

  useEffect(() => {
    function fetchData() {
      fetch(import.meta.env.VITE_DATA_URL)
        .then((response) => response.json())
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        .then((response) => setData(JSON.parse(JSON.stringify(response))))
        .catch((error) => console.log(error));
    }

    fetchData();
  }, []);

  const getSortedItems = (
    items: Record<string, ApiSiteData>
  ): ApiSiteData[] => {
    return Object.keys(items)
      .map((key) => items[key])
      .sort((left, right) => {
        return compareDesc(
          max(left.items.map((i) => i.published)),
          max(right.items.map((i) => i.published))
        );
      });
  };

  return (
    <div>
      <Grid container>
        {getSortedItems(data.items).map((value) => {
          return (
            <Grid item key={value.name} xs={4} minWidth={400}>
              <SiteCard
                name={value.name}
                title={value.title}
                link={value.link}
                displayName={value.name}
                items={value.items}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Dashboard;
