import React from "react";
import { useState, useEffect } from "react";

const GetApi = () => {
  const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMmRiNjAwYTItZTgwMy00YmY5LWFjMzQtN2FkMjE1MGNlZWI0IiwidG9rZW4iOiJ2c1J1YmQ5YUVjVDhQeURvZ1MiLCJ0eXBlIjoiQ0xJRU5UIiwiaXNfcHJvZHVjdGlvbiI6dHJ1ZSwic2Vzc2lvbl9pZCI6IjQ2N2EyMzI0LWY4NTUtNDc4NS04YmFhLTQ0NDQ3YTYyMTI4OSIsImlhdCI6MTY1OTY3OTgxNywiZXhwIjoxNjU5NjgwNzE3fQ.IKF0zeeybgQ6Gxl6UPwgkndrEBxa7zYxFns6GmZ2cJxwWCsZpAcQOAnQZcFuJe_f2IWym6cZRMarvqHqFuPlpga5QC0-NzQo_he6K77lsf1ZomHchNZchIElv2jzBRYTo0_brIwC--edaIYoGI8zUBtRCrPNTcnubGfmDu2rSsiOCJgDImZFecHolSImR2EAFkMVrWY_l_dRHr1pyhI2EyV-JlIszIyNP13JOPAmvci9WXXNuYSoipcDMxvqw5QRpMujvEHGsLFVZCGvqlxJhB4NSi3KHF_aO3E10VoZazGmeRS6_uIzJsnh5Kdu5cXN_QdwgMgA2WlFep_rR7jfRvKXWB-kf6i3ONdyeHVAe8XycaKVPYADHpOmhd3F91eDvlmlILi-HjYDdRgr10V3H63DOatyQY_mMVPisTheKZrn1_78sG4-CR6bi78WweBtrm4Z8_7hyuZ50hAMzj1ZBRgpoPwmDYKFA6u2nYWveBp7JuQuO5gc8AmpjvKo0xzIDm1bTTakN8dpyndKpeyY0enljo0_SismvvPmJNUnFYLmA3bXtMy-xhbANrfXUO8RSEr4Sy9yhfsp_U__9Ij--thweVqdC9b-Di0EdeNORIJEpvMJrtnaDRTm_8hiCXHk15e1dNvz5TkxficMINYMlEvpOE2w91_o3sqT2Eyn2-o";

  const [regions, setRegions] = useState();
  const [regionId, setRegionId] = useState();
  const [provinces, setProvinces] = useState();

    useEffect( () =>{
        const getRegions = async () => {
            const fetchRegion = await fetch("https://api.concati.com/address/regions",{
                method: "POST",
                headers: { Authorization: `Bearer ${token}`},
            });
            const resRegion = await fetchRegion.json();
            setRegions(await resRegion);
        }
        getRegions();
    }, []);

    

    

    useEffect(() => {
      setTimeout(() => {
        const getProvince = async () => {
          const fetchProvince = await fetch("https://api.concati.com/address/provinces" , {
              method: "POST",
              headers: { Authorization: `Bearer ${token}`},
              body: JSON.stringify({"region_id": [regionId]})
          })
          const resProvince = await fetchProvince.json();
          setProvinces(await resProvince);
      }
      getProvince();
      }, 5000)
    }, [regionId]);
    


    
    const onHandleRegion = (e) => {
      console.log(e.target.value);
      if(!e.target.value) return;
      setRegionId(e.target.value);
    }



if(!regions){
    return false;
}


if(!provinces){
   return false;
}

  
  return (
    <div>
      <div>
        <select onChange={onHandleRegion}>
        <option value="0">--Select Region--</option>
        {
           regions.data.map((res, index) =>(
                <option key={index} value={res.region_id}>
                    {res.region_name}
                </option>
                
           ))

        }
        </select>
        <select>
        <option value="0">--Select Province--</option>
          { 
             
            provinces.data.map((res, index) => (
              <option key={index} value={res.province_id}>
                  {res.province_name}
              </option>
               ))
          
          }
        </select>
      </div>
    </div>
  );
};
export default GetApi;
