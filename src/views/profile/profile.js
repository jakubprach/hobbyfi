import * as React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Card from '../../components/card/Card';
import './profile.css'
import { Posts } from "../../postData"
import { Grid } from '@mui/material';
import BasicGrid from '../../components/grid/Grid';
import PostShare from '../../components/PostShare/PostShare';


export const Profile = () => {
  return (
    <>
    <Navbar />
    <BasicGrid />
    </>
  )
}
