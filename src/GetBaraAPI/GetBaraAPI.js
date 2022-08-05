import React from 'react';
import { useState, useEffect } from 'react';

const GetBaraAPI = ({ paramRegionId, paramProvinceId, paramMuniId }) => {
    const token =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMmRiNjAwYTItZTgwMy00YmY5LWFjMzQtN2FkMjE1MGNlZWI0IiwidG9rZW4iOiJLNGk0bkNGNXB0UGNaeWc0bUwiLCJ0eXBlIjoiQ0xJRU5UIiwiaXNfcHJvZHVjdGlvbiI6dHJ1ZSwic2Vzc2lvbl9pZCI6IjQ2N2EyMzI0LWY4NTUtNDc4NS04YmFhLTQ0NDQ3YTYyMTI4OSIsImlhdCI6MTY1OTcwNDkwOSwiZXhwIjoxNjU5NzA1ODA5fQ.BsLDi0NF1vtdC7f4k4QY8_gKgXoL8v5qn8M8BXP80b0C6qN6KdwKYdEc2TEDSRtbpDDnQdyiBFUPhN003W4qMd6x4cewSJLFZZToHi9IHfzhSqno-fgWYwkbv1DcFHnf6_cKKYBY5Il5_0Rrx5tHAXKnjGBcFfHSIoyS28tbTVfh9VE1Ii17LQb53weWq0T3KqIAqznTrEvZY8N6tk6H0NOVqC4n98XMtjegBxRdv5WNRGreac-Tio7yiBvdXTQ0wWRcpPynrRyFM-ysl6IR8xfO59YOCFY8xJZBIOXnNd_tlRERijk43YnHZ9DRW5fhR_UkNM87EAIc0EzSRixIMyDSqDwzdIVwn9V3qUi14B3zCQHOcOt4BnjIzzlHb4wj45w9JhpjGekfgY0iMjb1lFRC9cEURfXG-enFgv88GLDp7bEAxkC-2vRtiLy7TJNccqMfet6_u86BTH_dwZk1iBHbbo65D4GjgFhNhrmFDKtzPPGsJYhzOWXG2DaFFhIJfIcE84l5yLfAEbVX1y2IUrqHG3JOtBXGUJYLQ9hS6P14wDYYTOPloefvuGB8jiRj6mcFNq6W7_4RIIDFt_P6__mbLd8TkbnOKmDwOq_fCUThGNci-ngBTzLZe9HNNYtlokZeupSFvZ1Ofx3PZbLhDVGpsF8aYFyZoFrHa2S-NVQ";
  const [barangays, setBarangays] = useState();
  

  useEffect(() => {
    const getBara = async () => {
      const fetchBara = await fetch(
        "https://api.concati.com/address/barangays",
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: JSON.stringify({ 
            region_id : [paramRegionId],
            province_id : [ paramProvinceId],
            municipality_id : [paramMuniId]
          }),
        }
      );
      const resBara = await fetchBara.json();
      setBarangays(await resBara);
    };
    if (paramMuniId) {
        getBara();
    }
  }, [paramMuniId]);

  if (!barangays) {
    return false;
  }


  if(!paramMuniId) return;

const onHandleBarangays = (event) => {
//   const getMunicipalityId = event.target.value;
  
}

  return (
    <div>
      <select onChange={onHandleBarangays}>
        <option value="0">--Select Barangay--</option>
        {barangays.data.map((res, index) => (
          <option key={index} value={res.barangay_id}>
            {res.barangay_name}
          </option>
          
        ))}
        
      </select>
      <p>{barangays.data.zipcode}</p>
    </div>
  );
}

export default GetBaraAPI
