// import './App.css';
// import logo from './logo.svg';
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";
import './main.css';

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

function Main() {
  const [datas, setDatas] = useState([]);

  const getAllBlueEyesArc = async() => {
    const cardData = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes")
    const value = await cardData.json();
    const result = value.data

    setDatas(result);
  }

  
  const options = {
    scale: 1.1,
    speed: 1000,
    max: 30,
  };
  
  useEffect(() => {
    getAllBlueEyesArc();
   
  }, [])
  

  return (
    <div className="Main">
      { datas.map((data, index) => {
          return ( 
          data.card_images.map((subdataimg)=>{
            return (
              <div className='container-card'>
                <div className="col">
                  <div className='cards'>
                    <Link to={`/details/${data.id}`}>
                      <div className="container-img" style={{backgroundColor : `#e9e9e9`}}>
                      <Tilt className="box" style={{backgroundImage : `url('${subdataimg.image_url}')`}} options={options} />
                          {/* <img alt={data.name} src={subdataimg.image_url_small}/> */}
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