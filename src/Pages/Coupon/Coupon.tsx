
import './CouponStyles.scss';

export default function Coupon() {
  return (
    <div className="couponWrapper">
        <div className="couponTop">
            <img src="/circle.svg" />
            <p className="couponTitle">쿠폰 내역</p>
            <p className="couponScript">받기 원하시는 쿠폰을 발급 받으시기 바랍니다.
                <br/><span>(안내된 유효 기간에 맞춰 사용하시기 바랍니다.)</span>
            </p>
            <div className="couponLine"></div>
        </div>
        <div className='couponBottom'>
            <div className="couponContent">
                <svg
                  className="polygon-2"
                  width="300"
                  height="220"
                  viewBox="0 0 300 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.5 0.5H259.481L299.5 37.6958V219.5H0.5V0.5Z"
                        fill="white"
                        stroke="#ACC3FF"
                    />
                </svg>
                <div className="couponDetails">
                    <div className="couponAmount">5,000원</div>
                    <div className="couponInfo">
                      Duun의 회원이 되신 것을 축하합니다!<br />첫 회원가입 5,000원 쿠폰
                </div>
                <p className='couponSubInfo'>
                    2,000원 이상 구매시<br />2024-03-15까지
                </p>
                <button className="couponButton">받기</button>
              </div>
            </div>
        </div>
    </div>
  )
}
