exports.handler = async function(event, context) {
  var keyword = '美容液';
  if (event.queryStringParameters && event.queryStringParameters.keyword) {
    keyword = event.queryStringParameters.keyword;
  }

  var APP_ID = '335c3f9c-6e96-4226-9471-4766fec2d117';
  var ACCESS_KEY = 'pk_thp8WuFagFNOQh9VnsoWHJ8mAQhhRsHt4NWvW4wUA4q';

  var url = 'https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20220601'
    + '?format=json'
    + '&keyword=' + encodeURIComponent(keyword)
    + '&applicationId=' + APP_ID
    + '&accessKey=' + ACCESS_KEY
    + '&hits=8';

  try {
    var res = await fetch(url);
    var text = await res.text();
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: text
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message })
    };
  }
};
