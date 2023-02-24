import { useEffect, useState } from 'react';
import phone from '../assets/main/티피폰.svg';
import GiftHubCategory from '../components/GiftHubCategory';
import {
  GiftRecommend,
  GiftRecommendList,
} from '../components/GiftRecommendList';
import SearchBar from '../components/SearchBar';
import '../css/mainPage.styles.css';
import '../css/styles.css';
import present from '../assets/miri/miri-9.png'
// scroll animation
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from 'react-scroll-motion';
import TIFYphone from '../assets/main/TIFYphone.svg';
import 마음을모아 from '../assets/main/maintitle.svg';
import tifyou from '../assets/main/tifyou.svg';
import cardPreview from '../assets/main/cardPreview.svg';
import alarm from '../assets/main/alarm.gif'

import { NavLink } from 'react-router-dom';
import { Footer } from '../fixture/Footer';
import { width } from '@mui/system';
import axios from 'axios';
import { Height } from '@mui/icons-material';
export function MainPage() {
  let [giftList, setGiftList] = useState<Array<any>>([]);

  // scroll animation
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move());

  useEffect(() => {
    async function fetchdata() {
      const API_URL = 'https://i8e208.p.ssafy.io/api/gifthub/main';//http://localhost:8081/api/gifthub/main
      axios.get(API_URL
        ).then((r) => { 
          let copy:Array<any> = [...r.data];
          setGiftList(copy)
        }).catch((r) => { console.log(r)}
        )}
    fetchdata();
  }, []);

  const propFunction = (x: number) => {
    console.log('부모컴포넌트에서받음', x);
  };
  function getQuery(arg0: string): void {
    throw new Error('Function not implemented.');
  }

  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const TO_TOP_IMG =
    'https://tifyimage.s3.ap-northeast-2.amazonaws.com/31163872-7117-4801-b62a-4d4dffa3097e.png';
  return (
    <div style={{}}>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <div
              className="main-components"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src={phone} className="phone-image" alt="phone image" />
              <div 
                style={{
                  display:"flex",
                }}
              >
                <img  className="moamoa" src={마음을모아} alt="" />
                <video 
                  width={100} height={100} 
                  loop={false} 
                  autoPlay={true}
                  muted={true}
                  style={{
                    position:"inherit"
                  }}
                >
                  <source
                    src="https://user-images.githubusercontent.com/87971876/221073573-7661b1d5-c0aa-4730-a38a-d0c741a8384c.mov" 
                    type='video/ogg'
                  />

                </video>
              </div>
            </div>
            <div className='present'>
              <img src={present} alt="" />
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <div
            className='recommends'
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height:'fit-content',
              width:'100%'
            }}
          >
            {/* <Animator animation={FadeUp}> */}
            <Animator animation={MoveIn(-50, 0)}>
              <GiftRecommend
                giftList={giftList}
                wish=""
                num={Math.random() * (giftList.length - 3)}
              />
            </Animator>
            <Animator animation={MoveIn(0, 200)}>
              <GiftRecommend
                giftList={giftList}
                wish=""
                num={Math.random() * (giftList.length - 3)}
              />
            </Animator>
            <Animator  animation={MoveIn(0, 200)}>
              <NavLink to={'/gifthub'} className="main-navlink">
                <div className='go-gifthub' style={{ fontSize: '30px' }}>
                  {/* GiftHub<span style={{ fontSize: '20px' }}>더보기</span> */}
                </div>
              </NavLink>
            </Animator>

            {/* </Animator> */}
          </div>
        </ScrollPage>
        <ScrollPage>
          <div
            className="messages-con"
            style={{
              width: '100%',
              paddingLeft: '20%',
              paddingRight: '20%',
              height: '1500px',
              // minHeight : '1500px'
            }}
          >
            <div
              className='bubble-con'
              style={{
                alignItems: 'flex-start',
              }}
            >
              <Animator animation={MoveIn(-600, 0)}>
                <div  className="gomin" >이번에는 무슨 선물해야 하지?</div>
              </Animator>
              <Animator animation={MoveIn(-200, 0)}>
                <div className="gomin" >뭘 좋아할 지 모르겠네...” 🙋🏻‍♀️</div>
              </Animator>
            </div>
            <div
            className='bubble-con'
              style={{
                alignItems: 'flex-end',
                
              }}
            >
              <Animator
                
                animation={MoveIn(600, 0)}
              >
                <div className="gomin gomin-right">기프티콘 선물은 이제 그만..</div>
              </Animator>
              <Animator
                
                animation={MoveIn(200, 0)}
              >
                <div className="gomin  gomin-right">내가 갖고싶은걸 어떻게 말하지?</div>
              </Animator>
              <Animator
                
                animation={MoveIn(200, 0)}
                // animation={MoveOut(1000, 0)}
              >
                <div 
                  className="gomin  gomin-right"
                  style={{width:"10em"}}
                >
                  <img className='present-mini' src={present} alt="" />

                </div>
              </Animator>
            </div>
           
          </div>
        </ScrollPage>
        <ScrollPage>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Animator animation={Fade()}>
              
            <div
              className="no-gomin"
              style={{
                fontSize: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <span>TIFY와 함께하세요</span>
              <img src={tifyou} alt="This Is For You" />
            </div>
            </Animator>
          </div>
        </ScrollPage>
  
      </ScrollContainer>
      <div className="to-top">
        <img src={TO_TOP_IMG} onClick={MoveToTop} />
      </div>
    </div>
  );
}

