// import './App.css';
// import logo from './logo.svg';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Main() {
  const [datas, setDatas] = useState([]);

  const getAllBlueEyesArc = async() => {
    const cardData = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes")
    const value = await cardData.json();
    const result = value.data

    setDatas(result);
  }

  
  useEffect(() => {
    getAllBlueEyesArc();  
  }, [])
  

  return (
    <div className="Main">
      { datas.map((data, index) => {
          return ( 
          data.card_images.map((subdataimg)=>{
            return (
              <div className='container'>
                <div className="col">
                  <div className='cards'>
                    <Link to={`/details/${data.id}`}>
                      <div className="container-img" style={{backgroundColor : `#e9e9e9`}}>
                          <img alt={data.name} src={subdataimg.image_url_small}/>
                      </div>
                    </Link>
                      <div className='rows'>
                        <h2><b>{data.name}</b></h2>
                        <h2><b>{data.type}</b></h2>
                        <h3><b>Card Market Price</b></h3>
                        {
                            data.card_prices.map((subdataprice, i)=>{
                            return (
                                <h3 key={i}><b>$ {subdataprice.cardmarket_price}</b></h3>
                                )
                            })
                        }
                      </div>
                  </div>
                </div>
              </div>
            )
        })
        )
    })}
    
        </div>    
  );
}

export default Main;