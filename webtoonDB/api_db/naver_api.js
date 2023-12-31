const mongoose = require('mongoose');
const axios = require('axios');

const days = {
  0: 'mon',
  1: 'tue',
  2: 'wed',
  3: 'thu',
  4: 'fri',
  5: 'sat',
  6: 'sun',
}

// MongoDB에 한 번 연결
mongoose.connect('mongodb://localhost:27017/fsdb_naver', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB 연결 오류:'));

db.once('open', () => {
  console.log('MongoDB에 연결되었습니다.');

  // 루프를 사용하여 요일별로 컬렉션을 생성
  for (let i = 0; i < 7; i++) {
    const collectionName = days[i];

    // 변경: genre를 map<string, dynamic>으로 설정
    const DayModel = mongoose.model(collectionName, new mongoose.Schema({
      lastUpdate: String,
      webtoonId: Number,
      page: Number,
      service: String,
      title: String,
      url: String,
      updateDay: String,
      img: String,
      author: String,
      service: String,
      // 변경: genre 추가
      genre: {
        type: Map,
        of: mongoose.Schema.Types.Mixed,
      },
    }));

    // API 요청
    const baseURL = 'https://korea-webtoon-api.herokuproject.com';
    const params = {
      page: 0,
      perPage: 100,
      service: 'naver',
      updateDay: days[i],
    };

    axios.get(baseURL, { params })
      .then(response => {
        const webtoonData = response.data;
        const savePromises = webtoonData.webtoons.map(webtoonInfo => {
          const query = { webtoonId: webtoonInfo.webtoonId };
          const update = { $set: webtoonInfo };
          // 변경: genre 정보 추가
          update.$set.genre = {}; // 빈 map으로 초기화
          return DayModel.findOneAndUpdate(query, update, { upsert: true, new: true }).exec();
        });

        Promise.all(savePromises)
          .then(savedWebtoons => {
            console.log('데이터가 MongoDB에 저장되었습니다:', savedWebtoons);
          })
          .catch(err => {
            console.error('데이터 저장 중 에러 발생:', err);
          });
      })
      .catch(error => {
        console.error('API 요청 중 에러 발생:', error);
      });
  }
});
