import React, { useState } from 'react';
import Container from '../../layouts/Container/Container';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import './MyCommunity.css'; // Import your CSS file for styling

const MyCommunity = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [communityName, setCommunityName] = useState('');

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCommunityName('');
    };

    const handleCreateCommunity = () => {
        closeModal();
    };

    return (
        <div className='md:pt-20 pt-32'>
            <Container>
                <div className='grid md:grid-cols-12 gap-10 '>
                    <div
                        className='cursor-pointer col-span-4 flex justify-center items-center gap-1 bg-orange-500 py-2 rounded-xl text-white'
                        onClick={openModal}
                    >
                        <AiOutlinePlusSquare />
                        <p>Create Community</p>
                    </div>
                    <div className='col-span-8'>
                        <h1 className='text-center'>Your Community has not been added yet</h1>
                    </div>
                </div>
            </Container>

            {isModalOpen && (
                <div className='modal-container'>
                    <div className='modal'>
                        <h2 className='text-xl mb-4'>Add New Community</h2>
                        <input
                            type='text'
                            placeholder='Community Name'
                            value={communityName}
                            onChange={(e) => setCommunityName(e.target.value)}
                            className='border rounded-lg p-2 mb-2 w-full'
                        />
                        <button className='bg-orange-500 text-white rounded-lg py-2 px-4' onClick={handleCreateCommunity}>
                            Create
                        </button>
                        <button className='bg-gray-300 text-gray-700 rounded-lg py-2 px-4 ml-2' onClick={closeModal}>
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyCommunity;
