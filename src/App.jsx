import React, { useState } from 'react';

import jsondate from '../storeData.json'

const App = () => {






  const [selectedRegion, setSelectedRegion] = useState('');
  const [storeInfo, setStoreInfo] = useState([]);

  const handleRegionChange = (event) => {
    const region = event.target.value;
    setSelectedRegion(region);
    if (region) {
      setStoreInfo(jsondate.regions[region]);  // jsondateの中のregionsオブジェクトを参照
    } else {
      setStoreInfo([]);
    }
  };


  return (
    <div>
      <h1>店舗情報</h1>

      <label htmlFor="regionSelect">地域を選択:</label>
      <select id="regionSelect" value={selectedRegion} onChange={handleRegionChange}>
        <option value="">選択してください</option>
        <option value="Tohoku">東北</option>
        <option value="Kanto">関東</option>
        <option value="Kansai">関西</option>
      </select>


      {storeInfo.length > 0 && (
        <div>
          <h2>{selectedRegion}の店舗一覧</h2>
          <ul>
            {storeInfo.map((store, index) => (
              <li key={index}>
                <p><strong>店舗名:</strong> {store.storeName}</p>
                <p><strong>住所:</strong> {store.address}</p>
                <p><strong>電話番号:</strong> {store.phoneNumber}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;