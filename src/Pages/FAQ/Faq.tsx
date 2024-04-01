import { Bean, FaqBottom, FaqCircle, FaqItemBox, FaqLine, FaqScript, FaqTitle, FaqTop, FaqWrapper, FlContent, FlTitle } from "./FaqStyles";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "../../Components/Pagination/Pagination";

interface counselData {
  title : string;
  body : string;
}

export default function Faq() {

  const [counselPosts, setCounselPosts] = useState<counselData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setCounselPosts(response.data);
    }

    fetchData();
  }, []);

  const firstPost = (currentPage - 1) * postsPerPage;
  const lastPost = firstPost + postsPerPage;
  const currentPosts = counselPosts.slice(firstPost, lastPost);

  return (
    <Bean>
      <FaqWrapper>
        <FaqTop>
          <FaqCircle src="/circle.svg"/>
          <FaqTitle>FAQ</FaqTitle>
          <FaqScript><b>가장 많이 들어오는 질문 리스트들</b>입니다.<br/>참고해보시고, 자세한 문의는 <a href="/counsel">1:1 문의</a> 이용하시기 바랍니다.</FaqScript>
          <FaqLine></FaqLine>
        </FaqTop>
        <FaqBottom>
        {currentPosts.map((counselPost, index) => (
          <FaqItemBox key={index}>
              <FlTitle>{counselPost.title}</FlTitle>
              <FlContent>{counselPost.body}</FlContent>
          </FaqItemBox>  
        ))}
        </FaqBottom>
        <Pagination 
          totalPage={Math.ceil(counselPosts.length / postsPerPage)}
          limit={postsPerPage}
          page={currentPage}
          setPage={setCurrentPage}/>
      </FaqWrapper>
    </Bean>
  )
}
