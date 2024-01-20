// Main Landing Page "/" with dual maps
'use client'
import { useEffect, useState } from "react";
import Synchronize from "ol-ext/interaction/Synchronize";
import Map1 from "@/components/Map1";
import Map2 from "@/components/Map2";
import 'ol-ext/dist/ol-ext.css';

function DualMap() {

  const [map1Object, setMap1Object] = useState(null);
  const [map2Object, setMap2Object] = useState(null);

  useEffect(() => {
    if(!map1Object && !map2Object) return;
    var synchronize_12 = new Synchronize({ maps: [map2Object] });
    var synchronize_21 = new Synchronize({ maps: [map1Object] });
    
    map1Object.addInteraction( synchronize_12 );
    map2Object.addInteraction( synchronize_21 );

    return () => {
      if(map1Object) map1Object.removeInteraction(synchronize_12);
      if(map2Object) map2Object.removeInteraction(synchronize_21);
    }
  }, [map1Object, map2Object])

  return (
    <div className="flex h-[100vh] gap-[2px] bg-white/70" >
      <div className='relative w-1/2   border border-transparent'>
        <Map1 setMap1Object={setMap1Object}/>
      </div>
      <div className='relative w-1/2 border border-transparent'>
        <Map2 setMap2Object={setMap2Object}/>
      </div>
    </div>
  );
}

export default DualMap;
