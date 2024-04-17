import { Overlay } from "../../Shared/Overlay/Overlay";
import { term1Data, term2Data, term3Data } from "./TermData";
import { TermCheck, TermMain, TermMainDetail, TermMainTitle } from "./TermStyles";

interface TermProps {
    setTermPopup: (value: boolean) => void;
    termSelect: number;
}
const Term1: React.FC<TermProps> = ({ setTermPopup, termSelect }) => {

  const selectedData = termSelect === 1 ? term1Data : termSelect === 2 ? term2Data : termSelect === 3 ? term3Data : null;

  return (
    <>
        <Overlay />
        {selectedData?.map((term, index) => (
            <TermMain key={index}>
                <TermMainTitle dangerouslySetInnerHTML={term.title} />
                <TermMainDetail dangerouslySetInnerHTML={term.data} />
                <TermCheck onClick={() => setTermPopup(false)}>내용 확인</TermCheck>
            </TermMain>
        ))}
    </>
  )
}

export default Term1;
