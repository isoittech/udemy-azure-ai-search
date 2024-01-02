const { SearchDocumentsClient } = require("./cognitivesearchclient");

(async () => {
  const client = new SearchDocumentsClient();
  const res = await client.searchVector("課題", { top: 3 });
  console.log(JSON.stringify(res.data, null, 2));
})();
