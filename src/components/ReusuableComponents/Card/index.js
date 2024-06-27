import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { primaryColor } from "../../../Constants/color";

export default function OutlinedCard(props) {
  let heading = props.heading.split("|");
  return (
    <Box
      sx={{
        minWidth: 275,
        
        ...props.style,
      }}
    >
      <Card
        variant="outlined"
        sx={{
          borderRadius: "25px",
          //bgcolor:primaryColor,
          // backgroundColor:"#222629",
          boxShadow: 3,
          ":hover": {
            boxShadow: 20, // theme.shadows[20]
          },
        }}
      >
        <React.Fragment>
          <CardContent>
            <Typography variant="h5" component="p">
              {heading[0]} {heading.length > 1 ? "|" : ""}{" "}
              <span style={{ fontSize: 16 }}>
                {heading.length > 1 ? heading[1] : ""}{" "}
              </span>
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {props.secondaryHeading}
            </Typography>
            <Typography variant="body2">{props.body}</Typography>
            {props.overRideContent}
          </CardContent>
          {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </React.Fragment>
      </Card>
    </Box>
  );
}
