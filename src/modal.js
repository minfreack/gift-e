import React from 'react';
import './index.css';

function Modal({visible, setVisible, day}) {

    return (
        <div className="absolute z-30 top-0 flex h-screen w-full items-center justify-center bg-[#000000] bg-opacity-50">
            <div className="relative flex gap-y-4 w-11/12 flex-col max-h-[40rem] py-10 overflow-y-scroll rounded-lg bg-[#fff] py-5 px-12 shadow-md md:w-10/12 lg:w-4/12 xl:px-10">
                <h1 className="text-xl font-semibold self-center">{day.day}</h1>
                <p onClick={() => setVisible(false)} className="absolute right-6 top-2 font-semibold cursor-pointer">x</p>
                <hr className="border-[#000000] w-full h-[1px]"/>
                <p>{day.title}</p>
                <div className="flex flex-col gap-y-2" dangerouslySetInnerHTML={{ __html: day?.body }}/>
                {day?.song !== '' && (
                    <a href={day?.song} target="_blank" className="bg-[#FFE874] w-max rounded-full font-semibold py-2 self-center px-12">Canción del día</a>
                )}
            </div>
        </div>
    );
}

export default Modal;
