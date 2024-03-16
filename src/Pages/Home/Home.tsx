import {Wrapper,Main,Image ,NewContainer,Coupon, MainImg_text, Span, New_new, Btns, Btn, Small_img_div, Small_img, Category, Category_img, Category_text, Coupon_img, Coupon_download, Voucher, Voucher_2, Voucher_1, Voucher_p } from "./HomeStyles"

const btnItems = ["HOME","NEW","COATS","PANTS","SWEAT"
];
const imgItems=[
  {src:"/small_Img.png"},
  {src:"/small_Img.png"},
  {src:"/small_Img.png"},
  {src:"/small_Img.png"},
];
const categoryItems =[
  {src:"/category.png",name:"BEAUTY"},
  {src:"/category.png",name:"ACCESSORIES"},
]
// 처음 main 화면 페이지
export default function Home() {
  return (
    <Wrapper>
      <Main>
        <Image src="/main.png"/>
        <MainImg_text></MainImg_text>
      </Main>
      <NewContainer>
        <Span>New</Span>
        <New_new>이번 달 신상품입니다.</New_new>
        <Btns>
          {btnItems.map((item,index) =>
            <Btn key={index}>{item}</Btn>
          )}
          <Btn style={{marginLeft:"auto", width:"40px",backgroundColor:"#DBE3F8"}}>kk</Btn>
        </Btns>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"20px"}}>
          {imgItems.map((item,index) =>{
            return(
              <Small_img_div key={index}>
                <Small_img src={item.src}/>
              </Small_img_div>
            )
          })}
        </div>
      </NewContainer>
      <Category>
        {categoryItems.map((item,index) =>{
          return(
            <Category_img key={index} src={item.src}>
              <Category_text>{item.name}</Category_text>
            </Category_img>
          )
        })}
      </Category>
      <Coupon>
        <Coupon_img src="/coupon.png"/>
        <Coupon_download>
          <Voucher>
            <Voucher_1>
              <Voucher_p>
                코트 카테고리<br/>
                <span style={{color:"red",fontWeight:"700"}}>10%</span>
                <span style={{fontWeight:"700",position:"relative"}}>할인!</span><br/>
                <span style={{fontSize:"12px",position:"absolute",color:"#868686"}}>~2024. 12. 31</span>
              </Voucher_p>
            </Voucher_1>
            <Voucher_2></Voucher_2>
          </Voucher>
          <span className="line" style={{display:"block", width:"95%",height:"0.5px",backgroundColor:"#AFAFAF"}}></span>
          <Voucher>
            <Voucher_1>
              <Voucher_p>
                팬츠 카테고리<br/>
                <span style={{color:"red",fontWeight:"700"}}>1000P</span>
                <span style={{fontWeight:"700",position:"relative"}}>할인!</span><br/>
                <span style={{fontSize:"12px",position:"absolute",color:"#868686"}}>~2024. 09. 31</span>
              </Voucher_p>
            </Voucher_1>
            <Voucher_2></Voucher_2>
          </Voucher>
        </Coupon_download>
      </Coupon>
    </Wrapper>
  )
}