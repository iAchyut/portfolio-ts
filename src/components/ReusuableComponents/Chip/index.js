import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ReactIcon from "./../../../Assets/react.png"

export default function AvatarChips(props) {
  return (
      <Chip
        avatar={<Avatar alt="Natacha" src={props?.icon ? props?.icon: ReactIcon} />}
        label={props.label}
        variant="outlined"
      />
  );
}