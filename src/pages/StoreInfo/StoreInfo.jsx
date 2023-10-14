import React, { useRef, useEffect } from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
export default function StoreInfo() {
  const playerRef = useRef(null);

  const opts = {
    width: "100%",
    height: "500px",
    playerVars: {
      autoplay: 1,
      fs: 1,
      modestbranding: 1,
      rel: 0,
    },
  };
  useEffect(() => {
    const player = playerRef.current.getInternalPlayer();

    player.addEventListener("fullscreenchange", () => {
      const isFullScreen = player.fullscreenElement !== null;

      if (isFullScreen) {
        playerRef.current.setSize("1600px", "1000px");
      } else {
        playerRef.current.setSize("500px", "315px");
      }
    });
  }, []);
  return (
    <div>
      <Header />

      <YouTube ref={playerRef} opts={opts} videoId="EWqWaXtjOC8" id="youtube" />
      <div className="ml-4">
        <h1 className="text-2xl font-bold mt-4 mb-2">Tầm nhìn của chúng tôi</h1>
        <p>
          Chúng tôi tin rằng đó là nhiệm vụ của chúng tôi để đảm bảo sức khỏe và
          hạnh phúc cho thú cưng. Giúp chúng thật sự hiểu rằng chúng đang được
          yêu thương và an toàn.
        </p>
        <p>
          Chúng tôi tin rằng thú cưng sẽ làm cho con người tốt đẹp hơn. Chúng sẽ
          làm phong phú thêm cho cuộc sống của chúng ta và xây dựng xã hội văn
          minh, phát triển.
        </p>
        <p>
          Chúng tôi tin tưởng vào những gì chúng tôi đang làm dựa trên những giá
          trị tiêu chuẩn trong việc chăm sóc động vật. Chất lượng sản phẩm và
          chăm sóc khách hàng.
        </p>
      </div>
      <div className="ml-4">
        <h1 className="text-2xl font-bold mt-4 mb-2">Cam kết của chúng tôi</h1>
        <p>
          <i>PetShop </i>
          cung cấp những sản phẩm và dịch vụ chất lượng tốt nhất dành cho thú
          cưng.
        </p>
        <p>
          Phát triển nhiều loại dịch vụ phong phú để giúp cho cuộc sống của thú
          cưng đầy đủ và hạnh phúc hơn.
        </p>
        <p>
          Làm việc không mệt mỏi để cải thiện cuộc sống của thú cưng nói riêng.
          Và các loài động vật khác tại Việt Nam nói chung.
        </p>
        <p>
          Không ngừng sáng tạo để đáp ứng tốt hơn nữa nhu cầu của vật nuôi và
          mong muốn của khách hàng.
        </p>
      </div>
      <div className="ml-4 my-5">
        <p>
          ➡SĐT/Zalo/fb: <b>0985.217.315 </b> (Thắng)
        </p>
      </div>
      <Footer />
    </div>
  );
}
