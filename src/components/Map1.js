// components/Map1.js
'use client'
import { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const Map1 = ({setMap1Object}) => {

  const map1Container = useRef();

  // on component mount create the map and set the map refrences to the state
  useEffect(() => {
    const map1 = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        //Coordinate System: WGS 84 / Pseudo-Mercator-EPSG:3857
        center: [8546575.886939, 2137169.681579], // Longitude, Latitude
        zoom: 6
      }),
    });
    
    map1.setTarget(map1Container.current);
    setMap1Object(map1);

    // on component unmount remove the map refrences to avoid unexpected behaviour
    return () => {
      map1.setTarget(undefined);
      setMap1Object(null);
    };
  }, []);

  return (<><div ref={map1Container} className="absolute inset-0"></div></>);
};

export default Map1;
