import React from 'react'
import {useState, useEffect} from 'react';

const GetMuniAPI = () => {

    const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMGQ1YjZkZjQtZTMwOS00OTBiLTk4MDUtYWY5ZmVmMDhkYzk2IiwidG9rZW4iOiJjMlZSRzFuV0FCY1VMYzNEeXciLCJ0eXBlIjoiQ0xJRU5UIiwiaXNfcHJvZHVjdGlvbiI6dHJ1ZSwic2Vzc2lvbl9pZCI6IjAxOTM4NTA5LTg3N2YtNDBkMi05ZjM5LWExYThmMThiMjE4OSIsImlhdCI6MTY1OTU4OTE1MiwiZXhwIjoxNjU5NTkwMDUyfQ.Cf0vplxwa7FiKafNOY7-eN9Eeq_j16FhfnvL3GWOd2081mILP85Qs17I3gpW76q2mx4To2w1ENu0hnYX6JocM-cCZhwT60pOpoNVxNeyLY4uXGuv5O47O82ZkAvP06wBT9GDAXnJ340c2EviP0LW3-AIG3EbHIX22-kIvV3nR-vuozTYfREg1qEySB2YjO87NWauuWVfpiUmGqyuxcLNA2cAbf7ckoeR_kjYKZDcKJKPJqsk30NQZ2eAuRLBP_xlemsZTAoscHeyBLPixHSRXFEFu98mzg3GRNjAptx-Y6K4X2jeUmrVf1wgqQGFZvDiyFMc1BfV8_291KT_peJPmoID9B1EovuV_9eV6ZW48vFLTT2u31Z0MYnmz3MG2-nRSjhqblFlvLXknQ9r2Rz8lBdfKD9hdUqFoFoLOC1R_cKLdn1CI9rgElcIM8U1Qfu7fDNwb0y9lBFhYusablR4vdmhB1YSeNiQDEIbBu6ZeZEX4WMstmaNAv_J4ScTN2hxoeTIDmz9EPwPjiS9Sttc36NIW2bplyq0REDi4kf1hxtYRBcFr7ftSAzHs_CQavZ3ZwHDAWxh5bxWQyg2uFq8nEWu9bBH6xt6PaX6J53UuUCMLFPnLJZ0ajIXKrMyPBbQtMFlzeNqs7gdQapfyK2vbEOupJCT02KNFQr2VRCURCg";
    const [regions, setRegions] = useState();
    useEffect(()=>{
      fetch('https://api.concati.com/address/municipalit', {
        method: "POST",
        headers: {"Authorization": `Bearer ${token}`}
      }).then(res => res.json()).then(json => setRegions(json));
    },[]);
      
    if(!regions){
        return false;
      }
      if(regions !== "undifined" && "code" in regions ){
        regions.data.map((res) => console.log(res.region_name))
    }
  
    return (
      <div>
        <select>
        {
          regions.data.map(res => 
            <option value={res.region_id} key={res.region_id}>{res.region_name}</option>
          )
        }
        </select>
      </div>
    )
}

export default GetMuniAPI
