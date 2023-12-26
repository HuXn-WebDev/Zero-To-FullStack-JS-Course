"use client";

import ElementWrapper from "@/components/ElementWrapper";

export default function Home() {
  return (
    <>
      <div>
        <ElementWrapper elementType="div" className="box">
          <p>This is a div element with a class name 'box'.</p>
        </ElementWrapper>

        <ElementWrapper
          elementType="h1"
          onClick={() => alert("Header clicked")}
        >
          Header Text
        </ElementWrapper>

        <ElementWrapper
          elementType="button"
          onClick={() => alert("Button clicked")}
        >
          Click Me
        </ElementWrapper>
      </div>
    </>
  );
}
