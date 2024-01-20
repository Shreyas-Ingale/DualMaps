// components/Map2.js
'use client'
import { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import StadiaMaps from 'ol/source/StadiaMaps';

const Map2 = ({setMap2Object}) => {
  
  const map2Container = useRef();

  // on component mount create the map and set the map refrences to the state
  useEffect(() => {
    const map2 = new Map({      
      layers: [        
        new TileLayer({
          source: new StadiaMaps({
            layer: 'stamen_watercolor',
          }),
        }),
        new TileLayer({
          source: new StadiaMaps({
            layer: 'stamen_terrain_labels',
          }),
        }),
      ],
      view: new View({
        //Coordinate System: WGS 84 / Pseudo-Mercator-EPSG:3857
        center: [8546575.886939, 2137169.681579], // Longitude, Latitude
        zoom: 6
      }),
    });
    
    map2.setTarget(map2Container.current);
    setMap2Object(map2);

    // on component unmount remove the map refrences to avoid unexpected behaviour
    return () => {
      map2.setTarget(undefined);
      setMap2Object(null);
    };
  }, []);

  return (<><div ref={map2Container} className="absolute inset-0"></div></>);
};

export default Map2;
