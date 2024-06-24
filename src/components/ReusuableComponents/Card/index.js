import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function OutlinedCard(props) {
  return (
    <Box sx={{ minWidth: 275, ...props.style }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography variant="h5" component="div">
              {props.heading}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {props.secondaryHeading}
            </Typography>
            <Typography variant="body2">{props.body}</Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </React.Fragment>
      </Card>
    </Box>
  );
}
