import * as React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Card from '../../components/card/Card';
import './home.css'
import { Posts } from "../../postData"


export const Home = () => {
  return (
    <>
    <Navbar />
    <div className="cards">

      {Posts.map((p) => (
        <Card key={p.id} post={p} />
      ))}
      
    </div>
    </>
  )
}
