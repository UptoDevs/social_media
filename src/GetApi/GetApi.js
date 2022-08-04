import axios from 'axios';
import React from 'react'
import {useState, useCallback} from 'react'

const accessToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMGQ1YjZkZjQtZTMwOS00OTBiLTk4MDUtYWY5ZmVmMDhkYzk2IiwidG9rZW4iOiJZS3dyeUdVclVNMnlaZm5DUzgiLCJ0eXBlIjoiQ0xJRU5UIiwiaXNfcHJvZHVjdGlvbiI6dHJ1ZSwic2Vzc2lvbl9pZCI6IjAxOTM4NTA5LTg3N2YtNDBkMi05ZjM5LWExYThmMThiMjE4OSIsImlhdCI6MTY1OTU0ODk2MiwiZXhwIjoxNjU5NTQ5ODYyfQ.Pvdh7PDBFVEPV-w9ZiuiXv9Ix47HYoSXdDzKSMn5VEEJvOygAIMEAVbzJp8tTa5_lOcXznxrw90NswfTWaxxyBm8jpakDabrfxq_iEWQyvGiwSCIy7dZCl2CF_pEYK2Iet2KbojzHvvco_NwLA8PSBd52-5gffuIDHMWz1pawjv5kuP8oUt3ycacd-Wb2JLwGFnSTTluju3YPwjdj2Uz9geFB8TmI_GS5O--NPG4m253aA6sUBBpzb--o9IpoXpxGSj2Uz_bi_dv4Mqyobph-UTBAtuY68bi0c6vsMuUN23BtLC5DWPcHknBkH3-NASdQAP8rIGju4QnnA0EwzujltQ89hCVvOBJRtVNeDSokR4zOXewDZK0C4SOTmDTfPIPslw9PK0KS00EZdL1Jnw-gmNw9SyfQircmdFTpwzvoCQsi7bJf02cmFkNmgpPlVdyfM4kuXKp6saDKlNv2Df0NwVw-b7zBjuwErrsHYKSMhfscR5iZVCR6Mh6enYsC6uBdYJxZj-p0li8P80tOGjPdA13ZEmw8k9F5JH2JVfB9QT_xJhnLg-FpDZo5j1gZyIOgyU7Bwtxo0NCDYdSriu-9rsUaPGDSZKpiHKUeRhmPI37oEMy6fNgqPdj7ByQEmDI9_rLyhXhJRGlNjmrmhBYBgSV-apzQQOCK9KP4RJV0z8';
const apiUrl = 'https://api.concati.com/address';

const authAxios = axios.create({
    baseURL: apiUrl,
    headers: {
        authorization: `Bearer ${accessToken}`
    }
})

const GetApi = () => {

    const [regions, setRegions] = useState([]);
    const [requestError, setRequestError] = useState();

    const fetchData = useCallback(async () => {
        try{
            const result = await authAxios.get(`${apiUrl/regions}`)
            setRegions(result.data);
        }catch (err){
            setRequestError(err.message);
        }
    })

    return (
        <div>
            <button onClick={() => fetchData()}>get Regions</button>
            {regions.map(region => {
                return <p key={region.id}> { region.region_name } </p>;
            })}

            { requestError && <p  className="error"> { requestError } </p>}

        </div>
      )
    }
export default GetApi
