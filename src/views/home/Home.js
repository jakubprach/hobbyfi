import * as React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Card from '../../components/card/Card';
import Hobbies from '../../data/hobbies2.json'

export const Home = () => {
  const cards = Hobbies.map(item => {
    return (
      <Card
        {...item}
            
      />
    )
  })

  return (
    <div>
    <Navbar />
    <section >
      {cards}
    </section>
    </div>
  )
}
