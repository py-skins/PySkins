import React, { Suspense, lazy, useEffect, useState } from "react";
import "./products.scss"; // Import your SCSS file
import Container from "../../Container/Container";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { fetchCasesOld } from "../../../api/casesServices";
import Skeleton from "../Skeleton/Skeleton";
import ScrollTrigger from "react-scroll-trigger";

const delay = async (promise) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
};

const SkinsCarousel = lazy(() => delay(import("./SkinsCarousel")));

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
    slidesToSlide: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 640 },
    items: 3,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 640, min: 391 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 390, min: 0 },
    items: 1,
  },
};

const Products = () => {
  const [skins, setSkins] = useState([]);
  const [load, setLoad] = useState(false);

  const fetchSkins = async () => {
    try {
      const data = await fetchCasesOld();
      setSkins(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSkins();
  }, [load]);

  const caseData = skins.map((index) => index.skins[1]);

  return (
    <Container>
      <div className="carousel">
        <h1 className="card-header">Trade Our CS2 Skins</h1>
        <ScrollTrigger onEnter={() => setLoad(true)}>
          <Carousel
            responsive={responsive}
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            ssr={false}
          >
            {caseData?.slice(0, 15).map((product, index) => (
              <div key={index}>
                {/* LOAD SKINS WHEN SCROLL ON CAROUSEL */}
                {load && (
                  <div className="card-wrapper">
                    <Suspense fallback={<Skeleton type="carousel" />}>
                      <SkinsCarousel product={product} />
                    </Suspense>
                  </div>
                )}
              </div>
            ))}
          </Carousel>
        </ScrollTrigger>
      </div>
    </Container>
  );
};

export default Products;
