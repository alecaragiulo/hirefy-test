'use client';

import { useState, useEffect } from 'react';
import ReleaseNote from '@/components/ReleaseNote';
import Selectable from '@/components/Selectable';
import Image from 'next/image';

export default function Page (){

  const [releaseNotes, setReleaseNotes] = useState([]);
  const [selectedRelease, setSelectedRelease] = useState(null);

  const fetchData = async () => {

    const res = await fetch('./api/data.JSON');
    const jsonResponse = await res.json();
    
    if(jsonResponse?.data) setReleaseNotes(jsonResponse.data);

    if(!selectedRelease && jsonResponse?.data) setSelectedRelease(jsonResponse.data[0]);

  };

  const onReleaseChange = (releaseNote) => {
    
    setSelectedRelease(releaseNote);
    window.scrollTo(0, 0);
  };

  useEffect(() => {

    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-screen text-ui-lightblack">

      {/* Banner */}
      <div className="w-screen bg-customGradient">
        <h1 className="p-6 text-white text-3xl sm:ml-5 font-bold">Release Notes</h1>
      </div>

      <div className='flex flex-col sm:flex-row sm:justify-evenly'>

        {/* Selected Release */}
        <ReleaseNote releaseNote={selectedRelease} key={selectedRelease?.version} />

        {/* Release Notes List */}
        <div className="flex flex-col p-6 items-start sm:sticky sm:top-0">
          <h2 className="text-lg font-bold">All Release Notes</h2>

          <div className='flex flex-col gap-3 my-3'>
          { 
            releaseNotes.map((releaseNote, index) => 
                // index como diferenciador único
                <button onClick={() => onReleaseChange(releaseNote)} key={index} className='text-ui-gray text-sm font-semibold hover:underline'>Release {releaseNote.version}: {releaseNote.title}</button>
            )
          }
          </div>
          <button className='text-blue-500 font-bold text-sm'>View more</button>

        </div>

      </div>

    </div>

  )
}