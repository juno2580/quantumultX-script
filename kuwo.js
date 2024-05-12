/****************************
#!name = 酷我音乐
#!desc = 〔 酷我音乐&酷我畅听 〕全功能破解
#!author = 影子
#!openUrl = https://napi.ltd
#!homepage = https://napi.ltd
#!icon = https://file.napi.ltd/Static/Image/KuWo.png
#!date = 2024-05-12

[Rule]
USER-AGENT,KWPlayer*,PROXY
HOST-SUFFIX,kuwo.cn,PROXY

[Script]
http-response ^(?!.*img).*?kuwo\.cn(/vip|/openapi)?(/enc|/audi.tion|/v[\d]/(user/vip\?(vers|apiVersion|platform|op\=ui|_t)|theme\?op=gd|sysinfo\?op=getRePayAndDoPayBoxNew|api(/pay)?/((user/personal/)?user/info|payInfo/kwplayer/payMiniBar|advert/(myPage|iListen|album))|album/(adBar|myRec/vipMusic))|/kuwopay/vip-tab/setting|/(audioApi/)?a\.p($|\?op\=getvip|.*?ptype\=vip)|/mobi\.s\?f\=kwxs|/music\.pay\?newver\=3$|/(EcomResource|(Mobile)?Ad)Serv(er|ice)) script-path=https://napi.ltd/script/Worker/KuWo.js, requires-body=true, timeout=60, tag=酷我音乐, img-url=https://file.napi.ltd/Static/Image/KuWo.png

[Mitm]
hostname = *.kuwo.cn
****************************/
const YZ_0x3074=['WRlcNbLHWPjmmxCx','Ev3cRJ0=','eSoUsc9m','fWddJ8k3WRuRjW==','bCo+FCk7kmkSDCkE','W4ZcLSoCWQSRWOVdHW==','WOHqW6LDW5u=','W6CFW7u2W5ldIG==','WOf8qSof','WPfEW5jCW5C=','ANxcNmoFWRi=','DMeuW6S/c1HdWRpcV10nrYCV','aKZcU3GCwca=','l8kpW6lcImk2','W5RcPbRdKSkfW6VcGmkdWOVdQq==','bWRdM8kI','CSkQWQuBhW==','W6BdTCkSWPNdLq==','W7VdRZf5','afmbdqb6','sHpdLSkRW7S+CcHSWRCgjmkAW5tcUW==','W5SVW7acW5W=','rvpcI8o9WQODeW==','W4vFa8oiCd91yvC=','a1JcRCk5','W4RcPsZdG3qlW6S=','mSkgEmk8eq==','WQFcK8oVaWm=','cqRdMmkxWRe+j2TiWQ0gl8kwWPpcPW==','WPq7W4byW57cUmk+W5RcLIe=','cqRdNSk/WRaPnMy=','W4afpSoRWR3dMWThWQpdONZdPxe=','W6eCW6BdKMtdSq==','sv3cVI8v','l8kYW7xcG8kfWOW=','W4TkWQC=','sxdcKg9ahKpdRa==','W6CkW6hdVM3dQq==','pZzUWPaJ','sH7dRSo8iq93zNONp09onmoB','aqpdU2y=','h8kBW6/cMa==','W73dOsfH','W5TEWPJdOJaM','WP9qW4HlW5RcVmoKW4lcNMOuW6y=','icjbWQGmqvy=','W4aelCo/WRddMWThWQpdONZdPxe=','xhdcNJe=','WP4+W4nnW6S=','aeuGaGy=','W7tdPszZzJ7cIa==','WQldJwdcNXxdRG==','vf/cJ8o0WOikhq8=','hKefW7iUd8kBva==','hxiSW4i3','WODzh8oC','wMRcKwq=','W6eXW5q0W7m=','WQWLW57cIG==','WRrMhSoOWR8=','jSoeW48wW5HNW47dVCknW5W=','iwaJW58Flq==','wgzkt1BcRCow','WP46W4DFW7BcU8kV','W7hdV8kLWPZdJ8ktfmoe','c8o+EmkM','WPT3smoeW7BdH8kX','hX10u8o+lMPTydakv28Mxq==','W5qhWOJdUNC=','wMdcLeP9','W6SsW6ldVhm=','q8knWQeT','bmkexCkEpa==','W6vuWPpdUq==','h8krW7JcLmkK','W47cRZBdLgenW79uomklxW==','jCoRzSkMdq==','WQhcHGvI','WRVcNSoonZK=','ptDuWQO4uf8=','oZXSWRuY','WRDeW7/dV8o1','mCoBW7vOW7hdPgybWQi+W5G=','WOpcVmodnHS=','aKybfG==','W4ZcSX3dHSkc','WQxdP8oaW4NcUa==','wbDWySoz','WO9AW5jjW57cVG==','W4ddOrDjyq==','wSojWPiYWRy=','W7OOWRddUKq=','WQJcOqXLWQi=','W5NcRXFdHx8=','W6VdP8oDhw8=','l8kYW7u=','vbD1rq==','s3hcLgLmpNtdSCkEoG==','WR1EhSoxW4qDoq==','WPrudSoMWOmAlW==','WP9iW4i=','g17cNgu=','kZnqWQC=','W7hdUdRdKCo+','55sy5zoj5PYs5yM255wR5BYL5A6x5O6K5l6r','fSkmW63cIa==','BITWDrpcGSkoW5lcHSoLaHP7W5K7','fWtdNmk+','W7FdVCoZWRZdJ8ktfmkkcCkComk3WPrVWPO=','W6hdQGVdOCo+W69xiMddHG==','h17cIG==','uvNcKCo+WRG=','WQGQW4G=','zSooWQyOWPO=','W5GoWOqfWOVdOSkNW5JdMYTtWRhcKmkp','W6u
