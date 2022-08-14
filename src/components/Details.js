import './details.css';
import { useParams } from 'react-router-dom';
import { React, useEffect, useState } from "react";


function Details() {
  const params = useParams();
  const [details, setDetails] = useState([])
  
  const getDetailCard = async() =>{
      const detailData = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${params.id}`);
      const value = await detailData.json();
      const details = value.data;
      
      setDetails(details);
  
    }

  useEffect(() => {
    getDetailCard();
    // eslint-disable-next-line
  }, [params])
  
  return (
    <>
      {details.map((data)=>(
        data.card_images.map((detailimg)=>(     
          <div className='container-d-card'>
              <img src={detailimg.image_url} alt={data.name} />
              <div className='container-detail'>
                <div className='row-detail'>
                  <h4 className='dname'>{data.name}</h4>
                  <h4 className='dtype'>{data.type}</h4>
                  <h4 className='drace'>{data.race}</h4>
                  <p>
                    {data.desc}
                  </p>
                </div>
              </div>
          </div>       
          ))
      ))}
    </>
  )
}

export default Details;