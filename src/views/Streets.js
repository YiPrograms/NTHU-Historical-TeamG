import { React, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import Passage from '../components/sections/Passage';

import Image from '../components/elements/Image';


const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Hero className="illustration-section-01"
        bigTitle={"走訪傳統與現代並存的老風城街區"}
        />
      <Passage title="一、「舊」與「新」" paragraphs={
        ["走進新竹市區，穿梭在各大熱門景點：東門市場、城隍廟、新竹火車站、巨城……往往可以發現新竹是個特別的城市。它不同於台北市的高樓林立，不同於台南市的古色古香，它融合了老建築與新建築的靈魂，可能我們前一秒還在老而不舊的城隍廟參拜，下一秒便又走入一個裝潢新穎精緻的小店參觀，這樣反差鮮明又不矛盾的特色，打造了這個特別的城市，打造了「新」竹。",
         "而當我們實際走訪大同路與中央路的街區時最先注意到的是樓層非常的參差不齊，一眼望過去非常的雜亂，再來是發現每間店面或是住家的騎樓地差異也都很大，有些看得出是老房子了都沒有變過，但也有些格局雖然是舊的，但是裝潢的很新，可以發現是有認真翻新過的。走到大同路後段的時候也有發現一整排看起來就很有年代，完全沒翻新過，連以前招牌都還看的到的兩層式建築跟看起來很華麗的大樓並列，如此強烈反差的組合。",
         "上網搜尋資料也發現新竹市政府近年來積極推動「老屋翻新計畫」，凡是只要屋齡60年以上的老屋，都有機會申請",
            <Image
              style={{maxWidth: "70%", margin: 'auto'}}
              className="has-shadow"
              src="https://i.imgur.com/M26MMMX.jpg"
            />,
          "這樣富有特色的城市引起了我們的興趣，於是我們選定「翻新率」這個主題，並試圖分析新竹街區的翻新程度及原因。"
          ]} />
      <Passage title="二、翻新的定義" paragraphs={
        [<>由於關於翻新資料的全貌實在太龐大與複雜，很可能遇上多次翻新或是翻新狀況不明等等，我們只能針對我們真正關心的課題：新竹街區的翻新比例？下功夫，因此本文所討論的「翻新」定義為：<br></br><b>以觀測者角度可以明顯看出與原建物之差異者。藉此繞過龐雜的問題而直接解決我們的好奇心。</b></>,
        ]} />
      <Passage title="三、分類依據" paragraphs={
        ["對於老屋翻新的研究，我們研究的範圍是中央路及大同路段的建築物，並且以課堂其他學生選定觀察的建築物做為我們分析的主要樣本。分辨老屋的翻新與否，我們首先會從房子的外觀觀察，並辨認它是老屋還是新屋，若我們認定為是最近幾年所蓋的現代建築，便不會將此棟建築納入我們計算翻新率的樣本之中，若是認定他是老屋，且我們可以從外觀明顯分辨說是否有不同於當時建築的風格，則我們會界定他是一棟翻新過的建築，若是一些住宅等因為隱私問題而無法明辨內部景觀的建築，此類建築我們會直接忽略，並不會納入樣本。",
        ]} />
      <Passage title="四、數據分析" paragraphs={
        ["我們以大同路和中央路交會的點為中心，將大同路和中央路個拆成兩個部分，分成右上、右下、左上、左下，以下是我們各部分的翻新率和翻新原因統整，我們將翻新的原因粗略分為為了開店營業而翻新以及為了居住的品質而翻新",
          <h4 style={{marginTop: '80px'}}>右上</h4>,
          <table>
            <tr>
              <td colSpan='2'>建築樣本總數：10</td>
            </tr>
            <tr>
              <td>翻新建築：9</td>
              <td>未翻新建築：1</td>
            </tr>
            <tr>
              <td>為開店翻新：6</td>
              <td>為居住翻新：4</td>
            </tr>
          </table>,
          <div style={{display: 'flex'}}>
          <Image
            style={{flex: '50%', padding: '5px', maxWidth: '50%'}}
            className="has-shadow"
            src="https://i.imgur.com/Upcs5XI.png"/>
          <Image
            style={{flex: '50%', padding: '5px', maxWidth: '50%'}}
            className="has-shadow"
            src="https://i.imgur.com/3ZVEpyZ.png"/>
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
              <td>翻新建築：31</td>
              <td>未翻新建築：0</td>
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