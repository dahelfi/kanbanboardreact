import { ReactElement, useEffect, useState } from "react";
import { TabelementType } from "../types/tabelement";
import "../styles/mainPage.scss"


interface Props {
    elementArray: TabelementType[];
    activeTab: string;
  }
  export const OverviewContainer = (props: Props) => {
    const [selectedReactElement, setselectedReactElement] = useState<
      ReactElement | undefined
    >(undefined);
    const [mobile, setMobile] = useState<boolean>(true);
    useEffect(() => {
      props.elementArray.forEach((element: TabelementType) => {
        if (
          element.id === props.activeTab &&
          element.shownElement != null
        ) {
          setselectedReactElement(element.shownElement);
        }
      });
    }, [props.activeTab]);

    const styles ={
        marginLeft: mobile ? "200px" : "20px" 
    }
  
    if (selectedReactElement) {
      return (
        <div id="main-page" style={styles}>
          {selectedReactElement}
        </div>
      );
    } else {
      return <div>{null}</div>;
    }
};

