import React from "react";
import "./effect.css";

const ImageModification = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto p-5 py-2 lg:p-15 lg:pt-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2 grayscale">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                src="src\assets\20230228_161615.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2 grayscale">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                src="src\assets\88ea6e05-7af6-4cf5-98d0-43efc3fe473a.jpg"
              />
            </div>
            <div className="w-full p-1 md:p-2 grayscale">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                src="src\assets\IMG20230220112013.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2 grayscale">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                src="src\assets\IMG20230220174410.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2 grayscale">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                src="src\assets\IMG20230220175247.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2 grayscale">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                src="src\assets\IMG20230220180146 (1).jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-5 py-2 lg:p-15 lg:pt-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2 grayscale">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                src="src\assets\WhatsApp Image 2022-12-14 at 23.12.58.jpeg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2 grayscale">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                src="src\assets\WhatsApp Image 2022-12-31 at 18.35.40.jpeg"
              />
            </div>
            <div className="w-full p-1 md:p-2 grayscale">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                src="src\assets\WhatsApp Image 2023-08-22 at 02.14.52 (2).jpeg"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2 grayscale">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                src="src\assets\20230228_161615.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2 grayscale">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                src="src\assets\397cb2e4-296d-4ec9-b971-450895660f44.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2 grayscale">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transform-gpu hover:scale-110 transition-transform ease-in-out duration-[350ms]"
                src="src\assets\20231019_194404.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModification;