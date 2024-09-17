import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
    const ref = useRef(null);
    const data = [
        {
            desc :"hellooo my name is nehul aggarwal ... currently i am in vit vellore",
            filesize : ".9mb",
            close : false,
            tag :{isopen: false , tagtitle : "Download Now " ,  tagcolor : "slate"},

        },
        {
            desc :"hellooo my name is gunjan gurbani ... currently i am in vit vellore",
            filesize : ".8mb",
            close : true,
            tag :{isopen: true , tagtitle : "Download Now " ,  tagcolor : "slate"},

        },
        {
            desc :"hellooo my name is gappuuuu ... currently i am in vit vellore",
            filesize : ".7mb",
            close : false,
            tag :{isopen: true , tagtitle : "Download Now " ,  tagcolor : "slate"},

        },
        {
            desc :"hellooo my name is gappuuuu ... currently i am in vit vellore",
            filesize : ".7mb",
            close : false,
            tag :{isopen: true , tagtitle : "Download Now " ,  tagcolor : "slate"},

        },
        {
            desc :"hellooo my name is gappuuuu ... currently i am in vit vellore",
            filesize : ".7mb",
            close : false,
            tag :{isopen: true , tagtitle : "Download Now " ,  tagcolor : "slate"},

        }
    ]
  return (
    <>
      <div ref={ref} className="fixed w-full h-full bg-sky-800/50 flex gap-8 flex-wrap p-7">
        {data.map((item, index)=>(
         <Card data={item} reference={ref}/>
        ))}
      </div>
    </>
  );
};

export default Foreground;