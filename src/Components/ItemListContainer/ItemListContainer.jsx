import React, {useState, useEffect} from "react";
import Card from "./Card";
import "../ItemListContainer/ItemListContainercss.css";
import getItems  from "../../Services/mockAPI";
import {useParams} from "react-router-dom";
import getItemsByCategoria from "../../Services/mockAPI";


function ItemListContainer() {

    let [data, setData] = useState([]);

    const { cat } = useParams();

    useEffect(() => {
        if (cat === undefined){
                getItems().then((respuestaDatos) => setData(respuestaDatos));
            }
            else{
                getItemsByCategoria(cat).then((respuestaDatos) => setData(respuestaDatos));
            }
        }, [cat]);
    
    return(
        <div>
            <h1>Articulos</h1>
        <div className="tarjetas">
            
            {data.map((item) => {
                
                    console.log(item)
                    return <Card 
                    id={item.id}
                    key={item.key}
                    tittle={item.tittle}  
                    category={item.category} 
                    price={item.price}
                    img={item.img}
                    stock={item.stock}/>
                }
                )
            }
        </div>
        </div>
            
    )
    
};

export default ItemListContainer;