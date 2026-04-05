exports.handler = async function(event, context) {
  var keyword = '美容液';
  if (event.queryStringParameters && event.queryStringParameters.keyword) {
    keyword = event.queryStringParameters.keyword;
  }

  var APP_ID = '335c3f9c-6e96-4226-9471-4766fec2d117';
  var AFFILIATE_ID = '2feb98da.6826c70c.2feb98db.8d4d3431';

  var url = 'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706'
    + '?format=json'
    + '&keyword=' + encodeURIComponent(keyword)
    + '&applicationId=' + APP_ID
    + '&affiliateId=' + AFFILIATE_ID
    + '&hits=8'
    + '&sort=-reviewCount';

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
