import React from "react";
import { useState, useEffect } from "react";
import GetMuniAPI from "../GetMuniAPI/GetMuniAPI";

const GetProvinceAPI = ({ paramRegionId }) => {
  const token =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMmRiNjAwYTItZTgwMy00YmY5LWFjMzQtN2FkMjE1MGNlZWI0IiwidG9rZW4iOiJLNGk0bkNGNXB0UGNaeWc0bUwiLCJ0eXBlIjoiQ0xJRU5UIiwiaXNfcHJvZHVjdGlvbiI6dHJ1ZSwic2Vzc2lvbl9pZCI6IjQ2N2EyMzI0LWY4NTUtNDc4NS04YmFhLTQ0NDQ3YTYyMTI4OSIsImlhdCI6MTY1OTcwNDkwOSwiZXhwIjoxNjU5NzA1ODA5fQ.BsLDi0NF1vtdC7f4k4QY8_gKgXoL8v5qn8M8BXP80b0C6qN6KdwKYdEc2TEDSRtbpDDnQdyiBFUPhN003W4qMd6x4cewSJLFZZToHi9IHfzhSqno-fgWYwkbv1DcFHnf6_cKKYBY5Il5_0Rrx5tHAXKnjGBcFfHSIoyS28tbTVfh9VE1Ii17LQb53weWq0T3KqIAqznTrEvZY8N6tk6H0NOVqC4n98XMtjegBxRdv5WNRGreac-Tio7yiBvdXTQ0wWRcpPynrRyFM-ysl6IR8xfO59YOCFY8xJZBIOXnNd_tlRERijk43YnHZ9DRW5fhR_UkNM87EAIc0EzSRixIMyDSqDwzdIVwn9V3qUi14B3zCQHOcOt4BnjIzzlHb4wj45w9JhpjGekfgY0iMjb1lFRC9cEURfXG-enFgv88GLDp7bEAxkC-2vRtiLy7TJNccqMfet6_u86BTH_dwZk1iBHbbo65D4GjgFhNhrmFDKtzPPGsJYhzOWXG2DaFFhIJfIcE84l5yLfAEbVX1y2IUrqHG3JOtBXGUJYLQ9hS6P14wDYYTOPloefvuGB8jiRj6mcFNq6W7_4RIIDFt_P6__mbLd8TkbnOKmDwOq_fCUThGNci-ngBTzLZe9HNNYtlokZeupSFvZ1Ofx3PZbLhDVGpsF8aYFyZoFrHa2S-NVQ";

  const [provinces, setProvinces] = useState();
  const [provinceId, setProvinceId] = useState();

  useEffect(() => {
    const getProvince = async () => {
      const fetchProvince = await fetch(
        "https://api.concati.com/address/provinces",
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: JSON.stringify({ region_id: [ paramRegionId ] }),
        }
      );
      const resProvince = await fetchProvince.json();
      setProvinces(await resProvince);
    };
    if (paramRegionId) {
      getProvince();
    }
  }, [paramRegionId]);

  if (!provinces) {
    return false;
  }

  const onHandleProvince = (event) => {
    const getProvinceId = event.target.value;
    setProvinceId(getProvinceId);
    // return getProvinceId;
  };

  return (
    <div>
      <select onChange={onHandleProvince}>
        <option value="0">--Select Province--</option>
        {provinces.data.map((res, index) => (
          <option key={index} value={res.province_id}>
            {res.province_name}
          </option>
        ))}
      </select>
      <GetMuniAPI paramRegionId={paramRegionId}  paramProvinceId={provinceId ? provinceId.toString() : ""} />
    </div>
  );
};

export default GetProvinceAPI;
