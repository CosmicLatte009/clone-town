import { useEffect } from 'react';
import styles from './VisitSection.module.scss';

const { kakao } = window;

const VisitSection = () => {
  useEffect(() => {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.507458884243306, 126.96620545979884), // 지도의 중심좌표
        level: 8, // 지도의 확대 레벨
      };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 마커를 표시할 위치와 title 객체 배열입니다
    var positions = [
      {
        title: '본사',
        latlng: new kakao.maps.LatLng(37.52437866056385, 127.03735433992914),
        content:
          '<div style="border: none; background: white; box-shadow: 1px 1px 8px rgba(0,0,0,0.15); border-radius: 5px; padding:9px; top: -110px; width: 185px">' +
          '<p style=" text-align: center; font-weight: bold; color: #666666; font-size: 1.5rem">본사 | 소프트랩스</p>' +
          '<a href="https://map.kakao.com/link/map/소프트랩스본사,37.52437866056385,127.03735433992914" style="font-weight: bold; color:#dc6868; font-size: 1.4rem; text-align: center; margin-left: 5px" target="_blank"><i class="fas fa-map"></i> 큰지도보기</a> ' +
          '<a href="https://map.kakao.com/link/to/소프트랩스본사,37.52437866056385,127.03735433992914" style="font-weight: bold; color:#dc6868; font-size: 1.4rem; text-align: center; margin-left: 5px" target="_blank"><i class="fas fa-map-signs"></i> 길찾기</a>' +
          '</div>',
      },
      {
        title: '연구소',
        latlng: new kakao.maps.LatLng(37.476088552310735, 126.880276280673),
        content:
          '<div style="border: none; background: white; box-shadow: 1px 1px 8px rgba(0,0,0,0.15); border-radius: 5px; padding:9px; top: -110px; width: 185px">' +
          '<p style=" text-align: center; font-weight: bold; color: #666666; font-size: 1.5rem">연구소 | 소프트랩스</p>' +
          '<a href="https://map.kakao.com/link/map/소프트랩스연구소,37.476088552310735,126.880276280673" style="font-weight: bold; color:#dc6868; font-size: 1.4rem; text-align: center; margin-left: 5px" target="_blank"><i class="fas fa-map"></i> 큰지도보기</a> ' +
          '<a href="https://map.kakao.com/link/to/소프트랩스연구소,37.476088552310735,126.880276280673" style="font-weight: bold; color:#dc6868; font-size: 1.4rem; text-align: center; margin-left: 5px" target="_blank"><i class="fas fa-map-signs"></i> 길찾기</a>' +
          '</div>',
      },
    ];

    var imageSrc = 'http://www.rctown.co.kr/theme/rctown/img/marker.png'; // 마커이미지의 주소입니다

    for (var i = 0; i < positions.length; i++) {
      var imageSize = new kakao.maps.Size(73, 69), // 마커이미지의 크기입니다
        imageOption = { offset: new kakao.maps.Point(36, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

      // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption,
      );

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });

      // 커스텀 오버레이를 생성합니다
      var customOverlay = new kakao.maps.CustomOverlay({
        position: positions[i].latlng,
        content: positions[i].content,
      });

      customOverlay.setMap(map);
    }
  }, []);

  return (
    <section>
      <h2 className={styles.Title}>RC VISIT</h2>
      <div className={styles.VisitIn}>
        <div className={styles.VisitInfo}>
          <div className={styles.VisitLeft}>
            <div className={styles.VisitAddress}>
              <p className={styles.VisitTitle}>찾아오시는 길</p>
              <div>
                <p className={styles.VisitText}>
                  <span>본사</span>
                  &nbsp;&nbsp;서울 강남구 신사동 653-20 4층
                </p>
                <p className={styles.VisitText}>
                  <span>연구소</span>
                  &nbsp;&nbsp;서울 금천구 디지털로121 1610호
                </p>
              </div>
            </div>
            <div className={styles.VisitContact}>
              <p className={styles.VisitTitle}>연락처</p>
              <div>
                <p>대표번호 : 02 - 6494 - 2848</p>
                <p>partner@rctown.co.kr</p>
              </div>
            </div>
          </div>
          <div className={styles.VisitRight}>
            <a
              href="https://www.rctown.co.kr/theme/rctown/rctown.pdf"
              target="_blank"
            >
              회사소개서
            </a>
            <span>
              <img src="assets/img/about_rc/right_arrow.png" alt="화살표" />
            </span>
          </div>
        </div>
      </div>
      <div id="map" className={styles.Map}></div>
    </section>
  );
};

export default VisitSection;
