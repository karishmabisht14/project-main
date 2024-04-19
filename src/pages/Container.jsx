import { useState } from "react";
import Filters from "./Filters";
import Events from "./Events";

export default function Container() {
  const [searchObj, setSearchObj] = useState({}); //genres:[], language:[], name:''
  const [listUpdatedCount, setListUpdatedCount] = useState(null);
  console.log("search", searchObj);

  return (
    <div>
      <div>
        <Filters searchObj={searchObj} setSearchObj={setSearchObj} />
        <Events searchObj={searchObj} listUpdatedCount={listUpdatedCount} />
      </div>
    </div>
  );
}
