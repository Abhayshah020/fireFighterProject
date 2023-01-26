import React from 'react';
import { createAvatar } from '@dicebear/core';
import { lorelei,adventurer } from '@dicebear/collection';

const avatar = createAvatar(adventurer, {
    seed: "Felix"
  });

const svg = avatar;
 const Home = () => {
    return(
        <>
        <h1>This is Home page</h1>{svg}
        </>
    )
 }
 export default Home;