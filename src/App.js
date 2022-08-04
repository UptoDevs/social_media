

import GetRegionsAPI from './GetRegionsAPI/GetRegionsAPI';
import GetMuniAPI from './GetMuniAPI/GetMuniAPI';
import GetProvinceAPI from './GetProvinceAPI/GetProvinceAPI';

const App = () => {

  return (
    <div className='App'>
        <GetRegionsAPI />
        <GetProvinceAPI />
    </div>
  )
}

export default App
