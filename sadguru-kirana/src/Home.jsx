import React from "react";
import Img from './images/store.png';

function Home() {
  return (
    <>
    <section id="header" className="">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                 <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                        <h1>Do shopping of Groceries with <strong className="brand-name">Sadguru Kirana</strong></h1>
                        <h2 className="my-3">
                            We are growing since 15years
                        </h2>
                        <div className="mt-3">
                            <a href="" className="btn btn-success">Get Started</a>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={Img} className="img-fluid animated" alt="home-img"/>
                    </div>
                </div>
            </div>
        </div> 
    </section>
    </>
  );
}

export default Home;
