var keyList = ["53328f3f91ecf752a50eacd2853473766234634e0d29ce157dd416df", "8355101613c9848d941992940ae62443599538f0baff6361ec263667", "fb271985d70493b7aac593d416e883624a5e8eef68c72bd3b92d0f22"];
var keyListIndex = Math.floor((Math.random()*3)+1);
var userInfo = JSON.parse(xhr.get("https://api.ipdata.co/?api-key="+keyList[keyListIndex]));
function DNSkey(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
userInfo.dnsServer = JSON.parse(xhr.get("https://"+randomString(32, '0123456789abcdefghijklmnopqrstuvwxyz')+".edns.ip-api.com/json")).dns;
