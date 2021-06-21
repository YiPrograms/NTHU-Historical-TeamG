import { React, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import Passage from '../components/sections/Passage';
import styled from "styled-components";
// import Chart from "react-google-charts";
import ReactApexCharts from 'react-apexcharts'
import Image from '../components/elements/Image';
import ImageGallery from 'react-image-gallery';

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
    border: 1px solid red;
  `;

  const isRenewChartOptions = {
    chart: {
      width: 450,
      type: 'pie',
    },
    labels: ['是', '否', '未知'],
    colors: ['rgb(0, 143, 251)', 'rgb(255, 69, 96)', 'rgb(206, 212, 220)'],
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
    { original: 'https://i.imgur.com/8N17fkK.png' },
    { original: 'https://i.imgur.com/ox8FiHv.png' },
    { original: 'https://i.imgur.com/B8cRl4M.png' },
    { original: 'https://i.imgur.com/jBqjCG8.png' },
    { original: 'https://i.imgur.com/PSXKPdH.png' },
    { original: 'https://i.imgur.com/nRvcTpM.png' },
    { original: 'https://i.imgur.com/4qqMIg4.png' },
    { original: 'https://i.imgur.com/qcmeVE1.png' },
    { original: 'https://i.imgur.com/tz9bNr7.png' },
  ];

  return (
    <>
      <Hero className="illustration-section-01"
        bigTitle={"走訪傳統與現代並存的老風城街區"}
        imgComponent={
          <ImageGallery items={images} showThumbnails={false} autoPlay={true}/>
        }
        />
      <Passage title="一、「舊」與「新」" paragraphs={
        ["走進新竹市區，穿梭在各大熱門景點：東門市場、城隍廟、新竹火車站、巨城……往往可以發現新竹是個特別的城市。它不同於台北市的高樓林立，不同於台南市的古色古香，它融合了老建築與新建築的靈魂，可能我們前一秒還在老而不舊的城隍廟參拜，下一秒便又走入一個裝潢新穎精緻的小店參觀，這樣反差鮮明又不矛盾的特色，打造了這個特別的城市，打造了「新」竹。",
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
      <Passage title="二、翻新的定義" paragraphs={
        [<>由於關於翻新資料的全貌實在太龐大與複雜，很可能遇上多次翻新或是翻新狀況不明等等，我們只能針對我們真正關心的課題：新竹街區的翻新比例？下功夫，因此本文所討論的「翻新」定義為：<br></br><b>以觀測者角度可以明顯看出與原建物之差異者。</b>藉此繞過龐雜的問題而直接解決我們的好奇心。</>,
          "相關翻新定義的範例可以由下方的分類依據查看"
        ]} />
      <Passage title="三、分類依據" paragraphs={
        ["對於老屋翻新的研究，我們研究的範圍是中央路及大同路段的建築物，並且以課堂其他學生選定觀察的建築物做為我們分析的主要樣本。分辨老屋的翻新與否，我們首先會從房子的外觀觀察，並辨認它是老屋還是新屋，若我們認定為是最近幾年所蓋的現代建築，便不會將此棟建築納入我們計算翻新率的樣本之中，若是認定他是老屋，且我們可以從外觀明顯分辨說是否有不同於當時建築的風格，則我們會界定他是一棟翻新過的建築，若是一些住宅等因為隱私問題而無法明辨內部景觀的建築，此類建築我們會直接忽略，並不會納入樣本。",
          <h4>分類依據範例</h4>,
          <h5>（一）翻新開店：</h5>,
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

          <h5>（二）翻新住家：</h5>,
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

          <h5>（三）未翻新：</h5>,
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
      <Passage title="四、數據分析" paragraphs={
        ["我們以大同路和中央路交會的點為中心，將大同路與中央路分成了大同路北區、大同路南區、中央路西區、中央路東區等四個區域，並分別討論其中的翻新率、翻新原因。",
          <h4 style={{marginTop: '80px'}}>（一）大同路北區</h4>,
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


          <h4 style={{marginTop: '80px'}}>（二）大同路南區</h4>,
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
          

          <h4 style={{marginTop: '80px'}}>（一）大同路北區</h4>,
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
                    <h4 style={{marginTop: '80px'}}>（一）大同路北區</h4>,
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



          <h4 style={{marginTop: '80px'}}>右下</h4>,
          <table>
            <tr>
              <td colSpan='3'>建築樣本總數：34</td>
            </tr>
            <tr>
              <td>翻新建築：20</td>
              <td>未翻新建築：12</td>
              <td>無法判斷：2</td>
            </tr>
            <tr>
              <td>為開店翻新：20</td>
              <td>為居住翻新：0</td>
              <td>無法判斷：2</td>
            </tr>
          </table>,
          <div style={{display: 'flex'}}>
          <Image
            style={{flex: '50%', padding: '5px', maxWidth: '50%'}}
            className="has-shadow"
            src="https://i.imgur.com/DCO9ouZ.png"/>
          <Image
            style={{flex: '50%', padding: '5px', maxWidth: '50%'}}
            className="has-shadow"
            src="https://i.imgur.com/HICjNXb.png"/>
          </div>,
                    

          <h4 style={{marginTop: '80px'}}>左下</h4>,
          <table>
            <tr>
              <td colSpan='2'>建築樣本總數：31</td>
            </tr>
            <tr>
              <td >翻新建築：31</td>
              <td>未翻新建築：0</td>
            </tr>
            <tr>
              <td>翻新住家：3</td>
            </tr>
            <tr>
              <td>為開店翻新：31</td>
              <td>為居住翻新：0</td>
            </tr>
          </table>,
          <div style={{display: 'flex'}}>
          <Image
            style={{flex: '50%', padding: '5px', maxWidth: '50%'}}
            className="has-shadow"
            src="https://i.imgur.com/lGy3FAw.png"/>
          <Image
            style={{flex: '50%', padding: '5px', maxWidth: '50%'}}
            className="has-shadow"
            src="https://i.imgur.com/WrgUEw8.png"/>
          </div>,

          <h4 style={{marginTop: '80px'}}>左上</h4>,
          <table>
            <tr>
              <td colSpan='2'>建築樣本總數：19</td>
            </tr>
            <tr>
              <td>翻新建築：15</td>
              <td>未翻新建築：4</td>
            </tr>
            <tr>
              <td>為開店翻新：15</td>
              <td>為居住翻新：0</td>
            </tr>
          </table>,
          <div style={{display: 'flex'}}>
          <Image
            style={{flex: '50%', padding: '5px', maxWidth: '50%'}}
            className="has-shadow"
            src="https://i.imgur.com/ZlOCfVy.png"/>
          <Image
            style={{flex: '50%', padding: '5px', maxWidth: '50%'}}
            className="has-shadow"
            src="https://i.imgur.com/VtrkWFU.png"/>
          </div>,


          <h4 style={{marginTop: '80px'}}>整體</h4>,
          <table>
            <tr>
              <td colSpan='3'>建築樣本總數：94</td>
            </tr>
            <tr>
              <td>翻新建築：75</td>
              <td>未翻新建築：17</td>
              <td>無法判斷：2</td>
            </tr>
            <tr>
              <td>為開店翻新：72</td>
              <td>為居住翻新：14</td>
              <td>無法判斷：2</td>
            </tr>
          </table>,
          <div style={{display: 'flex'}}>
          <Image
            style={{flex: '50%', padding: '5px', maxWidth: '50%'}}
            className="has-shadow"
            src="https://i.imgur.com/6GkJG0a.png"/>
          <Image
            style={{flex: '50%', padding: '5px', maxWidth: '50%'}}
            className="has-shadow"
            src="https://i.imgur.com/4NSTV5p.png"/>
          </div>,

        ]} />
      <Passage title="五、結論" paragraphs={
        ["由於我們的資料來源主要來自於課堂上同學的資料收集，再輔以Google的街景，畢竟疫情影響我們不太能實際到場進行考察。但由於同學們調查的店家大多都是挑選自己有興趣的，而大部分都是屬於外觀相對有點年代特色，但都已經經過新重新開店營業的店家，且Google街景服務有時候畫面又不太夠，只能單憑幾個角度有時候照不到內部真的很難判定，所以其實我們的資料來源本身就不夠全面。再者，畢竟年代也已經相當久遠，或多或少還要繼續使用的房子不太可能不進行翻新，否則無法繼續使用，但翻新程度及翻新的年代每間就很不一樣，有些可能很久以前翻新過所以過了很久看起來也很舊，有些可能只翻新部分層樓，有些卻連地板之類的也打掉重練，我們對於翻新本身的定義有點過於攏統，但由於疫情及時間因素我們只能依照現有的資料及方法完成我們的數據，所以單純從我們分析出來的數據去解讀會和實際情況有些許差異。",
        ]} />
    </>
  );
}

export default Home;