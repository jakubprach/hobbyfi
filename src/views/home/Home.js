import * as React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Card from '../../components/card/Card';
import './home.css'
import { Posts } from "../../postData"
import { Grid } from '@mui/material';
import BasicGrid from '../../components/grid/Grid';


export const Home = () => {
  return (
    <>
    <Navbar />
    <BasicGrid />
    </>
  )
}
