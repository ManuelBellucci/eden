import React, { useEffect, useState } from 'react';
import Tag from '../../commons/Tag';
import { SingleCarousel } from './SingleCarousel';
import axios from 'axios';

const Featured = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const response = await axios.get('http://localhost:5000/listings?type=sell&featured=true');
        setFeatured(response.data);
      } catch (error) {
        console.error('Error fetching featured sells:', error);
      }
    };

    fetchFeatured();
  }, []);

  return (
    <div className='m-14 mt-24'>
      <h2 className='text-center mb-20 text-xl font-extrabold leading-none tracking-tight text-primary-900 md:text-2xl lg:text-3xl'>Le proposte del mese: <span className='underline underline-offset-4 decoration-8 decoration-primary-400'>in vendita</span></h2>
      <div className='grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3'>
        {featured.map(listing => (
            <div key={listing._id} className='flex flex-col relative'>
              <Tag
                text={listing.tag}
                color='bg-primary-500/75'
                position='topLeft'
                size='lg'
              />
              <SingleCarousel images={listing.images} />
              <hgroup className='mt-4'>
                <h3 className='text-2xl font-bold'>{listing.title}</h3>
                <p>{listing.address}, {listing.municipality}</p>
                <div className='border-t mt-2 pt-2 text-lg flex justify-between'>
                  <div className='flex'>
                    <span className='border-r text-sm px-2 flex items-center gap-2'><img src='./double-bed.png' className='h-6 w-6' alt='bed icon' /> {listing.doubleBedrooms} </span>
                    <span className='border-r text-sm px-2 flex items-center gap-2'><img src='./toilet.png' className='h-6 w-6' alt='toilet icon' /> {listing.bathrooms} </span>
                    <span className='border-r text-sm px-2 flex items-center gap-2'><img src='./ruler.png' className='h-6 w-6' alt='size icon' /> {listing.commercialSqm} mq</span>
                  </div>
                  <span className='text-xl font-extrabold text-primary-400'>{listing.pubPrice.toLocaleString()}€</span>
                </div>
              </hgroup>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;