import React from "react";
import { useState, useEffect } from "react";

const GetRegionsAPI = () => {
  const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMGQ1YjZkZjQtZTMwOS00OTBiLTk4MDUtYWY5ZmVmMDhkYzk2IiwidG9rZW4iOiJ5T25TOFh5bFdiRjdxMEs1anoiLCJ0eXBlIjoiQ0xJRU5UIiwiaXNfcHJvZHVjdGlvbiI6dHJ1ZSwic2Vzc2lvbl9pZCI6IjAxOTM4NTA5LTg3N2YtNDBkMi05ZjM5LWExYThmMThiMjE4OSIsImlhdCI6MTY1OTYwNTk3OCwiZXhwIjoxNjU5NjA2ODc4fQ.E8M3zUA82LIH-SX1RdHjfbHygaZeG2DSK7uF8EyWTU92aQo9OMManpTIAk-sa0nHyVxz2LFiTNwqN7nrv2KyO5tR58Y9YkyD8LrgOFZLnkwHinJW2hJi1xOZ7y1gyn-puKeceltV53Tml12bnLFnevkU2jYMkufROwIcvS4EbeinFUndPmBJgyEs3i1fAQmMLfltgr9w7Za1B0Q8ij6CtQ6OdJRyr7eH0bf7YAxnminlaakkWKxab6Ie6eVPnTjsFokiKkL_qnQqAgqD_2Mu0Ov3f9w7h9POWP8j4jaxTlet1XZayAxRbhe8M1s8YHREQ-Kavo5LfjXA5rmYA9XcPHETLGDwWJa1W0wIEysTD0WUXWz4fAOmimh3dm3E40v6rtBjFlEtGykegfbUMmepVy80x25-Op9ywNqO2HZyfRQJpddV3YHQMQiQweoSQdj4pSGawRRSZF4NAT8ZdcMjkEGxRe62sxyXttM_HnhN9AFbwEwE41vcdrUmGZZexMVxtbqg8uI-tKwJL33vTDZpeToQ-AqtalMlgvUl-KqYOjHONPGncAAlN59s6K2B2WRgbDvOycl_y4zBMhUCObONxAlYLEOyYKx7tqgSuztFGF5E-3zzSts1q_UALPDE_vyFYzXokvPz558vs1rOumG8nVCG2SNte0idpfH8oAaHskg";
  const [regions, setRegions] = useState();
  const [selectedId, setSelectedId] = useState({
            _id: ''
        });
  useEffect(() => {
    fetch("https://api.concati.com/address/regions", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((json) => setRegions(json));
  }, []);

  if (!regions) {
    return false;
  }
  if (regions !== "undifined" && "code" in regions) {
    regions.data.map((res) => console.log(res.region_name));
  }

  
  const onChangeRegionId = (key, _id) => {
    setSelectedId(() => ({
        [key]: _id,
    }))
}





  return (
    <div>
      <select>
        {regions.data.map((res) => (
          <option onChange={_id => onChangeRegionId(_id)} key={res.region_id} value={selectedId[res.regions_id]} >
            {res.region_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GetRegionsAPI;
