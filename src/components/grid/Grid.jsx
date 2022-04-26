import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '../../components/card/Card';
import { Posts } from "../../postData"
import { Grid } from '@mui/material';
import AlignItemsList from '../../components/leftGrid/leftGrid';
import BasicList from '../../components/rightGrid/rightGrid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <AlignItemsList/>
        </Grid>
        <Grid item xs={6}>
    <div className="cards">

      {Posts.map((p) => (
        <Card key={p.id} post={p} />
      ))}
      
    </div>
        </Grid>
        <Grid item xs={3}>
          <BasicList/>
        </Grid>
      </Grid>
    </Box>
  );
}
