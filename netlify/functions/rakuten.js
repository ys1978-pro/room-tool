const fetch = require('node-fetch');
exports.handler = async function(event, context) {
  const keyword = (event.queryStringParameters && event.queryStringParameters.keyword) || '美容液';
  const APP_ID = '335c3f9c-6e96-4226-9471-4766fec2d117';
  const ACCESS_KEY = 'pk_thp8WuFagFNOQh9VnsoWHJ8mAQhhRsHt4NWvW4wUA4q';

  const url = 'https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20220601'
    + '?format=json'
    + '&keyword=' + encodeURIComponent(keyword)
    + '&genreId=555086'
    + '&applicationId=' + APP_ID
    + '&accessKey=' + ACCESS_KEY
    + '&hits=8'
    + '&sort=-reviewCount';

  try {
    const res = await fetch(url);
    const data = await res.json();
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message }),
    };
  }
};
