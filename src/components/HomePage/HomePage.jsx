import React from "react";


function HomePage({username}) {
  return (
    <section>
      <h1>Home</h1>
      <p>Welcome to our shop, {username}! We hope you find what you're looking for.</p>
    </section>
  );
}

export default HomePage;
