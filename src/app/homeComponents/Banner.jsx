import React from 'react';

const Banner = () => {
    return (
<div
  className="hero h-[80vh] object-cover"
  style={{
    backgroundImage:
      "url(https://i.ibb.co.com/Tx01skZk/shopping.jpg)",
      backgroundSize: "cover"
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-xl">
      <h1 className="mb-5 text-5xl font-bold">Shop Your Favourite at Shop Me</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn rounded-2xl text-lg font-semibold">Explore Products</button>
    </div>
  </div>
</div>
    );
};

export default Banner;