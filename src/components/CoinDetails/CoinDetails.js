import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const CoinDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const [coin, setCoin] = useState({});
  useEffect(() => {
    setLoading(true);
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCoin(data));
    setLoading(false);
  }, [id]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="px-4 h-[70vh] pt-20 pb-24 mx-auto max-w-7xl md:px-2">
          <div className="h-full grid  grid-cols-1 md:grid-cols-2 justify-items-center  gap-4 content-center">
            <div className="order-2 md:order-1">
              <h1 className="text-3xl"> Scores:</h1>
              <hr />
              <h1>Community Score: {coin.community_score}</h1>
              <h1> Developer Score: {coin.developer_score}</h1>
              <h1>Market Cap Rank: {coin.market_cap_rank}</h1>
              <h1>
                Origin:{" "}
                {coin.country_origin ? coin.country_origin : "Not found"}
              </h1>
            </div>
            <div className="flex justify-center items-center order-1 md:order-2">
              <img src={coin.image?.large} alt="coinimage" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CoinDetails;
