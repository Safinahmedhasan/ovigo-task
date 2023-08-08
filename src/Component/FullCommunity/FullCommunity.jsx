import React, { useEffect, useState } from "react";
import Container from "../../layouts/Container/Container";
import { Link } from "react-router-dom";
import "./FullCommunity.css"; // Import your CSS file for styling

const FullCommunity = () => {
  const [community, setCommunity] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_DataHost}/data`)
      .then((res) => res.json())
      .then((data) => {
        setCommunity(data);
      });
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="pt-24">
      <Container>
        <div className="grid md:grid-cols-12 grid-cols-1 ">
          <div className="list-none  col-span-3  md:mx-10 md:p-10 p-5 rounded-2xl ">
            <div className="grid grid-cols-1 gap-5">
              {community.map((communityItem) => (
                <ul key={communityItem._id}>
                  <Link to="#" onClick={openModal}>
                    {/* Open the modal when the Link is clicked */}
                    <li className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-lg  p-2 text-orange-500">
                      {communityItem.community}
                    </li>
                  </Link>
                </ul>
              ))}
            </div>
          </div>

          <div className=" col-span-9 md:mx-10 p-10 rounded-2xl md:mt-0 mt-10">
            {/* Content */}
            {community.map((communityItem) => (
              <div key={communityItem._id}>
                    <div className="flex flex-col justify-start items-start gap-5 p-10 rounded-lg mb-10  shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
                  <div className="">
                    <div className="flex justify-start items-start gap-5">
                      <div>
                        <img
                          src="../../../public/favicon.png"
                          className="w-8 h-8 rounded-full"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2>{communityItem.user}</h2>
                      </div>
                    </div>
                    <div className=" text-slate-400">
                      <span>{communityItem.date}</span>
                    </div>
                  </div>
                  <div>
                    <p>{communityItem.post}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-container">
          <div className="modal">
            <h2 className="text-xl mb-4">Join Community</h2>
            <p>Are you sure you want to join this community?</p>
            <button
              className="bg-orange-500 text-white rounded-lg py-2 px-4 mt-10"
              onClick={closeModal}
            >
              Join
            </button>
            <button
              className="bg-gray-300 text-gray-700 rounded-lg py-2 px-4 ml-2"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FullCommunity;
