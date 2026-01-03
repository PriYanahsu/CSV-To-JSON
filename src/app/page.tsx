'use client'
import React from 'react'
import { useConvertValue } from './hooks/useConvertValue';

const Page: React.FC = () => {
  const [csv, setCsv] = React.useState('');
  const [json, setJson] = React.useState('');

  const handleConvert = () => {
    const result = useConvertValue(csv);
    setJson(result);
  };

  return (
    <div className='flex justify-center items-center'>
      <div className='h-screen w-full max-w-120 flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold mb-1'>CSV TO JSON</h1>
        <p className='text-xl font-semibold mb-2'>Convert CSV to JSON format</p>

        <div className='max-w-100 w-full font-bold'>
          <p>CSV</p>
          <textarea
            value={csv}
            onChange={(e) => setCsv(e.target.value)}
            className="border-2 border-black p-2 rounded w-full h-40 mb-4"
          />
        </div>

        <div className='max-w-100 w-full font-bold'>
          <p>JSON</p>
          <textarea
            value={json}
            readOnly
            className="border-2 border-black p-2 rounded w-full h-40 mb-4"
          />
        </div>

        <button
          className='bg-blue-500 text-white font-bold py-2 px-4 rounded'
          onClick={handleConvert}
        >
          Convert
        </button>
      </div>
    </div>
  );
};

export default Page;
