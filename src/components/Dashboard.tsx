import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import SiteCard from "./SiteCard";

const Dashboard = () => {
  const [data, setData] = useState(Object);

  const fetchData = () => {
    fetch(
      "https://objectstorage.us-phoenix-1.oraclecloud.com/p/kafO1-ITBwLqrafzCsAgbadCrszKrd7eU32gCj8JSilzR1h9sOICKhXSCx7zJLH9/n/axrcgtwzwwcs/b/milesstax/o/cache.json"
    )
      .then((response) => response.json())
      .then((response) => setData(JSON.parse(JSON.stringify(response))));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Grid container spacing={2} rowSpacing={1}>
        {Object.keys(data).map((key) => {
          const value = data[key];

          return (
            <Grid item key={key} xs={4} minWidth={400}>
              <SiteCard
                name={key}
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
