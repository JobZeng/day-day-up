function IsLoad(_url) {
  $.ajax({
    url: _url,
    type: "get",
    success: function () {
      //说明请求的url存在，并且可以访问，下面写连通的代码
      
    },
    err: function () {
      // 不通，跳到404.html
      location.href = 'http://localhost:80/404.html'
      
    },
  });
}
//调用
//  http://demo.finereport.com 替换成你代理地址
IsLoad("http://demo.finereport.com");
