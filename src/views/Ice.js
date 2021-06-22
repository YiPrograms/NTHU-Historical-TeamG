import { React, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// import Hero from '../components/sections/Hero';
import Passage from '../components/sections/Passage';
import Image from '../components/elements/Image';
import ImageHero from '../components/sections/ImageHero'

import Fade from 'react-reveal/Fade';


import tatung_img from '../assets/images/tatung.png';
import ice_map from '../assets/images/ice_map.png';
import ice_history_1 from '../assets/images/ice_history_1.jpg';
import ice_history_2 from '../assets/images/ice_history_2.jpg';
import ice_history_3 from '../assets/images/ice_history_3.jpg';
import ice_history_4 from '../assets/images/ice_history_4.jpg';
import ice_history_5 from '../assets/images/ice_history_5.jpg';


const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const tatung = <Image
    className="has-shadow"
    src={tatung_img}
    alt="大同冰店合照"
    width={896}
    height={504} info="自攝，日期：2021年5月6日"/>

  const images = [
    "https://i.imgur.com/bOSu0Ap.png",
    "https://i.imgur.com/DHzVMRv.png",
    "https://i.imgur.com/vXLZG9p.png",
  ]

  return (
    <>
      {/* <Hero className="illustration-section-01"
        bigTitle={"消暑救星－冰店的歷史"}
        imgComponent={tatung}
        modalUrl="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14486.818182971065!2d120.9681072!3d24.8055686!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x41d8b4faf2fd00bf!2zODE05Yaw5qOS5aSn5ZCM5Yaw5bqX!5e0!3m2!1szh-TW!2stw!4v1623316154516!5m2!1szh-TW!2stw"
        hasModal
        /> */}

      <ImageHero
        info="自攝，日期：2021年5月6日、鏡週刊，https://today.line.me/tw/v2/article/LZrvKr"
        images={images}
        centerComponent={<Fade left><h1>消暑救星－冰店的歷史</h1></Fade>}
      />
      <Passage title="一、「二之日鑿冰沖沖，三之日納於凌陰。」" color={["#E94F37", "white"]} paragraphs={
        ["每到炎夏，最消暑的食物莫過於冰棒、刨冰、冰淇淋等冰製品了。就算不諳寒性食物的人，至少也會喝杯加了冰塊的冷飲。吃冰是夏天的消暑良方，即使在中國古代也亦然。",
          "在中國古人使用冰塊消暑的歷史相當早，在先秦詩經 《七月》中有云：「二之日鑿冰沖沖，三之日納於凌陰。」此時就已經提到了冰塊的使用。古人將冬天結的冰藏納於冰窖中，待夏日炎熱使用，因此又稱「藏冰」。而朝廷甚至有專門管理藏冰事的官吏，叫「凌人」。冰品管理乃是宮中要事，甚至是一種貴重品。明清時，皇帝還會依照品級賜冰給首都的公務員，從入伏日一直持續到立秋，首都北平的各衙署官員們，依照品級持有冰票，到相關部門領取皇帝頒賜的冰塊。",        
          "然而，食用冰塊消暑也不完全是官員貴族的特權。",
          "在唐朝就開始出現「冰商」，民間也會以白糖與香料製作刨冰販賣。所用的冰塊都是前一年冬天冰窖收藏的，在夏季取出，用刨子刀具刨削出冰屑，再拌以白糖和香料供人食用。這就是所謂的刀削冰，也就是我們現在常吃的「剉冰」之前身。",
          <Image className="has-shadow"
            src="https://i.imgur.com/fLX0OAp.png"
            style={{margin: "auto"}}
            info="圖〈吃枝仔冰〉，取自國家文化資料庫。http://newnrch.digital.ntu.edu.tw/nrch/query.php?keyword=%E5%86%B0%E6%A3%92，擷取日期：2021年6月21日"/>
        ]} />
      <Passage title="二、尋覓新竹城裡的冰店足跡" color={["#3F88C5", "white"]} paragraphs={
        ["一講到新竹市，我們第一個想到的可能不是冰品產業，但如果我們實際去 打開網路地圖，我們還是會發現新竹各式各樣的冰品，從比較傳統的芋圓冰、 剉冰、米苔目黑糖冰、水果冰，或者 814 大同冰店所賣的枝仔冰，到比較近代 的抹茶雪花冰、綿綿冰，甚至做成冰淇淋霜淇淋。我們幾乎可以看到各個時期 出現過的冰品，而且每一家店都有自己的特色，從冰品項目，店內裝潢，經營 方式(外帶貨內用)，每一家店都有各自的愛好者，並吸引不同需求的客群。",
          <Image
            className="has-shadow"
            src={ice_map}
            info="QGIS製圖，日期：2021年5月25日"/>,
          "打開網路地圖我們可以發現冰店主要分布在城隍廟附近、南寮漁港，各大學附近及新竹園區附近則是都有零星兩三家。可以看出冰店會密集出現在人流多的市區，人口密集假日休閒時可能就會出來買冰；海邊或景點區，海邊玩耍曬曬太陽或者走行程累了便會吃冰消暑休息；冰店也會出現在學生或者上班族多的地方，這兩種族群偶爾突然想到就會出來吃個冰解解心頭之悶。從冰店出現的分布，我們可以看出哪些區域對於冰品的需求量較大，也可以推測出不同種人吃冰的理由", 
          "在同一個地區內(舉 814 大同冰店所在的城隍廟附近為例)，會發現冰店雖多，但其實冰品款式很多樣化，同質性沒有這麼高，也有其他消暑甜品店或者冰跟飲料的複合店存在，每一家特色各異再加上地區民眾消暑的需求量大，是為什麼這些店可以林立且並存在同一個區域的原因，也反映出新竹市豐富的冰品文化。"
        ]} />
      <Passage title="三、「814」--來自空軍菸廠的枝仔冰" color={["#B5DFCA", "black"]} paragraphs={
        ["8月14號即為空軍節，而這間814大同冰店的前身就是空軍的菸廠福利社。空軍於民國39年在新竹設立了空軍菸廠，政府於民國53年發布《臺灣省內菸酒專賣暫行條例》，菸酒成為政府專賣，導致空軍菸廠無法繼續製煙，幾十個員工被迫失業，副廠長集合了員工，利用管道取得美援的奶粉、砂糖等原物料，在菸廠福利社製冰、賣冰。菸廠關閉後大家就利用在空軍菸廠福利社學到的製冰技術，出來到台灣各地開設814冰店。蘇老板的父親就是當時菸廠福利社的僱員，於民國58年出來開設冰店，因為開設在大同路上，因此叫做814大同冰店。",
          <Image
            className="has-shadow"
            src="https://i.imgur.com/vXLZG9p.png"
            info="(814大同冰店老闆)蘇文祥的父親蘇添泉（後排左）與妻子林玉釵（後排右）育有4子1女，夫妻倆夏天做冰、冬天賣麵，力拚養家，截自鏡週刊，https://today.line.me/tw/v2/article/LZrvKr" />
        ]} />
      <Passage title="四、克紹箕裘 - 蘇大哥的賣冰談"  color={["#D4D6B9", "black"]} paragraphs={
        [<h4 style={{marginTop: '80px', color: "black"}}>（一）冰店歷史</h4>,
        "將時間推回五、六十年前，當時的第一代老闆（也就是蘇大哥的父親）還只是個菸廠的僱員，連正式員工都不是，而當時上班薪水微薄，難以負荷較高的開支。所幸當時菸廠副廠長提議集合大家年終獎金成立一個冰棒生產部當副業，讓大家找到能夠維持生計的方法。後來，菸廠面臨解散，原本的冰棒生產部員工便轉副為正，紛紛出來成立了許許多多的「814冰店」。",      
        "在那個時代，冰的種類選擇並不多，頂多就是清冰（糖水加剉冰）或是清冰再加上色素與化學香料，讓冰吃起來有水果的風味。從菸廠出來的冰店們就利用人脈，將當時不常見的奶粉從美國進口並製成冰棒，並佐以一些常見的配料形成最初的幾種口味（舉凡牛奶、紅豆、綠豆……等），以這樣的創新開啟台灣冰品的新篇章。",
        "第一代老闆自然也是如此，買下一個店面經營，夏天販賣冰棒，冬天也會賣麵，減緩冰棒淡季的衝擊。而蘇大哥就在這樣的環境下長大，於是自國中畢業之後，便也在家裡幫忙，這一幫，便幫了四十年。",
        "四十年說長不長，說短不短，不夠長到完善一個人生，不夠短到記住每個瞬間。我們只能藉由主題式的訪談，與蘇大哥一起回憶這四十年來的種種，我們問道：「這四十年來店裡有甚麼差異嗎？」蘇大哥回答：「口味方面當然經典的紅豆、綠豆、牛奶……還是保存著呀，但我們還有很多新的口味，像是我女兒喜歡抹茶，所以做過抹茶冰棒；我太太天天喝咖啡，也做過咖啡冰棒……其他還有很多像是黑糖、仙草、木瓜、芭樂也都有嘗試過，但會考量保存方面的問題，像是芭樂冰棒要香的話要用很熟的芭樂做，但很熟的芭樂發酵很快呀，保存就沒那麼簡單。」；「講到保存以前冰都是清冰加香料、色素不容易壞，可以放半年，現在加了很多別的東西呀，沒辦法保存那麼久了。」；「作法方面只有調整甜度而已啦，但四十年來一直調整調整，調到最後也跟原本差很多了。以前的冰都是夾子泡在水裡這樣拔，現在都是用機器做了。」；「我們店冰棒形狀還有刻意保持以前的樣式啦，雖然有出很多新的，像是圓的或甚麼的，但我們就是刻意跟傳統一樣。」。",
        <div style={{display: 'flex'}}>
          <Image
            style={{flex: '50%', marign: '5px', maxWidth: '50%', alignSelf: 'center', marginRight: 10}}
            className="has-shadow"
            src={ice_history_1}
            width={448}
            height={252}
            info="自攝，日期：2021年5月6日" />
          <Image
            style={{flex: '50%', marign: '5px', maxWidth: '50%', alignSelf: 'center'}}
            className="has-shadow"
            src={ice_history_2}
            width={448}
            height={252} 
            info="自攝，日期：2021年5月6日" />
        </div>,
        "五年前，蘇大哥因為家庭因素選擇了離開主掌經營三十餘年的老家，出來自立門戶，也就是我們所採訪的「814大同冰店」。除了屋子本身已經有六十年歷史外，整修裝潢設計全都自己來，闆娘也與我們分享他的設計理念：由她所喜愛的白色、米色為主，配上原木色的桌子、椅子，就是簡單的簡約北歐風。希望能藉由乾乾淨淨的外觀與冰棒相映襯，給客人一種明亮爽朗的感受。就像蘇大哥一樣，整個訪談中可以發現大哥是念舊的人，喜歡保留傳統的元素，但仍給人明亮爽朗的感受，不會因為傳統而死氣沉沉。",
        <h4 style={{marginTop: '80px', color: "black"}}>二）冰店特色</h4>,
        "身為新竹老字號枝仔冰專賣店，蘇大哥仍是堅持以傳統的方式製作冰棒。店裡的古早味傳統冰棒以每支14元販賣，而冰棒的口感，是介於雪糕跟清冰冰棒之間，用料實在，不易融化，且較樸實耐吃，不同於時下的冰品過於甜膩，此外其冰棒保有一定的硬度，吃起來十分清爽。而冰棒口味則是分成紅豆、綠豆、芋頭、花生、百香果、酸梅、鳳梨、牛奶、抹茶、拿鐵咖啡共十種，其中紅豆與綠豆口味便是五十年前就有的傳統口味，且可吃到真材實料的食材。至於後面的抹茶與嚴選咖啡豆手沖製作的拿鐵咖啡則是近年來推出的新口味。抹茶口味的出現是因為814大同冰店蘇大哥的女兒極度熱愛抹茶；拿鐵咖啡這個口味則是因老闆娘喜愛喝咖啡才出現的。",
        <div style={{display: 'flex'}}>
          <Image
            style={{flex: '50%', margin: '5px', maxWidth: '48%', alignSelf: 'center', marginRight: 10}}
            className="has-shadow"
            src={ice_history_3}
            info="自攝，日期：2021年5月6日" />
          <Image
            style={{flex: '50%', marign: '5px', maxWidth: '48%', alignSelf: 'center'}}
            className="has-shadow"
            src={ice_history_4}
            info="自攝，日期：2021年5月6日" />
        </div>,
          <p style={{flex: '70%', padding: '5px'}}>
            <img align='right'
            style={{flex: '30%', margin: '15px', height: 'auto'}}
            className="has-shadow"
            src={ice_history_5}
            width={252}/>
            除此之外，蘇大哥為了刻意保存冰棒最原始的樣貌，因此還是維持與過去一樣四方型的造型去販售。而在製造方面特別的是，因製造的過程中是在冰棒還是液體的狀態去手工插入圓形竹棍，而竹棍就會自然傾斜，久而久之，冰棒上斜插的竹棍，就成為814冰棒的招牌特色之一。而814大同冰店的冰棒在販賣方面還有個特色是冰棒皆以裸裝的方式出售，沒有獨立的包裝。另一個特色是店家除了門市販賣外，還有架設獨立的網站平台可以提供網路下訂與冷凍車宅配的服務。
          </p>
          
        ]} />
      <Passage title="五、後記"  color={["#90BEDE", "black"]} paragraphs={
        ["經過這次的訪談我們可以發現其實這家814大同冰店有很深的歷史淵源。從最一開始的菸酒福利社、經過政府實施的菸酒專賣之後被迫解散，原本的員工之一，也就是蘇大哥的父親，出來開創冰店，再傳給兒子持續營業至今。過程中經過時間的淬鍊改變了許多事，從老舊的徒手拉冰棒的機器變成全新自動化量產的機器;口味從最一開始只有紅豆、綠豆、牛奶等簡單的幾種，多了拿鐵、抹茶這些近些年才出現在日常的飲品;店面也從一開始的手拉推車，便成了經過翻新的這家位於大同路上的814大同冰店。其中可能是向現實妥協做出了改變、可能是為了追逐科技的腳步，可能是為了迎合市場的口味......冰店不斷地發生改變，成為了現在的這家814大同冰店。而時間默默地見證這一切，並將其寫入歷史....... ",
        <Image
            className="has-shadow"
            src="https://i.imgur.com/DHzVMRv.png"
            info="自攝，日期：2021年5月6日" />,
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.704546207873!2d120.9659185149608!3d24.805568584079783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346835c1a62aab55%3A0x41d8b4faf2fd00bf!2zODE05Yaw5qOS5aSn5ZCM5Yaw5bqX!5e0!3m2!1szh-TW!2stw!4v1624350947970!5m2!1szh-TW!2stw" width="600" height="450" style={{border:0, margin: 'auto', display: 'block'}} allowfullscreen="" loading="lazy"></iframe>
        ]} />
    </>
  );
}

export default Home;