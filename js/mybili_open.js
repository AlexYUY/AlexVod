import { _ } from "assets://js/lib/cat.js";
let key = '我的哔哩';
let HOST = 'https://api.bilibili.com';
let siteKey = '';
let siteType = 0;
const PC_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.361";

let cookie = "DedeUserID=2094460628; DedeUserID__ckMd5=94bbeb886d494739;SESSDATA=748dfbc0,1708859730,cbafb*81AooXkPrl53lWbOxRVPVi9b-JpWUMnbJLKHmtFxCakxdnuUEXQ72U8AeQAG9KLJDAlcCAPwAAHAA; bili_jct=29bce39adc58a2472ed92b256b10b72d;"; 

async function request(reqUrl) {
  const res = await req(reqUrl, {
      headers: getMb(),
  });
  return res.content;
}

async function init(cfg) {
  siteKey = cfg.skey;
  siteType = cfg.stype;
  if (cookie.startsWith('http')) cookie = await request(cookie);
  // console.debug('我的哔哩 cookie =====>' + cookie); // js_debug.log
}

async function home(filter) {
  let classes = [{"type_id":"舞蹈","type_name":"舞蹈"},{"type_id":"音乐","type_name":"音乐"},{"type_id":"歌曲","type_name":"歌曲"},{"type_id":"MV4K","type_name":"MV"},{"type_id":"演唱会4K","type_name":"演唱会"},{"type_id":"小姐姐4K","type_name":"小姐姐"},{"type_id":"热门","type_name":"热门"},{"type_id":"白噪音4K","type_name":"白噪音"}];
  let filterObj = {
   
    "舞蹈":[{"key":"tid","name":"分类","value":[{"n":"全部","v":"舞蹈"},{"n":"古典舞","v":"古典舞"},{"n":"芭蕾舞","v":"芭蕾舞"},{"n":"民族舞","v":"民族舞"},{"n":"现代舞","v":"现代舞"},{"n":"踢踏舞","v":"踢踏舞"},{"n":"爵士舞","v":"爵士舞"},{"n":"拉丁舞","v":"拉丁舞"},{"n":"摩登舞","v":"摩登舞"},{"n":"街舞","v":"街舞"},{"n":"广场舞","v":"广场舞"},{"n":"宅舞","v":"宅舞"},{"n":"肚皮舞","v":"肚皮舞"},{"n":"钢管舞","v":"钢管舞"},{"n":"迪斯科","v":"迪斯科"},{"n":"劲舞","v":"热舞劲舞"},{"n":"独舞","v":"独舞"},{"n":"双人舞","v":"双人舞"},{"n":"三人舞","v":"三人舞"},{"n":"群舞","v":"群舞"},{"n":"组舞","v":"组舞"},{"n":"舞剧","v":"舞剧"},{"n":"电影歌舞","v":"电影歌舞"},{"n":"国风舞蹈","v":"国风舞蹈"},{"n":"河卫国风","v":"河南卫视国风"}]},{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
    "歌曲":[{"key":"tid","name":"分类","value":[{"n":"全部","v":"歌曲超清"},{"n":"歌曲合集","v":"经典无损音乐合集"},{"n":"歌曲热榜","v":"2022年歌曲排行榜"},{"n":"香港歌曲","v":"香港歌曲"},{"n":"台湾歌曲","v":"台湾歌曲"},{"n":"内地歌曲","v":"内地歌曲"},{"n":"粤语歌曲","v":"粤语歌曲"},{"n":"闽南歌曲","v":"闽南语歌曲"},{"n":"英文歌曲","v":"英文歌曲"},{"n":"日文歌曲","v":"日文歌曲"},{"n":"印度歌曲","v":"印度歌曲"},{"n":"韩国歌曲","v":"韩国歌曲"},{"n":"小语种歌曲","v":"小语种歌曲"},{"n":"经典老歌","v":"经典老歌"},{"n":"抖音热歌","v":"抖音热歌"},{"n":"网红翻唱","v":"网红翻唱"},{"n":"劲歌","v":"劲歌"},{"n":"慢歌","v":"慢歌"},{"n":"古风","v":"古风歌曲"},{"n":"舞曲","v":"DJ歌曲"},{"n":"欢快歌曲","v":"欢快歌曲"},{"n":"伤感歌曲","v":"伤感歌曲"},{"n":"70年代歌曲","v":"70年代歌曲"},{"n":"80年代歌曲","v":"80年代歌曲"},{"n":"90年代歌曲","v":"90年代歌曲"},{"n":"00年代歌曲","v":"00年代歌曲"},{"n":"10年代歌曲","v":"10年代歌曲"},{"n":"2020年歌曲","v":"2020年歌曲"},{"n":"2021年歌曲","v":"2021年歌曲"},{"n":"2022年歌曲","v":"2022年歌曲"},{"n":"经典儿歌","v":"经典儿歌"},{"n":"大合唱","v":"大合唱"},{"n":"音乐汇","v":"音乐汇"},{"n":"美声歌曲","v":"美声歌曲"},{"n":"通俗歌曲","v":"通俗歌曲"},{"n":"民族歌曲","v":"民族歌曲"}]},{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
    "音乐":[{"key":"tid","name":"分类","value":[{"n":"全部","v":"音乐4K"},{"n":"钢琴","v":"钢琴曲"},{"n":"小提琴","v":"小提音乐"},{"n":"手风琴","v":"手风音乐"},{"n":"二胡","v":"二胡音乐"},{"n":"古筝","v":"古筝音乐"},{"n":"笛子","v":"笛子音乐"},{"n":"琵琶","v":"琵琶音乐"},{"n":"古琴","v":"古琴音乐"},{"n":"编钟","v":"编钟音乐"},{"n":"协奏曲","v":"协奏曲"},{"n":"中国古风音乐","v":"中国古风音乐"},{"n":"背景音乐","v":"背景音乐"},{"n":"助眠音乐","v":"助眠音乐"},{"n":"胎教音乐","v":"胎教音乐"},{"n":"芭蕾舞曲","v":"芭蕾舞曲"},{"n":"拉丁舞曲","v":"拉丁舞曲"},{"n":"爵士舞曲","v":"爵士舞曲"},{"n":"摩登舞曲","v":"摩登舞曲"},{"n":"DJ舞曲","v":"DJ舞曲"}]},{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
    "MV4K":[{"key":"tid","name":"分类","value":[{"n":"全部","v":"MV4K"},{"n":"A阿杜","v":"阿杜MV4K"},{"n":"A阿黛尔","v":"阿黛尔MV4K"},{"n":"BBeyond","v":"BeyondMV4K"},{"n":"BBy2","v":"By2MV4K"},{"n":"BBIGBANG","v":"BIGBANGMV4K"},{"n":"B布兰妮","v":"布兰妮MV4K"},{"n":"C陈奕迅","v":"陈奕迅MV4K"},{"n":"C蔡依林","v":"蔡依林MV4K"},{"n":"C初音未来","v":"初音未来MV4K"},{"n":"C蔡健雅","v":"蔡健雅MV4K"},{"n":"C陈小春","v":"陈小春MV4K"},{"n":"C草蜢","v":"草蜢MV4K"},{"n":"C陈慧娴","v":"陈慧娴MV4K"},{"n":"C崔健","v":"崔健MV4K"},{"n":"C仓木麻衣","v":"仓木麻衣MV4K"},{"n":"D戴荃","v":"戴荃MV4K"},{"n":"D动力火车","v":"动力火车MV4K"},{"n":"D邓丽君","v":"邓丽君MV4K"},{"n":"D丁当","v":"丁当MV4K"},{"n":"D刀郎","v":"刀郎MV4K"},{"n":"D邓紫棋","v":"邓紫棋MV4K"},{"n":"D戴佩妮","v":"戴佩妮MV4K"},{"n":"D邓丽君","v":"邓丽君MV4K"},{"n":"F飞儿乐队","v":"飞儿乐队MV4K"},{"n":"F费玉清","v":"费玉清MV4K"},{"n":"F费翔","v":"费翔MV4K"},{"n":"F方大同","v":"方大同MV4K"},{"n":"F房东的猫","v":"房东的猫MV4K"},{"n":"F凤飞飞","v":"凤飞飞MV4K"},{"n":"F凤凰传奇","v":"凤凰传奇MV4K"},{"n":"G古风歌曲","v":"古风歌曲4K"},{"n":"G国乐大典","v":"国乐大典4K"},{"n":"G郭采洁","v":"郭采洁MV4K"},{"n":"G光良","v":"光良MV4K"},{"n":"G郭静","v":"郭静MV4K"},{"n":"G郭富城","v":"郭富城MV4K"},{"n":"H胡彦斌","v":"胡彦斌MV4K"},{"n":"H胡夏","v":"胡夏MV4K"},{"n":"H韩红","v":"韩红MV4K"},{"n":"H黄品源","v":"黄品源MV4K"},{"n":"H黄小琥","v":"黄小琥MV4K"},{"n":"H花儿乐队","v":"花儿乐队MV4K"},{"n":"H黄家强","v":"黄家强MV4K"},{"n":"H后街男孩","v":"后街男孩MV4K"},{"n":"J经典老歌","v":"经典老歌4K"},{"n":"J贾斯丁比伯","v":"贾斯丁比伯MV4K"},{"n":"J金池","v":"金池MV4K"},{"n":"J金志文","v":"金志文MV4K"},{"n":"J焦迈奇","v":"焦迈奇MV4K"},{"n":"K筷子兄弟","v":"筷子兄弟MV4K"},{"n":"L李玟","v":"李玟MV4K"},{"n":"L林忆莲","v":"林忆莲MV4K"},{"n":"L李克勤","v":"李克勤MV4K"},{"n":"L刘宪华","v":"刘宪华MV4K"},{"n":"L李圣杰","v":"李圣杰MV4K"},{"n":"L林宥嘉","v":"林宥嘉MV4K"},{"n":"L梁静茹","v":"梁静茹MV4K"},{"n":"L李健","v":"李健MV4K"},{"n":"L林俊杰","v":"林俊杰MV4K"},{"n":"L李玉刚","v":"李玉刚MV4K"},{"n":"L林志炫","v":"林志炫MV4K"},{"n":"L李荣浩","v":"李荣浩MV4K"},{"n":"L李宇春","v":"李宇春MV4K"},{"n":"L洛天依","v":"洛天依MV4K"},{"n":"L林子祥","v":"林子祥MV4K"},{"n":"L李宗盛","v":"李宗盛MV4K"},{"n":"L黎明","v":"黎明MV4K"},{"n":"L刘德华","v":"刘德华MV4K"},{"n":"L罗大佑","v":"罗大佑MV4K"},{"n":"L林肯公园","v":"林肯公园MV4K"},{"n":"LLadyGaga","v":"LadyGagaMV4K"},{"n":"L旅行团乐队","v":"旅行团乐队MV4K"},{"n":"M莫文蔚","v":"莫文蔚MV4K"},{"n":"M毛不易","v":"毛不易MV4K"},{"n":"M梅艳芳","v":"梅艳芳MV4K"},{"n":"M迈克尔杰克逊","v":"迈克尔杰克逊MV4K"},{"n":"N南拳妈妈","v":"南拳妈妈MV4K"},{"n":"P朴树","v":"朴树MV4K"},{"n":"Q齐秦","v":"齐秦MV4K"},{"n":"Q青鸟飞鱼","v":"青鸟飞鱼MV4K"},{"n":"R容祖儿","v":"容祖儿MV4K"},{"n":"R热歌","v":"热歌MV4K"},{"n":"R任贤齐","v":"任贤齐MV4K"},{"n":"S水木年华","v":"水木年华MV4K"},{"n":"S孙燕姿","v":"孙燕姿MV4K"},{"n":"S苏打绿","v":"苏打绿MV4K"},{"n":"SSHE","v":"SHEMV4K"},{"n":"S孙楠","v":"孙楠MV4K"},{"n":"T陶喆","v":"陶喆MV4K"},{"n":"T谭咏麟","v":"谭咏麟MV4K"},{"n":"T田馥甄","v":"田馥甄MV4K"},{"n":"T谭维维","v":"谭维维MV4K"},{"n":"T逃跑计划","v":"逃跑计划MV4K"},{"n":"T田震","v":"田震MV4K"},{"n":"T谭晶","v":"谭晶MV4K"},{"n":"T屠洪刚","v":"屠洪刚MV4K"},{"n":"T泰勒·斯威夫特","v":"泰勒·斯威夫特MV4K"},{"n":"W王力宏","v":"王力宏MV4K"},{"n":"W王杰","v":"王杰MV4K"},{"n":"W吴克群","v":"吴克群MV4K"},{"n":"W王心凌","v":"王心凌MV4K"},{"n":"W汪峰","v":"汪峰MV4K"},{"n":"W伍佰","v":"伍佰MV4K"},{"n":"W王菲","v":"王菲MV4K"},{"n":"W五月天","v":"五月天MV4K"},{"n":"W汪苏泷","v":"汪苏泷MV4K"},{"n":"X徐佳莹","v":"徐佳莹MV4K"},{"n":"X弦子","v":"弦子MV4K"},{"n":"X萧亚轩","v":"萧亚轩MV4K"},{"n":"X许巍","v":"许巍MV4K"},{"n":"X薛之谦","v":"薛之谦MV4K"},{"n":"X许嵩","v":"许嵩MV4K"},{"n":"X小虎队","v":"小虎队MV4K"},{"n":"X萧敬腾","v":"萧敬腾MV4K"},{"n":"X谢霆锋","v":"谢霆锋MV4K"},{"n":"X徐小凤","v":"徐小凤MV4K"},{"n":"X信乐队","v":"信乐队MV4K"},{"n":"Y夜愿乐队","v":"夜愿乐队MV4K"},{"n":"Y原创音乐","v":"原创音乐MV4K"},{"n":"Y羽泉","v":"羽泉MV4K"},{"n":"Y粤语","v":"粤语MV4K"},{"n":"Y郁可唯","v":"郁可唯MV4K"},{"n":"Y叶倩文","v":"叶倩文MV4K"},{"n":"Y杨坤","v":"杨坤MV4K"},{"n":"Y庾澄庆","v":"庾澄庆MV4K"},{"n":"Y尤长靖","v":"尤长靖MV4K"},{"n":"Y易烊千玺","v":"易烊千玺MV4K"},{"n":"Y袁娅维","v":"袁娅维MV4K"},{"n":"Y杨丞琳","v":"杨丞琳MV4K"},{"n":"Y杨千嬅","v":"杨千嬅MV4K"},{"n":"Y杨宗纬","v":"杨宗纬MV4K"},{"n":"Z周杰伦","v":"周杰伦MV4K"},{"n":"Z张学友","v":"张学友MV4K"},{"n":"Z张信哲","v":"张信哲MV4K"},{"n":"Z张宇","v":"张宇MV4K"},{"n":"Z周华健","v":"周华健MV4K"},{"n":"Z张韶涵","v":"张韶涵MV4K"},{"n":"Z周深","v":"周深MV4K"},{"n":"Z纵贯线","v":"纵贯线MV4K"},{"n":"Z赵雷","v":"赵雷MV4K"},{"n":"Z周传雄","v":"周传雄MV4K"},{"n":"Z张国荣","v":"张国荣MV4K"},{"n":"Z周慧敏","v":"周慧敏MV4K"},{"n":"Z张惠妹","v":"张惠妹MV4K"},{"n":"Z周笔畅","v":"周笔畅MV4K"},{"n":"Z郑中基","v":"郑中基MV4K"},{"n":"Z张艺兴","v":"张艺兴MV4K"},{"n":"Z张震岳","v":"张震岳MV4K"},{"n":"Z中国好声音","v":"中国好声音MV4K"},{"n":"Z张雨生","v":"张雨生MV4K"},{"n":"Z郑智化","v":"郑智化MV4K"},{"n":"Z卓依婷","v":"卓依婷MV4K"},{"n":"Z中岛美雪","v":"中岛美雪MV4K"}]},{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
    "演唱会4K":[{"key":"tid","name":"分类","value":[{"n":"全部","v":"演唱会4K"},{"n":"A阿杜","v":"阿杜演唱会4K"},{"n":"A阿黛尔","v":"阿黛尔演唱会4K"},{"n":"BBeyond","v":"Beyond演唱会4K"},{"n":"BBy2","v":"By2演唱会4K"},{"n":"BBIGBANG","v":"BIGBANG演唱会4K"},{"n":"B布兰妮","v":"布兰妮演唱会4K"},{"n":"B坂井泉水","v":"坂井泉水演唱会4K"},{"n":"C陈奕迅","v":"陈奕迅演唱会4K"},{"n":"C蔡依林","v":"蔡依林演唱会4K"},{"n":"C初音未来","v":"初音未来演唱会4K"},{"n":"C蔡健雅","v":"蔡健雅演唱会4K"},{"n":"C陈小春","v":"陈小春演唱会4K"},{"n":"C草蜢","v":"草蜢演唱会4K"},{"n":"C陈慧娴","v":"陈慧娴演唱会4K"},{"n":"C崔健","v":"崔健演唱会4K"},{"n":"C仓木麻衣","v":"仓木麻衣演唱会4K"},{"n":"D戴荃","v":"戴荃演唱会4K"},{"n":"D动力火车","v":"动力火车演唱会4K"},{"n":"D邓丽君","v":"邓丽君演唱会4K"},{"n":"D丁当","v":"丁当演唱会4K"},{"n":"D刀郎","v":"刀郎演唱会4K"},{"n":"D邓紫棋","v":"邓紫棋演唱会4K"},{"n":"D戴佩妮","v":"戴佩妮演唱会4K"},{"n":"D邓丽君","v":"邓丽君演唱会4K"},{"n":"F飞儿乐队","v":"飞儿乐队演唱会4K"},{"n":"F费玉清","v":"费玉清演唱会4K"},{"n":"F费翔","v":"费翔演唱会4K"},{"n":"F方大同","v":"方大同演唱会4K"},{"n":"F房东的猫","v":"房东的猫演唱会4K"},{"n":"F凤飞飞","v":"凤飞飞演唱会4K"},{"n":"F凤凰传奇","v":"凤凰传奇演唱会4K"},{"n":"G郭采洁","v":"郭采洁演唱会4K"},{"n":"G光良","v":"光良演唱会4K"},{"n":"G郭静","v":"郭静演唱会4K"},{"n":"G郭富城","v":"郭富城演唱会4K"},{"n":"H胡彦斌","v":"胡彦斌演唱会4K"},{"n":"H胡夏","v":"胡夏演唱会4K"},{"n":"H韩红","v":"韩红演唱会4K"},{"n":"H黄品源","v":"黄品源演唱会4K"},{"n":"H黄小琥","v":"黄小琥演唱会4K"},{"n":"H花儿乐队","v":"花儿乐队演唱会4K"},{"n":"H黄家强","v":"黄家强演唱会4K"},{"n":"H后街男孩","v":"后街男孩演唱会4K"},{"n":"J经典老歌","v":"经典老歌演唱会4K"},{"n":"J贾斯丁比伯","v":"贾斯丁比伯演唱会4K"},{"n":"J金池","v":"金池演唱会4K"},{"n":"J金志文","v":"金志文演唱会4K"},{"n":"J焦迈奇","v":"焦迈奇演唱会4K"},{"n":"K筷子兄弟","v":"筷子兄弟演唱会4K"},{"n":"L李玟","v":"李玟演唱会4K"},{"n":"L林忆莲","v":"林忆莲演唱会4K"},{"n":"L李克勤","v":"李克勤演唱会4K"},{"n":"L刘宪华","v":"刘宪华演唱会4K"},{"n":"L李圣杰","v":"李圣杰演唱会4K"},{"n":"L林宥嘉","v":"林宥嘉演唱会4K"},{"n":"L梁静茹","v":"梁静茹演唱会4K"},{"n":"L李健","v":"李健演唱会4K"},{"n":"L林俊杰","v":"林俊杰演唱会4K"},{"n":"L李玉刚","v":"李玉刚演唱会4K"},{"n":"L林志炫","v":"林志炫演唱会4K"},{"n":"L李荣浩","v":"李荣浩演唱会4K"},{"n":"L李宇春","v":"李宇春演唱会4K"},{"n":"L洛天依","v":"洛天依演唱会4K"},{"n":"L林子祥","v":"林子祥演唱会4K"},{"n":"L李宗盛","v":"李宗盛演唱会4K"},{"n":"L黎明","v":"黎明演唱会4K"},{"n":"L刘德华","v":"刘德华演唱会4K"},{"n":"L罗大佑","v":"罗大佑演唱会4K"},{"n":"L林肯公园","v":"林肯公园演唱会4K"},{"n":"LLadyGaga","v":"LadyGaga演唱会4K"},{"n":"L旅行团乐队","v":"旅行团乐队演唱会4K"},{"n":"M莫文蔚","v":"莫文蔚演唱会4K"},{"n":"M毛不易","v":"毛不易演唱会4K"},{"n":"M梅艳芳","v":"梅艳芳演唱会4K"},{"n":"M迈克尔杰克逊","v":"迈克尔杰克逊演唱会4K"},{"n":"N南拳妈妈","v":"南拳妈妈演唱会4K"},{"n":"P朴树","v":"朴树演唱会4K"},{"n":"Q齐秦","v":"齐秦演唱会4K"},{"n":"Q青鸟飞鱼","v":"青鸟飞鱼演唱会4K"},{"n":"R容祖儿","v":"容祖儿演唱会4K"},{"n":"R任贤齐","v":"任贤齐演唱会4K"},{"n":"S水木年华","v":"水木年华演唱会4K"},{"n":"S孙燕姿","v":"孙燕姿演唱会4K"},{"n":"S苏打绿","v":"苏打绿演唱会4K"},{"n":"SSHE","v":"SHE演唱会4K"},{"n":"S孙楠","v":"孙楠演唱会4K"},{"n":"T陶喆","v":"陶喆演唱会4K"},{"n":"T谭咏麟","v":"谭咏麟演唱会4K"},{"n":"T田馥甄","v":"田馥甄演唱会4K"},{"n":"T谭维维","v":"谭维维演唱会4K"},{"n":"T逃跑计划","v":"逃跑计划演唱会4K"},{"n":"T田震","v":"田震演唱会4K"},{"n":"T谭晶","v":"谭晶演唱会4K"},{"n":"T屠洪刚","v":"屠洪刚演唱会4K"},{"n":"T泰勒·斯威夫特","v":"泰勒·斯威夫特演唱会4K"},{"n":"W王力宏","v":"王力宏演唱会4K"},{"n":"W王杰","v":"王杰演唱会4K"},{"n":"W吴克群","v":"吴克群演唱会4K"},{"n":"W王心凌","v":"王心凌演唱会4K"},{"n":"W汪峰","v":"汪峰演唱会4K"},{"n":"W伍佰","v":"伍佰演唱会4K"},{"n":"W王菲","v":"王菲演唱会4K"},{"n":"W五月天","v":"五月天演唱会4K"},{"n":"W汪苏泷","v":"汪苏泷演唱会4K"},{"n":"X徐佳莹","v":"徐佳莹演唱会4K"},{"n":"X弦子","v":"弦子演唱会4K"},{"n":"X萧亚轩","v":"萧亚轩演唱会4K"},{"n":"X许巍","v":"许巍演唱会4K"},{"n":"X薛之谦","v":"薛之谦演唱会4K"},{"n":"X许嵩","v":"许嵩演唱会4K"},{"n":"X小虎队","v":"小虎队演唱会4K"},{"n":"X萧敬腾","v":"萧敬腾演唱会4K"},{"n":"X谢霆锋","v":"谢霆锋演唱会4K"},{"n":"X徐小凤","v":"徐小凤演唱会4K"},{"n":"X信乐队","v":"信乐队演唱会4K"},{"n":"Y夜愿乐队","v":"夜愿乐队演唱会4K"},{"n":"Y羽泉","v":"羽泉演唱会4K"},{"n":"Y郁可唯","v":"郁可唯演唱会4K"},{"n":"Y叶倩文","v":"叶倩文演唱会4K"},{"n":"Y杨坤","v":"杨坤演唱会4K"},{"n":"Y庾澄庆","v":"庾澄庆演唱会4K"},{"n":"Y尤长靖","v":"尤长靖演唱会4K"},{"n":"Y易烊千玺","v":"易烊千玺演唱会4K"},{"n":"Y袁娅维","v":"袁娅维演唱会4K"},{"n":"Y杨丞琳","v":"杨丞琳演唱会4K"},{"n":"Y杨千嬅","v":"杨千嬅演唱会4K"},{"n":"Y杨宗纬","v":"杨宗纬演唱会4K"},{"n":"Z周杰伦","v":"周杰伦演唱会4K"},{"n":"Z张学友","v":"张学友演唱会4K"},{"n":"Z张信哲","v":"张信哲演唱会4K"},{"n":"Z张宇","v":"张宇演唱会4K"},{"n":"Z周华健","v":"周华健演唱会4K"},{"n":"Z张韶涵","v":"张韶涵演唱会4K"},{"n":"Z周深","v":"周深演唱会4K"},{"n":"Z纵贯线","v":"纵贯线演唱会4K"},{"n":"Z赵雷","v":"赵雷演唱会4K"},{"n":"Z周传雄","v":"周传雄演唱会4K"},{"n":"Z张国荣","v":"张国荣演唱会4K"},{"n":"Z周慧敏","v":"周慧敏演唱会4K"},{"n":"Z张惠妹","v":"张惠妹演唱会4K"},{"n":"Z周笔畅","v":"周笔畅演唱会4K"},{"n":"Z郑中基","v":"郑中基演唱会4K"},{"n":"Z张艺兴","v":"张艺兴演唱会4K"},{"n":"Z张震岳","v":"张震岳演唱会4K"},{"n":"Z张雨生","v":"张雨生演唱会4K"},{"n":"Z郑智化","v":"郑智化演唱会4K"},{"n":"Z卓依婷","v":"卓依婷演唱会4K"},{"n":"Z中岛美雪","v":"中岛美雪演唱会4K"}]},{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],  
    "小姐姐4K":[{"key":"tid","name":"分类","value":[{"n":"全部","v":"小姐姐4K"},{"n":"比基尼","v":"比基尼美女4K"},{"n":"内衣","v":"内衣模特4K"},{"n":"车模","v":"美女车模4K"},{"n":"健身","v":"美女健身4K"},{"n":"翻唱","v":"美女翻唱4K"},{"n":"舞蹈","v":"美女舞蹈4K"},{"n":"美妆","v":"美女美妆4K"},{"n":"Cos","v":"美女Cos4K"},{"n":"户外","v":"美女户外4K"},{"n":"居家","v":"美女居家4K"},{"n":"自习","v":"自习小姐姐4K"},{"n":"职场","v":"职场美女4K"},{"n":"工地","v":"工地美女4K"},{"n":"安静","v":"安静小姐姐4K"},{"n":"活泼","v":"活泼小姐姐4K"}]},{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
    "热门":[{"key":"tid","name":"分类","value":[{"n":"全部","v":"热门"},{"n":"刀郎","v":"刀郎"},{"n":"罗刹海市","v":"罗刹海市"},{"n":"狂飙","v":"狂飙"},{"n":"淄博烧烤","v":"淄博烧烤"},{"n":"原神","v":"原神"},{"n":"漫长的季节","v":"漫长的季节"},{"n":"AI","v":"AI"},{"n":"俄乌","v":"俄乌"},{"n":"ChatGPT","v":"ChatGPT"},{"n":"重启人生","v":"重启人生"},{"n":"棋手战鹰","v":"棋手战鹰"},{"n":"中国奇谭","v":"中国奇谭"},{"n":"三体","v":"三体"},{"n":"刘慈欣","v":"刘慈欣"},{"n":"鬼吹灯","v":"鬼吹灯"},{"n":"天下霸唱","v":"天下霸唱"}]},{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
   "白噪音4K":[{"key":"tid","name":"分类","value":[{"n":"全部","v":"白噪音4K"},{"n":"窗白噪音","v":"窗白噪音4K"},{"n":"环境白噪音","v":"环境白噪音4K"},{"n":"自然白噪音","v":"自然白噪音4K"},{"n":"助眠白噪音","v":"助眠白噪音4K"}]},{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}]
  };
  return JSON.stringify({
      class: classes,
      filters: filterObj,
  });
}

async function homeVod() {
  let html = HOST + '/x/web-interface/popular?ps=20';
  let data = JSON.parse(await request(html)).data.list;
  let videos = [];
  data.forEach(function(it) {
      videos.push({
          vod_id: it.aid,
          vod_name: stripHtmlTag(it.title),
          vod_pic: it.pic,
          vod_remarks: '🔥 ' + it.vt_display || '',
      });
  });
  return JSON.stringify({
      list: videos,
  });
}

async function category(tid, pg, filter, extend) {
  let html = HOST + '/x/web-interface/search/type?search_type=video&page=' + pg + '&keyword=' + (extend.tid || tid) + '&duration=' + (extend.duration || '') + '&order=' + (extend.order || '');
  let data = JSON.parse(await request(html)).data;
  let videos = [];
  data.result.forEach(function(it) {
      videos.push({
          vod_id: it.aid,
          vod_name: stripHtmlTag(it.title),
          vod_pic: 'https:' + it.pic,
          vod_remarks: turnDHM(it.duration) || '',
      });
  });
  return JSON.stringify({
      page: parseInt(data.page),
      pagecount: data.numPages,
      limit: 20,
      total: data.numResults,
      list: videos,
  });
}

async function detail(id) {
  let data = JSON.parse(await request(HOST + '/x/web-interface/view?aid=' + id)).data;
  let vod = {
      vod_id: data.aid,
      vod_name: stripHtmlTag(data.title),
      vod_pic: data.pic,
      type_name: data.tname,
      vod_year: new Date(data.pubdate*1000).getFullYear(),
      vod_remarks: data.duration || '',
      vod_director: data.owner.name,
      vod_content: stripHtmlTag(data.desc),
  };
  let episodes = data.pages;
  let playurls = [];
  episodes.forEach(function(it) {
    let cid = it.cid;
    let part = it.part.replace('#', '﹟').replace('$', '﹩');
    playurls.push(
        part + '$' + data.aid + '_' + cid
    )
  });
  let playUrl = playurls.join('#');
  vod.vod_play_from = '道长在线';
  vod.vod_play_url = playUrl;
  return JSON.stringify({
    list: [vod],
  });
}

async function play(flag, id, flags) {
  let ids = id.split('_');
  let html = HOST + '/x/player/playurl?avid=' + ids[0] + '&cid=' + ids[1] + '&qn=116';
  let data = JSON.parse(await request(html)).data.durl;
  let maxSize = -1;
  let position = -1;
  data.forEach(function(it, i) {
      if (maxSize < Number(it.size)) {
          maxSize = Number(it.size);
          position = i
      }
  });
  let purl = '';
  if (data.length > 0) {
    if (position === -1) {
        position = 0
    }
    purl = data[position].url
  }
  // console.debug('我的哔哩 purl =====>' + purl); // js_debug.log
  return JSON.stringify({
    parse: 0,
    url: purl,
    header: getMb(),
  });
}

async function search(wd, quick, pg) {
  if (pg <= 0 || typeof(pg) == 'undefined') pg = 1;
  let html = HOST + '/x/web-interface/search/type?search_type=video&keyword=' + wd + '&page=' + pg;
  let data = JSON.parse(await request(html)).data;
  let videos = [];
  data.result.forEach(function(it) {
    videos.push({
        vod_id: it.aid,
        vod_name: stripHtmlTag(it.title),
        vod_pic: 'https:' + it.pic,
        vod_remarks: turnDHM(it.duration) || '',
    });
  });
  return JSON.stringify({
      page: parseInt(data.page),
      pagecount: data.numPages,
      limit: 20,
      total: data.numResults,
      list: videos,
  });
}

function getHeader(cookie) {
  let header = {};
  header['cookie'] = cookie;
  header['User-Agent'] = PC_UA;
  header['Referer'] = 'https://www.bilibili.com';
  return header;
}

function getMb() {
  return getHeader(cookie);
}

function stripHtmlTag(src) {
  return src
      .replace(/<\/?[^>]+(>|$)/g, '')
      .replace(/&.{1,5};/g, '')
      .replace(/\s{2,}/g, ' ');
}

function turnDHM(duration) {
  let min = duration.split(':')[0];
  let sec = duration.split(':')[1];
  if (min == 0) {
      return sec + '秒';
  } else if (0 < min && min < 60) {
      return min + '分';
  } else if (60 <= min && min < 1440) {
      if (min % 60 == 0) {
          let h = min / 60;
          return h + '小时';
      } else {
          let h = min / 60;
          h = (h + '').split('.')[0];
          let m = min % 60;
          return h + '小时' + m + '分';
      }
  } else if (min >= 1440) {
      let d = min / 60 / 24;
      d = (d + '').split('.')[0];
      let h = min / 60 % 24;
      h = (h + '').split('.')[0];
      let m = min % 60;
      let dhm = '';
      if (d > 0) {
          dhm = d + '天'
      }
      if (h >= 1) {
          dhm = dhm + h + '小时'
      }
      if (m > 0) {
          dhm = dhm + m + '分'
      }
      return dhm;
  }
  return null;
}

export function __jsEvalReturn() {
  return {
      init: init,
      home: home,
      homeVod: homeVod,
      category: category,
      detail: detail,
      play: play,
      search: search,
  };
}