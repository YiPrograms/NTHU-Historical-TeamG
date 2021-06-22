import { React, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import Hero from '../components/sections/Hero';
import ImageHero from '../components/sections/ImageHero'
import Passage from '../components/sections/Passage';
import styled from "styled-components";
// import Chart from "react-google-charts";
import ReactApexCharts from 'react-apexcharts'
import Image from '../components/elements/Image';

import Fade from 'react-reveal/Fade';

import { Tree, TreeNode } from 'react-organizational-chart';



const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const StyledNode = styled.div`
    padding: 5px;
    border-radius: 8px;
    display: inline-block;
    background: #BAD7F2;
    box-shadow: 0 12px 12px rgb(21 23 25 / 64%);
  `;

  const isRenewChartOptions = {
    chart: {
      width: 450,
      type: 'pie',
    },
    labels: ['是', '否'],
    colors: ['rgb(0, 143, 251)', 'rgb(255, 69, 96)'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }],
    legend: {
      fontSize: '16px'
    },
    title: {
      text: "是否翻新",
      style: {
        fontSize: '20px'
      }
    }
  }

  const renewReasonChartOptions = {
    chart: {
      width: 450,
      type: 'pie',
    },
    labels: ['開店', '住家'],
    colors: ['rgb(254, 176, 25)', 'rgb(119, 93, 208)'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }],
    legend: {
      fontSize: '16px'
    },
    title: {
      text: "翻新原因",
      style: {
        fontSize: '20px'
      }
    }
  }

  const images = [
    'https://i.imgur.com/8N17fkK.png',
    'https://i.imgur.com/ox8FiHv.png',
    'https://i.imgur.com/B8cRl4M.png',
    'https://i.imgur.com/jBqjCG8.png',
    'https://i.imgur.com/PSXKPdH.png',
    'https://i.imgur.com/nRvcTpM.png',
    'https://i.imgur.com/4qqMIg4.png',
    'https://i.imgur.com/qcmeVE1.png',
    'https://i.imgur.com/tz9bNr7.png',
  ].sort(() => Math.random() - 0.5);

  return (
    <>
      <ImageHero
        info="TRIP-LIFE 旅攝生活．熊本一家，https://www.leeleelin.com/2010/04/blog-post_2608.html     JUST A BALCONY，http://justabalcony.blogspot.com/2019/04/just-old_15.html,http://justabalcony.blogspot.com/2019/04/just-old_17.html"
        images={images}
        centerComponent={<Fade left><h1>走訪傳統與現代並存的老風城街區</h1></Fade>}
      />
      <Passage title="一、「舊」與「新」" color={['#B0F2B4', 'black']} paragraphs={
        [<div style={{display: 'flex'}}>
          <Image
            style={{flex: '50%', marign: '5px', maxWidth: '50%', alignSelf: 'center', marginRight: 10}}
            className="has-shadow"
            src="https://i.imgur.com/s9LcmG4.png"
            info="臺灣舊照片資料庫，https://dl.lib.ntu.edu.tw/s/photo/item/95198#?c=&m=&s=&cv=&xywh=-36%2C112%2C1290%2C685" />
          <Image
            style={{flex: '50%', marign: '5px', maxWidth: '50%', alignSelf: 'center'}}
            className="has-shadow"
            src="https://i.imgur.com/qQScYJm.jpg"
            info="維基百科，https://zh.wikipedia.org/wiki/%E6%96%B0%E7%AB%B9%E5%B8%82%E6%94%BF%E5%BA%9C" />
         </div>,
         "走進新竹市區，穿梭在各大熱門景點：東門市場、城隍廟、新竹火車站、巨城……往往可以發現新竹是個特別的城市。它不同於台北市的高樓林立，不同於台南市的古色古香，它融合了老建築與新建築的靈魂，可能我們前一秒還在老而不舊的城隍廟參拜，下一秒便又走入一個裝潢新穎精緻的小店參觀，這樣反差鮮明又不矛盾的特色，打造了這個特別的城市，打造了「新」竹。",
         "而當我們實際走訪大同路與中央路的街區時最先注意到的是樓層非常的參差不齊，一眼望過去非常的雜亂，再來是發現每間店面或是住家的騎樓地差異也都很大，有些看得出是老房子了都沒有變過，但也有些格局雖然是舊的，但是裝潢的很新，可以發現是有認真翻新過的。走到大同路後段的時候也有發現一整排看起來就很有年代，完全沒翻新過，連以前招牌都還看的到的兩層式建築跟看起來很華麗的大樓並列，如此強烈反差的組合。",
         "上網搜尋資料也發現新竹市政府近年來積極推動「老屋翻新計畫」，凡是只要屋齡60年以上的老屋，都有機會申請",
            <Image
              style={{maxWidth: "70%", margin: 'auto'}}
              className="has-shadow"
              src="https://i.imgur.com/M26MMMX.jpg"
              info="聯合新聞網，https://udn.com/news/story/7324/5459533，擷取日期：2021年6月21日"
            />,
          "這樣富有特色的城市引起了我們的興趣，於是我們選定「翻新率」這個主題，並試圖分析新竹街區的翻新程度及原因。"
          ]} />
      <Passage title="二、翻新的定義" color={['#F2E2BA', 'black']} paragraphs={
        [<>由於關於翻新資料的全貌實在太龐大與複雜，很可能遇上多次翻新或是翻新狀況不明等等，我們只能針對我們真正關心的課題：新竹街區的翻新比例？下功夫，因此本文所討論的「翻新」定義為：<br></br><b>以觀測者角度可以明顯看出與原建物之差異者。</b>藉此繞過龐雜的問題而直接解決我們的好奇心。</>,
          "相關翻新定義的範例可以由下方的分類依據查看"
        ]} />
      <Passage title="三、分類依據" color={['#C490D1', 'black']} paragraphs={
        ["對於老屋翻新的研究，我們研究的範圍是中央路及大同路段的建築物，並且以課堂其他學生選定觀察的建築物做為我們分析的主要樣本。分辨老屋的翻新與否，我們首先會從房子的外觀觀察，並辨認它是老屋還是新屋，若我們認定為是最近幾年所蓋的現代建築，便不會將此棟建築納入我們計算翻新率的樣本之中，若是認定他是老屋，且我們可以從外觀明顯分辨說是否有不同於當時建築的風格，則我們會界定他是一棟翻新過的建築，若是一些住宅等因為隱私問題而無法明辨內部景觀的建築，此類建築我們會直接忽略，並不會納入樣本。",
          <h4 style={{color: 'black'}}>分類依據範例</h4>,
          <h5 style={{color: 'black'}}>（一）翻新開店：</h5>,
          <div style={{display: 'flex'}}>
            <Image
              style={{flex: '50%', marign: '5px', maxWidth: '50%', marginRight: 10}}
              className="has-shadow"
              src="https://i.imgur.com/v4Svlj9.png"
              info="孫梓云自攝，日期：2021年5月6日" />
            <Image
              style={{flex: '50%', marign: '5px', maxWidth: '50%'}}
              className="has-shadow"
              src="https://i.imgur.com/Xu69WLT.jpg"
              info="宋硯之自攝，日期：2021年5月6日" />
          </div>,
          "可以發現除了一樓店面之外上面完全沒有翻新，且一樓與樓上的風格迥異，所以我們推測其為為了開店而翻新的房屋。",

          <h5 style={{color: 'black'}}>（二）翻新住家：</h5>,
          <div style={{display: 'flex'}}>
            <Image
              style={{flex: '50%', marign: '5px', maxWidth: '50%', marginRight: 10}}
              className="has-shadow"
              src="https://i.imgur.com/uQekFsl.png"
              info="謝耀霆自攝，日期：2021年5月6日" />
            <Image
              style={{flex: '50%', marign: '5px', maxWidth: '50%'}}
              className="has-shadow"
              src="https://i.imgur.com/Y1ujdbc.jpg"
              info="謝耀霆自攝，日期：2021年5月6日" />
          </div>,
          "此類分類依據是雖然一樓店面整體雖然老舊，但仍能看出它有翻新過部分建材，例如玻璃門面，鐵窗。且一樓以上區域也有翻新，翻新風格十分統一，故推測翻新除了店面以外，更多是為了居住而翻新。",

          <h5 style={{color: 'black'}}>（三）未翻新：</h5>,
          <div style={{display: 'flex'}}>
            <Image
              style={{flex: '50%', marign: '5px', maxWidth: '50%', marginRight: 10}}
              className="has-shadow"
              src="https://i.imgur.com/mge2Nto.png"
              info="彭靖雯自攝，日期：2021年5月6日" />
            <Image
              style={{flex: '50%', marign: '5px', maxWidth: '50%'}}
              className="has-shadow"
              src="https://i.imgur.com/rh1lk4E.jpg"
              info="彭靖雯自攝，日期：2021年5月6日" />
          </div>,
          "此類分類依據是藉由觀察整體，發現建物、裝潢基本上都有很長年代的洗禮了，整體風格也很統一，推測應該從來沒有認真翻新過。",
        ]} />

      <Passage title="四、數據分析" color={['#BAF2E9', 'black']} paragraphs={
        ["我們以大同路和中央路交會的點為中心，將大同路與中央路分成了大同路北區、大同路南區、中央路西區、中央路東區等四個區域，並分別討論其中的翻新率、翻新原因。",
          <h4 style={{marginTop: '80px', color: 'black'}}>（一）大同路北區</h4>,
          <Image
            className="has-shadow"
            src="https://i.imgur.com/4NkHcnF.png"
            info="QGIS製圖，紫色為翻新，紅色為未翻新" />,
          <Tree
            lineWidth={'2px'}
            lineColor={'green'}
            lineBorderRadius={'10px'}
            label={<StyledNode>總取樣數：19</StyledNode>}
          >
            <TreeNode label={<StyledNode>翻新數量：15</StyledNode>}>
              <TreeNode label={<StyledNode>翻新開店：15</StyledNode>} />
              <TreeNode label={<StyledNode>翻新住家：0</StyledNode>} />
            </TreeNode>
            <TreeNode label={<StyledNode>未翻新數量：4</StyledNode>}>
            </TreeNode>
          </Tree>,
          <div style={{display: 'flex'}}>
            <ReactApexCharts
              style={{flex: '50%', marign: '5px', maxWidth: '50%', marginRight: 10}}
              options={isRenewChartOptions}
              series={[15, 4]} type="pie" width={450}
            />
            <ReactApexCharts
              style={{flex: '50%', marign: '5px', maxWidth: '50%'}}
              options={renewReasonChartOptions}
              series={[15, 0]} type="pie" width={450}
            />
          </div>,
          "根據資料與實際走訪比較，發現雖然大同路北區這段路比較長，老房子乍看之下也比其他條多，本來認為可能翻新比例不高，但仍有近八成的房子是有經過翻修的，而這八成全部都是為了開店而翻修。而沒有翻修過的房子，主要集中在大同路與中央路的交會點，顯示可能離中心點越遠的地方，越是相對新穎。",

          <h4 style={{marginTop: '80px', color: 'black'}}>（二）大同路南區</h4>,
          <Image
            className="has-shadow"
            src="https://i.imgur.com/OO3kHSg.png"
            info="QGIS製圖，紫色為翻新，紅色為未翻新" />,
          <Tree
            lineWidth={'2px'}
            lineColor={'green'}
            lineBorderRadius={'10px'}
            label={<StyledNode>總取樣數：32</StyledNode>}
          >
            <TreeNode label={<StyledNode>翻新數量：20</StyledNode>}>
              <TreeNode label={<StyledNode>翻新開店：20</StyledNode>} />
              <TreeNode label={<StyledNode>翻新住家：0</StyledNode>} />
            </TreeNode>
            <TreeNode label={<StyledNode>未翻新數量：12</StyledNode>}>
            </TreeNode>
          </Tree>,
          <div style={{display: 'flex'}}>
            <ReactApexCharts
              style={{flex: '50%', marign: '5px', maxWidth: '50%', marginRight: 10}}
              options={isRenewChartOptions}
              series={[20, 12]} type="pie" width={450}
            />
            <ReactApexCharts
              style={{flex: '50%', marign: '5px', maxWidth: '50%'}}
              options={renewReasonChartOptions}
              series={[20, 0]} type="pie" width={450}
            />
          </div>,
          "根據資料顯示，大同路南區的未翻新比例最高，在總計三十四間的調查終有近三分之一的房屋為未翻新的，推測可能與鄰近東門市場有關。當初這一帶是從東門市場開始繁榮興盛，所以大同路南區較早發展，而附近店家一直以來擁有較好的商業地理位置，即使外觀不更新也仍有許多客人，於是有較多當初建造的樣貌保持至今。而翻新的房屋也可以發現是百分百為了開店而建造的。",
          
          
          <h4 style={{marginTop: '80px', color: 'black'}}>（三）中央路西區</h4>,
          <Image
            className="has-shadow"
            src="https://i.imgur.com/6y7FBfM.png"
            info="QGIS製圖，紫色為翻新，紅色為未翻新" />,
          <Tree
            lineWidth={'2px'}
            lineColor={'green'}
            lineBorderRadius={'10px'}
            label={<StyledNode>總取樣數：24</StyledNode>}
          >
            <TreeNode label={<StyledNode>翻新數量：24</StyledNode>}>
              <TreeNode label={<StyledNode>翻新開店：24</StyledNode>} />
              <TreeNode label={<StyledNode>翻新住家：0</StyledNode>} />
            </TreeNode>
            <TreeNode label={<StyledNode>未翻新數量：0</StyledNode>}>
            </TreeNode>
          </Tree>,
          <div style={{display: 'flex'}}>
            <ReactApexCharts
              style={{flex: '50%', marign: '5px', maxWidth: '50%', marginRight: 10}}
              options={isRenewChartOptions}
              series={[24, 0]} type="pie" width={450}
            />
            <ReactApexCharts
              style={{flex: '50%', marign: '5px', maxWidth: '50%'}}
              options={renewReasonChartOptions}
              series={[24, 0]} type="pie" width={450}
            />
          </div>,
          "根據資料顯示，可以發現中央路西區有著100%的翻新率，雖然翻新程度不一，有的是完全重建，有的是翻新但仍保留建築最原始的外觀，但基本上沒有沒經歷過翻新的房屋，而翻新的也全都是拿來做開店用途的。推測可能是因為中央路西區連接了城隍廟與東門市場，而且又是小巷，有著大量的觀光客與本地遊客。為了吸引他們進入店內，所以紛紛翻新自己的外觀，才會有如此高的翻新率。",

          <h4 style={{marginTop: '80px', color: 'black'}}>（四）中央路東區</h4>,
          <Image
            className="has-shadow"
            src="https://i.imgur.com/zkSmPKz.png"
            info="QGIS製圖，紫色為翻新，紅色為未翻新" />,
          <Tree
            lineWidth={'2px'}
            lineColor={'green'}
            lineBorderRadius={'10px'}
            label={<StyledNode>總取樣數：11</StyledNode>}
          >
            <TreeNode label={<StyledNode>翻新數量：10</StyledNode>}>
              <TreeNode label={<StyledNode>翻新開店：7</StyledNode>} />
              <TreeNode label={<StyledNode>翻新住家：3</StyledNode>} />
            </TreeNode>
            <TreeNode label={<StyledNode>未翻新數量：1</StyledNode>}>
            </TreeNode>
          </Tree>,
          <div style={{display: 'flex'}}>
            <ReactApexCharts
              style={{flex: '50%', marign: '5px', maxWidth: '50%', marginRight: 10}}
              options={isRenewChartOptions}
              series={[10, 1]} type="pie" width={450}
            />
            <ReactApexCharts
              style={{flex: '50%', marign: '5px', maxWidth: '50%'}}
              options={renewReasonChartOptions}
              series={[7, 3]} type="pie" width={450}
            />
          </div>,
          "與中央路西區相似，中央路東區也有著相對高的翻新率，箇中原因除了樣本數較少外，也有可能因為它是連接了市政府到東門市場、城隍廟的路。值得一提的是，它也是本次調查之中唯一有因為住家翻新的例子，在十間翻新之中，有三間是因為住而翻新的。",

          <h4 style={{marginTop: '80px', color: 'black'}}>（五）全區</h4>,
          <Image
            className="has-shadow"
            src="https://i.imgur.com/HlRUI4d.png"
            info="QGIS製圖，紫色為翻新，紅色為未翻新" />,
          <Tree
            lineWidth={'2px'}
            lineColor={'green'}
            lineBorderRadius={'10px'}
            label={<StyledNode>總取樣數：86</StyledNode>}
          >
            <TreeNode label={<StyledNode>翻新數量：69</StyledNode>}>
              <TreeNode label={<StyledNode>翻新開店：66</StyledNode>} />
              <TreeNode label={<StyledNode>翻新住家：3</StyledNode>} />
            </TreeNode>
            <TreeNode label={<StyledNode>未翻新數量：17</StyledNode>}>
            </TreeNode>
          </Tree>,
          <div style={{display: 'flex'}}>
            <ReactApexCharts
              style={{flex: '50%', marign: '5px', maxWidth: '50%', marginRight: 10}}
              options={isRenewChartOptions}
              series={[69, 17]} type="pie" width={450}
            />
            <ReactApexCharts
              style={{flex: '50%', marign: '5px', maxWidth: '50%'}}
              options={renewReasonChartOptions}
              series={[66, 3]} type="pie" width={450}
            />
          </div>,
          "此次調查之中，總計調查了八十八間，有著近八成的翻新率，這個翻新率是比在調查之前我們的想像都來的高的。而細看分布的話，可以發現未翻新的都集中在中心到中心點南方的地方，整體翻新程度比較顯然是大同路以南最低。",

        ]} />
      <Passage title="五、結語與反思" color={['#B0F2B4', 'black']} paragraphs={
        ["由於受到疫情影響，我們的資料來源只能依靠課堂上同學的資料蒐集，再輔以 Google 街景去進行分析。而大家紀錄時都是挑選自己有興趣、特殊的房屋，這之中絕大部分都是外觀相對有點年代特色，但都已經經過新重新開店營業的店家，Google 街景服務有時候畫面又不太夠，只能單憑幾個角度有時候照不到內部真的很難判定。再者，畢竟年代也已經相當久遠，或多或少還要繼續使用的房子不太可能不進行翻新，否則無法繼續使用，但翻新程度及翻新的年代每間就很不一樣，有些可能很久以前翻新過所以過了很久看起來也很舊，有些可能只翻新部分層樓，有些卻連地板之類的也打掉重練，我們對於翻新本身的定義有點過於籠統。但由於疫情及時間因素我們只能依照現有的資料及方法完成我們的數據，所以單純從我們分析出來的數據去解讀會和實際情況有些許差異。",
         "綜觀整體，我們算是最初步的完成了我們的目標「新竹老城區的翻新率調查」。透過調查，我們更深刻的瞭解了這兩條街的歷史脈絡，不僅僅是看到數據面呈現出來的「翻新率」，我們看到更多的是新竹這個城市的故事。每間店面、住家，在它的裝潢與建築上總默默訴說著關於它的故事。當然，肯定還有更多更多的是我們所沒能看到的故事正等待著大家去探索、記憶。 ",
         <iframe src="https://www.google.com/maps/embed?pb=!4v1624334782937!6m8!1m7!1s23VlMG2UuAwgRW_lVOlTwQ!2m2!1d24.80529429658264!2d120.9682056620333!3f52.19373442060898!4f1.8113539491107247!5f0.7820865974627469" width="600" height="450" style={{border:0, margin: 'auto', display: 'block'}} allowfullscreen="" loading="lazy"></iframe>
        ]} />
    </>
  );
}

export default Home;