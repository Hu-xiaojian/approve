const http = require('http');
const queryString = require('querystring');
const fs = require('fs');


const addData = () => {
  const data = [...new Array(100)].map((it, ind) => {
    const key = ind + 1;
    return  {
      "id": key,
      "userName": "用户" + key,
      "industry": "行业" + key,
      "productLine": "产品线" + key,
      "taskCreateTime": new Date().getTime()
    }
  });
  fs.writeFileSync('./list.json', JSON.stringify(data));
}
// addData()

const getData = (i, s) => {
  let data = fs.readFileSync('./list.json', 'utf8');
  data = JSON.parse(data);
  const res = data.slice(i >= 2 ? (i - 1) * s : i, i * s);
  return { res, len: data.length };
}

const service = http.createServer((req, res) => {
  const ind = req.url.indexOf('?');
  const _url = req.url.slice(0, ind);
  const params = req.url.slice(ind + 1);
  const { pageIndex, pageSize, userName, industry, productLine, taskCreateTime, id } = queryString.parse(params);
  if (_url === '/api/list') {
    let { res: _data, len } = getData(pageIndex, pageSize);
    let data = _data.filter(it => (it.userName === userName || it.industry === industry || it.productLine === productLine));
    if (!userName && !productLine && !industry && !taskCreateTime) {
      data = _data;
    } else {
      len = data.length;
    }
    res.write(JSON.stringify({
      data: {
        list: data,
        total: len,
        pageIndex,
        pageSize,
      },
      code: 200
    }))
    return res.end();
  } else if (_url === '/api/deleteItem') {
    let data = fs.readFileSync('./list.json', 'utf8');
    data = JSON.parse(data);
    data = data.filter(it => {
      return  parseInt(it.id) !== parseInt(id)
    });
    fs.writeFileSync('./list.json', JSON.stringify(data));
    res.write(JSON.stringify({
      data: true,
      code: 200
    }))
    return res.end();
  }
  res.end('成功')
})
service.listen(8888, () => {
  console.log('8888 端口启动')
})