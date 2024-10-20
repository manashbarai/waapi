'use client';
import React from 'react';

import AnimateHeight from 'react-animate-height';
import { useState } from 'react';

interface UserData {
    contactInfo: {
        name: string;
        number: string;
        email: string;
    };
    optedIn: {
        Source: string;
        LastActive: string;
        TemplateMessage: string;
        SessionMessage: string;
        ApiMessage: string;
    };
    Tag: string;
    Notes: string;
    Comments: string;
    Journey: string;
}

interface ContactInfoComponentProps {
    userData: UserData;
}

const ContactInfoComponent: React.FC<ContactInfoComponentProps> = ({ userData }) => {
    const [aditionalInfo, setAditionalInfo] = useState('tag');

    const [active, setActive] = useState<string>('1');
    const togglePara = (value: string) => {
        setActive((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };
    return (
        <div className="contact-info flex flex-col gap-3 p-2 rounded-lg ">
            <h2 className="text-xl font-bold text-gray-800">
                {' '}
                <i>Contact Info</i>{' '}
            </h2>

            <div className="flex flex-col gap-1  backdrop-blur-md bg-gray-100 shadow-md rounded p-2">
                <div className="flex items-center">
                    <span className="text-gray-700 tracking-wider	 font-semibold ">Name:</span>
                    <span className="ml-2">{userData.contactInfo.name}</span>
                </div>
                <div className="flex items-center">
                    <span className="text-gray-700 tracking-wider	 font-semibold ">Phone:</span>
                    <a href={`tel:${userData.contactInfo.number}`} className="ml-2 hover:text-blue-500">
                        {userData.contactInfo.number}
                    </a>
                </div>
                <div className="flex items-center">
                    <span className="text-gray-700 tracking-wider	 font-semibold ">Email:</span>
                    <a href={`mailto:${userData.contactInfo.email}`} className="ml-2 hover:text-blue-500">
                        {userData.contactInfo.email}
                    </a>
                </div>
            </div>
            <span className="text-gray-700  tracking-wider	 font-semibold ">Opt-In Details:</span>
            <div className="flex flex-col gap-1   backdrop-blur-md bg-gray-100 shadow-md rounded p-2">
                <div className="flex items-center"></div>
                <div className="">
                    <span className="text-gray-700 tracking-wider	 font-semibold">Source:</span>
                    <span className="ml-2">{userData.optedIn.Source}</span>
                </div>
                <div className="">
                    <span className="text-gray-700 tracking-wider	 font-semibold">Last Active:</span>
                    <span className="ml-2">{userData.optedIn.LastActive}</span>
                </div>
                <div className="">
                    <span className="text-gray-700 tracking-wider	 font-semibold">TemplateMessage:</span>
                    <span className="ml-2">{userData.optedIn.TemplateMessage}</span>
                </div>
                <div className="">
                    <span className="text-gray-700 tracking-wider	 font-semibold">Session Message:</span>
                    <span className="ml-2">{userData.optedIn.SessionMessage}</span>
                </div>
                <div className="">
                    <span className="text-gray-700 tracking-wider	 font-semibold">Api Message:</span>
                    <span className="ml-2">{userData.optedIn.ApiMessage}</span>
                </div>
            </div>

            <span className="text-gray-700  tracking-wider text-md	 font-semibold ">Additional Information:</span>
            <div className="flex justify-between">
                <button type="button" onClick={() => setAditionalInfo('tag')} className={`z-10 ${aditionalInfo === 'tag' ? 'bg-white' : 'bg-sky-100'} border border-sky-200 px-2 rounded py-1`}>
                    Tag
                </button>
                <button type="button" onClick={() => setAditionalInfo('notes')} className={`z-10 ${aditionalInfo === 'notes' ? 'bg-white' : 'bg-sky-100'} border border-sky-200 px-2 rounded py-1`}>
                    Notes
                </button>
                <button
                    type="button"
                    onClick={() => setAditionalInfo('comments')}
                    className={`z-10 ${aditionalInfo === 'comments' ? 'bg-white' : 'bg-sky-100'} border border-sky-200 px-2 rounded py-1`}
                >
                    Comments
                </button>
                <button
                    type="button"
                    onClick={() => setAditionalInfo('journey')}
                    className={`${aditionalInfo === 'journey' ? 'bg-white' : 'bg-sky-100'}  z-20 border border-sky-200 px-2 rounded py-1`}
                >
                    Journey
                </button>
            </div>
            <div className="flex flex-col gap-1  backdrop-blur-md bg-gray-100 shadow-md rounded p-2">
                <div className="">
                    {aditionalInfo === 'tag' && (
                        <>
                            {' '}
                            {userData.Tag && (
                                <>
                                    <span className="text-gray-700 text-md tracking-wide font-semibold">Tag:</span> <br />
                                    <span className="animate-slide-blur" key={aditionalInfo}>
                                        {userData.Tag}
                                    </span>
                                </>
                            )}
                        </>
                    )}
                    {aditionalInfo === 'notes' && (
                        <>
                            {' '}
                            {userData.Notes && (
                                <>
                                    <span className="text-gray-700 text-md tracking-wide font-semibold">Notes:</span> <br />
                                    <span className="animate-slide-blur" key={aditionalInfo}>
                                        {userData.Notes}
                                    </span>
                                </>
                            )}
                        </>
                    )}
                    {aditionalInfo === 'comments' && (
                        <>
                            {userData.Comments && (
                                <>
                                    <span className="text-gray-700 text-md tracking-wide font-semibold">Comments:</span> <br />
                                    <span className="animate-slide-blur" key={aditionalInfo}>
                                        {userData.Comments}
                                    </span>
                                </>
                            )}
                        </>
                    )}

                    {aditionalInfo === 'journey' && (
                        <>
                            {' '}
                            {userData.Journey && (
                                <>
                                    <span className="text-gray-700 text-md tracking-wide font-semibold">Journey:</span> <br />
                                    <span className="animate-slide-blur" key={aditionalInfo}>
                                        {userData.Journey}
                                    </span>
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactInfoComponent;
