import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import SiteCard, { SiteArticle } from "./SiteCard";

interface ApiSiteData {
  name: string;
  title: string;
  link: string;
  items: SiteArticle[];
}

const Dashboard = () => {
  const [data, setData] = useState<Record<string, ApiSiteData>>({});

  useEffect(() => {
    function fetchData() {
      fetch("https://data.milesstax.com/")
        .then((response) => response.json())
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        .then((response) => setData(JSON.parse(JSON.stringify(response))))
        .catch((error) => console.log(error));
    }

    fetchData();
  }, []);

  return (
    <div>
      <Grid container spacing={1} rowSpacing={1}>
        {Object.keys(data).map((key) => {
          const value = data[key];

          return (
            <Grid item key={key} xs={4} minWidth={400}>
              <SiteCard
                name={key}
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
