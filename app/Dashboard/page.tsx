"use client";

import { gql, useQuery } from "@apollo/client";
import { Fascinate } from "next/font/google";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Modal from "../components/modal/Modal";

const get_AllUser_Query = gql`
  query Query {
    getAllUsers {
      email
    }
  }
`;

const UserMinted_Nft = gql`
  query GetUserMintedNft {
    getUserMintedNft {
      listed
      resourceID
      tokenId
      metaData {
        name
        merchantID
        thumbnailCID
        thumbnailPathIPFS
        thumbnailMimeType
        thumbnailHosting
        mediaCID
        mediaPathIPFS
        mimetype
        mediaHosting
        attributes {
          Falcons
          Saints
          Patriots
          Packers
          Titans
          streak
          Commanders
          Raiders
          Broncos
          Steelers
          Jets
          team
          Chiefs
          Panthers
          status
          Bengals
          Seahawks
          Buccaneers
          Browns
          Cardinals
          Giants
          Rams
          Colts
          Bears
          Ravens
          Dolphins
          Eagles
          Chargers
          Cowboys
          Lions
          Jaguars
          Texans
          Vikings
          Bills
          FortyNiners
        }
        description
        thumbnail
        mediaURL
        tokenId
        rarity
      }
    }
  }
`;
const Dashboard = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const { data, loading, error } = useQuery(UserMinted_Nft);
  console.log(data);

  const closeModel = () => {
    setShowModal(false);
  };

  // const handleModal = (e: any)=>{
  //   e.preventDefault()
  // }

  // useEffect(() => {
  //   const accessToken = localStorage.getItem("accessToken");

  //   if (!accessToken) {
  //     router.push("/");
  //   }
  // }, []);

  // const img = require("https://unsplash.com/photos/brmewoW0OcU");

  // const videoHandlePlay =

  return (
    <>
      <div className="container-fluid bg-image relative">
        <div className="row">
          <div className="col">
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}

            {data && data.getUserMintedNft && (
              <div>
                <div className="grid grid-cols-4">
                  {data.getUserMintedNft.map((item: any) => (
                    <div className="p-3">
                      <div className="py-2 px-1 bg-yellow-300 flex flex-col justify-center items-center">
                        <p>tokenId: {item.tokenId}</p>
                        <video width="260" height="240" autoPlay loop>
                          <source
                            src={item.metaData.mediaURL}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                        <div className="flex flex-col">
                          <div className="my-2">
                            <strong>Name: </strong>
                            {item.metaData.name}
                          </div>
                          <div>
                            <strong>Description: </strong>
                            {item.metaData.description}
                          </div>
                          <div>
                            <button
                              className=" bg-indigo-600 justify-center py-2 w-full rounded-lg font-bold text-white hover:bg-blue-400 "
                              onClick={(e) => {
                                setShowModal(true);
                              }}
                            >
                              List Nft
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      <Modal show={showModal} onClose={closeModel} />
      </div>
    </>
  );
};

export default Dashboard;
