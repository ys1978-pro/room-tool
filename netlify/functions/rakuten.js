exports.handler = async (event) => {
  const keyword = event.queryStringParameters?.keyword || '美容液';
  const APP_ID = '335c3f9c-6e96-4226-9471-4766fec2d117';

  const url = https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706
    + ?format=json
    + &keyword=${encodeURIComponent(keyword)}
    + &genreId=555086
    + &applicationId=${APP_ID}
    + &hits=8
    + &sort=-reviewCount
    + `&minReviewCount=5`;

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
