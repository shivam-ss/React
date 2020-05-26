import React from "react";

import emojilist from "../emojilist";
import Entry from "./Entry.jsx";

function createEntry(EmojiTerm){

      return <div className="term">

          <Entry
          key={EmojiTerm.id}
          emoji={EmojiTerm.emoji}
          name={EmojiTerm.name}
          desc={EmojiTerm.meaning}
        />

      </div>

}



function App(){
    return <div>
    <dl className="dictionary">
          
          {emojilist.map(createEntry)}

    </dl>
    </div>
}


export default App;